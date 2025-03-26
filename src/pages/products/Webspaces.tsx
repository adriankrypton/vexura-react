import { motion } from 'framer-motion';

export function Webspaces() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-display font-bold mb-8">Webspaces</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Professionelle Webhosting-Lösungen für Ihre Website.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Basic Plan */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Basic</h3>
              <p className="text-3xl font-bold mb-6">4,99 €<span className="text-lg text-gray-600">/Monat</span></p>
              <ul className="space-y-3">
                <li>5 GB SSD Speicher</li>
                <li>1 Domain</li>
                <li>5 Datenbanken</li>
                <li>SSL-Zertifikat</li>
                <li>24/7 Support</li>
              </ul>
            </div>

            {/* Professional Plan */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-primary">
              <h3 className="text-xl font-semibold mb-4">Professional</h3>
              <p className="text-3xl font-bold mb-6">9,99 €<span className="text-lg text-gray-600">/Monat</span></p>
              <ul className="space-y-3">
                <li>20 GB SSD Speicher</li>
                <li>5 Domains</li>
                <li>Unbegrenzte Datenbanken</li>
                <li>SSL-Zertifikat</li>
                <li>24/7 Premium Support</li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <p className="text-3xl font-bold mb-6">19,99 €<span className="text-lg text-gray-600">/Monat</span></p>
              <ul className="space-y-3">
                <li>50 GB SSD Speicher</li>
                <li>Unbegrenzte Domains</li>
                <li>Unbegrenzte Datenbanken</li>
                <li>Wildcard SSL</li>
                <li>24/7 Priority Support</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Performance</h3>
                <ul className="space-y-2">
                  <li>SSD Speicher</li>
                  <li>PHP 8.x Support</li>
                  <li>HTTP/3 Support</li>
                  <li>Redis Cache</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Sicherheit</h3>
                <ul className="space-y-2">
                  <li>DDoS Schutz</li>
                  <li>Tägliche Backups</li>
                  <li>SSL Zertifikate</li>
                  <li>Malware Schutz</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}