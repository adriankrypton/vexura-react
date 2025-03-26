import { motion } from 'framer-motion';

export function Teamspeak() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-display font-bold mb-8">Teamspeak Server</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Hochwertige Teamspeak-Server für Ihre Community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Basic</h3>
              <p className="text-3xl font-bold mb-4">4,99 €<span className="text-sm font-normal">/Monat</span></p>
              <ul className="space-y-2 mb-6">
                <li>32 Slots</li>
                <li>Unbegrenzte Traffic</li>
                <li>DDoS Protection</li>
                <li>24/7 Support</li>
              </ul>
              <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-light transition-colors">
                Jetzt bestellen
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-primary">
              <h3 className="text-xl font-semibold mb-4">Pro</h3>
              <p className="text-3xl font-bold mb-4">9,99 €<span className="text-sm font-normal">/Monat</span></p>
              <ul className="space-y-2 mb-6">
                <li>64 Slots</li>
                <li>Unbegrenzte Traffic</li>
                <li>DDoS Protection</li>
                <li>24/7 Support</li>
                <li>Premium Voice Codec</li>
              </ul>
              <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-light transition-colors">
                Jetzt bestellen
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <p className="text-3xl font-bold mb-4">19,99 €<span className="text-sm font-normal">/Monat</span></p>
              <ul className="space-y-2 mb-6">
                <li>512 Slots</li>
                <li>Unbegrenzte Traffic</li>
                <li>DDoS Protection</li>
                <li>24/7 Priority Support</li>
                <li>Premium Voice Codec</li>
                <li>Eigene IP-Adresse</li>
              </ul>
              <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-light transition-colors">
                Jetzt bestellen
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}