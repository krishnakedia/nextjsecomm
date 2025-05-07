"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, User, Mail, Lock, Eye, EyeOff, ArrowRight, Check } from "lucide-react"
import MainHeader from "@/components/main-header"
import MainFooter from "@/components/main-footer"
import BottomNavigation from "@/components/bottom-navigation"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [passwordStrength, setPasswordStrength] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Check password strength when password field changes
    if (name === "password") {
      checkPasswordStrength(value)
    }
  }

  const checkPasswordStrength = (password: string) => {
    let strength = 0

    if (password.length >= 8) strength += 1
    if (/[A-Z]/.test(password)) strength += 1
    if (/[0-9]/.test(password)) strength += 1
    if (/[^A-Za-z0-9]/.test(password)) strength += 1

    setPasswordStrength(strength)
  }

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 0:
        return "Very Weak"
      case 1:
        return "Weak"
      case 2:
        return "Medium"
      case 3:
        return "Strong"
      case 4:
        return "Very Strong"
      default:
        return ""
    }
  }

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 0:
        return "bg-red-500"
      case 1:
        return "bg-orange-500"
      case 2:
        return "bg-yellow-500"
      case 3:
        return "bg-green-500"
      case 4:
        return "bg-emerald-500"
      default:
        return "bg-gray-300"
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError("All fields are required")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (passwordStrength < 2) {
      setError("Please choose a stronger password")
      return
    }

    if (!agreeTerms) {
      setError("You must agree to the Terms of Service and Privacy Policy")
      return
    }

    setIsLoading(true)

    // Simulate API call
    try {
      // In a real app, you would call your registration API here
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Redirect to account page on success
      window.location.href = "/account"
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
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
            <span className="font-medium">Register</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Left Side - Register Form */}
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="vintage-frame p-8 md:p-10 dark:border-vintage-ink-light/30 max-w-md mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 vintage-heading text-center">Create Account</h1>
                <p className="text-center text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-8">
                  Join our vintage community
                </p>

                {error && (
                  <div className="mb-6 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 dark:bg-red-900/20 dark:text-red-400">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <User className="h-5 w-5 text-vintage-ink/60 dark:text-vintage-ink-light/60" />
                          </div>
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First name"
                            className="w-full pl-10 pr-4 py-3 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <User className="h-5 w-5 text-vintage-ink/60 dark:text-vintage-ink-light/60" />
                          </div>
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last name"
                            className="w-full pl-10 pr-4 py-3 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Mail className="h-5 w-5 text-vintage-ink/60 dark:text-vintage-ink-light/60" />
                        </div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="w-full pl-10 pr-4 py-3 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Lock className="h-5 w-5 text-vintage-ink/60 dark:text-vintage-ink-light/60" />
                        </div>
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Create a password"
                          className="w-full pl-10 pr-10 py-3 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-vintage-ink/60 dark:text-vintage-ink-light/60" />
                          ) : (
                            <Eye className="h-5 w-5 text-vintage-ink/60 dark:text-vintage-ink-light/60" />
                          )}
                        </button>
                      </div>

                      {/* Password strength indicator */}
                      {formData.password && (
                        <div className="mt-2">
                          <div className="flex justify-between items-center mb-1">
                            <div className="text-xs">Password Strength: {getPasswordStrengthText()}</div>
                            <div className="text-xs">{passwordStrength}/4</div>
                          </div>
                          <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${getPasswordStrengthColor()}`}
                              style={{ width: `${(passwordStrength / 4) * 100}%` }}
                            ></div>
                          </div>
                          <div className="mt-1 text-xs text-vintage-ink/60 dark:text-vintage-ink-light/60">
                            Use 8+ characters with a mix of letters, numbers & symbols
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Lock className="h-5 w-5 text-vintage-ink/60 dark:text-vintage-ink-light/60" />
                        </div>
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm your password"
                          className="w-full pl-10 pr-10 py-3 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-5 w-5 text-vintage-ink/60 dark:text-vintage-ink-light/60" />
                          ) : (
                            <Eye className="h-5 w-5 text-vintage-ink/60 dark:text-vintage-ink-light/60" />
                          )}
                        </button>
                      </div>
                      {formData.password &&
                        formData.confirmPassword &&
                        formData.password !== formData.confirmPassword && (
                          <p className="mt-1 text-xs text-red-600 dark:text-red-400">Passwords do not match</p>
                        )}
                      {formData.password &&
                        formData.confirmPassword &&
                        formData.password === formData.confirmPassword && (
                          <p className="mt-1 text-xs text-green-600 dark:text-green-400 flex items-center">
                            <Check className="h-3 w-3 mr-1" /> Passwords match
                          </p>
                        )}
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          type="checkbox"
                          checked={agreeTerms}
                          onChange={(e) => setAgreeTerms(e.target.checked)}
                          className="h-4 w-4 rounded border-vintage-ink/30 dark:border-vintage-ink-light/30 text-vintage-ink dark:text-vintage-ink-light focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                          I agree to the{" "}
                          <Link href="/terms" className="text-vintage-ink dark:text-vintage-ink-light hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="/privacy"
                            className="text-vintage-ink dark:text-vintage-ink-light hover:underline"
                          >
                            Privacy Policy
                          </Link>
                        </label>
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
                          Creating Account...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Create Account <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-8 text-center">
                  <p>
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="text-vintage-ink dark:text-vintage-ink-light font-medium hover:underline"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Images */}
            <div className="w-full md:w-1/2 relative h-[300px] md:h-[600px] order-1 md:order-2">
              <div className="absolute inset-0 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-vintage-ink/5 dark:bg-vintage-ink-light/5 rounded-lg"></div>

                {/* Vintage store illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="vintage-frame p-6 w-3/4 h-3/4 rotate-[-3deg]">
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
                        alt="Vintage Store"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-[10%] right-[10%] w-32 h-32 rotate-12">
                  <div className="vintage-frame p-2 w-full h-full">
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80"
                        alt="Vintage T-shirt Detail"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[15%] left-[15%] w-36 h-36 -rotate-6">
                  <div className="vintage-frame p-2 w-full h-full">
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80"
                        alt="Vintage T-shirt Detail"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
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

