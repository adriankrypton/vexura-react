import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, Shield, Cpu, Server } from 'lucide-react';

export function Teamspeak() {
  const [slots, setSlots] = useState(32);
  const [serverName, setServerName] = useState('');

  const calculatePrice = () => {
    return (slots * 0.08).toFixed(2); // 8 Cent pro Slot
  };

  const features = [
    {
      icon: Shield,
      title: 'DDoS Protection',
      description: 'Automatischer Schutz vor Angriffen'
    },
    {
      icon: Cpu,
      title: 'High Performance',
      description: 'Beste Sprachqualität'
    },
    {
      icon: Server,
      title: 'Eigene Domain',
      description: 'Kostenlose .ts3.cloud Domain'
    },
    {
      icon: Users,
      title: 'Unbegrenzte Channels',
      description: 'Keine Channel-Limitierung'
    }
  ];

  const faqs = [
    {
      question: 'Wie schnell ist mein TeamSpeak Server verfügbar?',
      answer: 'Dein TeamSpeak Server wird sofort nach der Bestellung automatisch eingerichtet und ist innerhalb weniger Sekunden verfügbar.'
    },
    {
      question: 'Kann ich die Anzahl der Slots später ändern?',
      answer: 'Ja, du kannst die Anzahl der Slots jederzeit erhöhen oder verringern. Die Änderung wird sofort wirksam.'
    },
    {
      question: 'Welche TeamSpeak Version wird unterstützt?',
      answer: 'Wir unterstützen die neueste TeamSpeak 3 Version und halten deinen Server immer automatisch aktuell.'
    },
    {
      question: 'Gibt es eine Mindestlaufzeit?',
      answer: 'Nein, du kannst monatlich kündigen. Es gibt keine langfristige Vertragsbindung.'
    }
  ];

  const handleOrder = () => {
    // Implement the order handling logic here
  };

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
            <h1 className="text-5xl font-display font-bold mb-6">
              TeamSpeak Server
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Professionelle TeamSpeak Server mit maximaler Performance und Kontrolle
            </p>
          </motion.div>
        </div>
      </div>

      {/* Configurator */}
      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-semibold mb-6">TeamSpeak Konfigurator</h2>
              <div className="w-full">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Anzahl der Slots
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="500"
                    value={slots}
                    onChange={(e) => setSlots(parseInt(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>5 Slots</span>
                    <span>{slots} Slots</span>
                    <span>500 Slots</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg border border-primary/10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Deine Konfiguration</h3>
                <div className="text-2xl font-bold">
                  {calculatePrice()} €<span className="text-lg font-normal text-gray-600">/Monat</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex justify-between">
                  <span className="text-gray-600">Slots:</span>
                  <span className="font-medium">{slots} Slots</span>
                </li>
              </ul>
              <button 
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-light transition-colors"
                onClick={handleOrder}
              >
                Jetzt bestellen
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Inklusive Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Häufig gestellte Fragen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-white/90">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}