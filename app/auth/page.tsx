"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Mail, Phone, ArrowRight, Eye, EyeOff } from "lucide-react"
import MainHeader from "@/components/main-header"
import MainFooter from "@/components/main-footer"
import BottomNavigation from "@/components/bottom-navigation"

export default function AuthPage() {
  const [authStep, setAuthStep] = useState<"contact" | "otp" | "success">("contact")
  const [contactMethod, setContactMethod] = useState<"email" | "phone">("email")
  const [contactValue, setContactValue] = useState("")
  const [otp, setOtp] = useState(["", "", "", ""])
  const [isNewUser, setIsNewUser] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Handle OTP input
  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(0, 1)
    }

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      if (nextInput) {
        nextInput.focus()
      }
    }
  }

  // Handle backspace in OTP input
  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      if (prevInput) {
        prevInput.focus()
      }
    }
  }

  // Handle contact form submission
  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setAuthStep("otp")

      // Randomly determine if this is a new user for demo purposes
      setIsNewUser(Math.random() > 0.5)
    }, 1500)
  }

  // Handle OTP verification
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setAuthStep("success")

      // Redirect to account page after success
      setTimeout(() => {
        window.location.href = "/account"
      }, 2000)
    }, 1500)
  }

  // Animation for the vintage images
  useEffect(() => {
    const images = document.querySelectorAll(".vintage-floating-image")

    const animateImages = () => {
      images.forEach((img, index) => {
        const element = img as HTMLElement
        const randomX = Math.sin(Date.now() / 2000 + index) * 5
        const randomY = Math.cos(Date.now() / 2500 + index) * 5
        const randomRotate = Math.sin(Date.now() / 3000 + index) * 2

        element.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`
      })

      requestAnimationFrame(animateImages)
    }

    const animationFrame = requestAnimationFrame(animateImages)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

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
            <span className="font-medium">Account Access</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Left Side - Images */}
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px]">
              <div className="absolute inset-0 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-vintage-ink/5 dark:bg-vintage-ink-light/5 rounded-lg"></div>

                {/* Floating vintage images */}
                <div className="vintage-floating-image absolute top-[10%] left-[15%] w-48 h-64 transition-transform duration-1000 ease-in-out">
                  <div className="vintage-frame p-3 w-full h-full rotate-[-5deg]">
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                        alt="Vintage T-shirt"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="vintage-floating-image absolute top-[25%] right-[20%] w-40 h-56 transition-transform duration-1000 ease-in-out">
                  <div className="vintage-frame p-3 w-full h-full rotate-[8deg]">
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                        alt="Vintage T-shirt"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="vintage-floating-image absolute bottom-[15%] left-[25%] w-44 h-60 transition-transform duration-1000 ease-in-out">
                  <div className="vintage-frame p-3 w-full h-full rotate-[-10deg]">
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                        alt="Vintage T-shirt"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Auth Form */}
            <div className="w-full md:w-1/2">
              <div className="vintage-frame p-8 md:p-10 dark:border-vintage-ink-light/30 max-w-md mx-auto">
                {authStep === "contact" && (
                  <>
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 vintage-heading text-center">Welcome Back</h1>
                    <p className="text-center text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-8">
                      Sign in to your account or create a new one
                    </p>

                    <form onSubmit={handleSendOtp}>
                      <div className="mb-6">
                        <div className="flex border-b border-vintage-ink/30 dark:border-vintage-ink-light/30 mb-4">
                          <button
                            type="button"
                            className={`flex-1 py-3 text-center font-medium ${
                              contactMethod === "email"
                                ? "border-b-2 border-vintage-ink dark:border-vintage-ink-light"
                                : "text-vintage-ink/60 dark:text-vintage-ink-light/60"
                            }`}
                            onClick={() => setContactMethod("email")}
                          >
                            Email
                          </button>
                          <button
                            type="button"
                            className={`flex-1 py-3 text-center font-medium ${
                              contactMethod === "phone"
                                ? "border-b-2 border-vintage-ink dark:border-vintage-ink-light"
                                : "text-vintage-ink/60 dark:text-vintage-ink-light/60"
                            }`}
                            onClick={() => setContactMethod("phone")}
                          >
                            Phone
                          </button>
                        </div>

                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            {contactMethod === "email" ? (
                              <Mail className="h-5 w-5 text-vintage-ink/60 dark:text-vintage-ink-light/60" />
                            ) : (
                              <Phone className="h-5 w-5 text-vintage-ink/60 dark:text-vintage-ink-light/60" />
                            )}
                          </div>
                          <input
                            type={contactMethod === "email" ? "email" : "tel"}
                            placeholder={contactMethod === "email" ? "Enter your email" : "Enter your phone number"}
                            value={contactValue}
                            onChange={(e) => setContactValue(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                            required
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90 transition-colors text-lg font-medium flex items-center justify-center"
                      >
                        {isLoading ? (
                          <span className="flex items-center">
                            <span className="animate-spin h-5 w-5 mr-2 border-2 border-vintage-paper dark:border-vintage-paper-dark border-t-transparent dark:border-t-transparent rounded-full"></span>
                            Sending OTP...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Send OTP <ArrowRight className="ml-2 h-5 w-5" />
                          </span>
                        )}
                      </button>
                    </form>

                    <div className="mt-8 text-center">
                      <p className="text-vintage-ink/70 dark:text-vintage-ink-light/70">
                        By continuing, you agree to our{" "}
                        <Link
                          href="/terms"
                          className="underline hover:text-vintage-ink dark:hover:text-vintage-ink-light"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          className="underline hover:text-vintage-ink dark:hover:text-vintage-ink-light"
                        >
                          Privacy Policy
                        </Link>
                      </p>
                    </div>
                  </>
                )}

                {authStep === "otp" && (
                  <>
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 vintage-heading text-center">
                      {isNewUser ? "Create Account" : "Welcome Back"}
                    </h1>
                    <p className="text-center text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-6">
                      {isNewUser
                        ? "We've sent a verification code to complete your registration"
                        : "Enter the verification code sent to your contact"}
                    </p>

                    <div className="bg-vintage-ink/5 dark:bg-vintage-ink-light/5 p-3 rounded-md mb-6 text-center">
                      <p className="text-sm">
                        {contactMethod === "email"
                          ? `Code sent to ${contactValue.substring(0, 3)}...${contactValue.substring(contactValue.indexOf("@"))}`
                          : `Code sent to ${contactValue.substring(0, 2)}...${contactValue.substring(contactValue.length - 3)}`}
                      </p>
                    </div>

                    <form onSubmit={handleVerifyOtp}>
                      <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Enter Verification Code</label>
                        <div className="flex justify-between gap-2">
                          {otp.map((digit, index) => (
                            <input
                              key={index}
                              id={`otp-${index}`}
                              type="text"
                              inputMode="numeric"
                              pattern="[0-9]*"
                              maxLength={1}
                              value={digit}
                              onChange={(e) => handleOtpChange(index, e.target.value)}
                              onKeyDown={(e) => handleOtpKeyDown(index, e)}
                              className="w-full aspect-square text-center text-xl font-bold bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                              required
                            />
                          ))}
                        </div>
                      </div>

                      {isNewUser && (
                        <div className="mb-6">
                          <label className="block text-sm font-medium mb-2">Create Password</label>
                          <div className="relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="w-full pr-10 py-3 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                              placeholder="Create a secure password"
                              required
                            />
                            <button
                              type="button"
                              className="absolute inset-y-0 right-0 pr-3 flex items-center"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-5 w-5 text-vintage-ink/60 dark:text-vintage-ink-light/60" />
                              ) : (
                                <Eye className="h-5 w-5 text-vintage-ink/60 dark:text-vintage-ink-light/60" />
                              )}
                            </button>
                          </div>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isLoading || otp.some((digit) => !digit) || (isNewUser && password.length < 6)}
                        className="w-full py-3 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90 transition-colors text-lg font-medium flex items-center justify-center disabled:opacity-70"
                      >
                        {isLoading ? (
                          <span className="flex items-center">
                            <span className="animate-spin h-5 w-5 mr-2 border-2 border-vintage-paper dark:border-vintage-paper-dark border-t-transparent dark:border-t-transparent rounded-full"></span>
                            Verifying...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            {isNewUser ? "Create Account" : "Sign In"} <ArrowRight className="ml-2 h-5 w-5" />
                          </span>
                        )}
                      </button>

                      <div className="mt-4 text-center">
                        <button
                          type="button"
                          className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70 hover:underline"
                          onClick={() => setAuthStep("contact")}
                        >
                          Back to {contactMethod}
                        </button>
                      </div>
                    </form>
                  </>
                )}

                {authStep === "success" && (
                  <div className="text-center py-6">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 vintage-heading">
                      {isNewUser ? "Account Created!" : "Welcome Back!"}
                    </h2>
                    <p className="text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-6">
                      {isNewUser
                        ? "Your account has been successfully created."
                        : "You have successfully signed in to your account."}
                    </p>
                    <p className="text-sm">Redirecting to your account...</p>
                    <div className="mt-4 w-full h-1 bg-vintage-ink/10 dark:bg-vintage-ink-light/10 overflow-hidden">
                      <div className="h-full bg-vintage-ink dark:bg-vintage-ink-light animate-progress"></div>
                    </div>
                  </div>
                )}
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

