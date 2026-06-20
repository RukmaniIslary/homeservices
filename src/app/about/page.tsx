import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About N-Nodes Home Services",
  description:
    "N-Nodes is a nationwide home services marketplace connecting homeowners with licensed, insured professionals for HVAC, plumbing, electrical, and more.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-black mb-6">
              About N-Nodes Home Services
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              We built N-Nodes to make booking a professional home service as easy as ordering a
              package online. No phone trees, no guessing on prices — just straightforward booking,
              transparent costs, and licensed professionals at your door.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-5">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Homeowners deserve a better experience when something goes wrong at home. We
                created N-Nodes to bring transparency, reliability, and speed to home services —
                so you spend less time worrying and more time living.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every technician in our network is licensed, insured, and background-checked. We
                stand behind every job with our satisfaction guarantee.
              </p>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&auto=format&fit=crop&q=80"
              alt="N-Nodes home services team"
              width={600}
              height={450}
              className="rounded-2xl object-cover w-full"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { value: "48", label: "States Served" },
              { value: "50K+", label: "Jobs Completed" },
              { value: "4.9", label: "Average Rating" },
              { value: "2,500+", label: "Active Technicians" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-5xl font-black text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-10">
            <h2 className="text-2xl font-black text-gray-900 mb-6">Our Standards</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "All technicians are state-licensed in their trade",
                "Comprehensive general liability insurance required",
                "Background screening before joining our network",
                "Ongoing training and certification updates",
                "Real-time job tracking and status updates",
                "Customer satisfaction guaranteed on every job",
                "Transparent pricing — no hidden fees",
                "Deposits secured through encrypted Paddle checkout",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-6">Book a service today. No account required.</p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded transition-colors"
          >
            Book a Service <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
