import { Save } from "lucide-react"
import MobileAccountTabs from "../components/mobile-account-tabs"

export default function SettingsPage() {
  return (
    <>
      {/* Mobile Tabs */}
      <MobileAccountTabs />

      {/* Settings */}
      <div className="space-y-6">
        {/* Account Settings */}
        <div className="vintage-frame p-6 dark:border-vintage-ink-light/30">
          <h1 className="text-2xl font-bold mb-6 vintage-heading">Account Settings</h1>

          {/* Language Preference */}
          <div className="mb-6 pb-6 border-b border-vintage-ink/20 dark:border-vintage-ink-light/20">
            <h2 className="text-lg font-semibold mb-4">Language & Region</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-1">
                  Language
                </label>
                <select className="w-full px-3 py-2 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-1">Region</label>
                <select className="w-full px-3 py-2 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light">
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="au">Australia</option>
                </select>
              </div>
            </div>
          </div>

          {/* Currency & Measurement */}
          <div className="mb-6 pb-6 border-b border-vintage-ink/20 dark:border-vintage-ink-light/20">
            <h2 className="text-lg font-semibold mb-4">Currency & Measurement</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-1">
                  Currency
                </label>
                <select className="w-full px-3 py-2 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light">
                  <option value="usd">USD ($)</option>
                  <option value="eur">EUR (€)</option>
                  <option value="gbp">GBP (£)</option>
                  <option value="cad">CAD ($)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-1">
                  Measurement System
                </label>
                <select className="w-full px-3 py-2 bg-vintage-paper dark:bg-vintage-paper-dark border border-vintage-ink/30 dark:border-vintage-ink-light/30 focus:outline-none focus:ring-1 focus:ring-vintage-ink dark:focus:ring-vintage-ink-light">
                  <option value="imperial">Imperial (in, ft, lb)</option>
                  <option value="metric">Metric (cm, m, kg)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Theme Settings */}
          <div className="mb-6 pb-6 border-b border-vintage-ink/20 dark:border-vintage-ink-light/20">
            <h2 className="text-lg font-semibold mb-4">Theme Settings</h2>
            <div>
              <label className="block text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70 mb-1">
                Theme Mode
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="theme"
                    value="light"
                    className="text-vintage-ink dark:text-vintage-ink-light focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                  />
                  <span>Light</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="theme"
                    value="dark"
                    className="text-vintage-ink dark:text-vintage-ink-light focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                  />
                  <span>Dark</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="theme"
                    value="system"
                    checked
                    className="text-vintage-ink dark:text-vintage-ink-light focus:ring-vintage-ink dark:focus:ring-vintage-ink-light"
                  />
                  <span>System Default</span>
                </label>
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Privacy Settings</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Data Collection</h3>
                  <p className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">
                    Allow us to collect usage data to improve your experience
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-vintage-ink dark:peer-checked:bg-vintage-ink-light"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Personalized Recommendations</h3>
                  <p className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">
                    Receive product recommendations based on your browsing history
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-vintage-ink dark:peer-checked:bg-vintage-ink-light"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Cookie Preferences</h3>
                  <p className="text-sm text-vintage-ink/70 dark:text-vintage-ink-light/70">
                    Manage your cookie preferences
                  </p>
                </div>
                <button className="text-sm underline">Manage</button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-8 flex justify-end">
            <button className="px-6 py-2 bg-vintage-ink dark:bg-vintage-ink-light text-vintage-paper dark:text-vintage-paper-dark hover:bg-vintage-ink/90 dark:hover:bg-vintage-ink-light/90 transition-colors flex items-center gap-2">
              <Save className="h-4 w-4" />
              <span>Save Settings</span>
            </button>
          </div>
        </div>

        {/* Delete Account */}
        <div className="vintage-frame p-6 dark:border-vintage-ink-light/30 bg-red-50 dark:bg-red-900/10">
          <h2 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">Delete Account</h2>
          <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button className="px-4 py-2 border border-red-500 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </>
  )
}

