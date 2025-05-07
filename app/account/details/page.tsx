import { Edit } from "lucide-react"
import MobileAccountTabs from "../components/mobile-account-tabs"

export default function AccountDetailsPage() {
  return (
    <>
      {/* Mobile Tabs */}
      <MobileAccountTabs />

      {/* My Details */}
      <div className="space-y-8">
        <div className="vintage-frame p-6 dark:border-vintage-ink-light/30">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold vintage-heading">My Details</h1>
            <button className="flex items-center gap-2 px-3 py-1.5 border border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5 transition-colors">
              <Edit className="h-4 w-4" />
              <span className="text-sm">Edit</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    value="Sarah"
                    disabled
                    className="w-full px-3 py-2 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light disabled:opacity-70"
                  />
                </div>
                <div>
                  <label className="block text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value="sarah@example.com"
                    disabled
                    className="w-full px-3 py-2 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light disabled:opacity-70"
                  />
                </div>
                <div>
                  <label className="block text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value="(555) 123-4567"
                    disabled
                    className="w-full px-3 py-2 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light disabled:opacity-70"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value="Johnson"
                    disabled
                    className="w-full px-3 py-2 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light disabled:opacity-70"
                  />
                </div>
                <div>
                  <label className="block text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    value="April 15, 1990"
                    disabled
                    className="w-full px-3 py-2 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light disabled:opacity-70"
                  />
                </div>
                <div>
                  <label className="block text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-1">
                    Gender
                  </label>
                  <input
                    type="text"
                    value="Female"
                    disabled
                    className="w-full px-3 py-2 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light disabled:opacity-70"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Password & Security */}
        <div className="vintage-frame p-6 dark:border-vintage-ink-light/30">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Password & Security</h2>
            <button className="flex items-center gap-2 px-3 py-1.5 border border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5 transition-colors">
              <Edit className="h-4 w-4" />
              <span className="text-sm">Change</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-vintage-ink/70 dark:text-vintage-ink-light/70">
                Your password was last changed 2 months ago
              </span>
            </div>

            <div className="pt-4 border-t border-vintage-ink/20 dark:border-vintage-ink-light/20">
              <h3 className="font-medium mb-2">Two-Factor Authentication</h3>
              <div className="flex items-center justify-between">
                <span className="text-vintage-ink/70 dark:text-vintage-ink-light/70">
                  Add an extra layer of security to your account
                </span>
                <button className="px-3 py-1.5 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90 transition-colors text-sm">
                  Enable
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Communication Preferences */}
        <div className="vintage-frame p-6 dark:border-vintage-ink-light/30">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Communication Preferences</h2>
            <button className="flex items-center gap-2 px-3 py-1.5 border border-vintage-ink/30 dark:border-vintage-ink-light/30 hover:bg-vintage-ink/5 dark:hover:bg-vintage-ink-light/5 transition-colors">
              <Edit className="h-4 w-4" />
              <span className="text-sm">Edit</span>
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked
                disabled
                className="rounded border-vintage-ink/30 dark:border-vintage-ink-light/30 text-vintage-ink dark:text-vintage-ink-light focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
              />
              <span>Email notifications for new products</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked
                disabled
                className="rounded border-vintage-ink/30 dark:border-vintage-ink-light/30 text-vintage-ink dark:text-vintage-ink-light focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
              />
              <span>Email notifications for order updates</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                disabled
                className="rounded border-vintage-ink/30 dark:border-vintage-ink-light/30 text-vintage-ink dark:text-vintage-ink-light focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
              />
              <span>SMS notifications</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked
                disabled
                className="rounded border-vintage-ink/30 dark:border-vintage-ink-light/30 text-vintage-ink dark:text-vintage-ink-light focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
              />
              <span>Promotional emails and special offers</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

