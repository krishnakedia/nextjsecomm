import Link from "next/link"
import { ChevronRight, Heart, Eye, ShoppingBag } from "lucide-react"
import MainHeader from "@/components/main-header"
import MainFooter from "@/components/main-footer"
import BottomNavigation from "@/components/bottom-navigation"
import CollectionFilters from "./collection-filters"
import MobileFilters from "./mobile-filters"
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
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    category: "Graphic",
    isNew: true,
    isBestseller: false,
    discount: 25,
  },
  {
    id: 2,
    name: "Classic White Tee",
    price: 24.99,
    originalPrice: 32.99,
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    colors: ["White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Basic",
    isNew: false,
    isBestseller: true,
    discount: 20,
  },
  {
    id: 3,
    name: "Distressed Vintage Print",
    price: 34.99,
    originalPrice: 44.99,
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    colors: ["Gray", "Black"],
    sizes: ["M", "L", "XL"],
    category: "Graphic",
    isNew: true,
    isBestseller: false,
    discount: 15,
  },
  {
    id: 4,
    name: "Retro Band Tee",
    price: 32.99,
    originalPrice: 39.99,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    colors: ["Black", "Red"],
    sizes: ["S", "M", "L"],
    category: "Band",
    isNew: true,
    isBestseller: false,
    discount: 18,
  },
  {
    id: 5,
    name: "Minimalist Logo Tee",
    price: 27.99,
    originalPrice: 34.99,
    image:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    colors: ["White", "Black", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    category: "Logo",
    isNew: false,
    isBestseller: true,
    discount: 20,
  },
  {
    id: 6,
    name: "Vintage Wash Tee",
    price: 29.99,
    originalPrice: 36.99,
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    colors: ["Blue", "Green"],
    sizes: ["S", "M", "L"],
    category: "Basic",
    isNew: false,
    isBestseller: false,
    discount: 15,
  },
  {
    id: 7,
    name: "Artistic Print Tee",
    price: 36.99,
    originalPrice: 44.99,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    colors: ["White", "Black"],
    sizes: ["S", "M", "L", "XL"],
    category: "Artistic",
    isNew: true,
    isBestseller: false,
    discount: 18,
  },
  {
    id: 8,
    name: "Faded Vintage Logo",
    price: 28.99,
    originalPrice: 35.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    colors: ["Gray", "Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    category: "Logo",
    isNew: false,
    isBestseller: true,
    discount: 20,
  },
  {
    id: 9,
    name: "Typographic Design Tee",
    price: 31.99,
    originalPrice: 39.99,
    image:
      "https://images.unsplash.com/photo-1622445275576-721325763afe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    colors: ["Black", "White"],
    sizes: ["S", "M", "L"],
    category: "Typography",
    isNew: true,
    isBestseller: false,
    discount: 20,
  },
]

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-vintage-paper dark:bg-vintage-paper-dark text-vintage-ink dark:text-vintage-ink-light font-serif transition-colors duration-300">
      <MainHeader />

      {/* Breadcrumb */}
      <div className="bg-vintage-ink/5 dark:bg-vintage-ink-light/5 py-3 border-b border-vintage-ink/10 dark:border-vintage-ink-light/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="hover:text-vintage-ink/70 dark:hover:text-vintage-ink-light/70 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-vintage-ink/50 dark:text-vintage-ink-light/50" />
            <span className="font-medium">Collection</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Collection Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-3 vintage-heading">T-Shirt Collection</h1>
          <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80 max-w-3xl">
            Browse our handcrafted t-shirts, each printed with care in our workshop. From vintage graphics to minimalist
            designs, find the perfect style to express yourself.
          </p>
        </div>

        {/* Mobile Filters Toggle */}
        <div className="md:hidden mb-6">
          <MobileFilters />
        </div>

        {/* Collection Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <CollectionFilters />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and Filter Controls */}
            <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
              <div className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">
                Showing{" "}
                <span className="font-medium text-vintage-ink dark:text-vintage-ink-light">{products.length}</span>{" "}
                products
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <select className="appearance-none bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 rounded-md py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light">
                    <option>Featured</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Best Selling</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 rotate-90 pointer-events-none" />
                </div>

                <div className="hidden md:flex items-center gap-2">
                  <button className="p-2 rounded-md bg-vintage-ink/10 dark:bg-vintage-ink-light/10">
                    <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                      <div className="bg-vintage-ink dark:bg-vintage-ink-light"></div>
                      <div className="bg-vintage-ink dark:bg-vintage-ink-light"></div>
                      <div className="bg-vintage-ink dark:bg-vintage-ink-light"></div>
                      <div className="bg-vintage-ink dark:bg-vintage-ink-light"></div>
                    </div>
                  </button>
                  <button className="p-2 rounded-md">
                    <div className="w-5 h-5 flex flex-col gap-0.5">
                      <div className="h-1.5 bg-vintage-ink/70 dark:bg-vintage-ink-light/70"></div>
                      <div className="h-1.5 bg-vintage-ink/70 dark:bg-vintage-ink-light/70"></div>
                      <div className="h-1.5 bg-vintage-ink/70 dark:bg-vintage-ink-light/70"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-vintage-ink/10 dark:bg-vintage-ink-light/10 rounded-full text-sm">
                <span>Size: M</span>
                <button className="text-vintage-ink/70 dark:text-vintage-ink-light/70 hover:text-vintage-ink dark:hover:text-vintage-ink-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-vintage-ink/10 dark:bg-vintage-ink-light/10 rounded-full text-sm">
                <span>Color: Black</span>
                <button className="text-vintage-ink/70 dark:text-vintage-ink-light/70 hover:text-vintage-ink dark:hover:text-vintage-ink-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-vintage-ink/10 dark:bg-vintage-ink-light/10 rounded-full text-sm">
                <span>Category: Graphic</span>
                <button className="text-vintage-ink/70 dark:text-vintage-ink-light/70 hover:text-vintage-ink dark:hover:text-vintage-ink-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <button className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70 hover:text-vintage-ink dark:hover:text-vintage-ink-light underline">
                Clear all
              </button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="group animate-fade-in">
                  <div className="vintage-frame p-3 mb-4 bg-vintage-paper dark:bg-vintage-paper-dark relative overflow-hidden group-hover:shadow-lg transition-all duration-300 dark:border-vintage-ink-light/30">
                    <div className="relative h-[300px] w-full overflow-hidden">
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
                      <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-2 bg-vintage-paper dark:bg-vintage-paper-dark rounded-full hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 transition-colors">
                          <Heart className="h-5 w-5" />
                        </button>
                        <button className="p-2 bg-vintage-paper dark:bg-vintage-paper-dark rounded-full hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 transition-colors">
                          <Eye className="h-5 w-5" />
                        </button>
                      </div>

                      {/* Quick add to cart */}
                      <div className="absolute bottom-0 left-0 right-0 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <button className="flex items-center justify-center gap-2 w-full">
                          <ShoppingBag className="h-4 w-4" />
                          <span className="text-sm font-medium">Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-bold">${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-vintage-ink/60 dark:text-vintage-ink-light/60 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-1">
                        {product.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-3 h-3 rounded-full border border-vintage-ink/30 dark:border-vintage-ink-light/30"
                            style={{
                              backgroundColor:
                                color === "Black"
                                  ? "#333"
                                  : color === "White"
                                    ? "#fff"
                                    : color === "Gray"
                                      ? "#888"
                                      : color === "Navy"
                                        ? "#234"
                                        : color === "Red"
                                          ? "#c33"
                                          : color === "Blue"
                                            ? "#36c"
                                            : color === "Green"
                                              ? "#383"
                                              : "#ddd",
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className="inline-block px-2 py-1 text-xs border border-vintage-ink/30 dark:border-vintage-ink-light/30 text-vintage-ink/70 dark:text-vintage-ink-light/70"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center border border-vintage-ink/30 dark:border-vintage-ink-light/30 rounded-md hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5">
                  <ChevronRight className="h-5 w-5 rotate-180" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-vintage-ink/30 dark:border-vintage-ink-light/30 rounded-md bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark">
                  1
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-vintage-ink/30 dark:border-vintage-ink-light/30 rounded-md hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5">
                  2
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-vintage-ink/30 dark:border-vintage-ink-light/30 rounded-md hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5">
                  3
                </button>
                <span className="px-2">...</span>
                <button className="w-10 h-10 flex items-center justify-center border border-vintage-ink/30 dark:border-vintage-ink-light/30 rounded-md hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5">
                  8
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-vintage-ink/30 dark:border-vintage-ink-light/30 rounded-md hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MainFooter />
      <BottomNavigation />
    </div>
  )
}

