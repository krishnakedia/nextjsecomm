import Link from "next/link"
import { ChevronRight } from "lucide-react"
import MainHeader from "@/components/main-header"
import MainFooter from "@/components/main-footer"
import BottomNavigation from "@/components/bottom-navigation"

export default function PrivacyPolicyPage() {
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
            <span className="font-medium">Privacy Policy</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 vintage-heading text-center">Privacy Policy</h1>

          <div className="vintage-frame p-8 dark:border-vintage-ink-light/30 mb-10">
            <div className="space-y-6">
              <div>
                <p className="mb-4">Last Updated: March 31, 2025</p>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  At The Teez Spot, we respect your privacy and are committed to protecting your personal data. This
                  privacy policy will inform you about how we look after your personal data when you visit our website
                  and tell you about your privacy rights and how the law protects you.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3 vintage-heading">1. Information We Collect</h2>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80 mb-3">
                  We collect several types of information from and about users of our website, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  <li>
                    Personal identifiers such as name, postal address, email address, telephone number, and payment
                    information.
                  </li>
                  <li>
                    Information about your internet connection, the equipment you use to access our website, and usage
                    details.
                  </li>
                  <li>
                    Transaction information, including products purchased, date and time of your transaction, amount of
                    purchase, and payment method.
                  </li>
                  <li>Your preferences and feedback about our products and services.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3 vintage-heading">2. How We Collect Your Information</h2>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80 mb-3">We collect information:</p>
                <ul className="list-disc list-inside space-y-2 text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  <li>
                    Directly from you when you provide it to us, such as when you create an account, make a purchase,
                    sign up for our newsletter, or contact our customer service.
                  </li>
                  <li>
                    Automatically as you navigate through our website, using cookies and other tracking technologies.
                  </li>
                  <li>From third parties, such as our business partners and service providers.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3 vintage-heading">3. How We Use Your Information</h2>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80 mb-3">
                  We use the information we collect about you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  <li>To present our website and its contents to you.</li>
                  <li>
                    To process and fulfill your orders, including to send you order confirmations and shipping updates.
                  </li>
                  <li>To provide you with information, products, or services that you request from us.</li>
                  <li>To notify you about changes to our website or any products or services we offer.</li>
                  <li>To improve our website, products, services, and customer communications.</li>
                  <li>
                    To personalize your website experience and to deliver content and product offerings relevant to your
                    interests.
                  </li>
                  <li>For any other purpose with your consent.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3 vintage-heading">4. Sharing Your Information</h2>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80 mb-3">
                  We may disclose personal information that we collect or you provide:
                </p>
                <ul className="list-disc list-inside space-y-2 text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  <li>To our subsidiaries and affiliates.</li>
                  <li>To contractors, service providers, and other third parties we use to support our business.</li>
                  <li>To fulfill the purpose for which you provide it.</li>
                  <li>For any other purpose disclosed by us when you provide the information.</li>
                  <li>With your consent.</li>
                  <li>To comply with any court order, law, or legal process.</li>
                  <li>To enforce our terms of service and other agreements.</li>
                  <li>
                    If we believe disclosure is necessary to protect the rights, property, or safety of The Teez Spot,
                    our customers, or others.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3 vintage-heading">5. Cookies and Tracking Technologies</h2>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  We use cookies and similar tracking technologies to track the activity on our website and store
                  certain information. Cookies are files with a small amount of data which may include an anonymous
                  unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is
                  being sent. However, if you do not accept cookies, you may not be able to use some portions of our
                  website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3 vintage-heading">6. Data Security</h2>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  We have implemented measures designed to secure your personal information from accidental loss and
                  from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored
                  on secure servers. Any payment transactions will be encrypted using SSL technology. However, the
                  transmission of information via the internet is not completely secure, and we cannot guarantee the
                  security of your personal information transmitted to our website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3 vintage-heading">7. Your Rights</h2>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80 mb-3">
                  Depending on your location, you may have certain rights regarding your personal information,
                  including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  <li>The right to access and receive a copy of your personal information.</li>
                  <li>The right to rectify or update your personal information.</li>
                  <li>The right to erase your personal information.</li>
                  <li>The right to restrict processing of your personal information.</li>
                  <li>The right to object to processing of your personal information.</li>
                  <li>The right to data portability.</li>
                  <li>The right to withdraw consent.</li>
                </ul>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80 mt-3">
                  To exercise any of these rights, please contact us using the information provided in the "Contact Us"
                  section below.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3 vintage-heading">8. Children's Privacy</h2>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  Our website is not intended for children under 16 years of age. We do not knowingly collect personal
                  information from children under 16. If you are a parent or guardian and you believe your child has
                  provided us with personal information, please contact us so that we can take necessary actions.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3 vintage-heading">9. Changes to Our Privacy Policy</h2>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  We may update our privacy policy from time to time. If we make material changes to how we treat our
                  users' personal information, we will notify you through a notice on the website home page. The date
                  the privacy policy was last revised is identified at the top of the page. You are responsible for
                  periodically visiting our website and this privacy policy to check for any changes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3 vintage-heading">10. Contact Us</h2>
                <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                  If you have any questions or concerns about this privacy policy or our privacy practices, please
                  contact us at:
                </p>
                <div className="mt-3">
                  <p className="font-medium">The Teez Spot</p>
                  <p>123 Vintage Lane</p>
                  <p>Portland, OR 97205</p>
                  <p>Email: privacy@theteezspot.com</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
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

