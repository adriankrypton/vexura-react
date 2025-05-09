import { Check, Shield, Gauge, Globe, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function VPN() {
  const navigate = useNavigate();
  const locations = [
    { city: 'Frankfurt', country: 'Deutschland' },
    { city: 'Amsterdam', country: 'Niederlande' },
    { city: 'London', country: 'Großbritannien' },
    { city: 'Paris', country: 'Frankreich' },
    { city: 'Warschau', country: 'Polen' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'DDoS Protection',
      description: 'Automatischer Schutz vor DDoS-Angriffen'
    },
    {
      icon: Gauge,
      title: 'High Performance',
      description: 'Unbegrenzte Bandbreite & niedrige Latenz'
    },
    {
      icon: Globe,
      title: 'Beste Anbindung',
      description: 'Multiple Carrier & strategische Standorte'
    }
  ];

  const handleOrder = () => {
    navigate('/order', {
      state: {
        orderDetails: {
          productName: 'VPN',
          price: 4.99,
          features: [
            { label: 'Benutzer', value: 'Bis zu 3 gleichzeitige Verbindungen' },
            { label: 'Bandbreite', value: 'Unbegrenzt' },
            { label: 'Protokollierung', value: 'Keine' },
            { label: 'Protokoll', value: 'OpenVPN & WireGuard' },
            { label: 'Standorte', value: '5 europäische Standorte' }
          ],
          type: 'vpn'
        }
      }
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero-Sektion mit Hauptüberschrift und Features */}
      <div className="relative bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] overflow-hidden dark:from-[#0B3D91]/90 dark:to-[#1E88E5]/90">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px] dark:bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent dark:from-primary/40" />
        <div className="container mx-auto px-2 md:px-4 py-12 md:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6">
              VPN
            </h1>
            <p className="text-base md:text-xl mb-6 md:mb-8 text-white/90">
              Maximale Sicherheit und volle Geschwindigkeit: Unser VPN-Dienst bietet Ihnen die perfekte Balance für Ihre Online-Aktivitäten.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-4 md:p-6 dark:bg-white/5 dark:backdrop-blur-xl"
                >
                  <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-accent-turquoise mb-3 md:mb-4" />
                  <h3 className="text-base md:text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-sm md:text-base text-white/80 dark:text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Hauptprodukt */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">VPN für bis zu 3 Benutzer</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Unser VPN-Dienst bietet Ihnen eine sichere und schnelle Verbindung zu unseren Servern in ganz Europa.
                Perfekt für kleine Teams oder Familien, die ihre Online-Privatsphäre schützen möchten.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary dark:text-primary-light" />
                  <span className="text-gray-700 dark:text-gray-200">Bis zu 3 gleichzeitige Verbindungen</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary dark:text-primary-light" />
                  <span className="text-gray-700 dark:text-gray-200">Unbegrenzte Bandbreite</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary dark:text-primary-light" />
                  <span className="text-gray-700 dark:text-gray-200">Keine Protokollierung</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary dark:text-primary-light" />
                  <span className="text-gray-700 dark:text-gray-200">OpenVPN & WireGuard Protokoll</span>
                </div>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">4,99€</span>
                <span className="text-gray-600 dark:text-gray-300">/Monat</span>
              </div>
            </div>

            <div className="w-full md:w-1/3 bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Verfügbare Standorte</h3>
              <ul className="space-y-2">
                {locations.map((location, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                    <Check className="h-4 w-4 text-primary dark:text-primary-light" />
                    <span>{location.city}, {location.country}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <button 
              onClick={handleOrder}
              className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-primary to-primary-light dark:from-primary-light dark:to-primary text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Jetzt bestellen
            </button>
          </div>
        </div>

        {/* Technische Details */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Technische Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-primary dark:text-primary-light" />
                <span className="text-gray-700 dark:text-gray-200">OpenVPN & WireGuard Protokoll</span>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-primary dark:text-primary-light" />
                <span className="text-gray-700 dark:text-gray-200">AES-256 Verschlüsselung</span>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-primary dark:text-primary-light" />
                <span className="text-gray-700 dark:text-gray-200">Keine Geschwindigkeitsbegrenzung</span>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-primary dark:text-primary-light" />
                <span className="text-gray-700 dark:text-gray-200">Keine Datenprotokollierung</span>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-primary dark:text-primary-light" />
                <span className="text-gray-700 dark:text-gray-200">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] dark:from-[#0B3D91]/90 dark:to-[#1E88E5]/90 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              Häufig gestellte Fragen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-white/5 dark:backdrop-blur-xl">
                <h3 className="text-lg font-semibold mb-2 text-white">Was ist ein VPN?</h3>
                <p className="text-white/90 dark:text-white/80">Ein VPN (Virtual Private Network) ist ein Dienst, der Ihre Internetverbindung verschlüsselt und Ihre Online-Aktivitäten vor neugierigen Blicken schützt. Es leitet Ihren Datenverkehr über einen sicheren Server um und verbirgt Ihre IP-Adresse.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-white/5 dark:backdrop-blur-xl">
                <h3 className="text-lg font-semibold mb-2 text-white">Welche Geräte werden unterstützt?</h3>
                <p className="text-white/90 dark:text-white/80">Unser VPN-Dienst unterstützt alle gängigen Betriebssysteme und Geräte, einschließlich Windows, macOS, Linux, iOS und Android. Wir bieten auch Konfigurationsdateien für Router an.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-white/5 dark:backdrop-blur-xl">
                <h3 className="text-lg font-semibold mb-2 text-white">Wie schnell ist die Verbindung?</h3>
                <p className="text-white/90 dark:text-white/80">Unsere VPN-Server bieten unbegrenzte Bandbreite und optimale Geschwindigkeit. Die tatsächliche Geschwindigkeit hängt von Ihrer Internetverbindung und dem gewählten Serverstandort ab.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-white/5 dark:backdrop-blur-xl">
                <h3 className="text-lg font-semibold mb-2 text-white">Gibt es eine Mindestvertragslaufzeit?</h3>
                <p className="text-white/90 dark:text-white/80">Nein, unser VPN-Dienst kann monatlich gekündigt werden. Wir bieten auch Rabatte bei längerer Vertragsbindung an.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 