import Link from "next/link"
import { ChevronRight } from "lucide-react"
import MainHeader from "@/components/main-header"
import MainFooter from "@/components/main-footer"
import BottomNavigation from "@/components/bottom-navigation"
import FAQAccordion from "./faq-accordion"

export default function FAQPage() {
  // FAQ categories and questions
  const faqCategories = [
    {
      title: "Orders & Shipping",
      questions: [
        {
          question: "How long does shipping take?",
          answer:
            "Standard shipping typically takes 5-7 business days. Express shipping takes 2-3 business days, and Next Day Delivery arrives within 1 business day. Please note that these timeframes begin after your order has been processed, which usually takes 1-2 business days.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Yes, we ship to select international destinations. International shipping rates and delivery times vary by location. Please note that customs fees and import duties may apply and are the responsibility of the recipient.",
        },
        {
          question: "How can I track my order?",
          answer:
            "Once your order has been shipped, you will receive a shipping confirmation email with tracking information. You can also track your order by logging into your account and viewing your order history.",
        },
        {
          question: "Can I change or cancel my order?",
          answer:
            "You can cancel your order within 24 hours of placing it. To cancel, please contact our customer service team via phone or Instagram handle. No cancellation fee will be charged if the order is cancelled within this timeframe.",
        },
      ],
    },
    {
      title: "Returns & Refunds",
      questions: [
        {
          question: "What is your return policy?",
          answer:
            "We accept returns for damaged, defective, or incorrectly shipped items within 7 days of delivery. To initiate a return, please contact our customer service team with a detailed description of the issue and photos of the item.",
        },
        {
          question: "How do I return an item?",
          answer:
            "Contact our customer service team to initiate the return process. You will receive a Return Authorization (RA) number and return instructions. Pack the item securely, include the RA number, and ship it to the address provided. We recommend using a trackable shipping method.",
        },
        {
          question: "When will I receive my refund?",
          answer:
            "Refunds will be processed within 5-7 business days of receiving the returned item. The refund will be issued through your original payment method.",
        },
        {
          question: "Do I need to record a video when opening my package?",
          answer:
            "Yes, we require customers to record a video while opening their package. This helps us verify the condition of items upon delivery and is necessary for processing any refund claims.",
        },
      ],
    },
    {
      title: "Products & Sizing",
      questions: [
        {
          question: "How do I find the right size?",
          answer:
            "Please refer to our Size Guide for detailed measurements and fitting information. If you're between sizes, we generally recommend sizing up for a more relaxed fit.",
        },
        {
          question: "What materials are your t-shirts made from?",
          answer:
            "Our t-shirts are primarily made from 100% organic cotton. Some specialty designs may include a blend of cotton and other materials. The specific material composition is listed in the product description for each item.",
        },
        {
          question: "How should I care for my t-shirt?",
          answer:
            "For best results, machine wash cold with like colors, tumble dry low, and do not bleach. Washing your t-shirt inside out will help preserve the print. Detailed care instructions are included on the tag of each garment.",
        },
        {
          question: "Do colors look the same as they do online?",
          answer:
            "We make every effort to display colors accurately, but screen settings can affect how colors appear. If you're concerned about a specific color, please contact our customer service team for clarification.",
        },
      ],
    },
    {
      title: "Account & Payment",
      questions: [
        {
          question: "How do I create an account?",
          answer:
            "You can create an account by clicking on the 'Account' link in the navigation menu and following the registration process. You can also create an account during checkout.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. All transactions are secure and encrypted.",
        },
        {
          question: "Is my payment information secure?",
          answer:
            "Yes, we use industry-standard encryption and security measures to protect your payment information. We do not store your full credit card details on our servers.",
        },
        {
          question: "Can I save my payment information for future purchases?",
          answer:
            "Yes, you can save your payment information securely in your account for faster checkout in the future. You can manage your saved payment methods in your account settings.",
        },
      ],
    },
    {
      title: "Customization & Special Orders",
      questions: [
        {
          question: "Can I customize my t-shirt?",
          answer:
            "Yes, we offer customization options for most of our t-shirts. You can add text, choose different colors, or make other modifications. Look for the 'Customize Now' button on product pages.",
        },
        {
          question: "Do you offer bulk orders for events or businesses?",
          answer:
            "Yes, we offer special pricing for bulk orders. Please contact our customer service team with details about your requirements, and we'll provide a custom quote.",
        },
        {
          question: "How long do custom orders take?",
          answer:
            "Custom orders typically take 3-5 business days to process before shipping. Complex customizations may require additional time. We'll provide an estimated timeline when you place your order.",
        },
        {
          question: "Can I cancel a custom order?",
          answer:
            "Custom orders can be cancelled within 24 hours of placing the order. Once production has begun, custom orders cannot be cancelled or refunded as they are made specifically for you.",
        },
      ],
    },
  ]

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
            <span className="font-medium">Frequently Asked Questions</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 vintage-heading text-center">Frequently Asked Questions</h1>

          {/* Search Bar */}
          <div className="mb-10">
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full py-3 pl-4 pr-10 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-vintage-ink/60 dark:text-vintage-ink-light/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category, index) => (
              <div key={index} className="vintage-frame p-6 dark:border-vintage-ink-light/30">
                <h2 className="text-xl font-bold mb-6 vintage-heading">{category.title}</h2>
                <FAQAccordion questions={category.questions} />
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 text-center">
            <h2 className="text-xl font-bold mb-4 vintage-heading">Still Have Questions?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              If you couldn't find the answer to your question, please don't hesitate to reach out to our customer
              service team. We're here to help!
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90 transition-colors"
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

