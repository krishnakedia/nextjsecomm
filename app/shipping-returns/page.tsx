import Link from "next/link"
import { ChevronRight } from "lucide-react"
import MainHeader from "@/components/main-header"
import MainFooter from "@/components/main-footer"
import BottomNavigation from "@/components/bottom-navigation"

export default function ShippingReturnsPage() {
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
            <span className="font-medium">Shipping & Returns</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 vintage-heading text-center">Shipping & Returns</h1>

          <div className="vintage-frame p-8 dark:border-vintage-ink-light/30 mb-10">
            <h2 className="text-2xl font-bold mb-6 vintage-heading">Shipping Information</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Shipping Methods</h3>
                <p className="mb-4">We offer the following shipping options for all domestic orders:</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-vintage-ink/20 dark:border-vintage-ink-light/20">
                        <th className="py-3 px-4 text-left">Shipping Method</th>
                        <th className="py-3 px-4 text-left">Estimated Delivery</th>
                        <th className="py-3 px-4 text-left">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-vintage-ink/10 dark:border-vintage-ink-light/10">
                        <td className="py-3 px-4">Standard Shipping</td>
                        <td className="py-3 px-4">5-7 business days</td>
                        <td className="py-3 px-4">$5.99 (Free on orders over $50)</td>
                      </tr>
                      <tr className="border-b border-vintage-ink/10 dark:border-vintage-ink-light/10">
                        <td className="py-3 px-4">Express Shipping</td>
                        <td className="py-3 px-4">2-3 business days</td>
                        <td className="py-3 px-4">$12.99</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Next Day Delivery</td>
                        <td className="py-3 px-4">1 business day</td>
                        <td className="py-3 px-4">$19.99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">International Shipping</h3>
                <p>
                  We ship to select international destinations. International shipping rates and delivery times vary by
                  location. Customs fees and import duties may apply and are the responsibility of the recipient.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Order Processing</h3>
                <p>
                  Orders are typically processed within 1-2 business days. You will receive a shipping confirmation
                  email with tracking information once your order has been shipped.
                </p>
              </div>
            </div>
          </div>

          <div className="vintage-frame p-8 dark:border-vintage-ink-light/30 mb-10">
            <h2 className="text-2xl font-bold mb-6 vintage-heading">Cancellation Policy</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Order Cancellation</h3>
                <p>
                  You can cancel your order within 24 hours of placing it. To cancel, please contact our customer
                  service team via phone or Instagram handle.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2. Cancellation Fee</h3>
                <p>No cancellation fee will be charged if the order is cancelled within 24 hours.</p>
              </div>
            </div>
          </div>

          <div className="vintage-frame p-8 dark:border-vintage-ink-light/30 mb-10">
            <h2 className="text-2xl font-bold mb-6 vintage-heading">Refund Policy</h2>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 p-4 mb-6">
              <p className="font-medium">
                Note: Make a video while opening the package or else no refund will be processed.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Eligibility</h3>
                <p>Refunds will be processed for damaged, defective, or incorrectly shipped items.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2. Refund Process</h3>
                <p>
                  To initiate a refund, please contact our customer service team within 7 days of delivery. Provide a
                  detailed description of the issue and photos of the damaged or defective item.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">3. Refund Timeline</h3>
                <p>Refunds will be processed within 5-7 business days of receiving the returned item.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">4. Refund Method</h3>
                <p>Refunds will be issued through the original payment method.</p>
              </div>
            </div>
          </div>

          <div className="vintage-frame p-8 dark:border-vintage-ink-light/30">
            <h2 className="text-2xl font-bold mb-6 vintage-heading">Return Process</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Initiate a Return</h3>
                <p>
                  Contact our customer service team within 7 days of receiving your order to initiate the return
                  process.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2. Return Authorization</h3>
                <p>You will receive a Return Authorization (RA) number and return instructions via email.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">3. Package Your Return</h3>
                <p>
                  Pack the item(s) securely in the original packaging if possible. Include the RA number with your
                  return.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">4. Shipping Your Return</h3>
                <p>
                  Ship the package to the address provided in the return instructions. We recommend using a trackable
                  shipping method.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">5. Refund Processing</h3>
                <p>Once we receive and inspect your return, we will process your refund within 5-7 business days.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="mb-4">
              If you have any questions about our shipping or return policies, please don't hesitate to contact us.
            </p>
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

