import { motion } from 'framer-motion';

export function Infrastructure() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] overflow-hidden dark:from-[#0B3D91]/90 dark:to-[#1E88E5]/90 py-24">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px] dark:bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent dark:from-primary/40" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl font-display font-bold mb-8">Infrastruktur</h1>
            <p className="text-xl text-white/90 mb-6">
              Unsere moderne Infrastruktur bietet höchste Verfügbarkeit und Leistung für Ihre Dienste.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Netzwerk</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Redundante Netzwerkanbindung mit mehreren 100 GBit/s Uplinks und DDoS-Schutz.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Hardware</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Modernste Server-Hardware von führenden Herstellern für maximale Zuverlässigkeit.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Sicherheit</h3>
            <p className="text-gray-600 dark:text-gray-300">
              24/7 Überwachung und mehrstufige Sicherheitssysteme zum Schutz Ihrer Daten.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Verfügbarkeit</h3>
            <p className="text-gray-600 dark:text-gray-300">
              99,9% garantierte Verfügbarkeit durch redundante Systeme und USV-Anlagen.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Technische Details</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          <li>Mehrere redundante Stromversorgungen</li>
          <li>Klimatisierte Serverräume mit präziser Temperaturkontrolle</li>
          <li>Automatische Backup-Systeme</li>
          <li>Modernste Firewall-Systeme</li>
          <li>24/7 technischer Support</li>
        </ul>
      </div>
    </div>
  );
}