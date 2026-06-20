"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services-data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(255,255,255,0.98)" : "#ffffff",
        borderBottom: "1px solid #f1f5f9",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.2s ease",
      }}
    >
      <div style={{ backgroundColor: "#0f172a", padding: "8px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 500 }}>
            Licensed · Insured · Background-Checked Professionals Nationwide
          </span>
          <span style={{ color: "#64748b", fontSize: "0.8125rem", fontWeight: 500 }}>
            N-Nodes Home Services
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{
              width: "36px", height: "36px",
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
              borderRadius: "8px",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              flexShrink: 0,
            }}>
              <span style={{ color: "#f59e0b", fontWeight: 900, fontSize: "13px", letterSpacing: "-0.5px" }}>NN</span>
            </div>
            <div style={{ lineHeight: 1 }}>
              <div style={{ color: "#0f172a", fontWeight: 900, fontSize: "1.0625rem", letterSpacing: "-0.04em" }}>
                N-NODES
              </div>
              <div style={{ color: "#94a3b8", fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "2px" }}>
                Home Services
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2px" }} className="hidden-mobile">
            {/* Services dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button style={{
                display: "flex", alignItems: "center", gap: "4px",
                color: "#374151", fontWeight: 600, fontSize: "0.875rem",
                background: "none", border: "none", cursor: "pointer",
                padding: "8px 12px", borderRadius: "8px",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f8fafc")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
              >
                Services
                <ChevronDown style={{ width: "14px", height: "14px", transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "none" }} />
              </button>

              {servicesOpen && (
                <div style={{
                  position: "absolute", top: "calc(100% + 4px)", left: 0,
                  width: "240px", background: "#fff",
                  border: "1px solid #e2e8f0", borderRadius: "14px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
                  padding: "8px", zIndex: 100,
                }}>
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "9px 12px", borderRadius: "8px",
                        color: "#374151", fontSize: "0.875rem", fontWeight: 500,
                        textDecoration: "none", transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "#fafafa";
                        (e.currentTarget as HTMLAnchorElement).style.color = "#d97706";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "none";
                        (e.currentTarget as HTMLAnchorElement).style.color = "#374151";
                      }}
                    >
                      {s.name}
                      <span style={{ color: "#d1d5db", fontSize: "0.75rem", fontWeight: 600 }}>${s.basePrice}+</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { label: "Locations", href: "/locations" },
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: "#374151", fontWeight: 600, fontSize: "0.875rem",
                  padding: "8px 12px", borderRadius: "8px",
                  textDecoration: "none", transition: "background 0.15s, color 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#f8fafc";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#111827";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "none";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#374151";
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className="hidden-mobile">
            <Link
              href="/book"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "#f59e0b", color: "#fff", fontWeight: 700,
                fontSize: "0.875rem", padding: "10px 20px", borderRadius: "10px",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(245,158,11,0.3)",
                transition: "background 0.15s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#d97706";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#f59e0b";
                (e.currentTarget as HTMLAnchorElement).style.transform = "none";
              }}
            >
              Book Now <ArrowRight style={{ width: "14px", height: "14px" }} />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "8px", borderRadius: "8px", color: "#374151",
            }}
            className="show-mobile"
          >
            {mobileOpen ? <X style={{ width: "22px", height: "22px" }} /> : <Menu style={{ width: "22px", height: "22px" }} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          borderTop: "1px solid #f1f5f9", background: "#fff",
          maxHeight: "80vh", overflowY: "auto",
        }}>
          <div style={{ padding: "16px 20px" }}>
            <p style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>
              Services
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", marginBottom: "12px" }}>
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    padding: "8px 10px", borderRadius: "8px", fontSize: "0.8125rem",
                    fontWeight: 500, color: "#374151", textDecoration: "none",
                    background: "#f8fafc", display: "block",
                  }}
                >
                  {s.name}
                </Link>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "12px", display: "flex", flexDirection: "column", gap: "4px" }}>
              {[
                { label: "Locations", href: "/locations" },
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ padding: "10px 4px", fontSize: "0.9375rem", fontWeight: 600, color: "#374151", textDecoration: "none" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "14px", marginTop: "4px" }}>
              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block", textAlign: "center", background: "#f59e0b", color: "#fff",
                  fontWeight: 700, padding: "14px", borderRadius: "10px", textDecoration: "none",
                  fontSize: "0.9375rem",
                }}
              >
                Book a Service Now
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
