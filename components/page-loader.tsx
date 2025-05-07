"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function PageLoader() {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Show loader when component mounts
    setLoading(true)

    // Hide loader after content is loaded
    const handleLoad = () => {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setLoading(false)
      }, 300)
    }

    // Check if document is already loaded
    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    // Cleanup
    return () => {
      window.removeEventListener("load", handleLoad)
    }
  }, [pathname]) // Re-run when pathname changes

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-vintage-paper/90 dark:bg-vintage-paper-dark/90 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-32 h-32 animate-bounce">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%284%29-lMWmCSQOotM15xCTKycwG4PSWBpAvT.png"
          alt="Loading..."
          fill
          className="object-contain animate-pulse"
        />
      </div>
      <div className="absolute bottom-1/4 mt-4">
        <div className="w-16 h-1 bg-vintage-ink/20 dark:bg-vintage-ink-light/20 rounded-full overflow-hidden">
          <div className="h-full bg-vintage-ink dark:bg-vintage-ink-light animate-loading-progress"></div>
        </div>
      </div>
    </div>
  )
}

