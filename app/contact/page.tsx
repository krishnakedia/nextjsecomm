"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"
import MainHeader from "@/components/main-header"
import MainFooter from "@/components/main-footer"
import BottomNavigation from "@/components/bottom-navigation"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

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
            <span className="font-medium">Contact Us</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 vintage-heading text-center">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div>
              <div className="vintage-frame p-8 dark:border-vintage-ink-light/30 mb-8">
                <h2 className="text-2xl font-bold mb-6 vintage-heading">Get In Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-vintage-ink/10 dark:bg-vintage-ink-light/10 p-3 rounded-full">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80 mb-1">For general inquiries:</p>
                      <a href="mailto:info@theteezspot.com" className="hover:underline">
                        info@theteezspot.com
                      </a>
                      <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80 mt-2 mb-1">
                        For customer support:
                      </p>
                      <a href="mailto:support@theteezspot.com" className="hover:underline">
                        support@theteezspot.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-vintage-ink/10 dark:bg-vintage-ink-light/10 p-3 rounded-full">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                      <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80 mb-1">Customer Service:</p>
                      <a href="tel:+15551234567" className="hover:underline">
                        (555) 123-4567
                      </a>
                      <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80 mt-2 mb-1">Business Hours:</p>
                      <p>Monday - Friday: 9am - 6pm EST</p>
                      <p>Saturday: 10am - 4pm EST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-vintage-ink/10 dark:bg-vintage-ink-light/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                      <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80 mb-1">Our Store:</p>
                      <address className="not-italic">
                        123 Vintage Lane
                        <br />
                        Portland, OR 97205
                        <br />
                        United States
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              <div className="vintage-frame p-8 dark:border-vintage-ink-light/30">
                <h2 className="text-2xl font-bold mb-6 vintage-heading">Connect With Us</h2>

                <div className="space-y-6">
                  <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                    Follow us on social media to stay updated on new designs, promotions, and events.
                  </p>

                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/theteezspot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-vintage-ink/10 dark:bg-vintage-ink-light/10 p-3 rounded-full hover:bg-vintage-ink/20 dark:hover:bg-vintage-ink-light/20 transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="https://facebook.com/theteezspot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-vintage-ink/10 dark:bg-vintage-ink-light/10 p-3 rounded-full hover:bg-vintage-ink/20 dark:hover:bg-vintage-ink-light/20 transition-colors"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a
                      href="https://twitter.com/theteezspot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-vintage-ink/10 dark:bg-vintage-ink-light/10 p-3 rounded-full hover:bg-vintage-ink/20 dark:hover:bg-vintage-ink-light/20 transition-colors"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>

                  <div className="relative h-[200px] w-full overflow-hidden rounded-md">
                    <Image
                      src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                      alt="The Teez Spot Store"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="vintage-frame p-8 dark:border-vintage-ink-light/30">
              <h2 className="text-2xl font-bold mb-6 vintage-heading">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-4">
                  <p className="font-medium text-green-700 dark:text-green-300">
                    Thank you for your message! We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                    >
                      <option value="">Select a subject</option>
                      <option value="Order Inquiry">Order Inquiry</option>
                      <option value="Product Question">Product Question</option>
                      <option value="Return/Exchange">Return/Exchange</option>
                      <option value="Shipping Question">Shipping Question</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90 transition-colors"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <span className="animate-spin h-5 w-5 mr-2 border-2 border-vintage-paper dark:border-vintage-paper-dark border-t-transparent dark:border-t-transparent rounded-full"></span>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>

                  <p className="text-sm text-vintage-ink/60 dark:text-vintage-ink-light/60">* Required fields</p>
                </form>
              )}

              <div className="mt-8 pt-8 border-t border-vintage-ink/20 dark:border-vintage-ink-light/20">
                <h3 className="text-lg font-semibold mb-4">Our Promise</h3>

                <div className="space-y-4">
                  <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                    At The Teez Spot, we're committed to delivering high-quality, comfortable, and unique T-shirts that
                    make you feel confident and expressive.
                  </p>

                  <div>
                    <h4 className="font-medium mb-1">Quality Guarantee</h4>
                    <p className="text-sm text-vintage-ink/80 dark:text-vintage-ink-light/80">
                      We promise to use only the best materials and manufacturing processes to ensure our T-shirts are
                      soft, durable, and long-lasting.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Sustainable Practices</h4>
                    <p className="text-sm text-vintage-ink/80 dark:text-vintage-ink-light/80">
                      We're dedicated to reducing our environmental footprint through eco-friendly production methods,
                      responsible sourcing, and minimizing waste.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Inclusive Sizing</h4>
                    <p className="text-sm text-vintage-ink/80 dark:text-vintage-ink-light/80">
                      We believe fashion is for everyone. That's why we offer a wide range of sizes to fit different
                      body types and styles.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Community Engagement</h4>
                    <p className="text-sm text-vintage-ink/80 dark:text-vintage-ink-light/80">
                      We're passionate about building a community that celebrates self-expression and individuality.
                      Join our journey and stay updated on new designs, promotions, and events.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1">Customer Satisfaction</h4>
                    <p className="text-sm text-vintage-ink/80 dark:text-vintage-ink-light/80">
                      Your satisfaction is our top priority. If you're not happy with your purchase, we offer
                      hassle-free returns and exchanges.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium mb-1">Join the Movement</h4>
                  <p className="text-sm text-vintage-ink/80 dark:text-vintage-ink-light/80">
                    Be part of a brand that cares about quality, sustainability, and community. Shop with us today and
                    experience the difference.
                  </p>
                </div>
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

