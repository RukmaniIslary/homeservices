import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | N-Nodes Home Services",
  description: "Refund policy for N-Nodes Home Services. Full refunds available for cancellations made 24+ hours in advance.",
};

export default function RefundPolicyPage() {
  return (
    <div style={{ background: "#fff", padding: "64px 0" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 20px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 900, color: "#111827", marginBottom: "6px" }}>Refund Policy</h1>
        <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "8px" }}>Last updated: June 20, 2026</p>
        <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "40px" }}>
          Also see: <Link href="/terms" style={{ color: "#d97706" }}>Terms of Service</Link> &nbsp;·&nbsp;
          <Link href="/privacy" style={{ color: "#d97706" }}>Privacy Policy</Link>
        </p>
        <div className="prose">
          <h2>Overview</h2>
          <p>
            N-Nodes Home Services charges a $49 deposit at the time of booking to confirm your
            appointment. This policy explains when and how refunds are issued for that deposit
            and for any completed service charges.
          </p>

          <h2>Deposit Refunds</h2>
          <ul>
            <li>
              <strong>Full refund — cancellations 24+ hours before appointment:</strong> If you
              cancel your booking more than 24 hours before the scheduled service time, you will
              receive a full refund of the $49 deposit to your original payment method within
              5–10 business days.
            </li>
            <li>
              <strong>No refund — cancellations within 24 hours:</strong> Cancellations made
              within 24 hours of the scheduled appointment are non-refundable, as the technician
              has already been dispatched or allocated.
            </li>
            <li>
              <strong>Full refund — N-Nodes cancellation:</strong> If N-Nodes cancels your
              appointment or fails to dispatch a technician, you will receive a full deposit
              refund automatically within 3–5 business days.
            </li>
          </ul>

          <h2>Service Quality Guarantee</h2>
          <p>
            If you are unsatisfied with the quality of work performed, contact us at
            support@n-nodes.com within 72 hours of service completion. We will send a technician
            to resolve the issue at no additional charge. If the issue cannot be resolved, a
            partial or full refund may be issued at our discretion.
          </p>

          <h2>Rescheduling</h2>
          <p>
            You may reschedule your appointment at no charge if the request is made more than
            24 hours before the scheduled service time. Rescheduling does not affect your deposit
            — it carries over to the new appointment.
          </p>

          <h2>Remaining Balance</h2>
          <p>
            The remaining service balance is collected after service completion. If you dispute
            the remaining balance, contact us within 48 hours at support@n-nodes.com. Disputed
            charges are reviewed within 5 business days.
          </p>

          <h2>How to Request a Refund</h2>
          <p>
            Email <a href="mailto:support@n-nodes.com" style={{ color: "#d97706" }}>support@n-nodes.com</a> with:
          </p>
          <ul>
            <li>Your booking number</li>
            <li>Reason for the refund request</li>
            <li>Any supporting details</li>
          </ul>
          <p>
            Refunds are processed within 5–10 business days and returned to the original
            payment method used at checkout.
          </p>

          <h2>Contact</h2>
          <p>
            For refund-related inquiries, email us at{" "}
            <a href="mailto:support@n-nodes.com" style={{ color: "#d97706" }}>support@n-nodes.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
