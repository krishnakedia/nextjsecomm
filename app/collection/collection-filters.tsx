"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

// Filter categories
const categories = [
  { id: "graphic", name: "Graphic Tees", count: 24 },
  { id: "basic", name: "Basic Tees", count: 18 },
  { id: "vintage", name: "Vintage", count: 12 },
  { id: "band", name: "Band Merch", count: 8 },
  { id: "typography", name: "Typography", count: 10 },
  { id: "artistic", name: "Artistic", count: 6 },
  { id: "logo", name: "Logo", count: 14 },
]

const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"]

const colors = [
  { id: "black", name: "Black", hex: "#333333" },
  { id: "white", name: "White", hex: "#ffffff" },
  { id: "gray", name: "Gray", hex: "#888888" },
  { id: "navy", name: "Navy", hex: "#223344" },
  { id: "red", name: "Red", hex: "#cc3333" },
  { id: "blue", name: "Blue", hex: "#3366cc" },
  { id: "green", name: "Green", hex: "#338833" },
  { id: "yellow", name: "Yellow", hex: "#ffcc33" },
]

const priceRanges = [
  { id: "under-25", name: "Under $25" },
  { id: "25-50", name: "$25 to $50" },
  { id: "50-100", name: "$50 to $100" },
  { id: "over-100", name: "Over $100" },
]

export default function CollectionFilters() {
  // State for expanded filter sections
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    sizes: true,
    colors: true,
    price: true,
    availability: true,
  })

  // Toggle section expansion
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <button
          className="flex items-center justify-between w-full text-lg font-semibold mb-3"
          onClick={() => toggleSection("categories")}
        >
          <span>Categories</span>
          {expandedSections.categories ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        {expandedSections.categories && (
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-vintage-ink/30 dark:border-vintage-ink-light/30 text-vintage-ink dark:text-vintage-ink-light focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                />
                <span className="text-sm">{category.name}</span>
                <span className="text-xs text-vintage-ink/60 dark:text-vintage-ink-light/60 ml-auto">
                  ({category.count})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-vintage-ink/20 dark:border-vintage-ink-light/20 pt-6">
        <button
          className="flex items-center justify-between w-full text-lg font-semibold mb-3"
          onClick={() => toggleSection("sizes")}
        >
          <span>Sizes</span>
          {expandedSections.sizes ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        {expandedSections.sizes && (
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <label
                key={size}
                className="flex items-center justify-center w-10 h-10 border border-vintage-ink/30 dark:border-vintage-ink-light/30 rounded-md cursor-pointer hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5"
              >
                <input type="checkbox" className="sr-only peer" />
                <span className="text-sm peer-checked:font-bold">{size}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-vintage-ink/20 dark:border-vintage-ink-light/20 pt-6">
        <button
          className="flex items-center justify-between w-full text-lg font-semibold mb-3"
          onClick={() => toggleSection("colors")}
        >
          <span>Colors</span>
          {expandedSections.colors ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        {expandedSections.colors && (
          <div className="flex flex-wrap gap-3">
            {colors.map((color) => (
              <label key={color.id} className="cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-8 h-8 rounded-full border border-vintage-ink/30 dark:border-vintage-ink-light/30 peer-checked:ring-2 peer-checked:ring-vintage-ink dark:peer-checked:ring-vintage-ink-light peer-checked:ring-offset-2 peer-checked:ring-offset-vintage-paper dark:peer-checked:ring-offset-vintage-paper-dark">
                  <div className="absolute inset-1 rounded-full" style={{ backgroundColor: color.hex }}></div>
                </div>
                <span className="sr-only">{color.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-vintage-ink/20 dark:border-vintage-ink-light/20 pt-6">
        <button
          className="flex items-center justify-between w-full text-lg font-semibold mb-3"
          onClick={() => toggleSection("price")}
        >
          <span>Price</span>
          {expandedSections.price ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        {expandedSections.price && (
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range.id} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-vintage-ink/30 dark:border-vintage-ink-light/30 text-vintage-ink dark:text-vintage-ink-light focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                />
                <span className="text-sm">{range.name}</span>
              </label>
            ))}

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Custom Range</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-vintage-ink/60 dark:text-vintage-ink-light/60">
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full pl-7 pr-3 py-2 border border-vintage-ink/30 dark:border-vintage-ink-light/30 rounded-md bg-vintage-paper dark:bg-vintage-paper-dark text-sm focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                  />
                </div>
                <span className="text-vintage-ink/60 dark:text-vintage-ink-light/60">-</span>
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-vintage-ink/60 dark:text-vintage-ink-light/60">
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full pl-7 pr-3 py-2 border border-vintage-ink/30 dark:border-vintage-ink-light/30 rounded-md bg-vintage-paper dark:bg-vintage-paper-dark text-sm focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                  />
                </div>
              </div>
              <button className="w-full py-2 mt-2 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark rounded-md text-sm font-medium">
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-vintage-ink/20 dark:border-vintage-ink-light/20 pt-6">
        <button
          className="flex items-center justify-between w-full text-lg font-semibold mb-3"
          onClick={() => toggleSection("availability")}
        >
          <span>Availability</span>
          {expandedSections.availability ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        {expandedSections.availability && (
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-vintage-ink/30 dark:border-vintage-ink-light/30 text-vintage-ink dark:text-vintage-ink-light focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
              />
              <span className="text-sm">In Stock</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-vintage-ink/30 dark:border-vintage-ink-light/30 text-vintage-ink dark:text-vintage-ink-light focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
              />
              <span className="text-sm">Out of Stock</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-vintage-ink/30 dark:border-vintage-ink-light/30 text-vintage-ink dark:text-vintage-ink-light focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
              />
              <span className="text-sm">On Sale</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-vintage-ink/30 dark:border-vintage-ink-light/30 text-vintage-ink dark:text-vintage-ink-light focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
              />
              <span className="text-sm">New Arrivals</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-vintage-ink/30 dark:border-vintage-ink-light/30 text-vintage-ink dark:text-vintage-ink-light focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
              />
              <span className="text-sm">Bestsellers</span>
            </label>
          </div>
        )}
      </div>

      <div className="border-t border-vintage-ink/20 dark:border-vintage-ink-light/20 pt-6">
        <button className="w-full py-2.5 bg-vintage-ink/10 dark:bg-vintage-ink-light/10 hover:bg-vintage-ink/20 dark:hover:bg-vintage-ink-light/20 rounded-md text-sm font-medium transition-colors">
          Clear All Filters
        </button>
      </div>
    </div>
  )
}

