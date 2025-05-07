"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { User, Package, MapPin, Heart, Settings, LogOut, Mail } from "lucide-react"

export default function AccountSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const menuItems = [
    { path: "/account", label: "Account Overview", icon: User },
    { path: "/account/details", label: "My Details", icon: User },
    { path: "/account/orders", label: "Order History", icon: Package },
    { path: "/account/addresses", label: "My Addresses", icon: MapPin },
    { path: "/account/wishlist", label: "Wishlist", icon: Heart },
    { path: "/account/settings", label: "Settings", icon: Settings },
    { path: "/contact", label: "Contact Us", icon: Mail },
  ]

  return (
    <div className="space-y-6">
      {/* User Profile Summary */}
      <div className="vintage-frame p-4 dark:border-vintage-ink-light/30 text-center">
        <div className="mb-4 flex justify-center">
          <div className="vintage-frame p-2 w-24 h-24 rounded-full overflow-hidden dark:border-vintage-ink-light/30">
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
        <h3 className="font-semibold text-lg">Sarah Johnson</h3>
        <p className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">Member since Jan 2025</p>

        <div className="mt-4 pt-4 border-t border-vintage-ink/20 dark:border-vintage-ink-light/20">
          <div className="flex justify-between text-sm">
            <span>Reward Points:</span>
            <span className="font-medium">250 pts</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="vintage-frame p-4 dark:border-vintage-ink-light/30">
        <nav>
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`flex items-center gap-3 p-3 ${
                      isActive(item.path)
                        ? "bg-vintage-ink/10 dark:bg-vintage-ink-light/10"
                        : "hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5"
                    } transition-colors`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Logout Button */}
      <button className="w-full py-3 border border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5 transition-colors flex items-center justify-center gap-2">
        <LogOut className="h-5 w-5" />
        <span>Sign Out</span>
      </button>
    </div>
  )
}

