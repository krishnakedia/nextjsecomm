import Image from "next/image"
import Link from "next/link"
import { Package, MapPin, Heart, Settings, User, ArrowRight } from "lucide-react"
import MobileAccountTabs from "./components/mobile-account-tabs"

export default function AccountPage() {
  // Recent orders data
  const recentOrders = [
    {
      id: "TS-2025-1234",
      date: "Mar 28, 2025",
      status: "Delivered",
      total: 89.97,
    },
    {
      id: "TS-2025-1198",
      date: "Mar 15, 2025",
      status: "Shipped",
      total: 64.99,
    },
  ]

  // Account sections
  const accountSections = [
    {
      id: "details",
      title: "My Details",
      description: "View and update your personal information",
      icon: User,
      link: "/account/details",
    },
    {
      id: "orders",
      title: "Order History",
      description: "Track and manage your orders",
      icon: Package,
      link: "/account/orders",
    },
    {
      id: "addresses",
      title: "My Addresses",
      description: "Manage your shipping addresses",
      icon: MapPin,
      link: "/account/addresses",
    },
    {
      id: "wishlist",
      title: "Wishlist",
      description: "View your saved items",
      icon: Heart,
      link: "/account/wishlist",
    },
    {
      id: "settings",
      title: "Account Settings",
      description: "Manage your preferences and security",
      icon: Settings,
      link: "/account/settings",
    },
  ]

  return (
    <>
      {/* Mobile Tabs */}
      <MobileAccountTabs />

      {/* Account Overview */}
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="vintage-frame p-6 dark:border-vintage-ink-light/30">
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <div className="vintage-frame p-2 w-16 h-16 rounded-full overflow-hidden dark:border-vintage-ink-light/30">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Profile Picture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-1 vintage-heading">Welcome, Sarah</h1>
              <p className="text-vintage-ink/70 dark:text-vintage-ink-light/70">
                Here's an overview of your account and recent activity
              </p>
            </div>
          </div>
        </div>

        {/* Account Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="vintage-frame p-4 dark:border-vintage-ink-light/30 text-center">
            <div className="text-3xl font-bold mb-1">12</div>
            <div className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">Total Orders</div>
          </div>
          <div className="vintage-frame p-4 dark:border-vintage-ink-light/30 text-center">
            <div className="text-3xl font-bold mb-1">250</div>
            <div className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">Reward Points</div>
          </div>
          <div className="vintage-frame p-4 dark:border-vintage-ink-light/30 text-center">
            <div className="text-3xl font-bold mb-1">8</div>
            <div className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">Wishlist Items</div>
          </div>
          <div className="vintage-frame p-4 dark:border-vintage-ink-light/30 text-center">
            <div className="text-3xl font-bold mb-1">5</div>
            <div className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">Reviews</div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="vintage-frame p-6 dark:border-vintage-ink-light/30">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
            <Link href="/account/orders" className="text-sm flex items-center hover:underline">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          {recentOrders.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-vintage-ink/20 dark:border-vintage-ink-light/20">
                    <th className="text-left py-3 px-2 text-sm font-medium">Order #</th>
                    <th className="text-left py-3 px-2 text-sm font-medium">Date</th>
                    <th className="text-left py-3 px-2 text-sm font-medium">Status</th>
                    <th className="text-left py-3 px-2 text-sm font-medium">Total</th>
                    <th className="text-right py-3 px-2 text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-vintage-ink/10 dark:border-vintage-ink-light/10 last:border-0"
                    >
                      <td className="py-4 px-2">{order.id}</td>
                      <td className="py-4 px-2">{order.date}</td>
                      <td className="py-4 px-2">
                        <span
                          className={`inline-block px-2 py-1 text-xs rounded-full ${
                            order.status === "Delivered" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
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

        {/* Account Sections */}
        <div className="grid md:grid-cols-2 gap-4">
          {accountSections.map((section) => {
            const Icon = section.icon
            return (
              <Link
                key={section.id}
                href={section.link}
                className="vintage-frame p-6 dark:border-vintage-ink-light/30 hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <div className="bg-vintage-ink/10 dark:bg-vintage-ink-light/10 p-3 rounded-full">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{section.title}</h3>
                  <p className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">{section.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

