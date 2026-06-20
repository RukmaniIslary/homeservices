import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Clock, ArrowRight, ChevronDown } from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { formatCurrency } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.imageUrl }],
    },
  };
}

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i <= rating ? "#f59e0b" : "#e5e7eb"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", background: "#0f172a", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src={service.imageUrl}
            alt={service.name}
            fill
            sizes="100vw"
            style={{ objectFit: "cover", opacity: 0.25 }}
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,23,42,0.97) 40%, rgba(15,23,42,0.6))" }} />
        </div>
        <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "80px 20px" }}>
          <div style={{ maxWidth: "640px" }}>
            {/* Breadcrumb */}
            <nav style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.8125rem", color: "#64748b", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</Link>
              <span>/</span>
              <Link href="/services" style={{ color: "#64748b", textDecoration: "none" }}>Services</Link>
              <span>/</span>
              <span style={{ color: "#e2e8f0" }}>{service.name}</span>
            </nav>

            {/* Rating pill */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "999px", padding: "6px 14px", marginBottom: "16px" }}>
              <StarRating rating={5} size={13} />
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.8125rem" }}>{service.avgRating}</span>
              <span style={{ color: "#64748b", fontSize: "0.75rem" }}>· {service.reviewCount.toLocaleString()} reviews</span>
            </div>

            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, color: "#fff", marginBottom: "12px", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              {service.name}
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#94a3b8", marginBottom: "28px", lineHeight: 1.6 }}>
              {service.shortDescription}
            </p>

            {/* Price badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
              <div style={{ background: "#f59e0b", color: "#fff", fontWeight: 800, padding: "10px 18px", borderRadius: "10px", fontSize: "1rem" }}>
                Starting at {formatCurrency(service.basePrice)}
              </div>
              <div style={{ background: "rgba(255,255,255,0.1)", color: "#e2e8f0", padding: "10px 18px", borderRadius: "10px", fontSize: "0.875rem", fontWeight: 600 }}>
                Deposit: {formatCurrency(service.depositAmount)}
              </div>
              <div style={{ background: "rgba(255,255,255,0.1)", color: "#e2e8f0", padding: "10px 18px", borderRadius: "10px", fontSize: "0.875rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "6px" }}>
                <Clock style={{ width: "14px", height: "14px" }} /> {service.durationEstimate}
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <Link
                href={`/book?service=${service.slug}`}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#f59e0b", color: "#fff", fontWeight: 700, padding: "14px 28px", borderRadius: "12px", fontSize: "1rem", textDecoration: "none", boxShadow: "0 4px 16px rgba(245,158,11,0.3)" }}
              >
                Book {service.name} <ArrowRight style={{ width: "18px", height: "18px" }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: "64px 0", background: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 340px", gap: "60px", alignItems: "start" }}>

            {/* Left */}
            <div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111827", marginBottom: "12px", letterSpacing: "-0.02em" }}>
                About Our {service.name} Service
              </h2>
              <p style={{ color: "#4b5563", lineHeight: 1.8, marginBottom: "40px", fontSize: "0.9375rem" }}>
                {service.description}
              </p>

              {/* What's included */}
              <h3 style={{ fontSize: "1.0625rem", fontWeight: 800, color: "#111827", marginBottom: "16px" }}>
                What&apos;s Included
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "52px" }}>
                {service.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "20px", height: "20px", background: "#fffbeb", border: "1.5px solid #fde68a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <CheckCircle style={{ width: "11px", height: "11px", color: "#d97706" }} />
                    </div>
                    <span style={{ fontSize: "0.875rem", color: "#374151" }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* Reviews */}
              <div style={{ marginBottom: "52px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                  <div>
                    <h3 style={{ fontSize: "1.0625rem", fontWeight: 800, color: "#111827", marginBottom: "6px" }}>
                      Customer Reviews
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <StarRating rating={Math.round(service.avgRating)} size={15} />
                      <span style={{ fontWeight: 800, color: "#111827", fontSize: "0.9375rem" }}>{service.avgRating}</span>
                      <span style={{ color: "#6b7280", fontSize: "0.875rem" }}>· {service.reviewCount.toLocaleString()} verified reviews</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {service.reviews.map((review, i) => (
                    <div key={i} style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: "16px", padding: "20px 22px" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            width={40}
                            height={40}
                            style={{ borderRadius: "50%", objectFit: "cover", border: "2px solid #e2e8f0" }}
                          />
                          <div>
                            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#111827" }}>{review.name}</p>
                            <p style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "1px" }}>{review.location}</p>
                          </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
                          <StarRating rating={review.rating} size={13} />
                          <span style={{ fontSize: "0.6875rem", color: "#9ca3af" }}>{review.date}</span>
                        </div>
                      </div>
                      <p style={{ fontSize: "0.875rem", color: "#374151", lineHeight: 1.75 }}>
                        &ldquo;{review.review}&rdquo;
                      </p>
                      <div style={{ marginTop: "12px" }}>
                        <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#16a34a", background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "3px 10px", borderRadius: "999px" }}>
                          Verified Customer
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <h3 style={{ fontSize: "1.0625rem", fontWeight: 800, color: "#111827", marginBottom: "16px" }}>
                Frequently Asked Questions
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {service.faqs.map((faq, i) => (
                  <details key={i} style={{ border: "1.5px solid #e2e8f0", borderRadius: "12px", overflow: "hidden" }}>
                    <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", cursor: "pointer", fontWeight: 700, fontSize: "0.875rem", color: "#111827", userSelect: "none" }}>
                      {faq.question}
                      <ChevronDown style={{ width: "16px", height: "16px", color: "#9ca3af", flexShrink: 0 }} />
                    </summary>
                    <div style={{ padding: "0 18px 16px", fontSize: "0.875rem", color: "#4b5563", lineHeight: 1.75, borderTop: "1px solid #f1f5f9" }}>
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ position: "sticky", top: "88px" }}>
              <div style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: "20px", padding: "26px" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#111827", marginBottom: "20px" }}>
                  Book {service.name}
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "11px", marginBottom: "22px" }}>
                  {[
                    { label: "Starting Price", value: `${formatCurrency(service.basePrice)}+` },
                    { label: "Deposit Due Now", value: formatCurrency(service.depositAmount) },
                    { label: "Est. Duration", value: service.durationEstimate },
                    ...(service.emergencyFee > 0
                      ? [{ label: "Emergency Fee", value: `+${formatCurrency(service.emergencyFee)}` }]
                      : []),
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.875rem" }}>
                      <span style={{ color: "#6b7280" }}>{item.label}</span>
                      <span style={{ fontWeight: 700, color: "#111827" }}>{item.value}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/book?service=${service.slug}`}
                  style={{ display: "block", textAlign: "center", background: "#f59e0b", color: "#fff", fontWeight: 800, padding: "14px", borderRadius: "12px", textDecoration: "none", fontSize: "0.9375rem", marginBottom: "10px", boxShadow: "0 4px 14px rgba(245,158,11,0.25)" }}
                >
                  Book Now — Pay $49 Deposit
                </Link>

                <div style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid #e2e8f0", display: "flex", flexDirection: "column", gap: "9px" }}>
                  {["Licensed & Insured", "Background Checked", "Satisfaction Guaranteed"].map((t) => (
                    <div key={t} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.8125rem", color: "#6b7280" }}>
                      <CheckCircle style={{ width: "15px", height: "15px", color: "#f59e0b", flexShrink: 0 }} />
                      {t}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "8px" }}>
                  <StarRating rating={5} size={13} />
                  <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "#111827" }}>{service.avgRating}</span>
                  <span style={{ color: "#9ca3af", fontSize: "0.75rem" }}>({service.reviewCount.toLocaleString()})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section style={{ padding: "60px 0", background: "#f8fafc" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: "1.375rem", fontWeight: 800, color: "#111827", marginBottom: "24px", letterSpacing: "-0.02em" }}>
            Other Services
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                style={{ background: "#fff", borderRadius: "14px", overflow: "hidden", border: "1.5px solid #e2e8f0", textDecoration: "none" }}
              >
                <div style={{ position: "relative", height: "130px", overflow: "hidden" }}>
                  <Image src={s.imageUrl} alt={s.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "14px" }}>
                  <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#111827", marginBottom: "3px" }}>{s.name}</p>
                  <p style={{ color: "#d97706", fontSize: "0.8125rem", fontWeight: 600 }}>From {formatCurrency(s.basePrice)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD with reviews for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.description,
            provider: {
              "@type": "LocalBusiness",
              name: "N-Nodes Home Services",
              telephone: "1-800-N-NODES",
              url: process.env.NEXT_PUBLIC_APP_URL,
            },
            offers: {
              "@type": "Offer",
              price: service.basePrice,
              priceCurrency: "USD",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: service.avgRating,
              reviewCount: service.reviewCount,
              bestRating: 5,
            },
            review: service.reviews.slice(0, 3).map((r) => ({
              "@type": "Review",
              author: { "@type": "Person", name: r.name },
              reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
              reviewBody: r.review,
              datePublished: r.date,
            })),
          }),
        }}
      />
    </>
  );
}
