import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | N-Nodes Home Services",
  description:
    "Contact N-Nodes Home Services for bookings, questions, or support. Email support@n-nodes.com.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Questions, bookings, or feedback — we&apos;re here to help. Reach us by phone, email, or
            the form below.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "support@n-nodes.com",
                    href: "mailto:support@n-nodes.com",
                    sub: "We respond within 2 business hours",
                  },
                  {
                    icon: MapPin,
                    label: "Coverage",
                    value: "Nationwide — 48 States",
                    href: "/locations",
                    sub: "View all service locations",
                  },
                  {
                    icon: Clock,
                    label: "Hours",
                    value: "24/7 Emergency Available",
                    href: null,
                    sub: "Standard hours: Mon–Fri 7AM–8PM, Sat–Sun 8AM–6PM",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-11 h-11 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-bold text-gray-900 hover:text-amber-600 transition-colors">{item.value}</a>
                      ) : (
                        <p className="font-bold text-gray-900">{item.value}</p>
                      )}
                      <p className="text-sm text-gray-500 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <form className="space-y-4" action="/api/contact" method="POST">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
                  <select name="subject" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white">
                    <option>General Inquiry</option>
                    <option>Booking Help</option>
                    <option>Cancel or Reschedule</option>
                    <option>Billing Question</option>
                    <option>Technician Feedback</option>
                    <option>Join as Technician</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 rounded transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
