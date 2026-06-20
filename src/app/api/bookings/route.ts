import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { generateBookingNumber } from "@/lib/utils";
import { SERVICES } from "@/lib/services-data";

const bookingSchema = z.object({
  serviceSlug: z.string().min(1, "Service is required"),
  isEmergency: z.boolean().default(false),
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  address: z.string().min(5, "Address is required"),
  apartment: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zip: z.string().regex(/^\d{5}$/, "Valid ZIP required"),
  scheduledDate: z.string().min(1, "Date is required"),
  scheduledTime: z.string().min(1, "Time is required"),
  serviceNotes: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = bookingSchema.parse(body);

    const serviceData = SERVICES.find((s) => s.slug === data.serviceSlug);
    if (!serviceData) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    const emergencyFee = data.isEmergency ? serviceData.emergencyFee : 0;
    const totalPrice = serviceData.basePrice + emergencyFee;
    const depositAmount = serviceData.depositAmount;
    const remainingBalance = totalPrice - depositAmount;

    // Create customer (guest bookings — always create new record)
    const customer = await prisma.customer.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        apartment: data.apartment,
        city: data.city,
        state: data.state,
        zip: data.zip,
      },
    });

    // Find or create service in DB
    let service = await prisma.service.findUnique({ where: { slug: data.serviceSlug } });
    if (!service) {
      service = await prisma.service.create({
        data: {
          name: serviceData.name,
          slug: serviceData.slug,
          description: serviceData.description,
          shortDescription: serviceData.shortDescription,
          basePrice: serviceData.basePrice,
          minimumPrice: serviceData.minimumPrice,
          emergencyFee: serviceData.emergencyFee,
          depositAmount: serviceData.depositAmount,
          depositType: serviceData.depositType,
          durationEstimate: serviceData.durationEstimate,
          imageUrl: serviceData.imageUrl,
          metaTitle: serviceData.metaTitle,
          metaDescription: serviceData.metaDescription,
        },
      });
    }

    // Create booking
    const bookingNumber = generateBookingNumber();
    const booking = await prisma.booking.create({
      data: {
        bookingNumber,
        customerId: customer.id,
        serviceId: service.id,
        status: "PENDING",
        scheduledDate: new Date(data.scheduledDate + "T12:00:00.000Z"),
        scheduledTime: data.scheduledTime,
        isEmergency: data.isEmergency,
        serviceNotes: data.serviceNotes,
        basePrice: serviceData.basePrice,
        emergencyFee,
        totalPrice,
        depositAmount,
        remainingBalance,
      },
    });

    // Create payment record
    await prisma.payment.create({
      data: {
        bookingId: booking.id,
        amount: depositAmount,
        currency: "USD",
        status: "PENDING",
        type: "deposit",
      },
    });

    // Create Paddle checkout URL
    const paddleApiKey = process.env.PADDLE_API_KEY;
    const paddleEnv = (process.env.NEXT_PUBLIC_PADDLE_ENV || "sandbox").toLowerCase();
    const paddleBaseUrl =
      paddleEnv === "production"
        ? "https://api.paddle.com"
        : "https://sandbox-api.paddle.com";

    let checkoutUrl = "";

    if (paddleApiKey && paddleApiKey !== "your_paddle_api_key") {
      const paddleRes = await fetch(`${paddleBaseUrl}/transactions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${paddleApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              price: {
                description: `${serviceData.name} Service Deposit`,
                name: `${serviceData.name} Deposit`,
                unit_price: {
                  amount: String(Math.round(depositAmount * 100)),
                  currency_code: "USD",
                },
                quantity: { minimum: 1, maximum: 1 },
                product: {
                  name: `${serviceData.name} Service`,
                  tax_category: "standard",
                },
              },
              quantity: 1,
            },
          ],
          currency_code: "USD",
          customer: { email: data.email },
          custom_data: { booking_id: booking.id, booking_number: bookingNumber },
          checkout: {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/booking/confirmation?booking=${bookingNumber}`,
          },
        }),
      });

      const paddleData = await paddleRes.json();

      if (!paddleRes.ok) {
        const errDetail = paddleData?.error?.detail || paddleData?.errors?.[0]?.detail || JSON.stringify(paddleData);
        console.error("Paddle error:", errDetail);
        return NextResponse.json(
          { error: `Payment setup failed: ${errDetail}` },
          { status: 500 }
        );
      }

      checkoutUrl = paddleData?.data?.checkout?.url || "";

      if (!checkoutUrl) {
        console.error("No checkout URL in Paddle response:", JSON.stringify(paddleData));
        return NextResponse.json(
          { error: "Payment checkout URL not returned. Please try again." },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        { error: "Payment system not configured. Please contact support." },
        { status: 500 }
      );
    }

    // Audit log
    await prisma.auditLog.create({
      data: {
        action: "BOOKING_CREATED",
        entity: "booking",
        entityId: booking.id,
        details: { bookingNumber, serviceSlug: data.serviceSlug, email: data.email },
        ipAddress: req.headers.get("x-forwarded-for") || "unknown",
      },
    });

    return NextResponse.json({
      bookingNumber,
      bookingId: booking.id,
      checkoutUrl: checkoutUrl || null,
      deposit: depositAmount,
      total: totalPrice,
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: err.issues[0]?.message || "Validation error" },
        { status: 400 }
      );
    }
    console.error("Booking error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const bookingNumber = searchParams.get("booking");

  if (!bookingNumber) {
    return NextResponse.json({ error: "Booking number required" }, { status: 400 });
  }

  const booking = await prisma.booking.findUnique({
    where: { bookingNumber },
    include: {
      customer: true,
      service: true,
      payment: true,
      technician: { select: { name: true, phone: true, rating: true } },
    },
  });

  if (!booking) {
    return NextResponse.json({ error: "Booking not found" }, { status: 404 });
  }

  return NextResponse.json(booking);
}
