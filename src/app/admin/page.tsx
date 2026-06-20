import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import { formatCurrency, formatDate } from "@/lib/utils";
import Link from "next/link";
import { DollarSign, Calendar, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard | N-Nodes Home Services",
  robots: { index: false, follow: false },
};

async function getDashboardStats() {
  try {
    const [totalBookings, pendingBookings, completedBookings, recentBookings, totalRevenue] =
      await Promise.all([
        prisma.booking.count(),
        prisma.booking.count({ where: { status: "PENDING" } }),
        prisma.booking.count({ where: { status: "COMPLETED" } }),
        prisma.booking.findMany({
          take: 10,
          orderBy: { createdAt: "desc" },
          include: { customer: true, service: true },
        }),
        prisma.payment.aggregate({
          where: { status: "PAID" },
          _sum: { amount: true },
        }),
      ]);

    return { totalBookings, pendingBookings, completedBookings, recentBookings, totalRevenue };
  } catch {
    return {
      totalBookings: 0,
      pendingBookings: 0,
      completedBookings: 0,
      recentBookings: [],
      totalRevenue: { _sum: { amount: 0 } },
    };
  }
}

const STATUS_COLORS: Record<string, string> = {
  PENDING: "bg-yellow-100 text-yellow-700",
  CONFIRMED: "bg-blue-100 text-blue-700",
  DISPATCHED: "bg-purple-100 text-purple-700",
  EN_ROUTE: "bg-indigo-100 text-indigo-700",
  ARRIVED: "bg-cyan-100 text-cyan-700",
  IN_PROGRESS: "bg-orange-100 text-orange-700",
  COMPLETED: "bg-green-100 text-green-700",
  CANCELLED: "bg-red-100 text-red-700",
};

export default async function AdminDashboard() {
  const stats = await getDashboardStats();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black">Admin Dashboard</h1>
              <p className="text-gray-400 text-sm mt-1">N-Nodes Home Services</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/admin/bookings" className="text-gray-300 hover:text-white text-sm">Bookings</Link>
              <Link href="/admin/technicians" className="text-gray-300 hover:text-white text-sm">Technicians</Link>
              <Link href="/admin/services" className="text-gray-300 hover:text-white text-sm">Services</Link>
              <Link href="/admin/customers" className="text-gray-300 hover:text-white text-sm">Customers</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[
            {
              label: "Total Bookings",
              value: stats.totalBookings,
              icon: Calendar,
              color: "text-blue-600",
              bg: "bg-blue-50",
            },
            {
              label: "Pending",
              value: stats.pendingBookings,
              icon: TrendingUp,
              color: "text-yellow-600",
              bg: "bg-yellow-50",
            },
            {
              label: "Completed",
              value: stats.completedBookings,
              icon: Users,
              color: "text-green-600",
              bg: "bg-green-50",
            },
            {
              label: "Deposits Collected",
              value: formatCurrency(stats.totalRevenue._sum.amount || 0),
              icon: DollarSign,
              color: "text-amber-600",
              bg: "bg-amber-50",
            },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className={`w-10 h-10 ${stat.bg} rounded-lg flex items-center justify-center mb-3`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <p className="text-2xl font-black text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recent bookings */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900">Recent Bookings</h2>
            <Link href="/admin/bookings" className="text-sm text-amber-600 hover:text-amber-700 font-semibold">
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                  <th className="px-5 py-3">Booking #</th>
                  <th className="px-5 py-3">Customer</th>
                  <th className="px-5 py-3">Service</th>
                  <th className="px-5 py-3">Date</th>
                  <th className="px-5 py-3">Deposit</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {stats.recentBookings.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-5 py-10 text-center text-gray-400 text-sm">
                      No bookings yet. Bookings will appear here once customers complete checkout.
                    </td>
                  </tr>
                ) : (
                  stats.recentBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4 text-xs font-mono text-gray-600">{booking.bookingNumber}</td>
                      <td className="px-5 py-4">
                        <p className="text-sm font-semibold text-gray-900">{booking.customer.fullName}</p>
                        <p className="text-xs text-gray-400">{booking.customer.email}</p>
                      </td>
                      <td className="px-5 py-4 text-sm text-gray-700">{booking.service.name}</td>
                      <td className="px-5 py-4 text-sm text-gray-600">{formatDate(booking.scheduledDate)}</td>
                      <td className="px-5 py-4 text-sm font-semibold text-gray-900">
                        {formatCurrency(booking.depositAmount)}
                      </td>
                      <td className="px-5 py-4">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_COLORS[booking.status] || "bg-gray-100 text-gray-600"}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <Link href={`/admin/bookings/${booking.id}`} className="text-xs text-amber-600 hover:text-amber-700 font-semibold">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
