import { Edit, Plus, Trash2 } from "lucide-react"
import MobileAccountTabs from "../components/mobile-account-tabs"

export default function AddressesPage() {
  // Sample addresses
  const addresses = [
    {
      id: 1,
      name: "Home",
      isDefault: true,
      fullName: "Sarah Johnson",
      address1: "123 Vintage Lane",
      address2: "Apt 4B",
      city: "Portland",
      state: "OR",
      postalCode: "97205",
      country: "United States",
      phone: "(555) 123-4567",
    },
    {
      id: 2,
      name: "Work",
      isDefault: false,
      fullName: "Sarah Johnson",
      address1: "456 Business Ave",
      address2: "Suite 200",
      city: "Portland",
      state: "OR",
      postalCode: "97204",
      country: "United States",
      phone: "(555) 987-6543",
    },
  ]

  return (
    <>
      {/* Mobile Tabs */}
      <MobileAccountTabs />

      {/* Addresses */}
      <div className="space-y-6">
        <div className="vintage-frame p-6 dark:border-vintage-ink-light/30">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold vintage-heading">My Addresses</h1>
            <button className="flex items-center gap-2 px-4 py-2 border border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5 transition-colors">
              <Plus className="h-4 w-4" />
              <span>Add New Address</span>
            </button>
          </div>

          {addresses.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className="border border-vintage-ink/20 dark:border-vintage-ink-light/20 p-4 relative"
                >
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button className="p-1.5 hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 hover:bg-vintage-ink/10 dark:hover:bg-vintage-ink-light/10 transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">{address.name}</h3>
                    {address.isDefault && (
                      <span className="text-xs px-2 py-0.5 bg-vintage-ink/10 dark:bg-vintage-ink-light/10 rounded">
                        Default
                      </span>
                    )}
                  </div>
                  <div className="text-sm space-y-1 text-vintage-ink/80 dark:text-vintage-ink-light/80">
                    <p>{address.fullName}</p>
                    <p>{address.address1}</p>
                    {address.address2 && <p>{address.address2}</p>}
                    <p>
                      {address.city}, {address.state} {address.postalCode}
                    </p>
                    <p>{address.country}</p>
                    <p>Phone: {address.phone}</p>
                  </div>
                  {!address.isDefault && (
                    <button className="mt-4 text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70 hover:underline">
                      Set as default
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-4">
                You haven't added any addresses yet.
              </p>
              <button className="inline-block px-4 py-2 border border-vintage-ink dark:border-vintage-ink-light hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5 transition-colors">
                Add Your First Address
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

