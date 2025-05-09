import { motion } from 'framer-motion';
import { LocationSelector } from '../../components/LocationSelector';
import { useState } from 'react';
import { Users, Shield, Cpu, Server } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Config {
  slots: number;
  ram: number;
}

export function Teamspeak() {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState<string>('nuremberg');
  const [config, setConfig] = useState<Config>({
    slots: 32,
    ram: 2
  });

  const calculatePrice = () => {
    const basePrice = 5;
    const slotPrice = config.slots * 0.1;
    const ramPrice = config.ram * 2;
    return (basePrice + slotPrice + ramPrice).toFixed(2);
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

  const handleCustomOrder = () => {
    navigate('/order', {
      state: {
        type: 'teamspeak',
        config: {
          ...config,
          location: selectedLocation
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
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl font-display font-bold mb-6">
              Teamspeak Server
            </h1>
            <p className="text-xl mb-8 text-white/90 dark:text-white/80">
              Professionelle Teamspeak-Server für Ihre Community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 dark:bg-white/5 dark:backdrop-blur-xl"
                >
                  <feature.icon className="h-8 w-8 text-accent-turquoise mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/80 dark:text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-2 md:px-4 py-8 md:py-12">
        {/* Standortauswahl */}
        <div className="mb-8 md:mb-12">
          <div className="w-full">
            <LocationSelector
              selectedLocation={selectedLocation}
              onLocationSelect={(location) => {
                setSelectedLocation(location);
              }}
            />
          </div>
        </div>

        {/* Konfigurator */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">Teamspeak Server Konfigurator</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 -mt-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Slots
                </label>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  value={config.slots}
                  onChange={(e) => setConfig({ ...config, slots: Number(e.target.value) })}
                  className="w-full accent-primary dark:accent-primary-light"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <span>10</span>
                  <span>{config.slots}</span>
                  <span>1000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  RAM (GB)
                </label>
                <input
                  type="range"
                  min="1"
                  max="16"
                  value={config.ram}
                  onChange={(e) => setConfig({ ...config, ram: Number(e.target.value) })}
                  className="w-full accent-primary dark:accent-primary-light"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <span>1 GB</span>
                  <span>{config.ram} GB</span>
                  <span>16 GB</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 dark:text-white">Ihre Konfiguration</h2>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-6 rounded-lg border border-primary/10 dark:border-primary/20">
                <ul className="space-y-3 mb-6 dark:text-gray-300">
                  <li className="flex justify-between">
                    <span>Region:</span>
                    <span className="font-medium">
                      {selectedLocation ? (selectedLocation === 'nuremberg' ? 'Nürnberg' : 'Eygelshoven') : 'Nicht ausgewählt'}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Slots:</span>
                    <span className="font-medium">{config.slots}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>RAM:</span>
                    <span className="font-medium">{config.ram} GB</span>
                  </li>
                </ul>
                <div className="text-3xl font-bold mb-4 text-primary dark:text-primary-light">
                  {calculatePrice()} €<span className="text-sm font-normal text-gray-600 dark:text-gray-400">/Monat</span>
                </div>
                <button 
                  className="w-full bg-primary dark:bg-primary-light text-white py-3 rounded-lg hover:bg-primary-light dark:hover:bg-primary transition-colors"
                  onClick={handleCustomOrder}
                >
                  Jetzt bestellen →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}