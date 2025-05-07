"use client"
import Link from "next/link"
import { ShoppingBag, Heart, Shirt, Palette, Star, Zap } from "lucide-react"

export default function RoundCategories() {
  const categories = [
    { id: "graphic", name: "Graphic", icon: <Palette className="h-6 w-6" /> },
    { id: "basic", name: "Basic", icon: <Shirt className="h-6 w-6" /> },
    { id: "vintage", name: "Vintage", icon: <Star className="h-6 w-6" /> },
    { id: "limited", name: "Limited", icon: <Zap className="h-6 w-6" /> },
    { id: "bestsellers", name: "Bestsellers", icon: <Heart className="h-6 w-6" /> },
    { id: "new", name: "New Arrivals", icon: <ShoppingBag className="h-6 w-6" /> },
  ]

  return (
    <div className="py-8 bg-vintage-paper dark:bg-vintage-paper-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-6 text-center">Shop By Category</h2>
        <div className="flex overflow-x-auto hide-scrollbar gap-6 justify-center pb-4">
          {categories.map((category) => (
            <Link
              href={`/collection?category=${category.id}`}
              key={category.id}
              className="flex flex-col items-center min-w-[80px]"
            >
              <div className="w-20 h-20 rounded-full bg-vintage-ink/5 dark:bg-vintage-ink-light/5 flex items-center justify-center border border-vintage-ink/20 dark:border-vintage-ink-light/20 hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 transition-colors mb-2">
                {category.icon}
              </div>
              <span className="text-sm text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

