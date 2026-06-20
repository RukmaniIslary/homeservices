import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | N-Nodes Home Services",
  description: "Privacy policy for N-Nodes Home Services.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: June 1, 2026</p>
        <div className="prose">
          <h2>Information We Collect</h2>
          <p>
            When you book a service, we collect your name, email address, phone number, and service
            address. This information is used solely to dispatch a technician and communicate with
            you about your appointment.
          </p>
          <h2>How We Use Your Information</h2>
          <p>
            We use your information to process your booking, dispatch technicians, send appointment
            confirmations, and improve our service. We do not sell your personal information to
            third parties.
          </p>
          <h2>Payment Security</h2>
          <p>
            All payment processing is handled by Paddle, a PCI-compliant payment processor. N-Nodes
            does not store your credit card information. Your payment data is encrypted and handled
            according to Paddle&apos;s privacy policy.
          </p>
          <h2>Data Retention</h2>
          <p>
            We retain booking records for a period of 7 years for accounting and compliance purposes.
            You may request deletion of your personal data by contacting us at
            privacy@n-nodes.com.
          </p>
          <h2>Contact</h2>
          <p>
            For privacy-related inquiries, contact us at privacy@n-nodes.com.
          </p>
        </div>
      </div>
    </div>
  );
}
