"use client"
import { usePathname, useRouter } from "next/navigation"
import { User, Package, MapPin, Heart, Settings } from "lucide-react"

export default function MobileAccountTabs() {
  const pathname = usePathname()
  const router = useRouter()

  const tabs = [
    { id: "overview", label: "Overview", icon: User, path: "/account" },
    { id: "details", label: "Details", icon: User, path: "/account/details" },
    { id: "orders", label: "Orders", icon: Package, path: "/account/orders" },
    { id: "addresses", label: "Addresses", icon: MapPin, path: "/account/addresses" },
    { id: "wishlist", label: "Wishlist", icon: Heart, path: "/account/wishlist" },
    { id: "settings", label: "Settings", icon: Settings, path: "/account/settings" },
  ]

  const handleTabChange = (path: string) => {
    router.push(path)
  }

  return (
    <div className="vintage-frame p-2 dark:border-vintage-ink-light/30 mb-6 lg:hidden">
      <div className="flex overflow-x-auto hide-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = pathname === tab.path

          return (
            <button
              key={tab.id}
              className={`flex flex-col items-center justify-center min-w-[80px] p-3 ${
                isActive
                  ? "bg-vintage-ink/10 dark:bg-vintage-ink-light/10"
                  : "hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5"
              }`}
              onClick={() => handleTabChange(tab.path)}
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

