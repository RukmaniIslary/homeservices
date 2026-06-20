import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Clock, Phone, Calendar, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Booking Confirmed | N-Nodes Home Services",
  robots: { index: false, follow: false },
};

export default function BookingConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl border border-gray-200 shadow-sm p-10 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-black text-gray-900 mb-3">Booking Confirmed</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Your deposit has been received and your booking is confirmed. A confirmation email has
          been sent to your inbox with all the details.
        </p>

        <div className="bg-gray-50 rounded-xl p-5 mb-8 text-left space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Clock className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <span className="text-gray-700">A technician will be dispatched to your location at your scheduled time.</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <span className="text-gray-700">Our team may call to confirm your appointment.</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Calendar className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <span className="text-gray-700">The remaining balance is collected after service completion.</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <span className="text-gray-700">Ensure someone is home at the scheduled time.</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/book"
            className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 rounded transition-colors"
          >
            Book Another Service
          </Link>
          <Link
            href="/"
            className="block w-full text-center border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3.5 rounded transition-colors"
          >
            Return Home
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          Questions? Email us at{" "}
          <a href="mailto:support@n-nodes.com" className="text-amber-600 font-semibold">support@n-nodes.com</a>
        </p>
      </div>
    </div>
  );
}
