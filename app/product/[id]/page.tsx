import Link from "next/link"
import { ChevronRight, Minus, Plus, Heart, Share2, Star, Truck, RotateCcw, ShieldCheck } from "lucide-react"
import MainHeader from "@/components/main-header"
import MainFooter from "@/components/main-footer"
import BottomNavigation from "@/components/bottom-navigation"
import ProductTabs from "./product-tabs"
import RelatedProducts from "./related-products"
import ProductHoverEffect from "@/components/product-hover-effect"

// Sample product data
const product = {
  id: "vintage-graphic-tee",
  name: "Vintage Graphic Tee",
  price: 29.99,
  originalPrice: 39.99,
  rating: 4.8,
  reviewCount: 124,
  description:
    "A premium cotton t-shirt featuring a distressed vintage graphic print. This comfortable, relaxed-fit tee is perfect for casual everyday wear and pairs well with jeans or shorts. The unique design is inspired by classic Americana and printed using eco-friendly inks.",
  features: [
    "100% organic cotton",
    "Pre-shrunk fabric",
    "Relaxed fit",
    "Screen printed design",
    "Ribbed crew neck",
    "Eco-friendly water-based inks",
    "Machine washable",
  ],
  colors: [
    { name: "Vintage Black", value: "#333333", isAvailable: true },
    { name: "Faded Navy", value: "#34495e", isAvailable: true },
    { name: "Washed Red", value: "#c0392b", isAvailable: true },
    { name: "Distressed Green", value: "#27ae60", isAvailable: false },
  ],
  sizes: [
    { name: "S", isAvailable: true },
    { name: "M", isAvailable: true },
    { name: "L", isAvailable: true },
    { name: "XL", isAvailable: true },
    { name: "2XL", isAvailable: false },
  ],
  images: [
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=1200&q=80",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=1200&q=80",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=1200&q=80",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=1200&q=80",
  ],
  inStock: true,
  sku: "VGT-001",
  category: "Graphic Tees",
  tags: ["vintage", "graphic", "cotton", "unisex"],
}

