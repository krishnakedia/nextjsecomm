"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react"
import MainHeader from "@/components/main-header"
import MainFooter from "@/components/main-footer"
import BottomNavigation from "@/components/bottom-navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please enter both email and password")
      return
    }

    setIsLoading(true)

    // Simulate API call
    try {
      // In a real app, you would call your authentication API here
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Redirect to account page on success
      window.location.href = "/account"
    } catch (err) {
      setError("Invalid email or password. Please try again.")
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
            <span className="font-medium">Login</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Left Side - Images */}
            <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px]">
              <div className="absolute inset-0 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-vintage-ink/5 dark:bg-vintage-ink-light/5 rounded-lg"></div>

                {/* Floating vintage images */}
                <div className="absolute top-[10%] left-[15%] w-48 h-64 transition-transform duration-1000 ease-in-out">
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

                <div className="absolute top-[25%] right-[20%] w-40 h-56 transition-transform duration-1000 ease-in-out">
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

                <div className="absolute bottom-[15%] left-[25%] w-44 h-60 transition-transform duration-1000 ease-in-out">
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

            {/* Right Side - Login Form */}
            <div className="w-full md:w-1/2">
              <div className="vintage-frame p-8 md:p-10 dark:border-vintage-ink-light/30 max-w-md mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 vintage-heading text-center">Welcome Back</h1>
                <p className="text-center text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-8">
                  Sign in to your account to continue
                </p>

                {error && (
                  <div className="mb-6 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 dark:bg-red-900/20 dark:text-red-400">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
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
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full pl-10 pr-4 py-3 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label htmlFor="password" className="block text-sm font-medium">
                          Password
                        </label>
                        <Link href="/forgot-password" className="text-sm hover:underline">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Lock className="h-5 w-5 text-vintage-ink/60 dark:text-vintage-ink-light/60" />
                        </div>
                        <input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
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
                    </div>

                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 rounded border-vintage-ink/30 dark:border-vintage-ink-light/30 text-vintage-ink dark:text-vintage-ink-light focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm">
                        Remember me
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90 transition-colors text-lg font-medium flex items-center justify-center"
                    >
                      {isLoading ? (
                        <span className="flex items-center">
                          <span className="animate-spin h-5 w-5 mr-2 border-2 border-vintage-paper dark:border-vintage-paper-dark border-t-transparent dark:border-t-transparent rounded-full"></span>
                          Signing in...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Sign In <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-8 text-center">
                  <p>
                    Don't have an account?{" "}
                    <Link
                      href="/register"
                      className="text-vintage-ink dark:text-vintage-ink-light font-medium hover:underline"
                    >
                      Register
                    </Link>
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-vintage-ink/20 dark:border-vintage-ink-light/20">
                  <p className="text-center text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-4">
                    Or continue with
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button className="flex-1 py-2 border border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5 transition-colors">
                      Google
                    </button>
                    <button className="flex-1 py-2 border border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5 transition-colors">
                      Facebook
                    </button>
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

