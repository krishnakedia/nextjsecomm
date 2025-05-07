import Link from "next/link"
import { Trash2, ShoppingBag } from "lucide-react"
import MainHeader from "@/components/main-header"
import MainFooter from "@/components/main-footer"
import BottomNavigation from "@/components/bottom-navigation"
import ProductHoverEffect from "@/components/product-hover-effect"

// Sample wishlist data
const wishlistItems = [
  {
    id: 1,
    name: "Vintage Graphic Tee",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    inStock: true,
  },
  {
    id: 2,
    name: "Classic White Tee",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    inStock: true,
  },
  {
    id: 3,
    name: "Distressed Vintage Print",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    inStock: false,
  },
  {
    id: 4,
    name: "Retro Band Tee",
    price: 32.99,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    inStock: true,
  },
]

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-vintage-paper dark:bg-vintage-paper-dark text-vintage-ink dark:text-vintage-ink-light font-serif transition-colors duration-300">
      <MainHeader />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 vintage-heading">My Wishlist</h1>
          <p className="text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-8">Items you've saved for later</p>

          {wishlistItems.length > 0 ? (
            <div className="space-y-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-6 p-4 border border-vintage-ink/20 dark:border-vintage-ink-light/20"
                >
                  <div className="sm:w-1/4">
                    <div className="vintage-frame p-2 dark:border-vintage-ink-light/30">
                      <div className="relative h-[200px] w-full">
                        <ProductHoverEffect
                          staticImage={item.image}
                          productName={item.name}
                          className="h-full w-full"
                          width={600}
                          height={800}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      <p className="font-bold mb-2">${item.price.toFixed(2)}</p>
                      <p className={item.inStock ? "text-green-600" : "text-red-600"}>
                        {item.inStock ? "In Stock" : "Out of Stock"}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <button
                        className={`px-4 py-2 flex items-center gap-2 ${
                          item.inStock
                            ? "bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90"
                            : "bg-vintage-ink/50 dark:bg-vintage-ink-light/50 text-vintage-paper dark:text-vintage-paper-dark cursor-not-allowed"
                        } transition-colors`}
                        disabled={!item.inStock}
                      >
                        <ShoppingBag className="h-5 w-5" />
                        <span>Add to Cart</span>
                      </button>
                      <button className="px-4 py-2 border border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5 transition-colors flex items-center gap-2">
                        <Trash2 className="h-5 w-5" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center mt-8 pt-6 border-t border-vintage-ink/20 dark:border-vintage-ink-light/20">
                <Link
                  href="/collection"
                  className="px-6 py-2 border border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5 transition-colors"
                >
                  Continue Shopping
                </Link>
                <button className="px-6 py-2 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90 transition-colors">
                  Add All to Cart
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">Your wishlist is empty</h2>
              <p className="text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-8">
                Browse our collection and add items you love to your wishlist
              </p>
              <Link
                href="/collection"
                className="inline-block px-6 py-3 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90 transition-colors"
              >
                Explore Collection
              </Link>
            </div>
          )}
        </div>
      </div>

      <MainFooter />
      <BottomNavigation />
    </div>
  )
}

