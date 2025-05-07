import Link from "next/link"
import Image from "next/image"
import ThemeToggle from "./theme-toggle"

export default function MainFooter() {
  return (
    <footer className="border-t border-vintage-ink/30 dark:border-vintage-ink-light/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="relative h-12 w-32">
                <Image
                  src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"
                  alt="The Teez Spot"
                  fill
                  className="object-contain dark:invert dark:opacity-90"
                />
              </div>
            </Link>
            <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
              Crafting unique t-shirts with custom prints since 2025.
            </p>
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/collection"
                  className="hover:text-vintage-ink/70 dark:hover:text-vintage-ink-light/70 transition-colors"
                >
                  Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/new-arrivals"
                  className="hover:text-vintage-ink/70 dark:hover:text-vintage-ink-light/70 transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/bestsellers"
                  className="hover:text-vintage-ink/70 dark:hover:text-vintage-ink-light/70 transition-colors"
                >
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link
                  href="/gift-cards"
                  className="hover:text-vintage-ink/70 dark:hover:text-vintage-ink-light/70 transition-colors"
                >
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-vintage-ink/70 dark:hover:text-vintage-ink-light/70 transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="hover:text-vintage-ink/70 dark:hover:text-vintage-ink-light/70 transition-colors"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="hover:text-vintage-ink/70 dark:hover:text-vintage-ink-light/70 transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-vintage-ink/70 dark:hover:text-vintage-ink-light/70 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shipping-returns"
                  className="hover:text-vintage-ink/70 dark:hover:text-vintage-ink-light/70 transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-vintage-ink/70 dark:hover:text-vintage-ink-light/70 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="hover:text-vintage-ink/70 dark:hover:text-vintage-ink-light/70 transition-colors"
                >
                  Size Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-vintage-ink/70 dark:hover:text-vintage-ink-light/70 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-vintage-ink/30 dark:border-vintage-ink-light/20 mt-8 pt-8 text-center text-vintage-ink/70 dark:text-vintage-ink-light/70">
          <p>© {new Date().getFullYear()} The Teez Spot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

