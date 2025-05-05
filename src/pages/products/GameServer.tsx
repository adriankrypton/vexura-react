import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, Shield, Cpu, Server, Clock, Gauge, Globe } from 'lucide-react';
import { LocationSelector } from '../../components/LocationSelector';
import { useNavigate } from 'react-router-dom';

// Interface für GameServer-Pakete
interface Package {
  name: string;        // Name des Pakets (z.B. "Starter", "Professional")
  price: number;       // Monatlicher Preis in Euro
  slots: number;       // Anzahl der Spieler-Slots
  ram: number;         // RAM in GB
  storage: number;     // Speicherplatz in GB
  cpu: number;         // CPU-Kerne
  bandwidth: string;   // Bandbreite (z.B. "1 Gbit/s")
}

// Interface für den Konfigurator-Zustand
interface ConfiguratorState {
  slots: number;       // Ausgewählte Spieler-Slots
  ram: number;         // Ausgewähltes RAM
  storage: number;     // Ausgewählter Speicher
  game: string;        // Ausgewähltes Spiel
}

export function GameServer() {
  // Navigation-Hook für die Weiterleitung
  const navigate = useNavigate();
  
  // Zustand für den ausgewählten Standort
  const [selectedLocation, setSelectedLocation] = useState<string>('nuremberg');
  
  // Zustand für die Server-Konfiguration
  const [config, setConfig] = useState<ConfiguratorState>({
    slots: 10,
    ram: 4,
    storage: 50,
    game: 'minecraft',
  });

  // Liste der unterstützten Spiele
  const games = [
    { id: 'minecraft', name: 'Minecraft', icon: '🎮' },
    { id: 'cs2', name: 'Counter-Strike 2', icon: '🔫' },
    { id: 'rust', name: 'Rust', icon: '🏗️' },
    { id: 'ark', name: 'ARK: Survival Evolved', icon: '🦖' },
    { id: 'valheim', name: 'Valheim', icon: '⚔️' },
    { id: 'gmod', name: 'Garry\'s Mod', icon: '🔧' },
  ];

  // Funktion zur Berechnung der Paketpreise basierend auf dem Standort
  const getPackages = (location: string): Package[] => {
    // Basis-Pakete mit Standardpreisen
    const basePackages: Package[] = [
      {
        name: 'Starter',
        price: 9.99,
        slots: 10,
        ram: 4,
        storage: 50,
        cpu: 2,
        bandwidth: '1 Gbit/s'
      },
      {
        name: 'Professional',
        price: 19.99,
        slots: 20,
        ram: 8,
        storage: 100,
        cpu: 4,
        bandwidth: '1 Gbit/s'
      },
      {
        name: 'Business',
        price: 39.99,
        slots: 40,
        ram: 16,
        storage: 200,
        cpu: 8,
        bandwidth: '1 Gbit/s'
      },
      {
        name: 'Enterprise',
        price: 79.99,
        slots: 80,
        ram: 32,
        storage: 400,
        cpu: 16,
        bandwidth: '1 Gbit/s'
      }
    ];

    // Anpassung der Preise basierend auf dem Standort
    return basePackages.map(pkg => ({
      ...pkg,
      price: location === 'eygelshoven' ? pkg.price * 0.95 : pkg.price
    }));
  };

  // Liste der Hauptfunktionen des Game Servers
  const features = [
    {
      icon: Shield,
      title: 'DDoS Protection',
      description: 'Automatischer Schutz vor DDoS-Angriffen'
    },
    {
      icon: Gauge,
      title: 'High Performance',
      description: 'SSD Speicher & High-End Hardware'
    },
    {
      icon: Globe,
      title: 'Beste Anbindung',
      description: 'Multiple Carrier & niedrige Latenz'
    }
  ];

  // Funktion zur Berechnung des Preises für die individuelle Konfiguration
  // Grüße an meinen Kollegen fürs Helfen, da war ich net so richtig drin im Thema <3
  const calculatePrice = () => {
    const locationMultiplier = selectedLocation === 'eygelshoven' ? 0.95 : 1;
    return (
      (config.slots * 0.5 +
      config.ram * 2 +
      config.storage * 0.1) * locationMultiplier
    ).toFixed(2);
  };

  // Häufig gestellte Fragen
  const faqs = [
    {
      question: 'Welche Spiele werden unterstützt?',
      answer: 'Wir unterstützen alle gängigen Spiele wie Minecraft, CS2, Rust, ARK, Valheim und viele mehr. Die vollständige Liste finden Sie in unserem Konfigurator.'
    },
    {
      question: 'Kann ich Mods installieren?',
      answer: 'Ja, Sie haben vollen Zugriff auf Ihren Server und können Mods, Plugins und andere Erweiterungen nach Belieben installieren.'
    },
    {
      question: 'Wie schnell ist die Bereitstellung?',
      answer: 'Die Bereitstellung Ihres Game Servers erfolgt vollautomatisch innerhalb weniger Minuten nach Zahlungseingang.'
    },
    {
      question: 'Gibt es eine Mindestvertragslaufzeit?',
      answer: 'Nein, unsere Server können monatlich gekündigt werden. Wir bieten auch Rabatte bei längerer Vertragsbindung an.'
    }
  ];

  // Funktion zum Bestellen eines vorkonfigurierten Pakets
  const handleOrder = (pkg: Package) => {
    navigate('/order/game-select', {
      state: {
        orderDetails: {
          productName: `Game Server - ${pkg.name}`,
          price: pkg.price,
          features: [
            { label: 'Slots', value: `${pkg.slots} Spieler` },
            { label: 'RAM', value: `${pkg.ram} GB` },
            { label: 'Speicher', value: `${pkg.storage} GB SSD` },
            { label: 'CPU', value: `${pkg.cpu} Kerne` },
            { label: 'Bandbreite', value: pkg.bandwidth },
            { label: 'Standort', value: selectedLocation === 'nuremberg' ? 'Nürnberg' : 'Eygelshoven' },
          ],
          isGameServer: true,
        },
      },
    });
  };

  // Funktion zum Bestellen einer individuellen Konfiguration
  const handleCustomOrder = () => {
    navigate('/order/game-select', {
      state: {
        orderDetails: {
          productName: 'Game Server (Konfigurator)',
          price: calculatePrice(),
          features: [
            { label: 'Spiel', value: games.find(g => g.id === config.game)?.name || '' },
            { label: 'Slots', value: `${config.slots} Spieler` },
            { label: 'RAM', value: `${config.ram} GB` },
            { label: 'Speicher', value: `${config.storage} GB SSD` },
            { label: 'Standort', value: selectedLocation === 'nuremberg' ? 'Nürnberg' : 'Eygelshoven' },
          ],
          isGameServer: true,
          image: undefined,
        },
      },
    });
  };

  return (
    <div>
      {/* Hero mit Hauptüberschrift und Features */}
      <div className="relative bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl font-display font-bold mb-6">
              Gameserver
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Hochperformante Server für dein optimales Gaming-Erlebnis. Starte in wenigen Minuten durch!
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-2 md:px-4 py-8 md:py-12">
        {/* Standortauswahl */}
        <div className="mb-8 md:mb-12">
          <LocationSelector
            selectedLocation={selectedLocation}
            onLocationSelect={(location) => {
              setSelectedLocation(location);
            }}
          />
        </div>

        {/*  Pakete */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {getPackages(selectedLocation).map((pkg) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onClick={() => handleOrder(pkg)}
            >
              <div className="relative h-48">
                <div className="absolute inset-0">
                  <img 
                    src="/img/gameserver.jpg" 
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="absolute top-2 left-2">
                  <div className="bg-white/90 text-primary px-2 py-1 rounded text-sm font-medium">
                    bereits ab {pkg.price.toFixed(2)} €
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center px-4">
                    {pkg.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Konfigurator */}
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 border border-gray-200 mb-12 md:mb-16">
          <h2 className="text-2xl font-semibold mb-6">Gameserver Konfigurator</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 -mt-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  RAM (GB)
                </label>
                <input
                  type="range"
                  min="2"
                  max="32"
                  value={config.ram}
                  onChange={(e) => setConfig({ ...config, ram: parseInt(e.target.value) })}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>2 GB</span>
                  <span>{config.ram} GB</span>
                  <span>32 GB</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Speicher (GB)
                </label>
                <input
                  type="range"
                  min="20"
                  max="500"
                  value={config.storage}
                  onChange={(e) => setConfig({ ...config, storage: parseInt(e.target.value) })}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>20 GB</span>
                  <span>{config.storage} GB</span>
                  <span>500 GB</span>
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
                  <span className="text-gray-600">Spiel:</span>
                  <span className="font-medium">
                    {games.find(g => g.id === config.game)?.name}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Region:</span>
                  <span className="font-medium">
                    {selectedLocation === 'nuremberg' ? 'Nürnberg' : 'Eygelshoven'}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">RAM:</span>
                  <span className="font-medium">{config.ram} GB</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Speicher:</span>
                  <span className="font-medium">{config.storage} GB</span>
                </li>
              </ul>
              <button 
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-light transition-colors"
                onClick={handleCustomOrder}
              >
                Jetzt bestellen
              </button>
            </div>
          </div>
        </div>

        {/* FAQ-Sektion */}
        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16 mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Inklusive Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full"
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
                  <div className="h-1 bg-gradient-to-r from-primary/50 to-primary w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mt-6" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}