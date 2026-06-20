import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <p className="text-8xl font-black text-gray-100 mb-4">404</p>
        <h1 className="text-3xl font-black text-gray-900 mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded transition-colors"
          >
            Return Home <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded transition-colors"
          >
            Book a Service
          </Link>
        </div>
      </div>
    </div>
  );
}