export default function ProductPage() {
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
            <Link
              href="/collection"
              className="hover:text-vintage-ink/70 dark:hover:text-vintage-ink-light/70 transition-colors"
            >
              Collection
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-vintage-ink/50 dark:text-vintage-ink-light/50" />
            <span className="font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Product Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="lg:w-1/2">
              <ProductGallery images={product.images} />
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2">
              {/* Product Title and Price */}
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-2 vintage-heading">{product.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-vintage-ink/60 dark:text-vintage-ink-light/60 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-sm font-medium">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              {/* Product Description */}
              <div className="mb-6">
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Product Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Features</h3>
                <ul className="list-disc list-inside space-y-1 text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      disabled={!color.isAvailable}
                      className={`relative w-10 h-10 rounded-full border-2 ${
                        index === 0
                          ? "border-vintage-ink dark:border-vintage-ink-light"
                          : "border-transparent hover:border-vintage-ink/50 dark:hover:border-vintage-ink-light/50"
                      } ${!color.isAvailable ? "opacity-40 cursor-not-allowed" : ""}`}
                      title={color.name}
                    >
                      <span className="absolute inset-1 rounded-full" style={{ backgroundColor: color.value }}></span>
                      {index === 0 && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-vintage-ink dark:bg-vintage-ink-light rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-vintage-paper dark:bg-vintage-paper-dark rounded-full"></span>
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">Size</h3>
                  <button className="text-sm underline">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size, index) => (
                    <button
                      key={index}
                      disabled={!size.isAvailable}
                      className={`w-12 h-12 flex items-center justify-center border ${
                        index === 1
                          ? "border-vintage-ink dark:border-vintage-ink-light bg-vintage-ink/5 dark:bg-vintage-ink-light/5"
                          : "border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5"
                      } ${!size.isAvailable ? "opacity-40 cursor-not-allowed line-through" : ""}`}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
                {product.sizes.some((size) => !size.isAvailable) && (
                  <p className="text-sm text-vintage-ink/60 dark:text-vintage-ink-light/60 mt-2">
                    Crossed out sizes are currently out of stock
                  </p>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                <div className="flex items-center">
                  <button className="w-10 h-10 flex items-center justify-center border border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5">
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value="1"
                    readOnly
                    className="w-16 h-10 border-t border-b border-vintage-ink/30 dark:border-vintage-ink-light/30 text-center bg-vintage-paper dark:bg-vintage-paper-dark"
                  />
                  <button className="w-10 h-10 flex items-center justify-center border border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 mb-8">
                <button className="w-full py-3 border-2 border-vintage-ink dark:border-vintage-ink-light bg-vintage-ink/5 dark:bg-vintage-ink-light/5 hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 transition-colors text-lg font-medium">
                  Customize Now
                </button>
                <button className="w-full py-3 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90 transition-colors text-lg font-medium">
                  Add to Cart
                </button>
                <div className="flex gap-3">
                  <button className="flex-1 py-2 border border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5 transition-colors flex items-center justify-center gap-2">
                    <Heart className="h-5 w-5" />
                    <span>Wishlist</span>
                  </button>
                  <button className="flex-1 py-2 border border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5 transition-colors flex items-center justify-center gap-2">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Product Meta */}
              <div className="space-y-2 text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70 border-t border-vintage-ink/20 dark:border-vintage-ink-light/20 pt-6">
                <p>
                  <span className="font-medium">SKU:</span> {product.sku}
                </p>
                <p>
                  <span className="font-medium">Category:</span> {product.category}
                </p>
                <p>
                  <span className="font-medium">Tags:</span>{" "}
                  {product.tags.map((tag, i) => (
                    <span key={i}>
                      <Link href={`/collection?tag=${tag}`} className="hover:underline">
                        {tag}
                      </Link>
                      {i < product.tags.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </div>

              {/* Shipping Info */}
              <div className="mt-6 pt-6 border-t border-vintage-ink/20 dark:border-vintage-ink-light/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-vintage-ink/70 dark:text-vintage-ink-light/70" />
                    <div>
                      <p className="font-medium">Free Shipping</p>
                      <p className="text-xs text-vintage-ink/60 dark:text-vintage-ink-light/60">On orders over $50</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <RotateCcw className="h-5 w-5 text-vintage-ink/70 dark:text-vintage-ink-light/70" />
                    <div>
                      <p className="font-medium">Easy Returns</p>
                      <p className="text-xs text-vintage-ink/60 dark:text-vintage-ink-light/60">30 day return policy</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-vintage-ink/70 dark:text-vintage-ink-light/70" />
                    <div>
                      <p className="font-medium">Secure Checkout</p>
                      <p className="text-xs text-vintage-ink/60 dark:text-vintage-ink-light/60">
                        SSL encrypted payment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-12 md:mt-16">
            <ProductTabs />
          </div>

          {/* Related Products */}
          <div className="mt-12 md:mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 vintage-heading text-center">You May Also Like</h2>
            <RelatedProducts />
          </div>
        </div>
      </div>

      <MainFooter />
      <BottomNavigation />
    </div>
  )
}

// Product Gallery Component
function ProductGallery({ images }: { images: string[] }) {
  return (
    <div>
      {/* Main Image */}
      <div className="vintage-frame p-4 mb-4 dark:border-vintage-ink-light/30">
        <div className="relative h-[500px] w-full overflow-hidden">
          <ProductHoverEffect
            staticImage={images[0]}
            productName="Product Image"
            className="h-full w-full"
            width={1000}
            height={1200}
          />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            className={`vintage-frame p-2 dark:border-vintage-ink-light/30 ${index === 0 ? "ring-2 ring-vintage-ink dark:ring-vintage-ink-light" : ""}`}
          >
            <div className="relative h-24 w-full overflow-hidden">
              <ProductHoverEffect
                staticImage={image}
                productName={`Product thumbnail ${index + 1}`}
                className="h-full w-full"
                width={200}
                height={200}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

