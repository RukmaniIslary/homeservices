import type { Metadata } from "next";
import BookingForm from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Book a Service | N-Nodes Home Services",
  description:
    "Book a professional home service in minutes. Choose your service, enter your details, select a schedule, and pay a small deposit. No account required.",
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black mb-2">Book a Service</h1>
          <p className="text-gray-400">
            Complete the form below to schedule your service. A small deposit is required to confirm
            your booking.
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <BookingForm />
      </div>
    </div>
  );
}
