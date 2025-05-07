"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, ShoppingBag, Search, User, ShoppingCart } from "lucide-react"
import { usePathname } from "next/navigation"

export default function BottomNavigation() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 bg-vintage-paper dark:bg-vintage-paper-dark border-t border-vintage-ink/20 dark:border-vintage-ink-light/20 z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "translate-y-full"}`}
    >
      <div className="flex justify-around items-center h-16">
        <Link
          href="/"
          className={`flex flex-col items-center justify-center w-full h-full ${isActive("/") ? "text-vintage-ink dark:text-vintage-ink-light" : "text-vintage-ink/60 dark:text-vintage-ink-light/60"}`}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </Link>

        <Link
          href="/search"
          className={`flex flex-col items-center justify-center w-full h-full ${isActive("/search") ? "text-vintage-ink dark:text-vintage-ink-light" : "text-vintage-ink/60 dark:text-vintage-ink-light/60"}`}
        >
          <Search className="h-5 w-5" />
          <span className="text-xs mt-1">Search</span>
        </Link>

        <Link
          href="/collection"
          className={`flex flex-col items-center justify-center w-full h-full ${isActive("/collection") ? "text-vintage-ink dark:text-vintage-ink-light" : "text-vintage-ink/60 dark:text-vintage-ink-light/60"}`}
        >
          <ShoppingBag className="h-5 w-5" />
          <span className="text-xs mt-1">Collection</span>
        </Link>

        <Link
          href="/cart"
          className={`flex flex-col items-center justify-center w-full h-full ${isActive("/cart") ? "text-vintage-ink dark:text-vintage-ink-light" : "text-vintage-ink/60 dark:text-vintage-ink-light/60"}`}
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="text-xs mt-1">Cart</span>
        </Link>

        <Link
          href="/account"
          className={`flex flex-col items-center justify-center w-full h-full ${isActive("/account") ? "text-vintage-ink dark:text-vintage-ink-light" : "text-vintage-ink/60 dark:text-vintage-ink-light/60"}`}
        >
          <User className="h-5 w-5" />
          <span className="text-xs mt-1">Account</span>
        </Link>
      </div>
    </div>
  )
}

