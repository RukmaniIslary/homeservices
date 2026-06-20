import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | N-Nodes Home Services",
  description: "Privacy policy for N-Nodes Home Services — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div style={{ background: "#fff", padding: "64px 0" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 20px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 900, color: "#111827", marginBottom: "6px" }}>Privacy Policy</h1>
        <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "8px" }}>Last updated: June 20, 2026</p>
        <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "40px" }}>
          Also see: <Link href="/terms" style={{ color: "#d97706" }}>Terms of Service</Link> &nbsp;·&nbsp;
          <Link href="/refund-policy" style={{ color: "#d97706" }}>Refund Policy</Link>
        </p>
        <div className="prose">
          <h2>1. Information We Collect</h2>
          <p>
            When you book a service, we collect: full name, email address, phone number, service
            address, and service notes. We also collect booking details including the service type,
            scheduled date, and payment transaction ID.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Process and confirm your booking</li>
            <li>Dispatch a licensed technician to your location</li>
            <li>Send booking confirmations and service updates</li>
            <li>Respond to customer support requests</li>
            <li>Improve our platform and services</li>
          </ul>
          <p>We do not sell, rent, or share your personal information with third parties for
          marketing purposes.</p>

          <h2>3. Payment Processing</h2>
          <p>
            All payments are processed by <strong>Paddle</strong>, a PCI DSS-compliant payment
            processor. N-Nodes does not store, access, or transmit your credit card information.
            Your payment data is handled entirely by Paddle under their privacy policy and security
            standards. Paddle acts as the Merchant of Record for all transactions.
          </p>

          <h2>4. Data Sharing</h2>
          <p>
            We share your booking information only with the assigned technician for the purpose of
            completing your service. We do not share your data with any other third parties except
            as required by law.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain booking and payment records for 7 years for accounting and compliance
            purposes. You may request deletion of your personal data by emailing
            privacy@n-nodes.com. Note that records required for legal or tax compliance cannot
            be deleted.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Our website uses essential cookies only — necessary for the booking form to function.
            We do not use tracking or advertising cookies.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data. To exercise
            these rights, email privacy@n-nodes.com with your request.
          </p>

          <h2>8. Security</h2>
          <p>
            We use industry-standard security measures including HTTPS encryption, secure database
            hosting, and access controls to protect your data.
          </p>

          <h2>9. Contact</h2>
          <p>
            For privacy-related inquiries, email us at{" "}
            <a href="mailto:privacy@n-nodes.com" style={{ color: "#d97706" }}>privacy@n-nodes.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
