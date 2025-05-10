import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, Shield, Cpu, Server, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Teamspeak() {
  const navigate = useNavigate();
  const [slots, setSlots] = useState(32);
  const [serverName, setServerName] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('ts3.cloud');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [customAddress, setCustomAddress] = useState('');

  const domainOptions = [
    { value: 'ts3.cloud', label: 'ts3.cloud' },
    { value: 'teamspeak.cloud', label: 'teamspeak.cloud' },
    { value: 'voice.cloud', label: 'voice.cloud' }
  ];

  const getFullAddress = () => {
    return customAddress ? `${customAddress}.${selectedDomain}` : selectedDomain;
  };

  const calculatePrice = () => {
    return (slots * 0.08).toFixed(2); // 8 Cent pro Slot
  };

  const features = [
    {
      icon: Shield,
      title: 'DDoS-Schutz',
      description: 'Automatischer Schutz vor Angriffen'
    },
    {
      icon: Cpu,
      title: 'Hohe Leistung',
      description: 'Beste Sprachqualität'
    },
    {
      icon: Server,
      title: 'Eigene Domain',
      description: 'Kostenlose .ts3.cloud Domain'
    },
    {
      icon: Users,
      title: 'Unbegrenzte Kanäle',
      description: 'Keine Kanal-Limitierung'
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
    const orderDetails = {
      productName: 'TeamSpeak Server',
      price: parseFloat(calculatePrice()),
      features: [
        { label: 'Slots', value: `${slots} Slots` },
        { label: 'DDoS-Schutz', value: 'Inklusive' },
        { label: 'Wunschadresse', value: getFullAddress() },
        { label: 'Unbegrenzte Kanäle', value: 'Inklusive' }
      ]
    };

    navigate('/order', { state: { orderDetails } });
  };

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
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-semibold mb-6 dark:text-white">TeamSpeak Konfigurator</h2>
              <div className="w-full space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Anzahl der Slots
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="500"
                    value={slots}
                    onChange={(e) => setSlots(parseInt(e.target.value))}
                    className="w-full accent-primary dark:accent-primary-light"
                  />
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                    <span>5 Slots</span>
                    <span>{slots} Slots</span>
                    <span>500 Slots</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Wunschadresse
                  </label>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <input
                        type="text"
                        value={customAddress}
                        onChange={(e) => setCustomAddress(e.target.value)}
                        placeholder="deine-adresse"
                        className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent dark:text-white"
                      />
                    </div>
                    <div className="relative">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary dark:hover:border-primary-light transition-colors min-w-[180px]"
                      >
                        <span className="text-gray-700 dark:text-gray-300">.{selectedDomain}</span>
                        <ChevronDown className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isDropdownOpen && (
                        <div className="absolute z-10 w-[180px] mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
                          {domainOptions.map((option) => (
                            <button
                              key={option.value}
                              onClick={() => {
                                setSelectedDomain(option.value);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors ${
                                selectedDomain === option.value
                                  ? 'text-primary dark:text-primary-light bg-primary/5 dark:bg-primary/10'
                                  : 'text-gray-700 dark:text-gray-300'
                              }`}
                            >
                              .{option.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Beispiel: {customAddress ? getFullAddress() : `deine-adresse.${selectedDomain}`}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-6 rounded-lg border border-primary/10 dark:border-primary/20">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold dark:text-white">Deine Konfiguration</h3>
                <div className="text-2xl font-bold text-primary dark:text-primary-light">
                  {calculatePrice()} €<span className="text-lg font-normal text-gray-600 dark:text-gray-400">/Monat</span>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center bg-white/50 dark:bg-gray-700/50 p-3 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">Slots:</span>
                  <span className="font-medium text-primary dark:text-primary-light">{slots} Slots</span>
                </div>
                <div className="flex justify-between items-center bg-white/50 dark:bg-gray-700/50 p-3 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">Wunschadresse:</span>
                  <span className="font-medium text-primary dark:text-primary-light">
                    {getFullAddress()}
                  </span>
                </div>
              </div>
              <button 
                className="w-full bg-primary dark:bg-primary-light text-white py-3 rounded-lg hover:bg-primary-light dark:hover:bg-primary transition-colors"
                onClick={handleOrder}
              >
                Jetzt bestellen
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12 dark:text-white">
            Inklusive Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
              >
                <feature.icon className="h-12 w-12 text-primary dark:text-primary-light mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
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
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-white/5 dark:backdrop-blur-xl">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-white/90 dark:text-white/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}