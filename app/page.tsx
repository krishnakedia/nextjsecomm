import Link from "next/link"
import MainHeader from "@/components/main-header"
import MainFooter from "@/components/main-footer"
import BottomNavigation from "@/components/bottom-navigation"
import ProductHoverEffect from "@/components/product-hover-effect"
import CategoryTabs from "@/components/category-tabs"
import HeroSlider from "@/components/hero-slider"
import RoundCategories from "@/components/round-categories"
import ProductScroll from "@/components/product-scroll"

export default function Home() {
  return (
    <div className="min-h-screen bg-vintage-paper dark:bg-vintage-paper-dark text-vintage-ink dark:text-vintage-ink-light font-serif transition-colors duration-300">
      <MainHeader />

      {/* Category Tabs - MEN/WOMEN/KIDS */}
      <CategoryTabs />

      {/* Full-width Hero Slider */}
      <HeroSlider />

      {/* Round Categories */}
      <RoundCategories />

      {/* Horizontal Product Scroll */}
      <ProductScroll />

      {/* Featured Collection */}
      <section className="py-16 md:py-24 bg-vintage-ink/5 dark:bg-vintage-ink-light/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center vintage-heading">
            Featured Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                image:
                  "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
                title: "Vintage Graphic Tee",
                description: "Premium cotton with retro design",
                price: "$29.99",
                originalPrice: "$39.99",
                isNew: true,
                discount: 25,
              },
              {
                id: 2,
                image:
                  "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
                title: "Classic White Tee",
                description: "Timeless essential for every wardrobe",
                price: "$24.99",
                originalPrice: "$29.99",
                isNew: false,
                discount: 15,
              },
              {
                id: 3,
                image:
                  "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
                title: "Distressed Vintage Print",
                description: "Aged to perfection with classic design",
                price: "$34.99",
                originalPrice: "$44.99",
                isNew: true,
                discount: 20,
              },
            ].map((item) => (
              <div key={item.id} className="group">
                <div className="vintage-frame p-3 mb-4 bg-vintage-paper dark:bg-vintage-paper-dark relative overflow-hidden group-hover:shadow-lg transition-all duration-300 dark:border-vintage-ink-light/30">
                  <div className="relative h-[300px] w-full overflow-hidden">
                    <ProductHoverEffect
                      staticImage={item.image}
                      productName={item.title}
                      className="h-full w-full"
                      width={600}
                      height={800}
                    />

                    {/* NEW Badge - Top Left */}
                    {item.isNew && (
                      <div className="absolute top-2 left-2 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark px-2 py-1 text-xs font-bold z-10">
                        NEW
                      </div>
                    )}

                    {/* Discount Badge - Top Right */}
                    {item.discount > 0 && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-bold z-10">
                        {item.discount}% OFF
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80 mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-vintage-ink/60 dark:text-vintage-ink-light/60 line-through">
                        {item.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="px-4 py-2 border border-vintage-ink dark:border-vintage-ink-light hover:bg-vintage-ink hover:text-vintage-paper dark:hover:bg-vintage-ink-light dark:hover:text-vintage-paper-dark transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/collection"
              className="inline-block px-8 py-3 border-2 border-vintage-ink dark:border-vintage-ink-light bg-vintage-ink/5 dark:bg-vintage-ink-light/5 hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 transition-colors text-lg font-medium"
            >
              View All Designs
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 vintage-heading">Join Our Vintage Club</h2>
            <p className="text-lg mb-8 dark:text-vintage-ink-light/90">
              Subscribe to receive updates on new collections and exclusive offers
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:border-vintage-ink dark:focus:border-vintage-ink-light focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <MainFooter />
      <BottomNavigation />
    </div>
  )
}

