import Link from "next/link"
import MainHeader from "@/components/main-header"
import MainFooter from "@/components/main-footer"
import BottomNavigation from "@/components/bottom-navigation"
import ProductHoverEffect from "@/components/product-hover-effect"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-vintage-paper dark:bg-vintage-paper-dark text-vintage-ink dark:text-vintage-ink-light font-serif transition-colors duration-300">
      <MainHeader />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center vintage-heading">Our Story</h1>

          <div className="vintage-frame p-4 mb-8 dark:border-vintage-ink-light/30">
            <div className="relative h-[400px] w-full">
              <ProductHoverEffect
                staticImage="/about-image.png"
                productName="About Us"
                className="h-full w-full"
                width={1200}
                height={800}
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-p:text-vintage-ink/80 dark:prose-p:text-vintage-ink-light/80">
            <p className="lead text-xl">
              Founded in 2025, The Teez Spot began as a small workshop dedicated to reviving classic designs with a
              modern twist. Our journey started with a simple idea: to create t-shirts that tell stories and evoke
              nostalgia.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 vintage-heading">Our Philosophy</h2>
            <p>
              We believe that clothing is more than just fabric—it's a form of self-expression. Each t-shirt in our
              collection is crafted with meticulous attention to detail, using premium materials that stand the test of
              time—just like the designs that inspire us.
            </p>
            <p>
              Our passion for quality craftsmanship and timeless aesthetics drives everything we do, from the initial
              sketch to the final stitch. We draw inspiration from vintage advertisements, classic typography, and the
              rich visual language of bygone eras.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 vintage-heading">Sustainable Practices</h2>
            <p>
              We're committed to responsible manufacturing practices that minimize our environmental footprint. Our
              t-shirts are made from organic cotton, and we use eco-friendly water-based inks for all our prints.
            </p>
            <p>
              By producing in small batches, we ensure quality control while reducing waste. We believe that sustainable
              fashion doesn't have to compromise on style or quality—it's about making conscious choices at every step
              of the process.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 vintage-heading">Our Workshop</h2>
            <p>
              Located in a converted industrial space, our workshop is where creativity comes to life. Our team of
              designers and artisans work collaboratively to create unique pieces that blend vintage aesthetics with
              contemporary sensibilities.
            </p>
            <p>
              We invite you to visit our workshop and see the craftsmanship firsthand. Witness the printing process,
              meet the creative minds behind the designs, and experience the passion that goes into every garment.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 vintage-heading">Join Our Community</h2>
            <p>
              The Teez Spot is more than just a brand—it's a community of like-minded individuals who appreciate the art
              of slow fashion and timeless design. We regularly host events, workshops, and collaborations with local
              artists.
            </p>
            <p>
              Follow us on social media to stay updated on new releases, behind-the-scenes content, and community
              events. We love hearing from our customers and seeing how you style your vintage-inspired tees.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/collection"
              className="inline-block px-8 py-3 border-2 border-vintage-ink dark:border-vintage-ink-light bg-vintage-ink/5 dark:bg-vintage-ink-light/5 hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 transition-colors text-lg font-medium"
            >
              Explore Our Collection
            </Link>
          </div>
        </div>
      </div>

      <MainFooter />
      <BottomNavigation />
    </div>
  )
}

