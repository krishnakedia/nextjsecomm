import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import MainHeader from "@/components/main-header"
import MainFooter from "@/components/main-footer"
import BottomNavigation from "@/components/bottom-navigation"

export default function SizeGuidePage() {
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
            <span className="font-medium">Size Guide</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 vintage-heading text-center">Size Guide</h1>

          <div className="vintage-frame p-8 dark:border-vintage-ink-light/30 mb-10">
            <h2 className="text-2xl font-bold mb-6 vintage-heading">How to Measure</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-6">
                  To find your perfect fit, follow these simple measuring guidelines. Use a soft measuring tape and
                  measure directly against your body wearing only lightweight clothes.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Chest</h3>
                    <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                      Measure around the fullest part of your chest, keeping the measuring tape horizontal.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Shoulders</h3>
                    <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                      Measure from the edge of one shoulder to the other, across the back.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Length</h3>
                    <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                      Measure from the highest point of the shoulder to the bottom hem.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Sleeve</h3>
                    <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                      Measure from the shoulder seam to the end of the sleeve.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-[300px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                  alt="Measurement Guide"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="vintage-frame p-8 dark:border-vintage-ink-light/30 mb-10">
            <h2 className="text-2xl font-bold mb-6 vintage-heading">Size Chart</h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Unisex T-Shirts (Inches)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-vintage-ink/20 dark:border-vintage-ink-light/20">
                      <th className="py-3 px-4 text-left">Size</th>
                      <th className="py-3 px-4 text-left">Chest</th>
                      <th className="py-3 px-4 text-left">Length</th>
                      <th className="py-3 px-4 text-left">Sleeve</th>
                      <th className="py-3 px-4 text-left">Shoulders</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-vintage-ink/10 dark:border-vintage-ink-light/10">
                      <td className="py-3 px-4">XS</td>
                      <td className="py-3 px-4">34-36</td>
                      <td className="py-3 px-4">26</td>
                      <td className="py-3 px-4">7.5</td>
                      <td className="py-3 px-4">16</td>
                    </tr>
                    <tr className="border-b border-vintage-ink/10 dark:border-vintage-ink-light/10">
                      <td className="py-3 px-4">S</td>
                      <td className="py-3 px-4">36-38</td>
                      <td className="py-3 px-4">27</td>
                      <td className="py-3 px-4">8</td>
                      <td className="py-3 px-4">17</td>
                    </tr>
                    <tr className="border-b border-vintage-ink/10 dark:border-vintage-ink-light/10">
                      <td className="py-3 px-4">M</td>
                      <td className="py-3 px-4">39-41</td>
                      <td className="py-3 px-4">28</td>
                      <td className="py-3 px-4">8.5</td>
                      <td className="py-3 px-4">18</td>
                    </tr>
                    <tr className="border-b border-vintage-ink/10 dark:border-vintage-ink-light/10">
                      <td className="py-3 px-4">L</td>
                      <td className="py-3 px-4">42-44</td>
                      <td className="py-3 px-4">29</td>
                      <td className="py-3 px-4">9</td>
                      <td className="py-3 px-4">19</td>
                    </tr>
                    <tr className="border-b border-vintage-ink/10 dark:border-vintage-ink-light/10">
                      <td className="py-3 px-4">XL</td>
                      <td className="py-3 px-4">45-47</td>
                      <td className="py-3 px-4">30</td>
                      <td className="py-3 px-4">9.5</td>
                      <td className="py-3 px-4">20</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">2XL</td>
                      <td className="py-3 px-4">48-50</td>
                      <td className="py-3 px-4">31</td>
                      <td className="py-3 px-4">10</td>
                      <td className="py-3 px-4">21</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Unisex T-Shirts (Centimeters)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-vintage-ink/20 dark:border-vintage-ink-light/20">
                      <th className="py-3 px-4 text-left">Size</th>
                      <th className="py-3 px-4 text-left">Chest</th>
                      <th className="py-3 px-4 text-left">Length</th>
                      <th className="py-3 px-4 text-left">Sleeve</th>
                      <th className="py-3 px-4 text-left">Shoulders</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-vintage-ink/10 dark:border-vintage-ink-light/10">
                      <td className="py-3 px-4">XS</td>
                      <td className="py-3 px-4">86-91</td>
                      <td className="py-3 px-4">66</td>
                      <td className="py-3 px-4">19</td>
                      <td className="py-3 px-4">41</td>
                    </tr>
                    <tr className="border-b border-vintage-ink/10 dark:border-vintage-ink-light/10">
                      <td className="py-3 px-4">S</td>
                      <td className="py-3 px-4">91-97</td>
                      <td className="py-3 px-4">69</td>
                      <td className="py-3 px-4">20</td>
                      <td className="py-3 px-4">43</td>
                    </tr>
                    <tr className="border-b border-vintage-ink/10 dark:border-vintage-ink-light/10">
                      <td className="py-3 px-4">M</td>
                      <td className="py-3 px-4">99-104</td>
                      <td className="py-3 px-4">71</td>
                      <td className="py-3 px-4">22</td>
                      <td className="py-3 px-4">46</td>
                    </tr>
                    <tr className="border-b border-vintage-ink/10 dark:border-vintage-ink-light/10">
                      <td className="py-3 px-4">L</td>
                      <td className="py-3 px-4">107-112</td>
                      <td className="py-3 px-4">74</td>
                      <td className="py-3 px-4">23</td>
                      <td className="py-3 px-4">48</td>
                    </tr>
                    <tr className="border-b border-vintage-ink/10 dark:border-vintage-ink-light/10">
                      <td className="py-3 px-4">XL</td>
                      <td className="py-3 px-4">114-119</td>
                      <td className="py-3 px-4">76</td>
                      <td className="py-3 px-4">24</td>
                      <td className="py-3 px-4">51</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">2XL</td>
                      <td className="py-3 px-4">122-127</td>
                      <td className="py-3 px-4">79</td>
                      <td className="py-3 px-4">25</td>
                      <td className="py-3 px-4">53</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="vintage-frame p-8 dark:border-vintage-ink-light/30 mb-10">
            <h2 className="text-2xl font-bold mb-6 vintage-heading">Fit Guide</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Regular Fit</h3>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  Our standard fit is neither too tight nor too loose. It's designed to be comfortable for everyday wear
                  while maintaining a classic silhouette.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Relaxed Fit</h3>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  Our relaxed fit offers a looser, more casual style with extra room through the chest and waist for
                  maximum comfort.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Slim Fit</h3>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  Our slim fit is tailored closer to the body for a more modern, streamlined look. If you prefer a
                  looser fit, we recommend sizing up.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Vintage Fit</h3>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  Our vintage fit is inspired by classic t-shirts from the past. It features a slightly boxy cut with a
                  shorter length and wider sleeves.
                </p>
              </div>
            </div>
          </div>

          <div className="vintage-frame p-8 dark:border-vintage-ink-light/30">
            <h2 className="text-2xl font-bold mb-6 vintage-heading">Sizing Tips</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Between Sizes?</h3>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  If you're between sizes, we recommend sizing up for a more comfortable fit. Our t-shirts are
                  pre-shrunk, but may still shrink slightly after washing.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Preferred Fit</h3>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  For a more fitted look, consider sizing down. For a looser, more relaxed fit, consider sizing up.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Material Considerations</h3>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  Our 100% cotton t-shirts may shrink slightly after the first wash. Our cotton blends are more
                  resistant to shrinking and maintain their shape better over time.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="mb-4">Still unsure about your size? Our customer service team is happy to help!</p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 border border-vintage-ink dark:border-vintage-ink-light hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <MainFooter />
      <BottomNavigation />
    </div>
  )
}

