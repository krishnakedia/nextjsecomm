import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, User } from "lucide-react"

export default function MainHeader() {
  return (
    <header className="border-b border-vintage-ink/30 dark:border-vintage-ink-light/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-40">
              <Image
                src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"
                alt="The Teez Spot"
                fill
                className="object-contain dark:invert dark:opacity-90"
                priority
              />
            </div>
          </Link>

          <nav className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-lg hover:text-vintage-ink/70 dark:hover:text-vintage-ink-light/70 transition-colors hidden md:block"
            >
              Home
            </Link>
            <Link
              href="/search"
              className="text-lg hover:text-vintage-ink/70 dark:hover:text-vintage-ink-light/70 transition-colors hidden md:block"
            >
              Search
            </Link>
            <Link
              href="/collection"
              className="text-lg hover:text-vintage-ink/70 dark:hover:text-vintage-ink-light/70 transition-colors hidden md:block"
            >
              Collection
            </Link>
            <Link
              href="/cart"
              className="p-2 hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 rounded-full transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link
              href="/account"
              className="p-2 hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 rounded-full transition-colors hidden md:flex"
            >
              <User className="h-6 w-6" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

