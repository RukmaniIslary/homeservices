import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { TOP_CITIES, US_STATES } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Service Locations | N-Nodes Home Services",
  description:
    "N-Nodes Home Services operates nationwide across 48 states. Find home services near you — HVAC, plumbing, electrical, roofing, and more.",
};

export default function LocationsPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black mb-4">Service Locations</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            N-Nodes Home Services is available nationwide. Find professional home services in your
            city or state.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Major Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {TOP_CITIES.map((city) => (
              <Link
                key={city}
                href={`/locations/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-amber-50 border border-gray-200 hover:border-amber-400 rounded-lg text-sm text-gray-700 hover:text-amber-700 transition-all"
              >
                <MapPin className="w-4 h-4 flex-shrink-0 text-gray-400" />
                {city}
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-8 mt-14">Browse by State</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {US_STATES.map((state) => (
              <Link
                key={state.abbr}
                href={`/locations/${state.abbr.toLowerCase()}`}
                className="flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-amber-50 border border-gray-200 hover:border-amber-400 rounded-lg text-sm transition-all"
              >
                <span className="text-gray-700 hover:text-amber-700">{state.name}</span>
                <span className="text-gray-400 text-xs">{state.abbr}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
