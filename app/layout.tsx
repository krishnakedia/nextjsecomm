import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import WelcomeScreen from "@/components/welcome-screen"
import PageLoader from "@/components/page-loader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vintage Threads - Premium T-Shirt Collection",
  description: "Handcrafted t-shirts with vintage-inspired designs",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <PageLoader />
          {children}
          <WelcomeScreen />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'