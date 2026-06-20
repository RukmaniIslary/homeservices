import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("paddle-signature") || "";
  const webhookSecret = process.env.PADDLE_WEBHOOK_SECRET;

  // Verify Paddle webhook signature
  if (webhookSecret && webhookSecret !== "your_paddle_webhook_secret") {
    try {
      const crypto = await import("crypto");
      const [tsEntry, h1Entry] = signature.split(";");
      const ts = tsEntry?.split("=")[1];
      const h1 = h1Entry?.split("=")[1];
      const expectedSig = crypto
        .createHmac("sha256", webhookSecret)
        .update(`${ts}:${body}`)
        .digest("hex");
      if (expectedSig !== h1) {
        return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
      }
    } catch {
      return NextResponse.json({ error: "Signature verification failed" }, { status: 401 });
    }
  }

  const event = JSON.parse(body);
  const eventType = event.event_type;

  try {
    switch (eventType) {
      case "transaction.completed": {
        const transaction = event.data;
        const customData = transaction.custom_data || {};
        const bookingId = customData.booking_id;

        if (bookingId) {
          // Update payment
          await prisma.payment.update({
            where: { bookingId },
            data: {
              paddleTransactionId: transaction.id,
              paddleCustomerId: transaction.customer_id,
              status: "PAID",
              paidAt: new Date(),
            },
          });

          // Update booking
          await prisma.booking.update({
            where: { id: bookingId },
            data: {
              status: "CONFIRMED",
              paddleTransactionId: transaction.id,
              depositPaidAt: new Date(),
            },
          });

          await prisma.auditLog.create({
            data: {
              action: "DEPOSIT_PAID",
              entity: "booking",
              entityId: bookingId,
              details: { transactionId: transaction.id, amount: transaction.details?.totals?.total },
            },
          });
        }
        break;
      }
      case "transaction.payment_failed": {
        const txn = event.data;
        const customData = txn.custom_data || {};
        const bookingId = customData.booking_id;
        if (bookingId) {
          await prisma.payment.update({
            where: { bookingId },
            data: { status: "FAILED" },
          });
        }
        break;
      }
    }
  } catch (err) {
    console.error("Paddle webhook handler error:", err);
    return NextResponse.json({ error: "Handler error" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
