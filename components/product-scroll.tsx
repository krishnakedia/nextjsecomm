"use client"

import { useRef } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Heart, ShoppingBag } from "lucide-react"
import ProductHoverEffect from "@/components/product-hover-effect"

// Sample product data
const products = [
  {
    id: 1,
    name: "Vintage Graphic Tee",
    price: 29.99,
    originalPrice: 39.99,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    isNew: true,
    discount: 25,
  },
  {
    id: 2,
    name: "Classic White Tee",
    price: 24.99,
    originalPrice: 32.99,
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    isNew: false,
    discount: 20,
  },
  {
    id: 3,
    name: "Distressed Vintage Print",
    price: 34.99,
    originalPrice: 44.99,
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    isNew: true,
    discount: 15,
  },
  {
    id: 4,
    name: "Retro Band Tee",
    price: 32.99,
    originalPrice: 39.99,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    isNew: false,
    discount: 18,
  },
  {
    id: 5,
    name: "Minimalist Logo Tee",
    price: 27.99,
    originalPrice: 34.99,
    image:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    isNew: true,
    discount: 20,
  },
]

export default function ProductScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <div className="py-10 bg-vintage-ink/5 dark:bg-vintage-ink-light/5">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Trending Now</h2>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 border border-vintage-ink/30 dark:border-vintage-ink-light/30 rounded-full hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 border border-vintage-ink/30 dark:border-vintage-ink-light/30 rounded-full hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex overflow-x-auto hide-scrollbar gap-4 pb-4 -mx-4 px-4">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-64 group">
              <div className="vintage-frame p-3 mb-4 bg-vintage-paper dark:bg-vintage-paper-dark relative overflow-hidden group-hover:shadow-lg transition-all duration-300 dark:border-vintage-ink-light/30">
                <div className="relative h-[250px] w-full overflow-hidden">
                  <ProductHoverEffect
                    staticImage={product.image}
                    productName={product.name}
                    className="h-full w-full"
                    width={600}
                    height={800}
                  />

                  {/* NEW Badge - Top Left */}
                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark px-2 py-1 text-xs font-bold z-10">
                      NEW
                    </div>
                  )}

                  {/* Discount Badge - Top Right */}
                  {product.discount > 0 && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-bold z-10">
                      {product.discount}% OFF
                    </div>
                  )}

                  {/* Quick actions */}
                  <div className="absolute bottom-0 left-0 right-0 bg-vintage-ink/80 dark:bg-vintage-ink-light/80 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-4">
                    <button className="text-vintage-paper dark:text-vintage-paper-dark">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="text-vintage-paper dark:text-vintage-paper-dark">
                      <ShoppingBag className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              <h3 className="text-base font-medium mb-1">{product.name}</h3>
              <div className="flex items-center gap-2">
                <span className="font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-sm text-vintage-ink/60 dark:text-vintage-ink-light/60 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            href="/collection"
            className="inline-block px-6 py-2 border border-vintage-ink dark:border-vintage-ink-light hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  )
}

