import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingBag, Trash2, Eye } from "lucide-react"
import MobileAccountTabs from "../components/mobile-account-tabs"

export default function WishlistPage() {
  // Sample wishlist items
  const wishlistItems = [
    {
      id: 1,
      name: "Vintage Graphic Tee",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
      color: "Vintage Black",
      size: "M",
      inStock: true,
    },
    {
      id: 2,
      name: "Classic White Tee",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
      color: "White",
      size: "L",
      inStock: true,
    },
    {
      id: 3,
      name: "Distressed Vintage Print",
      price: 34.99,
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
      color: "Faded Gray",
      size: "XL",
      inStock: true,
    },
    {
      id: 4,
      name: "Retro Band Tee",
      price: 32.99,
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
      color: "Black",
      size: "M",
      inStock: false,
    },
  ]

  return (
    <>
      {/* Mobile Tabs */}
      <MobileAccountTabs />

      {/* Wishlist */}
      <div className="space-y-6">
        <div className="vintage-frame p-6 dark:border-vintage-ink-light/30">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold vintage-heading">My Wishlist</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">
                {wishlistItems.length} items
              </span>
            </div>
          </div>

          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="group relative">
                  <div className="vintage-frame p-3 mb-4 bg-vintage-paper dark:bg-vintage-paper-dark relative overflow-hidden group-hover:shadow-lg transition-all duration-300 dark:border-vintage-ink-light/30">
                    <div className="relative h-[300px] w-full overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Quick actions */}
                      <div className="absolute top-2 right-2 flex flex-col gap-2">
                        <button className="p-2 bg-vintage-paper dark:bg-vintage-paper-dark rounded-full hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <button className="p-2 bg-vintage-paper dark:bg-vintage-paper-dark rounded-full hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Out of stock overlay */}
                      {!item.inStock && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="bg-vintage-paper dark:bg-vintage-paper-dark px-4 py-2 rotate-[-5deg]">
                            <span className="text-vintage-ink dark:text-vintage-ink-light font-medium">
                              Out of Stock
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold">${item.price.toFixed(2)}</span>
                    <span className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">
                      {item.color} / {item.size}
                    </span>
                  </div>

                  <button
                    className={`w-full py-2 mt-2 flex items-center justify-center gap-2 ${
                      item.inStock
                        ? "bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90"
                        : "bg-vintage-ink/30 dark:bg-vintage-ink-light/30 text-vintage-paper dark:text-vintage-paper-dark cursor-not-allowed"
                    } transition-colors`}
                    disabled={!item.inStock}
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-vintage-ink/10 dark:bg-vintage-ink-light/10">
                  <Heart className="h-10 w-10 text-vintage-ink/70 dark:text-vintage-ink-light/70" />
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
              <p className="text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-6 max-w-md mx-auto">
                Browse our collection and add your favorite items to your wishlist to save them for later.
              </p>
              <Link
                href="/collection"
                className="inline-block px-6 py-3 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90 transition-colors"
              >
                Browse Collection
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

