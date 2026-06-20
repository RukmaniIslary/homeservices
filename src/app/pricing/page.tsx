import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Clock } from "lucide-react";
import { SERVICES } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Service Pricing | N-Nodes Home Services",
  description:
    "Transparent pricing for all N-Nodes home services. HVAC from $149, Plumbing from $149, Electrical from $149, and more. No hidden fees.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#0f172a", padding: "64px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#fff", marginBottom: "16px", letterSpacing: "-0.03em" }}>
            Simple, Transparent Pricing
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1.125rem", maxWidth: "560px", margin: "0 auto 32px", lineHeight: 1.7 }}>
            No hidden fees. See exactly what you pay before you book. A small deposit secures your appointment — the balance is collected after service completion.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px" }}>
            {[
              "No hidden fees",
              "Balance due after service",
              "Licensed professionals",
              "Same-day available",
            ].map((item) => (
              <span key={item} style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "999px", padding: "6px 14px",
                color: "#cbd5e1", fontSize: "0.875rem", fontWeight: 500,
              }}>
                <CheckCircle style={{ width: "14px", height: "14px", color: "#f59e0b" }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section style={{ padding: "80px 0", background: "#f8fafc" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {SERVICES.map((service) => (
              <div key={service.slug} style={{
                background: "#fff", borderRadius: "20px",
                border: "1.5px solid #e2e8f0", overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}>
                {/* Header */}
                <div style={{ background: "#0f172a", padding: "24px 24px 20px" }}>
                  <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.125rem", marginBottom: "6px" }}>
                    {service.name}
                  </h2>
                  <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.5 }}>
                    {service.shortDescription}
                  </p>
                </div>

                {/* Price */}
                <div style={{ padding: "20px 24px", borderBottom: "1px solid #f1f5f9" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "6px" }}>
                    <span style={{ fontSize: "2.25rem", fontWeight: 900, color: "#111827", letterSpacing: "-0.04em" }}>
                      ${service.basePrice}
                    </span>
                    <span style={{ color: "#6b7280", fontSize: "1rem", fontWeight: 600 }}>+</span>
                  </div>
                  <p style={{ color: "#6b7280", fontSize: "0.8125rem" }}>Starting price · Final price confirmed on-site</p>
                </div>

                {/* Details */}
                <div style={{ padding: "20px 24px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                    {[
                      { label: "Est. Duration", value: service.durationEstimate },
                      { label: "Deposit to Book", value: `$${service.depositAmount}` },
                      { label: "Balance Due", value: "After service" },
                      ...(service.emergencyFee > 0 ? [{ label: "Emergency Fee", value: `+$${service.emergencyFee}` }] : []),
                    ].map((row) => (
                      <div key={row.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem" }}>
                        <span style={{ color: "#6b7280" }}>{row.label}</span>
                        <span style={{ fontWeight: 700, color: "#111827" }}>{row.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "7px", marginBottom: "20px", paddingTop: "16px", borderTop: "1px solid #f1f5f9" }}>
                    {service.features.slice(0, 4).map((f) => (
                      <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <CheckCircle style={{ width: "14px", height: "14px", color: "#f59e0b", flexShrink: 0 }} />
                        <span style={{ fontSize: "0.8125rem", color: "#374151" }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/book?service=${service.slug}`}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                      background: "#f59e0b", color: "#fff", fontWeight: 700,
                      padding: "12px", borderRadius: "10px", textDecoration: "none",
                      fontSize: "0.9375rem", boxShadow: "0 2px 8px rgba(245,158,11,0.25)",
                    }}
                  >
                    Book Now <ArrowRight style={{ width: "15px", height: "15px" }} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How pricing works */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.875rem", fontWeight: 900, color: "#111827", marginBottom: "12px", letterSpacing: "-0.02em" }}>
            How Our Pricing Works
          </h2>
          <p style={{ color: "#6b7280", fontSize: "1rem", marginBottom: "48px", lineHeight: 1.7 }}>
            We believe in full transparency. Here&apos;s exactly what happens from booking to payment.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", textAlign: "left" }}>
            {[
              {
                step: "01",
                title: "See the price upfront",
                desc: "Every service shows a starting price before you book. No surprises.",
              },
              {
                step: "02",
                title: "Pay a $49 deposit",
                desc: "A small deposit secures your appointment. Paid securely through Paddle.",
              },
              {
                step: "03",
                title: "Technician assesses on-site",
                desc: "The final price is confirmed after the technician reviews the job.",
              },
              {
                step: "04",
                title: "Balance due after completion",
                desc: "You only pay the remaining balance once the job is done to your satisfaction.",
              },
            ].map((item) => (
              <div key={item.step} style={{ background: "#f8fafc", borderRadius: "16px", padding: "24px", border: "1px solid #e2e8f0", position: "relative" }}>
                <span style={{ position: "absolute", top: "12px", right: "16px", fontSize: "2.5rem", fontWeight: 900, color: "#f1f5f9", lineHeight: 1 }}>
                  {item.step}
                </span>
                <h3 style={{ fontWeight: 800, color: "#111827", fontSize: "0.9375rem", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#f8fafc", padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 900, color: "#111827", marginBottom: "12px" }}>
          Ready to Book?
        </h2>
        <p style={{ color: "#6b7280", marginBottom: "28px" }}>Choose a service and get a technician dispatched today.</p>
        <Link
          href="/book"
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "#f59e0b", color: "#fff", fontWeight: 700,
            padding: "14px 32px", borderRadius: "12px", textDecoration: "none",
            fontSize: "1rem", boxShadow: "0 4px 16px rgba(245,158,11,0.3)",
          }}
        >
          Book a Service <ArrowRight style={{ width: "16px", height: "16px" }} />
        </Link>
      </section>
    </>
  );
}
