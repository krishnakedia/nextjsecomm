"use client"

import { useState } from "react"

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState("men")

  const tabs = [
    { id: "men", label: "MEN" },
    { id: "women", label: "WOMEN" },
    { id: "kids", label: "KIDS" },
  ]

  return (
    <div className="w-full border-b border-vintage-ink/20 dark:border-vintage-ink-light/20">
      <div className="container mx-auto">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-3 text-center font-medium text-lg relative ${
                activeTab === tab.id
                  ? "text-vintage-ink dark:text-vintage-ink-light"
                  : "text-vintage-ink/60 dark:text-vintage-ink-light/60"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-vintage-ink dark:bg-vintage-ink-light"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

