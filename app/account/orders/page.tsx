import Link from "next/link"
import { Search } from "lucide-react"
import MobileAccountTabs from "../components/mobile-account-tabs"

export default function OrderHistoryPage() {
  // Order history data
  const orders = [
    {
      id: "TS-2025-1234",
      date: "Mar 28, 2025",
      status: "Delivered",
      total: 89.97,
      items: 3,
    },
    {
      id: "TS-2025-1198",
      date: "Mar 15, 2025",
      status: "Shipped",
      total: 64.99,
      items: 2,
    },
    {
      id: "TS-2025-1056",
      date: "Feb 22, 2025",
      status: "Delivered",
      total: 124.5,
      items: 4,
    },
    {
      id: "TS-2025-0987",
      date: "Jan 17, 2025",
      status: "Delivered",
      total: 29.99,
      items: 1,
    },
    {
      id: "TS-2024-0876",
      date: "Dec 05, 2024",
      status: "Delivered",
      total: 59.98,
      items: 2,
    },
  ]

  return (
    <>
      {/* Mobile Tabs */}
      <MobileAccountTabs />

      {/* Order History */}
      <div className="space-y-6">
        <div className="vintage-frame p-6 dark:border-vintage-ink-light/30">
          <h1 className="text-2xl font-bold mb-6 vintage-heading">Order History</h1>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search orders by order number..."
                className="w-full pl-10 pr-4 py-2 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-vintage-ink/60 dark:text-vintage-ink-light/60" />
              </div>
            </div>
            <select className="px-4 py-2 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light">
              <option value="all">All Orders</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {/* Orders Table */}
          {orders.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-vintage-ink/20 dark:border-vintage-ink-light/20">
                    <th className="text-left py-3 px-2 text-sm font-medium">Order #</th>
                    <th className="text-left py-3 px-2 text-sm font-medium">Date</th>
                    <th className="text-left py-3 px-2 text-sm font-medium">Status</th>
                    <th className="text-left py-3 px-2 text-sm font-medium">Items</th>
                    <th className="text-left py-3 px-2 text-sm font-medium">Total</th>
                    <th className="text-right py-3 px-2 text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-vintage-ink/10 dark:border-vintage-ink-light/10 last:border-0"
                    >
                      <td className="py-4 px-2">{order.id}</td>
                      <td className="py-4 px-2">{order.date}</td>
                      <td className="py-4 px-2">
                        <span
                          className={`inline-block px-2 py-1 text-xs rounded-full ${
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-800"
                              : order.status === "Shipped"
                                ? "bg-blue-100 text-blue-800"
                                : order.status === "Processing"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-2">{order.items}</td>
                      <td className="py-4 px-2">${order.total.toFixed(2)}</td>
                      <td className="py-4 px-2 text-right">
                        <Link href={`/account/orders/${order.id}`} className="text-sm hover:underline">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-4">
                You haven't placed any orders yet.
              </p>
              <Link
                href="/collection"
                className="inline-block px-4 py-2 border border-vintage-ink dark:border-vintage-ink-light hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

