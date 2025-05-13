import { motion } from 'framer-motion';

export function Reselling() {
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
            <h1 className="text-4xl font-display font-bold mb-8">Reselling</h1>
            <p className="text-xl text-white/90 mb-6">
              Werden Sie Teil unseres Erfolgs - Starten Sie Ihr eigenes Hosting-Geschäft mit unseren Reselling-Lösungen.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="prose max-w-none dark:prose-invert">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Vollständiges Produktportfolio</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Als Reseller haben Sie Zugriff auf unser gesamtes Produktportfolio. Alle Hosting-Lösungen, die wir Privatkunden anbieten, stehen auch Ihnen zur Verfügung. Von Shared Hosting über VPS bis hin zu dedizierten Servern - Sie können Ihren Kunden die komplette Bandbreite unserer Services anbieten.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Attraktive Konditionen</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Profitieren Sie von besonders günstigen Konditionen, die sich nach Ihrem Absatzvolumen richten. Je mehr Sie verkaufen, desto bessere Preise können wir Ihnen anbieten. So maximieren Sie Ihre Gewinnmarge und bleiben dabei wettbewerbsfähig.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Whitelabel-Lösung</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Mit unserer Whitelabel-Lösung können Sie unsere Services unter Ihrer eigenen Marke anbieten. Ihre Kunden sehen nur Ihr Branding - wir bleiben im Hintergrund. So bauen Sie Ihre eigene Marke auf und behalten die volle Kontrolle über Ihre Kundenbeziehungen.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">API-Integration</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Nutzen Sie unsere umfassende API für eine nahtlose Integration in Ihre bestehenden Systeme. Automatisieren Sie Bestellungen, verwalten Sie Kunden und überwachen Sie Ihre Services - alles über unsere leistungsstarke API.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Bereit für den nächsten Schritt?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Kontaktieren Sie uns noch heute und erfahren Sie, wie Sie von unseren Reselling-Lösungen profitieren können.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Jetzt Partner werden
            </button>
          </div>

          {/* FAQ Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] dark:from-[#0B3D91]/90 dark:to-[#1E88E5]/90 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-3xl font-display font-bold text-center mb-12">
                Häufig gestellte Fragen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-white/5 dark:backdrop-blur-xl">
                  <h3 className="text-lg font-semibold mb-2 text-white">Wie funktioniert das Reselling-Modell?</h3>
                  <p className="text-white/90 dark:text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-white/5 dark:backdrop-blur-xl">
                  <h3 className="text-lg font-semibold mb-2 text-white">Welche Mindestabnahme ist erforderlich?</h3>
                  <p className="text-white/90 dark:text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-white/5 dark:backdrop-blur-xl">
                  <h3 className="text-lg font-semibold mb-2 text-white">Wie funktioniert die Whitelabel-Lösung?</h3>
                  <p className="text-white/90 dark:text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-white/5 dark:backdrop-blur-xl">
                  <h3 className="text-lg font-semibold mb-2 text-white">Welche Support-Möglichkeiten gibt es?</h3>
                  <p className="text-white/90 dark:text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}