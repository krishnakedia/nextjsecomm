"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { SearchIcon, X, Filter, ChevronDown, Heart, ShoppingBag } from "lucide-react"
import MainHeader from "@/components/main-header"
import MainFooter from "@/components/main-footer"
import BottomNavigation from "@/components/bottom-navigation"

// Sample product data
const allProducts = [
  {
    id: 1,
    name: "Vintage Graphic Tee",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    category: "Graphic",
    tags: ["vintage", "graphic", "retro"],
  },
  {
    id: 2,
    name: "Classic White Tee",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    category: "Basic",
    tags: ["classic", "white", "essential"],
  },
  {
    id: 3,
    name: "Distressed Vintage Print",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    category: "Graphic",
    tags: ["distressed", "vintage", "print"],
  },
  {
    id: 4,
    name: "Retro Band Tee",
    price: 32.99,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    category: "Band",
    tags: ["retro", "band", "music"],
  },
  {
    id: 5,
    name: "Minimalist Logo Tee",
    price: 27.99,
    image:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    category: "Logo",
    tags: ["minimalist", "logo", "simple"],
  },
  {
    id: 6,
    name: "Vintage Wash Tee",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    category: "Basic",
    tags: ["vintage", "wash", "faded"],
  },
  {
    id: 7,
    name: "Artistic Print Tee",
    price: 36.99,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    category: "Artistic",
    tags: ["artistic", "print", "creative"],
  },
  {
    id: 8,
    name: "Faded Vintage Logo",
    price: 28.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    category: "Logo",
    tags: ["faded", "vintage", "logo"],
  },
  {
    id: 9,
    name: "Typographic Design Tee",
    price: 31.99,
    image:
      "https://images.unsplash.com/photo-1622445275576-721325763afe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    category: "Typography",
    tags: ["typography", "design", "text"],
  },
  {
    id: 10,
    name: "Eco-Friendly Cotton Tee",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    category: "Basic",
    tags: ["eco-friendly", "cotton", "sustainable"],
  },
  {
    id: 11,
    name: "Retro Striped Tee",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    category: "Pattern",
    tags: ["retro", "striped", "pattern"],
  },
  {
    id: 12,
    name: "Vintage Pocket Tee",
    price: 26.99,
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    category: "Basic",
    tags: ["vintage", "pocket", "casual"],
  },
]

