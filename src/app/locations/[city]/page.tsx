import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { SERVICES, TOP_CITIES } from "@/lib/services-data";
import { formatCurrency } from "@/lib/utils";

interface Props {
  params: Promise<{ city: string }>;
}

function formatCityName(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateStaticParams() {
  return TOP_CITIES.map((city) => ({
    city: city.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityName = formatCityName(city);
  return {
    title: `Home Services in ${cityName} | N-Nodes`,
    description: `Professional home services in ${cityName}. Book HVAC, plumbing, electrical, roofing, and more. Licensed technicians dispatched to your ${cityName} home.`,
    openGraph: {
      title: `Home Services in ${cityName} | N-Nodes`,
      description: `Book professional home services in ${cityName}. Licensed, insured technicians available same-day.`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const cityName = formatCityName(city);

  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <Link href="/locations" className="hover:text-gray-200">Locations</Link>
            <span>/</span>
            <span className="text-gray-200">{cityName}</span>
          </div>
          <h1 className="text-4xl font-black mb-4">
            Home Services in {cityName}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            N-Nodes dispatches licensed, insured professionals to {cityName} and surrounding areas.
            Book online in minutes — no account required.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-8">
            Available Services in {cityName}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/book?service=${service.slug}&city=${city}`}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={service.imageUrl}
                    alt={`${service.name} in ${cityName}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{service.name}</h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">{service.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-600 font-semibold text-sm">From {formatCurrency(service.basePrice)}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-400 group-hover:text-amber-600">
                      Book Now <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-6">
            Why {cityName} Homeowners Choose N-Nodes
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              `Serving ${cityName} and surrounding communities`,
              "Licensed & insured technicians",
              "Same-day and emergency service",
              "Transparent pricing before you book",
              "Deposit-based booking — no surprise bills",
              "Background-checked professionals",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">
            Book a Service in {cityName} Today
          </h2>
          <p className="text-gray-400 mb-6">No account required. Pay a small deposit, we dispatch a pro.</p>
          <div className="flex justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3.5 rounded transition-colors"
            >
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "N-Nodes Home Services",
            description: `Professional home services in ${cityName}`,
            url: process.env.NEXT_PUBLIC_APP_URL,
            telephone: "1-800-N-NODES",
            areaServed: cityName,
          }),
        }}
      />
    </>
  );
}
