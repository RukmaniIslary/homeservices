import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Clock, Shield, Star, ArrowRight, Wrench, Zap } from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { formatCurrency } from "@/lib/utils";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://n-nodes.com";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-gray-950 overflow-hidden min-h-[640px] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&auto=format&fit=crop&q=85"
            alt="Professional home services technician at work"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/75 to-gray-950/30" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-28">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-2 mb-7">
              <span className="w-2 h-2 bg-amber-400 rounded-full pulse-dot" />
              <span className="text-amber-300 text-xs font-semibold tracking-wide uppercase">
                Technicians Available Now — 48 States
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Home Services,{" "}
              <span className="text-gradient">Done Right</span>
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-9 max-w-lg">
              HVAC, plumbing, electrical, roofing and more — licensed professionals dispatched to
              your door. No account needed. Book in 3 minutes.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/book"
                className="group inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
              >
                Book a Service
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-3">
              {[
                "No account required",
                "Same-day available",
                "Emergency 30-min response",
                "Licensed & insured",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-full px-3.5 py-1.5 text-gray-300 text-xs font-medium"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { value: "50,000+", label: "Jobs Completed" },
              { value: "4.9★", label: "Average Rating" },
              { value: "30 min", label: "Emergency Response" },
              { value: "48 States", label: "Nationwide Coverage" },
            ].map((stat, i) => (
              <div key={stat.label} className={`text-center px-6 py-3 ${i === 0 ? "pl-0" : ""} ${i === 3 ? "pr-0" : ""}`}>
                <p className="text-2xl font-black text-gray-900 tracking-tight">{stat.value}</p>
                <p className="text-xs text-gray-400 font-medium mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-2">What We Do</p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                10 Professional Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 hover:border-amber-400/60 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm">
                      From {formatCurrency(service.basePrice)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-amber-600 transition-colors text-[0.9375rem]">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {service.durationEstimate}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-amber-600 group-hover:gap-2 transition-all">
                      Book Now <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-2">Simple Process</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
              Booked in 3 Minutes
            </h2>
            <p className="text-gray-400 text-lg max-w-lg mx-auto">
              No account. No phone trees. Just pick your service, enter your info, and we handle the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200" />

            {[
              {
                num: "01",
                icon: Wrench,
                title: "Choose a Service",
                desc: "Pick from 10 categories. Enter your address, notes, and preferred schedule.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                num: "02",
                icon: Shield,
                title: "Confirm Your Booking",
                desc: "Enter your contact info, select a date and time, and confirm. Your slot is reserved instantly.",
                color: "bg-amber-50 text-amber-600",
              },
              {
                num: "03",
                icon: Zap,
                title: "We Dispatch a Pro",
                desc: "A licensed, insured technician is dispatched to your location at your scheduled time.",
                color: "bg-green-50 text-green-600",
              },
            ].map((step) => (
              <div key={step.num} className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <span className="absolute top-5 right-6 text-7xl font-black text-gray-100 select-none leading-none">
                  {step.num}
                </span>
                <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center mb-5`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="py-20 bg-gray-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber-400 text-sm font-bold uppercase tracking-widest mb-3">Why N-Nodes</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-8">
                The Standard for Home Services
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "Every Tech is Licensed & Insured",
                    desc: "State licensing, full liability insurance, and background checks — required before joining our network.",
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "See the full price estimate before you book. No hidden fees — the balance is settled after the job is done.",
                  },
                  {
                    title: "Emergency Response in 30 Minutes",
                    desc: "For urgent situations, we target arrival within 30 minutes where service is available.",
                  },
                  {
                    title: "Nationwide — 48 States",
                    desc: "Professional home services available coast to coast, in major cities and surrounding areas.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/8 hover:bg-white/8 transition-colors">
                    <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm mb-0.5">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo + rating card */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&auto=format&fit=crop&q=80"
                  alt="N-Nodes HVAC professional at work"
                  width={700}
                  height={525}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-2xl p-5 max-w-[220px]">
                <div className="flex mb-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl font-black text-gray-900">4.9 / 5</p>
                <p className="text-xs text-gray-400 mt-0.5">Based on 12,400+ verified reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-2">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              What Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Marcus D.",
                location: "Atlanta, GA",
                service: "HVAC Service",
                review: "AC went out on a Saturday night with temps in the 90s. Called N-Nodes around 9pm and the tech was at my door by 10:15. Had the part on his truck, fixed it in 45 minutes. Charged exactly what they quoted. Floored by how smooth the whole thing was.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&auto=format&fit=crop&q=80",
              },
              {
                name: "Sandra M.",
                location: "Chicago, IL",
                service: "Plumbing",
                review: "Pipe burst under my kitchen sink on a Sunday morning, water everywhere. Booked on the site in 3 minutes, had a plumber here within the hour. He replaced the section and checked the whole line. Unbelievably fast for a Sunday.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&auto=format&fit=crop&q=80",
              },
              {
                name: "James R.",
                location: "Miami, FL",
                service: "Electrical",
                review: "200-amp panel upgrade — the electrician pulled the permit, did the work, and scheduled the inspection. Passed first time. Got quotes from two other companies beforehand and N-Nodes was cheaper and faster. Really impressed.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&auto=format&fit=crop&q=80",
              },
            ].map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">&ldquo;{r.review}&rdquo;</p>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-50">
                  <Image
                    src={r.image}
                    alt={r.name}
                    width={42}
                    height={42}
                    className="rounded-full object-cover ring-2 ring-gray-100"
                  />
                  <div>
                    <p className="font-bold text-sm text-gray-900">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.location} · {r.service}</p>
                  </div>
                  <span className="ml-auto text-xs bg-green-50 text-green-700 font-semibold px-2.5 py-1 rounded-full">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="bg-gray-950 rounded-3xl px-10 py-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-400 rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                Ready to Book?
              </h2>
              <p className="text-gray-400 text-lg mb-9 max-w-md mx-auto">
                Takes 3 minutes. No account required. Book online and we dispatch a licensed pro.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-0.5"
                >
                  Book a Service Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "N-Nodes Home Services",
            description:
              "Nationwide home services marketplace. Book HVAC, plumbing, electrical, roofing, and more.",
            url: APP_URL,
            telephone: "1-800-N-NODES",
            email: "support@n-nodes.com",
            areaServed: "US",
            priceRange: "$$",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "12400",
              bestRating: "5",
            },
          }),
        }}
      />
    </>
  );
}
