"use client";

import Link from "next/link";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services-data";

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Locations", href: "/locations" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ];

  const topCities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
    "San Diego", "Dallas", "Austin", "Miami", "Seattle",
  ];

  return (
    <footer style={{ background: "#0f172a", color: "#94a3b8" }}>
      {/* Main footer body */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 20px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>

          {/* Brand column */}
          <div style={{ minWidth: "200px" }}>
            {/* Logo */}
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "16px" }}>
              <div style={{
                width: "36px", height: "36px",
                background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
                borderRadius: "8px",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.1)",
              }}>
                <span style={{ color: "#f59e0b", fontWeight: 900, fontSize: "13px" }}>NN</span>
              </div>
              <div>
                <div style={{ color: "#fff", fontWeight: 900, fontSize: "1rem", letterSpacing: "-0.04em" }}>N-NODES</div>
                <div style={{ color: "#64748b", fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Home Services</div>
              </div>
            </Link>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#64748b", marginBottom: "20px" }}>
              Nationwide home services you can trust. Licensed, insured, and background-checked professionals at your door.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { icon: Mail, text: "support@n-nodes.com", href: "mailto:support@n-nodes.com" },
                { icon: MapPin, text: "Nationwide Service", href: "/locations" },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    color: "#64748b", fontSize: "0.8125rem", textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#f59e0b")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#64748b")}
                >
                  <item.icon style={{ width: "14px", height: "14px", flexShrink: 0 }} />
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
              Our Services
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    style={{ color: "#64748b", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#e2e8f0")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#64748b")}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
              Company
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{ color: "#64748b", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#e2e8f0")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#64748b")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
              Top Cities
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {topCities.map((city) => (
                <li key={city}>
                  <Link
                    href={`/locations/${city.toLowerCase().replace(/\s+/g, "-")}`}
                    style={{ color: "#64748b", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#e2e8f0")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#64748b")}
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/locations"
              style={{
                display: "inline-flex", alignItems: "center", gap: "4px",
                color: "#f59e0b", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none",
                marginTop: "12px",
              }}
            >
              All locations <ArrowRight style={{ width: "13px", height: "13px" }} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "20px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <p style={{ fontSize: "0.8125rem", color: "#475569" }}>
            &copy; {year} N-Nodes Home Services. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ color: "#475569", fontSize: "0.8125rem", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#475569")}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
