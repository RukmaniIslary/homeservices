import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Home Services Blog | N-Nodes",
  description:
    "Expert home maintenance tips, guides, and advice from the N-Nodes team. Learn how to maintain your HVAC, plumbing, electrical systems, and more.",
};

const POSTS = [
  {
    slug: "hvac-maintenance-tips",
    title: "10 HVAC Maintenance Tips to Extend System Life",
    excerpt:
      "Regular HVAC maintenance can extend your system's lifespan by years and lower your energy bills. Here are ten actionable tips from our certified technicians.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=700&auto=format&fit=crop&q=80",
    category: "HVAC",
    date: "June 15, 2026",
    readTime: "5 min read",
  },
  {
    slug: "when-to-call-plumber",
    title: "When to Call a Plumber vs. DIY: A Homeowner's Guide",
    excerpt:
      "Some plumbing issues are safe to tackle yourself. Others need a licensed plumber immediately. Here's how to tell the difference.",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=700&auto=format&fit=crop&q=80",
    category: "Plumbing",
    date: "June 10, 2026",
    readTime: "6 min read",
  },
  {
    slug: "home-electrical-safety",
    title: "Home Electrical Safety: Warning Signs You Shouldn't Ignore",
    excerpt:
      "Electrical hazards are one of the leading causes of house fires. Learn the warning signs that mean it's time to call a licensed electrician.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&auto=format&fit=crop&q=80",
    category: "Electrical",
    date: "June 5, 2026",
    readTime: "7 min read",
  },
  {
    slug: "roof-inspection-checklist",
    title: "Annual Roof Inspection Checklist for Homeowners",
    excerpt:
      "Catching roof problems early can save thousands in repairs. Use this checklist to spot potential issues before they become major problems.",
    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=700&auto=format&fit=crop&q=80",
    category: "Roofing",
    date: "June 1, 2026",
    readTime: "5 min read",
  },
  {
    slug: "water-damage-response",
    title: "What to Do in the First 24 Hours After Water Damage",
    excerpt:
      "Speed is critical with water damage. Acting quickly in the first 24 hours can prevent mold, structural damage, and thousands in restoration costs.",
    image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=700&auto=format&fit=crop&q=80",
    category: "Water Damage",
    date: "May 28, 2026",
    readTime: "8 min read",
  },
  {
    slug: "appliance-repair-vs-replace",
    title: "Repair or Replace? How to Decide for Every Major Appliance",
    excerpt:
      "When your appliance breaks down, repair vs. replace is a tough call. Our technicians break down the math for every major appliance category.",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=700&auto=format&fit=crop&q=80",
    category: "Appliance Repair",
    date: "May 22, 2026",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black mb-4">Home Services Blog</h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Expert tips, maintenance guides, and home improvement advice from our licensed
            professionals.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-gray-900 mb-2 leading-snug group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4">{post.excerpt}</p>
                  <span className="flex items-center gap-1 text-sm text-amber-600 font-semibold">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
