import Link from "next/link"
import Image from "next/image"
import MainHeader from "@/components/main-header"
import MainFooter from "@/components/main-footer"
import BottomNavigation from "@/components/bottom-navigation"
import ProductHoverEffect from "@/components/product-hover-effect"

export default function HomeNew() {
  return (
    <div className="min-h-screen bg-vintage-paper dark:bg-vintage-paper-dark text-vintage-ink dark:text-vintage-ink-light font-serif transition-colors duration-300">
      <MainHeader />

      {/* User Profiles Section - Mobile Only */}
      <div className="md:hidden overflow-x-auto hide-scrollbar px-4 py-3 bg-vintage-ink/5 dark:bg-vintage-ink-light/5">
        <div className="flex space-x-4 min-w-max">
          {["New Arrivals", "Bestsellers", "Vintage", "Graphic", "Limited", "Sale"].map((category) => (
            <Link
              href={`/collection?category=${category.toLowerCase()}`}
              key={category}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/20 dark:border-vintage-ink-light/20 flex items-center justify-center mb-1">
                <span className="text-xs">{category.charAt(0)}</span>
              </div>
              <span className="text-xs">{category}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Hero Banners */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="relative h-[200px] md:h-[300px] col-span-1 md:col-span-2 lg:col-span-2 vintage-frame overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
            alt="Featured Collection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vintage-ink/70 to-transparent dark:from-vintage-paper-dark/70"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-vintage-paper dark:text-vintage-ink-light">
            <div className="flex flex-col items-start">
              <span className="bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark px-2 py-1 text-sm mb-2">
                FEATURED COLLECTION
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 vintage-heading">VINTAGE CLASSICS</h2>
              <p className="mb-3 text-sm md:text-base">Timeless designs from the golden era</p>
              <Link
                href="/collection"
                className="bg-vintage-paper dark:bg-vintage-paper-dark text-vintage-ink dark:text-vintage-ink-light px-4 py-2 hover:bg-vintage-paper/90 dark:hover:bg-vintage-paper-dark/90 transition-colors"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>

        <div className="relative h-[200px] md:h-[300px] vintage-frame overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
            alt="Limited Edition"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vintage-ink/70 to-transparent dark:from-vintage-paper-dark/70"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-vintage-paper dark:text-vintage-ink-light">
            <div className="flex flex-col items-start">
              <span className="bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark px-2 py-1 text-sm mb-2">
                NEW ARRIVAL
              </span>
              <h2 className="text-xl font-bold mb-2 vintage-heading">SUMMER ESSENTIALS</h2>
              <Link
                href="/collection?category=summer"
                className="bg-vintage-paper dark:bg-vintage-paper-dark text-vintage-ink dark:text-vintage-ink-light px-3 py-1 text-sm hover:bg-vintage-paper/90 dark:hover:bg-vintage-paper-dark/90 transition-colors"
              >
                EXPLORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="my-6 px-4">
        <div className="relative vintage-frame p-4 bg-vintage-ink/10 dark:bg-vintage-ink-light/10 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold vintage-heading">GET EXTRA 15% OFF</h2>
            <p className="text-sm md:text-base">On orders above $50</p>
          </div>
          <div className="flex-1 text-center">
            <div className="inline-block bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark px-4 py-2 font-bold text-lg md:text-xl">
              VINTAGE15
            </div>
          </div>
          <div className="hidden md:block flex-1 text-right">
            <Image src="/vintage-logo.png" alt="Logo" width={80} height={80} />
          </div>
        </div>
      </section>

      {/* Shop By Category */}
      <section className="px-4 py-6">
        <h2 className="text-2xl font-bold mb-6 text-center vintage-heading">SHOP BY CATEGORY</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/collection?category=men" className="group">
            <div className="vintage-frame p-2 overflow-hidden">
              <div className="relative h-[180px] md:h-[220px] overflow-hidden">
                <ProductHoverEffect
                  staticImage="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                  productName="Men's Collection"
                  className="h-full w-full"
                  width={600}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vintage-ink/60 to-transparent dark:from-vintage-paper-dark/60 group-hover:from-vintage-ink/70 dark:group-hover:from-vintage-paper-dark/70 transition-all"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-vintage-paper dark:text-vintage-ink-light">
                  <h3 className="text-lg font-bold">MEN</h3>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/collection?category=women" className="group">
            <div className="vintage-frame p-2 overflow-hidden">
              <div className="relative h-[180px] md:h-[220px] overflow-hidden">
                <ProductHoverEffect
                  staticImage="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                  productName="Women's Collection"
                  className="h-full w-full"
                  width={600}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vintage-ink/60 to-transparent dark:from-vintage-paper-dark/60 group-hover:from-vintage-ink/70 dark:group-hover:from-vintage-paper-dark/70 transition-all"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-vintage-paper dark:text-vintage-ink-light">
                  <h3 className="text-lg font-bold">WOMEN</h3>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/collection?category=graphic" className="group">
            <div className="vintage-frame p-2 overflow-hidden">
              <div className="relative h-[180px] md:h-[220px] overflow-hidden">
                <ProductHoverEffect
                  staticImage="https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                  productName="Graphic Tees"
                  className="h-full w-full"
                  width={600}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vintage-ink/60 to-transparent dark:from-vintage-paper-dark/60 group-hover:from-vintage-ink/70 dark:group-hover:from-vintage-paper-dark/70 transition-all"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-vintage-paper dark:text-vintage-ink-light">
                  <h3 className="text-lg font-bold">GRAPHIC</h3>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/collection?category=limited" className="group">
            <div className="vintage-frame p-2 overflow-hidden">
              <div className="relative h-[180px] md:h-[220px] overflow-hidden">
                <ProductHoverEffect
                  staticImage="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                  productName="Limited Edition"
                  className="h-full w-full"
                  width={600}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vintage-ink/60 to-transparent dark:from-vintage-paper-dark/60 group-hover:from-vintage-ink/70 dark:group-hover:from-vintage-paper-dark/70 transition-all"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-vintage-paper dark:text-vintage-ink-light">
                  <h3 className="text-lg font-bold">LIMITED</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-4 py-6 bg-vintage-ink/5 dark:bg-vintage-ink-light/5">
        <h2 className="text-2xl font-bold mb-6 text-center vintage-heading">TRENDING NOW</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            {
              id: 1,
              image:
                "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
              title: "Vintage Graphic Tee",
              price: "$29.99",
              salePrice: "$24.99",
              isNew: true,
            },
            {
              id: 2,
              image:
                "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
              title: "Classic White Tee",
              price: "$24.99",
              salePrice: null,
              isNew: false,
            },
            {
              id: 3,
              image:
                "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
              title: "Distressed Vintage Print",
              price: "$34.99",
              salePrice: "$29.99",
              isNew: false,
            },
            {
              id: 4,
              image:
                "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
              title: "Summer Vibes Tee",
              price: "$27.99",
              salePrice: null,
              isNew: true,
            },
          ].map((product) => (
            <div key={product.id} className="group">
              <div className="vintage-frame p-2 bg-vintage-paper dark:bg-vintage-paper-dark relative overflow-hidden">
                <div className="relative h-[180px] md:h-[220px] overflow-hidden">
                  <ProductHoverEffect
                    staticImage={product.image}
                    productName={product.title}
                    className="h-full w-full"
                    width={600}
                    height={800}
                  />

                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark text-xs px-2 py-1">
                      NEW
                    </div>
                  )}

                  {product.salePrice && (
                    <div className="absolute top-2 right-2 bg-[#9b2c2c] text-white text-xs px-2 py-1">SALE</div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-vintage-paper/80 dark:bg-vintage-paper-dark/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full py-1 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark text-sm">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <h3 className="text-sm font-medium">{product.title}</h3>
                <div className="flex items-center mt-1">
                  {product.salePrice ? (
                    <>
                      <span className="text-[#9b2c2c] font-bold mr-2">{product.salePrice}</span>
                      <span className="text-vintage-ink/60 dark:text-vintage-ink-light/60 line-through text-sm">
                        {product.price}
                      </span>
                    </>
                  ) : (
                    <span className="font-bold">{product.price}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/collection"
            className="inline-block px-6 py-2 border-2 border-vintage-ink dark:border-vintage-ink-light bg-vintage-ink/5 dark:bg-vintage-ink-light/5 hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 transition-colors"
          >
            VIEW ALL
          </Link>
        </div>
      </section>

      {/* Deal of the Day */}
      <section className="px-4 py-8">
        <div className="vintage-frame p-4 md:p-6 bg-vintage-ink/5 dark:bg-vintage-ink-light/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <span className="inline-block bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark px-3 py-1 text-sm mb-3">
                DEAL OF THE DAY
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 vintage-heading">BUY 2 GET 1 FREE</h2>
              <p className="mb-4 text-vintage-ink/80 dark:text-vintage-ink-light/80">
                Limited time offer on our classic collection. Add 3 items to cart and the lowest priced item will be
                free.
              </p>
              <Link
                href="/collection?deal=buy2get1"
                className="inline-block px-6 py-2 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90 transition-colors"
              >
                SHOP NOW
              </Link>
            </div>
            <div className="relative h-[250px] md:h-[300px]">
              <ProductHoverEffect
                staticImage="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                productName="Deal of the Day"
                className="h-full w-full"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Style */}
      <section className="px-4 py-6">
        <h2 className="text-2xl font-bold mb-6 text-center vintage-heading">SHOP BY STYLE</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              name: "Graphic Tees",
              image:
                "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
            },
            {
              name: "Classic Fit",
              image:
                "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
            },
            {
              name: "Vintage Print",
              image:
                "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
            },
            {
              name: "Oversized",
              image:
                "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
            },
            {
              name: "Limited Edition",
              image:
                "https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
            },
            {
              name: "Retro",
              image:
                "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
            },
          ].map((style, index) => (
            <Link
              href={`/collection?style=${style.name.toLowerCase().replace(/\s+/g, "-")}`}
              key={index}
              className="group"
            >
              <div className="vintage-frame p-2 overflow-hidden">
                <div className="relative h-[120px] md:h-[150px] overflow-hidden">
                  <Image
                    src={style.image || "/placeholder.svg"}
                    alt={style.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-vintage-ink/40 dark:bg-vintage-paper-dark/40 flex items-center justify-center">
                    <h3 className="text-vintage-paper dark:text-vintage-ink-light text-lg font-bold">{style.name}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="px-4 py-8">
        <h2 className="text-2xl font-bold mb-2 text-center vintage-heading">FOLLOW US ON INSTAGRAM</h2>
        <p className="text-center mb-6 text-vintage-ink/70 dark:text-vintage-ink-light/70">@vintageteezspot</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((item) => (
            <Link href="https://instagram.com" target="_blank" key={item} className="group">
              <div className="relative h-[150px] md:h-[200px] vintage-frame p-1 overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-${1570000000000 + item * 1000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80`}
                  alt={`Instagram post ${item}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-vintage-ink/0 group-hover:bg-vintage-ink/30 dark:group-hover:bg-vintage-paper-dark/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-vintage-paper dark:text-vintage-ink-light text-2xl">♥</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-4 py-8 bg-vintage-ink/5 dark:bg-vintage-ink-light/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3 vintage-heading">JOIN OUR VINTAGE CLUB</h2>
          <p className="mb-6 text-vintage-ink/80 dark:text-vintage-ink-light/80">
            Subscribe to receive updates on new collections and exclusive offers
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      <MainFooter />
      <BottomNavigation />
    </div>
  )
}

