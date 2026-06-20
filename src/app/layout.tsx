import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BRAND_NAME = "N-Nodes Home Services";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://n-nodes.com";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: `${BRAND_NAME} | Book HVAC, Plumbing, Electrical & More`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "Book trusted home services online. HVAC, Plumbing, Electrical, Roofing, Water Damage, Garage Door, Appliance Repair, Handyman, Cleaning, and Landscaping. Licensed professionals dispatched nationwide.",
  keywords: [
    "home services",
    "HVAC repair",
    "plumbing services",
    "electrical services",
    "roofing",
    "water damage restoration",
    "garage door repair",
    "appliance repair",
    "handyman",
    "house cleaning",
    "landscaping",
    "home repair near me",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: APP_URL,
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} | Book Home Services Online`,
    description:
      "Nationwide home services marketplace. Book HVAC, plumbing, electrical, and more from licensed professionals. Pay a small deposit and we dispatch a technician.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "N-Nodes Home Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} | Book Home Services Online`,
    description:
      "Nationwide home services. Book HVAC, plumbing, electrical & more from licensed professionals.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href={APP_URL} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#111827" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
