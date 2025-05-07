import Link from "next/link"
import { Heart } from "lucide-react"
import ProductHoverEffect from "@/components/product-hover-effect"

// Sample related products
const relatedProducts = [
  {
    id: 1,
    name: "Classic White Tee",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    id: 2,
    name: "Distressed Vintage Print",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    id: 3,
    name: "Retro Band Tee",
    price: 32.99,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
  },
  {
    id: 4,
    name: "Minimalist Logo Tee",
    price: 27.99,
    image:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
  },
]

export default function RelatedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {relatedProducts.map((product) => (
        <div key={product.id} className="group">
          <div className="vintage-frame p-3 mb-4 bg-vintage-paper dark:bg-vintage-paper-dark relative overflow-hidden group-hover:shadow-lg transition-all duration-300 dark:border-vintage-ink-light/30">
            <ProductHoverEffect
              staticImage={product.image}
              productName={product.name}
              className="h-[300px] w-full"
              width={600}
              height={800}
            />
            <button className="absolute top-2 right-2 p-2 bg-vintage-paper dark:bg-vintage-paper-dark rounded-full hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 transition-colors opacity-0 group-hover:opacity-100">
              <Heart className="h-5 w-5" />
            </button>
          </div>
          <h3 className="text-lg font-medium mb-1">{product.name}</h3>
          <p className="font-bold">${product.price.toFixed(2)}</p>
          <Link
            href={`/product/${product.id}`}
            className="mt-2 block w-full py-2 text-center border border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5 transition-colors"
          >
            View Product
          </Link>
        </div>
      ))}
    </div>
  )
}

