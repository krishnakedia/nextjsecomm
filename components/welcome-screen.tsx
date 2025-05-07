"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"

export default function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Get the last time the welcome screen was shown
    const lastShown = localStorage.getItem("welcomeScreenLastShown")
    const currentTime = Date.now()

    // Check if this is a new session or if 10 minutes have passed since last shown
    const isNewSession = !sessionStorage.getItem("sessionStarted")
    const shouldShowAgain = lastShown && currentTime - Number.parseInt(lastShown) > 600000 // 10 minutes in milliseconds

    // Mark this session as started
    if (!sessionStorage.getItem("sessionStarted")) {
      sessionStorage.setItem("sessionStarted", "true")
    }

    // Show welcome screen if it's a new session or if 10 minutes have passed
    if (isNewSession || shouldShowAgain) {
      setIsVisible(true)
      // Update the last shown timestamp
      localStorage.setItem("welcomeScreenLastShown", currentTime.toString())
    }

    // Set up timer to check every minute if 10 minutes have passed since last shown
    const timer = setInterval(() => {
      const lastShownTime = localStorage.getItem("welcomeScreenLastShown")
      if (lastShownTime && Date.now() - Number.parseInt(lastShownTime) > 600000) {
        setIsVisible(true)
        localStorage.setItem("welcomeScreenLastShown", Date.now().toString())
      }
    }, 60000) // Check every minute

    return () => clearInterval(timer)
  }, [])

  const closeWelcomeScreen = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fadeIn">
      <div className="relative max-w-md w-full bg-vintage-paper dark:bg-vintage-paper-dark text-vintage-ink dark:text-vintage-ink-light rounded-lg overflow-hidden animate-scaleIn">
        <button
          onClick={closeWelcomeScreen}
          className="absolute top-3 right-3 p-1.5 bg-vintage-ink/10 dark:bg-vintage-ink-light/10 rounded-full hover:bg-vintage-ink/20 dark:hover:bg-vintage-ink-light/20 transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80"
            alt="Welcome to The Teez Spot"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-vintage-paper dark:to-vintage-paper-dark"></div>
        </div>

        <div className="p-6 -mt-10 relative">
          <div className="vintage-frame p-4 dark:border-vintage-ink-light/30 bg-vintage-paper dark:bg-vintage-paper-dark animate-slideUp">
            <h2 className="text-2xl font-bold mb-3 vintage-heading text-center">Welcome to The Teez Spot!</h2>
            <p className="text-center mb-4">
              Thank you for visiting our store. Discover our unique collection of vintage-inspired t-shirts.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link
                href="/collection"
                className="flex-1 py-2 text-center bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90 transition-colors"
                onClick={closeWelcomeScreen}
              >
                Shop Collection
              </Link>
              <button
                onClick={closeWelcomeScreen}
                className="flex-1 py-2 text-center border border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5 transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          </div>

          <div className="mt-6 text-center animate-fadeIn animation-delay-300">
            <p className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">
              Sign up for our newsletter and get 10% off your first order!
            </p>
            <div className="flex mt-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 py-2 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
              />
              <button className="px-4 py-2 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

