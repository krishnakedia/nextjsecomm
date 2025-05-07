"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Home, ShoppingBag, User, Search, ShoppingCart } from "lucide-react"
import { usePathname } from "next/navigation"

// Note: This component is no longer used in the main header
// It's kept for reference or potential future use
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu}></div>}

      {/* Slide-in menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-vintage-paper dark:bg-vintage-paper-dark z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-vintage-ink/20 dark:border-vintage-ink-light/20 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={closeMenu} className="p-2 focus:outline-none" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className={`flex items-center gap-3 p-2 rounded-md ${
                  isActive("/")
                    ? "bg-vintage-ink/10 dark:bg-vintage-ink-light/10 text-vintage-ink dark:text-vintage-ink-light"
                    : "text-vintage-ink/80 dark:text-vintage-ink-light/80 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5"
                }`}
                onClick={closeMenu}
              >
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/search"
                className={`flex items-center gap-3 p-2 rounded-md ${
                  isActive("/search")
                    ? "bg-vintage-ink/10 dark:bg-vintage-ink-light/10 text-vintage-ink dark:text-vintage-ink-light"
                    : "text-vintage-ink/80 dark:text-vintage-ink-light/80 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5"
                }`}
                onClick={closeMenu}
              >
                <Search className="h-5 w-5" />
                <span>Search</span>
              </Link>
            </li>
            <li>
              <Link
                href="/collection"
                className={`flex items-center gap-3 p-2 rounded-md ${
                  isActive("/collection")
                    ? "bg-vintage-ink/10 dark:bg-vintage-ink-light/10 text-vintage-ink dark:text-vintage-ink-light"
                    : "text-vintage-ink/80 dark:text-vintage-ink-light/80 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5"
                }`}
                onClick={closeMenu}
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Collection</span>
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className={`flex items-center gap-3 p-2 rounded-md ${
                  isActive("/cart")
                    ? "bg-vintage-ink/10 dark:bg-vintage-ink-light/10 text-vintage-ink dark:text-vintage-ink-light"
                    : "text-vintage-ink/80 dark:text-vintage-ink-light/80 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5"
                }`}
                onClick={closeMenu}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className={`flex items-center gap-3 p-2 rounded-md ${
                  isActive("/account")
                    ? "bg-vintage-ink/10 dark:bg-vintage-ink-light/10 text-vintage-ink dark:text-vintage-ink-light"
                    : "text-vintage-ink/80 dark:text-vintage-ink-light/80 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5"
                }`}
                onClick={closeMenu}
              >
                <User className="h-5 w-5" />
                <span>Account</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

