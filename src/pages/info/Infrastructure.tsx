import { motion } from 'framer-motion';

export function Infrastructure() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] py-24">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px]" />
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
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Netzwerk</h3>
            <p className="text-gray-600">
              Redundante Netzwerkanbindung mit mehreren 100 GBit/s Uplinks und DDoS-Schutz.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Hardware</h3>
            <p className="text-gray-600">
              Modernste Server-Hardware von führenden Herstellern für maximale Zuverlässigkeit.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Sicherheit</h3>
            <p className="text-gray-600">
              24/7 Überwachung und mehrstufige Sicherheitssysteme zum Schutz Ihrer Daten.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Verfügbarkeit</h3>
            <p className="text-gray-600">
              99,9% garantierte Verfügbarkeit durch redundante Systeme und USV-Anlagen.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Technische Details</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
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