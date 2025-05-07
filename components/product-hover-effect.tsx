"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"

interface ProductHoverEffectProps {
  staticImage: string
  productName: string
  className?: string
  width?: number
  height?: number
}

export default function ProductHoverEffect({
  staticImage,
  productName,
  className = "",
  width = 600,
  height = 800,
}: ProductHoverEffectProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const isMobile = useMobile()

  // Reset interaction state when component unmounts or device type changes
  useEffect(() => {
    return () => {
      setHasInteracted(false)
      setIsHovering(false)
    }
  }, [isMobile])

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovering(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovering(false)
    }
  }

  const handleTouch = () => {
    if (isMobile) {
      if (!hasInteracted) {
        setIsHovering(true)
        setHasInteracted(true)
      } else {
        setIsHovering(false)
        setHasInteracted(false)
      }
    }
  }

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTouch}
    >
      {/* Static Image */}
      <Image
        src={staticImage || "/placeholder.svg"}
        alt={productName}
        fill
        className={`object-cover transition-opacity duration-300 ${isHovering ? "opacity-0" : "opacity-100"}`}
      />

      {/* Hover GIF */}
      <Image
        src="/assets/tshirt-hover.gif"
        alt={`${productName} in action`}
        fill
        className={`object-cover transition-opacity duration-300 ${isHovering ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  )
}

