"use client"

import { useState } from "react"
import { Star } from "lucide-react"

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description")

  const tabs = [
    { id: "description", label: "Description" },
    { id: "details", label: "Details & Care" },
    { id: "sizing", label: "Size & Fit" },
    { id: "reviews", label: "Reviews (124)" },
  ]

  return (
    <div className="vintage-frame p-6 dark:border-vintage-ink-light/30">
      {/* Tabs */}
      <div className="flex flex-wrap border-b border-vintage-ink/20 dark:border-vintage-ink-light/20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 text-lg font-medium ${
              activeTab === tab.id
                ? "border-b-2 border-vintage-ink dark:border-vintage-ink-light -mb-px"
                : "text-vintage-ink/70 dark:text-vintage-ink-light/70 hover:text-vintage-ink dark:hover:text-vintage-ink-light"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-6">
        {activeTab === "description" && (
          <div className="space-y-4 text-vintage-ink/80 dark:text-vintage-ink-light/80">
            <p>
              Our Vintage Graphic Tee is a testament to timeless style and exceptional comfort. Each shirt is crafted
              from 100% organic cotton, providing a soft, breathable feel that gets better with every wash.
            </p>
            <p>
              The distressed graphic print is inspired by classic Americana, giving this tee an authentic vintage look
              that pairs perfectly with your favorite jeans or shorts. We use eco-friendly water-based inks for all our
              prints, ensuring vibrant colors that won't crack or fade over time.
            </p>
            <p>
              The relaxed fit offers comfortable everyday wear, while the ribbed crew neck adds durability and
              structure. This versatile tee is designed to be a staple in your wardrobe, offering both style and comfort
              for years to come.
            </p>
          </div>
        )}

        {activeTab === "details" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Materials</h3>
              <ul className="list-disc list-inside space-y-1 text-vintage-ink/80 dark:text-vintage-ink-light/80">
                <li>100% organic ring-spun cotton (180 GSM)</li>
                <li>Water-based eco-friendly inks</li>
                <li>Ribbed crew neck with twin needle stitching</li>
                <li>Taped neck and shoulders for durability</li>
                <li>Double-needle sleeve and bottom hem</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Care Instructions</h3>
              <ul className="list-disc list-inside space-y-1 text-vintage-ink/80 dark:text-vintage-ink-light/80">
                <li>Machine wash cold with like colors</li>
                <li>Tumble dry low</li>
                <li>Do not bleach</li>
                <li>Warm iron if needed</li>
                <li>Do not dry clean</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Sustainability</h3>
              <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                This product is made with organic cotton grown without harmful chemicals, pesticides, or synthetic
                fertilizers. Our water-based inks are eco-friendly and non-toxic. We're committed to ethical
                manufacturing practices and reducing our environmental footprint.
              </p>
            </div>
          </div>
        )}

        {activeTab === "sizing" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Fit</h3>
              <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">
                This t-shirt features a relaxed, comfortable fit that's slightly looser than a standard fit but not as
                loose as an oversized fit. It's designed to drape naturally on the body for everyday comfort.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Size Chart</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-vintage-ink/20 dark:border-vintage-ink-light/20">
                      <th className="py-3 px-4 text-left">Size</th>
                      <th className="py-3 px-4 text-left">Chest (inches)</th>
                      <th className="py-3 px-4 text-left">Length (inches)</th>
                      <th className="py-3 px-4 text-left">Sleeve (inches)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-vintage-ink/10 dark:border-vintage-ink-light/10">
                      <td className="py-3 px-4">S</td>
                      <td className="py-3 px-4">36-38</td>
                      <td className="py-3 px-4">27</td>
                      <td className="py-3 px-4">8</td>
                    </tr>
                    <tr className="border-b border-vintage-ink/10 dark:border-vintage-ink-light/10">
                      <td className="py-3 px-4">M</td>
                      <td className="py-3 px-4">39-41</td>
                      <td className="py-3 px-4">28</td>
                      <td className="py-3 px-4">8.5</td>
                    </tr>
                    <tr className="border-b border-vintage-ink/10 dark:border-vintage-ink-light/10">
                      <td className="py-3 px-4">L</td>
                      <td className="py-3 px-4">42-44</td>
                      <td className="py-3 px-4">29</td>
                      <td className="py-3 px-4">9</td>
                    </tr>
                    <tr className="border-b border-vintage-ink/10 dark:border-vintage-ink-light/10">
                      <td className="py-3 px-4">XL</td>
                      <td className="py-3 px-4">45-47</td>
                      <td className="py-3 px-4">30</td>
                      <td className="py-3 px-4">9.5</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">2XL</td>
                      <td className="py-3 px-4">48-50</td>
                      <td className="py-3 px-4">31</td>
                      <td className="py-3 px-4">10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-vintage-ink/60 dark:text-vintage-ink-light/60 mt-3">
                Measurements are approximate and may vary slightly between products.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Sizing Tips</h3>
              <ul className="list-disc list-inside space-y-1 text-vintage-ink/80 dark:text-vintage-ink-light/80">
                <li>If you prefer a more fitted look, consider sizing down.</li>
                <li>For a looser, more relaxed fit, consider sizing up.</li>
                <li>This shirt is pre-shrunk, but may shrink slightly after washing.</li>
                <li>If you're between sizes, we recommend choosing the larger size.</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Review Summary */}
              <div className="md:w-1/3">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">4.8</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < 5 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">Based on 124 reviews</p>
                </div>

                <div className="mt-6 space-y-2">
                  {[
                    { stars: 5, percentage: 85 },
                    { stars: 4, percentage: 10 },
                    { stars: 3, percentage: 3 },
                    { stars: 2, percentage: 1 },
                    { stars: 1, percentage: 1 },
                  ].map((rating) => (
                    <div key={rating.stars} className="flex items-center gap-2">
                      <div className="flex items-center">
                        {rating.stars} <Star className="h-3 w-3 ml-1 text-yellow-500 fill-yellow-500" />
                      </div>
                      <div className="flex-1 h-2 bg-vintage-ink/10 dark:bg-vintage-ink-light/10 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500" style={{ width: `${rating.percentage}%` }}></div>
                      </div>
                      <div className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">
                        {rating.percentage}%
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 py-2 border border-vintage-ink dark:border-vintage-ink-light bg-vintage-ink/5 dark:bg-vintage-ink-light/5 hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 transition-colors">
                  Write a Review
                </button>
              </div>

              {/* Review List */}
              <div className="md:w-2/3 space-y-6">
                {[
                  {
                    name: "Michael T.",
                    date: "March 15, 2025",
                    rating: 5,
                    title: "Perfect vintage feel",
                    content:
                      "This t-shirt is exactly what I was looking for. The fabric is soft and comfortable, and the vintage design looks authentic. I've washed it several times and it still looks great. Definitely recommend!",
                    verified: true,
                  },
                  {
                    name: "Jessica L.",
                    date: "February 28, 2025",
                    rating: 4,
                    title: "Great quality, runs slightly small",
                    content:
                      "I love the quality and design of this shirt. The material is thick and feels premium. My only issue is that it runs a bit smaller than expected. I usually wear a medium but should have gone with a large. Otherwise, it's perfect!",
                    verified: true,
                  },
                  {
                    name: "David R.",
                    date: "February 10, 2025",
                    rating: 5,
                    title: "Best graphic tee I've owned",
                    content:
                      "I've purchased a lot of graphic tees over the years, but this one stands out. The design is unique and the quality is exceptional. The fit is perfect - not too tight, not too loose. I'll definitely be buying more from this brand.",
                    verified: true,
                  },
                ].map((review, index) => (
                  <div
                    key={index}
                    className="border-b border-vintage-ink/20 dark:border-vintage-ink-light/20 pb-6 last:border-0"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{review.title}</h4>
                      <span className="text-sm text-vintage-ink/60 dark:text-vintage-ink-light/60">{review.date}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      {review.verified && (
                        <span className="text-xs px-1.5 py-0.5 bg-green-100 text-green-800 rounded">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-medium">{review.name}</span>
                    </div>
                    <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">{review.content}</p>
                  </div>
                ))}

                <div className="text-center">
                  <button className="px-6 py-2 border border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5 transition-colors">
                    Load More Reviews
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

