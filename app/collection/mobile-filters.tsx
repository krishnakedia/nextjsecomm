"use client"

import { useState } from "react"
import { Filter, X } from "lucide-react"
import CollectionFilters from "./collection-filters"

export default function MobileFilters() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleFilters = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when filters are open
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  return (
    <>
      <button
        onClick={toggleFilters}
        className="w-full flex items-center justify-center gap-2 py-3 border border-vintage-ink/30 dark:border-vintage-ink-light/30 rounded-md bg-vintage-ink/5 dark:bg-vintage-ink-light/5 hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 transition-colors"
      >
        <Filter className="h-5 w-5" />
        <span className="font-medium">Filter & Sort</span>
      </button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleFilters}></div>}

      {/* Mobile filters drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-full max-w-xs bg-vintage-paper dark:bg-vintage-paper-dark z-50 transform transition-transform duration-300 ease-in-out overflow-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-vintage-ink/20 dark:border-vintage-ink-light/20 flex justify-between items-center sticky top-0 bg-vintage-paper dark:bg-vintage-paper-dark z-10">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button onClick={toggleFilters} className="p-2 focus:outline-none" aria-label="Close filters">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4 pb-24">
          <CollectionFilters />
        </div>

        {/* Apply filters button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-vintage-paper dark:bg-vintage-paper-dark border-t border-vintage-ink/20 dark:border-vintage-ink-light/20">
          <button
            onClick={toggleFilters}
            className="w-full py-3 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark rounded-md font-medium"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </>
  )
}