// Popular search terms
const popularSearches = [
  "Vintage",
  "Graphic Tee",
  "Retro",
  "Band",
  "Cotton",
  "Distressed",
  "Logo",
  "Minimalist",
  "Eco-Friendly",
  "Striped",
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState(allProducts)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50])
  const [sortOption, setSortOption] = useState("relevance")
  const [isSearching, setIsSearching] = useState(false)

  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches")
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches))
    }
  }, [])

  // Filter products based on search query and filters
  useEffect(() => {
    if (searchQuery.trim() === "" && selectedCategories.length === 0 && priceRange[0] === 0 && priceRange[1] === 50) {
      setSearchResults(allProducts)
      return
    }

    setIsSearching(true)

    // Simulate search delay
    const timer = setTimeout(() => {
      let filteredResults = allProducts

      // Filter by search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase()
        filteredResults = filteredResults.filter(
          (product) =>
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.tags.some((tag) => tag.toLowerCase().includes(query)),
        )
      }

      // Filter by categories
      if (selectedCategories.length > 0) {
        filteredResults = filteredResults.filter((product) => selectedCategories.includes(product.category))
      }

      // Filter by price range
      filteredResults = filteredResults.filter(
        (product) => product.price >= priceRange[0] && product.price <= priceRange[1],
      )

      // Sort results
      if (sortOption === "price-asc") {
        filteredResults.sort((a, b) => a.price - b.price)
      } else if (sortOption === "price-desc") {
        filteredResults.sort((a, b) => b.price - a.price)
      } else if (sortOption === "name") {
        filteredResults.sort((a, b) => a.name.localeCompare(b.name))
      }

      setSearchResults(filteredResults)
      setIsSearching(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [searchQuery, selectedCategories, priceRange, sortOption])

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (searchQuery.trim() === "") return

    // Add to recent searches
    if (!recentSearches.includes(searchQuery)) {
      const updatedSearches = [searchQuery, ...recentSearches.slice(0, 4)]
      setRecentSearches(updatedSearches)
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))
    }
  }

  // Handle popular search click
  const handlePopularSearchClick = (term: string) => {
    setSearchQuery(term)

    // Add to recent searches
    if (!recentSearches.includes(term)) {
      const updatedSearches = [term, ...recentSearches.slice(0, 4)]
      setRecentSearches(updatedSearches)
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))
    }
  }

  // Handle recent search click
  const handleRecentSearchClick = (term: string) => {
    setSearchQuery(term)
  }

  // Clear recent searches
  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem("recentSearches")
  }

  // Toggle category selection
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategories([])
    setPriceRange([0, 50])
    setSortOption("relevance")
  }

  // Get all unique categories
  const categories = Array.from(new Set(allProducts.map((product) => product.category)))

  return (
    <div className="min-h-screen bg-vintage-paper dark:bg-vintage-paper-dark text-vintage-ink dark:text-vintage-ink-light font-serif transition-colors duration-300">
      <MainHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-6 vintage-heading text-center">Search Our Collection</h1>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for t-shirts, designs, styles..."
                  className="w-full py-3 pl-12 pr-4 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-6 w-6 text-vintage-ink/60 dark:text-vintage-ink-light/60" />
                </div>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <X className="h-5 w-5 text-vintage-ink/60 dark:text-vintage-ink-light/60" />
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Recent and Popular Searches */}
          {!searchQuery && (
            <div className="mb-10">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-semibold">Recent Searches</h2>
                    <button
                      onClick={clearRecentSearches}
                      className="text-sm text-vintage-ink/60 dark:text-vintage-ink-light/60 hover:text-vintage-ink dark:hover:text-vintage-ink-light"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term, index) => (
                      <button
                        key={index}
                        onClick={() => handleRecentSearchClick(term)}
                        className="px-3 py-1.5 bg-vintage-ink/10 dark:bg-vintage-ink-light/10 hover:bg-vintage-ink/20 dark:hover:bg-vintage-ink-light/20 rounded-full text-sm transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Searches */}
              <div>
                <h2 className="text-lg font-semibold mb-3">Popular Searches</h2>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term, index) => (
                    <button
                      key={index}
                      onClick={() => handlePopularSearchClick(term)}
                      className="px-3 py-1.5 border border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 rounded-full text-sm transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Search Results */}
          {searchQuery && (
            <div>
              {/* Results Header */}
              <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
                <div className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">
                  {isSearching ? (
                    <span>Searching...</span>
                  ) : (
                    <span>
                      Found{" "}
                      <span className="font-medium text-vintage-ink dark:text-vintage-ink-light">
                        {searchResults.length}
                      </span>{" "}
                      results for "{searchQuery}"
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {/* Sort Dropdown */}
                  <div className="relative">
                    <select
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                      className="appearance-none bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 rounded-md py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                    >
                      <option value="relevance">Relevance</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="name">Name</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" />
                  </div>

                  {/* Filter Button (Mobile) */}
                  <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="md:hidden flex items-center gap-2 py-2 px-4 border border-vintage-ink/30 dark:border-vintage-ink-light/30 rounded-md"
                  >
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </button>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 50) && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedCategories.map((category) => (
                    <div
                      key={category}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-vintage-ink/10 dark:bg-vintage-ink-light/10 rounded-full text-sm"
                    >
                      <span>Category: {category}</span>
                      <button
                        onClick={() => toggleCategory(category)}
                        className="text-vintage-ink/70 dark:text-vintage-ink-light/70 hover:text-vintage-ink dark:hover:text-vintage-ink-light"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}

                  {(priceRange[0] > 0 || priceRange[1] < 50) && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-vintage-ink/10 dark:bg-vintage-ink-light/10 rounded-full text-sm">
                      <span>
                        Price: ${priceRange[0]} - ${priceRange[1]}
                      </span>
                      <button
                        onClick={() => setPriceRange([0, 50])}
                        className="text-vintage-ink/70 dark:text-vintage-ink-light/70 hover:text-vintage-ink dark:hover:text-vintage-ink-light"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}

                  <button
                    onClick={resetFilters}
                    className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70 hover:text-vintage-ink dark:hover:text-vintage-ink-light underline"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {/* Main Content Area with Filters and Results */}
              <div className="flex flex-col md:flex-row gap-8">
                {/* Filters Sidebar (Desktop) */}
                <div className={`md:w-64 md:block ${isFilterOpen ? "block" : "hidden"}`}>
                  <div className="vintage-frame p-6 dark:border-vintage-ink-light/30">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-lg font-semibold">Filters</h2>
                      <button
                        onClick={resetFilters}
                        className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70 hover:underline"
                      >
                        Reset
                      </button>
                    </div>

                    {/* Category Filter */}
                    <div className="mb-6">
                      <h3 className="text-md font-medium mb-3">Category</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <label key={category} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(category)}
                              onChange={() => toggleCategory(category)}
                              className="rounded border-vintage-ink/30 dark:border-vintage-ink-light/30 text-vintage-ink dark:text-vintage-ink-light focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                            />
                            <span className="text-sm">{category}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Price Range Filter */}
                    <div className="mb-6">
                      <h3 className="text-md font-medium mb-3">Price Range</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-sm">${priceRange[0]}</span>
                          <span className="text-sm">${priceRange[1]}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="50"
                          step="5"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                          className="w-full"
                        />
                        <input
                          type="range"
                          min="0"
                          max="50"
                          step="5"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Apply Filters Button (Mobile) */}
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="w-full py-2 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark rounded-md text-sm font-medium md:hidden"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>

                {/* Search Results */}
                <div className="flex-1">
                  {isSearching ? (
                    <div className="flex justify-center items-center h-64">
                      <div className="animate-spin h-8 w-8 border-4 border-vintage-ink/30 dark:border-vintage-ink-light/30 border-t-vintage-ink dark:border-t-vintage-ink-light rounded-full"></div>
                    </div>
                  ) : searchResults.length === 0 ? (
                    <div className="text-center py-16">
                      <div className="text-6xl mb-4">🔍</div>
                      <h3 className="text-xl font-semibold mb-2">No results found</h3>
                      <p className="text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-6">
                        We couldn't find any products matching your search.
                      </p>
                      <button
                        onClick={() => {
                          setSearchQuery("")
                          resetFilters()
                        }}
                        className="px-6 py-2 border border-vintage-ink dark:border-vintage-ink-light hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 transition-colors"
                      >
                        Clear Search
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {searchResults.map((product) => (
                        <div key={product.id} className="group animate-fade-in">
                          <div className="vintage-frame p-3 mb-4 bg-vintage-paper dark:bg-vintage-paper-dark relative overflow-hidden group-hover:shadow-lg transition-all duration-300 dark:border-vintage-ink-light/30">
                            <div className="relative h-[300px] w-full overflow-hidden">
                              <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />

                              {/* Quick actions */}
                              <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="p-2 bg-vintage-paper dark:bg-vintage-paper-dark rounded-full hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 transition-colors">
                                  <Heart className="h-5 w-5" />
                                </button>
                              </div>

                              {/* Quick add to cart */}
                              <div className="absolute bottom-0 left-0 right-0 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <button className="flex items-center justify-center gap-2 w-full">
                                  <ShoppingBag className="h-4 w-4" />
                                  <span className="text-sm font-medium">Add to Cart</span>
                                </button>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                            <div className="flex justify-between items-center">
                              <span className="font-bold">${product.price.toFixed(2)}</span>
                              <span className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">
                                {product.category}
                              </span>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {product.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="inline-block px-2 py-0.5 text-xs border border-vintage-ink/30 dark:border-vintage-ink-light/30 text-vintage-ink/70 dark:text-vintage-ink-light/70"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <MainFooter />
      <BottomNavigation />
    </div>
  )
}

