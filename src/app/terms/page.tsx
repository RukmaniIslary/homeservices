import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | N-Nodes Home Services",
  description: "Terms of service for N-Nodes Home Services.",
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: June 1, 2026</p>
        <div className="prose">
          <h2>Service Agreement</h2>
          <p>
            By booking a service with N-Nodes Home Services, you agree to these terms. N-Nodes
            operates as a marketplace connecting customers with independent licensed service
            professionals.
          </p>
          <h2>Deposits and Payment</h2>
          <p>
            A deposit is required to confirm all bookings. The deposit amount is displayed during
            checkout before payment. Deposits are non-refundable if you cancel within 24 hours of
            your scheduled appointment. The remaining balance is due after service completion.
          </p>
          <h2>Scheduling and Cancellations</h2>
          <p>
            You may reschedule your appointment at no charge if more than 24 hours remain before
            the scheduled time. Cancellations made more than 24 hours in advance are eligible for a
            full deposit refund.
          </p>
          <h2>Service Guarantee</h2>
          <p>
            N-Nodes guarantees the quality of all work performed by technicians in our network. If
            you are not satisfied with the service, contact us within 72 hours and we will address
            the issue at no additional charge.
          </p>
          <h2>Technician Standards</h2>
          <p>
            All technicians are independently licensed in their respective trades, carry general
            liability insurance, and have passed background checks. N-Nodes is not an employer of
            technicians but acts as a marketplace facilitating connections.
          </p>
          <h2>Contact</h2>
          <p>
            For questions about these terms, contact us at legal@n-nodes.com.
          </p>
        </div>
      </div>
    </div>
  );
}
