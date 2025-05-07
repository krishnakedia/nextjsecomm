"use client"

import { useState } from "react"
import { User, Package, MapPin, CreditCard, Heart, Bell, Settings } from "lucide-react"

export default function AccountTabs() {
  const [activeTab, setActiveTab] = useState("profile")

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "orders", label: "Orders", icon: Package },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "payment", label: "Payment", icon: CreditCard },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="vintage-frame p-2 dark:border-vintage-ink-light/30 mb-6">
      <div className="flex overflow-x-auto hide-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              className={`flex flex-col items-center justify-center min-w-[80px] p-3 ${
                activeTab === tab.id
                  ? "bg-vintage-ink/10 dark:bg-vintage-ink-light/10"
                  : "hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5"
              }`}
              onClick={() => setActiveTab(tab.id)}
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

