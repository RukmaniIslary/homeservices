import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | N-Nodes Home Services",
  description: "Terms of service for N-Nodes Home Services — home services marketplace.",
};

export default function TermsPage() {
  return (
    <div style={{ background: "#fff", padding: "64px 0" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 20px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 900, color: "#111827", marginBottom: "6px" }}>Terms of Service</h1>
        <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "8px" }}>Last updated: June 20, 2026</p>
        <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "40px" }}>
          Also see: <Link href="/privacy" style={{ color: "#d97706" }}>Privacy Policy</Link> &nbsp;·&nbsp;
          <Link href="/refund-policy" style={{ color: "#d97706" }}>Refund Policy</Link>
        </p>
        <div className="prose">
          <h2>1. Agreement</h2>
          <p>
            By accessing or using N-Nodes Home Services (&quot;N-Nodes&quot;, &quot;we&quot;, &quot;us&quot;), you agree to
            these Terms of Service. N-Nodes operates as a marketplace platform connecting
            homeowners with independent licensed home service professionals across the United States.
          </p>

          <h2>2. Services</h2>
          <p>
            N-Nodes facilitates bookings for home services including HVAC, plumbing, electrical,
            roofing, water damage restoration, garage door repair, appliance repair, handyman,
            cleaning, and landscaping. All work is performed by independent licensed contractors,
            not employees of N-Nodes.
          </p>

          <h2>3. Booking & Payment</h2>
          <p>
            A deposit of $49 is collected at the time of booking via Paddle, our PCI-compliant
            payment processor. The deposit secures your appointment. The remaining service balance
            is collected directly after service completion. All prices shown are estimates — final
            pricing is confirmed by the technician after assessment.
          </p>

          <h2>4. Cancellations & Refunds</h2>
          <p>
            Cancellations made more than 24 hours before your scheduled appointment are eligible
            for a full deposit refund. Cancellations within 24 hours of the appointment are
            non-refundable. If N-Nodes fails to dispatch a technician, a full refund is issued
            automatically. See our full <Link href="/refund-policy" style={{ color: "#d97706" }}>Refund Policy</Link> for details.
          </p>

          <h2>5. Technician Standards</h2>
          <p>
            All technicians in our network are required to hold valid state licenses in their
            respective trade, carry general liability insurance, and pass background screening.
            N-Nodes verifies credentials before onboarding any technician.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            N-Nodes is not liable for property damage, personal injury, or losses resulting from
            services performed by independent contractors. In the event of a dispute, N-Nodes will
            facilitate resolution between the customer and technician.
          </p>

          <h2>7. Privacy</h2>
          <p>
            Your use of N-Nodes is also governed by our <Link href="/privacy" style={{ color: "#d97706" }}>Privacy Policy</Link>,
            which is incorporated into these Terms by reference.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            N-Nodes reserves the right to update these Terms at any time. Continued use of the
            platform after changes constitutes acceptance of the updated Terms.
          </p>

          <h2>9. Contact</h2>
          <p>
            For questions about these Terms, email us at{" "}
            <a href="mailto:legal@n-nodes.com" style={{ color: "#d97706" }}>legal@n-nodes.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
