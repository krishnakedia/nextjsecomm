import Link from "next/link"
import { Minus, Plus, X, RefreshCw } from "lucide-react"
import MainHeader from "@/components/main-header"
import MainFooter from "@/components/main-footer"
import BottomNavigation from "@/components/bottom-navigation"
import ProductHoverEffect from "@/components/product-hover-effect"

// Sample cart data
const cartItems = [
  {
    id: 1,
    name: "Vintage Graphic Tee",
    price: 29.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    color: "Black",
    size: "M",
  },
  {
    id: 2,
    name: "Classic White Tee",
    price: 24.99,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    color: "White",
    size: "L",
  },
]

export default function CartPage() {
  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 5.99
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-vintage-paper dark:bg-vintage-paper-dark text-vintage-ink dark:text-vintage-ink-light font-serif transition-colors duration-300">
      <MainHeader />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 vintage-heading">Shopping Cart</h1>
          <p className="text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-8">Review your items before checkout</p>

          {cartItems.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="lg:w-2/3">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row gap-6 p-4 border border-vintage-ink/20 dark:border-vintage-ink-light/20"
                    >
                      <div className="sm:w-1/4">
                        <div className="vintage-frame p-2 dark:border-vintage-ink-light/30">
                          <div className="relative h-[150px] w-full">
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
                          <div className="flex justify-between">
                            <h3 className="text-xl font-semibold">{item.name}</h3>
                            <button className="text-vintage-ink/60 dark:text-vintage-ink-light/60 hover:text-vintage-ink dark:hover:text-vintage-ink-light">
                              <X className="h-5 w-5" />
                            </button>
                          </div>
                          <div className="mt-2 space-y-1 text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">
                            <p>Color: {item.color}</p>
                            <p>Size: {item.size}</p>
                          </div>
                          <p className="font-bold mt-2">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                          <div className="flex items-center border border-vintage-ink/30 dark:border-vintage-ink-light/30">
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5">
                              <Minus className="h-4 w-4" />
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              readOnly
                              className="w-12 h-8 text-center bg-vintage-paper dark:bg-vintage-paper-dark"
                            />
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5">
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-8 pt-4 border-t border-vintage-ink/20 dark:border-vintage-ink-light/20">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="h-5 w-5 text-vintage-ink/70 dark:text-vintage-ink-light/70" />
                    <button className="text-vintage-ink/70 dark:text-vintage-ink-light/70 hover:text-vintage-ink dark:hover:text-vintage-ink-light underline">
                      Update Cart
                    </button>
                  </div>
                  <Link
                    href="/collection"
                    className="px-4 py-2 border border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5 transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:w-1/3">
                <div className="border border-vintage-ink/20 dark:border-vintage-ink-light/20 p-6">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="border-t border-vintage-ink/20 dark:border-vintage-ink-light/20 pt-3 mt-3">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90 transition-colors">
                    Proceed to Checkout
                  </button>

                  <div className="mt-6 pt-6 border-t border-vintage-ink/20 dark:border-vintage-ink-light/20">
                    <h3 className="font-semibold mb-3">Have a coupon?</h3>
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Enter coupon code"
                        className="flex-1 px-4 py-2 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none"
                      />
                      <button className="px-4 py-2 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90 transition-colors">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-8">
                Looks like you haven't added any items to your cart yet
              </p>
              <Link
                href="/collection"
                className="inline-block px-6 py-3 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90 transition-colors"
              >
                Start Shopping
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

