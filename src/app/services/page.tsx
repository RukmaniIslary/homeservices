import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { formatCurrency } from "@/lib/utils";

export const metadata: Metadata = {
  title: "All Home Services | N-Nodes Home Services",
  description:
    "Browse all home services offered by N-Nodes: HVAC, Plumbing, Electrical, Roofing, Water Damage, Garage Door, Appliance Repair, Handyman, Cleaning & Landscaping.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black mb-4">Our Services</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Professional home services with transparent pricing. Book online, pay a deposit, and
            we dispatch a licensed technician to your door.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">
                      From {formatCurrency(service.basePrice)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">{service.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Clock className="w-3.5 h-3.5" /> {service.durationEstimate}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-amber-600">
                      Book Now <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
