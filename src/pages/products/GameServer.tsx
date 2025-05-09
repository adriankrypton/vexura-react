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
    game: '',  // Start with no game selected
  });

  // Liste der unterstützten Spiele
  const games = [
    { id: 'minecraftjava', name: 'Minecraft Java', icon: '🎮', previewImage: '/img/mcbedrock.webp' },
    { id: 'mcbedrock', name: 'Minecraft Bedrock', icon: '🎮', previewImage: '/img/minecraftjava.webp' },
    { id: 'csgo2', name: 'Counter-Strike 2', icon: '🔫', previewImage: '/img/csgo2.webp' },
    { id: 'altv', name: 'Alt:V', icon: '🚗', previewImage: '/img/altv.jpg' }
  ];

  // Funktion zur Berechnung der Paketpreise basierend auf dem Standort
  const getPackages = (location: string): Package[] => {
    // Basis-Pakete mit Standardpreisen
    const basePackages: Package[] = [
      {
        name: 'Standard',
        price: 1.00,
        slots: 10,
        ram: 4,
        storage: 50,
        cpu: 2,
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

  // Funktion zum Bestellen eines vorkonfigurierten Pakets
  const handleOrder = (pkg: Package, selectedGame: string) => {
    if (!selectedGame) {
      alert('Bitte wähle zuerst ein Spiel aus');
      return;
    }
    if (!selectedLocation) {
      alert('Bitte wähle zuerst einen Standort aus');
      return;
    }
    
    navigate('/order', {
      state: {
        orderDetails: {
          productName: `Game Server - ${games.find(g => g.id === selectedGame)?.name}`,
          price: pkg.price,
          features: [
            { label: 'Spiel', value: games.find(g => g.id === selectedGame)?.name || '' },
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
    if (!config.game) {
      alert('Bitte wähle zuerst ein Spiel aus');
      return;
    }
    if (!selectedLocation) {
      alert('Bitte wähle zuerst einen Standort aus');
      return;
    }
    
    navigate('/order', {
      state: {
        orderDetails: {
          productName: `Game Server - ${games.find(g => g.id === config.game)?.name}`,
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
              Game Server
            </h1>
            <p className="text-xl mb-8 text-white/90 dark:text-white/80">
              Optimierte Server für Ihre Gaming-Projekte mit garantierter Performance.
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
        {/* Spiele */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {games.map((game) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer group ${
                config.game === game.id ? 'ring-2 ring-primary dark:ring-primary-light' : ''
              }`}
              onClick={() => setConfig({ ...config, game: game.id })}
            >
              <div className="relative h-48">
                <div className="absolute inset-0">
                  <img 
                    src={game.previewImage} 
                    alt={game.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="absolute top-2 left-2">
                  <div className="bg-white/90 dark:bg-white/80 text-primary dark:text-primary-light px-2 py-1 rounded text-sm font-medium">
                    bereits ab {getPackages(selectedLocation)[0].price.toFixed(2)} €
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center px-4">
                    {game.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">Gameserver Konfigurator</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 -mt-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  RAM (GB)
                </label>
                <input
                  type="range"
                  min="2"
                  max="32"
                  value={config.ram}
                  onChange={(e) => setConfig({ ...config, ram: parseInt(e.target.value) })}
                  className="w-full accent-primary dark:accent-primary-light"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <span>2 GB</span>
                  <span>{config.ram} GB</span>
                  <span>32 GB</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Speicher (GB)
                </label>
                <input
                  type="range"
                  min="20"
                  max="500"
                  value={config.storage}
                  onChange={(e) => setConfig({ ...config, storage: parseInt(e.target.value) })}
                  className="w-full accent-primary dark:accent-primary-light"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <span>20 GB</span>
                  <span>{config.storage} GB</span>
                  <span>500 GB</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 dark:text-white">Ihre Konfiguration</h2>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-6 rounded-lg border border-primary/10 dark:border-primary/20">
                <ul className="space-y-3 mb-6 dark:text-gray-300">
                  <li className="flex justify-between">
                    <span>Spiel:</span>
                    <span className="font-medium">
                      {games.find(g => g.id === config.game)?.name || 'Nicht ausgewählt'}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Region:</span>
                    <span className="font-medium">
                      {selectedLocation ? (selectedLocation === 'nuremberg' ? 'Nürnberg' : 'Eygelshoven') : 'Nicht ausgewählt'}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>RAM:</span>
                    <span className="font-medium">{config.ram} GB</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Speicher:</span>
                    <span className="font-medium">{config.storage} GB</span>
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

        {/* FAQ Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              Häufig gestellte Fragen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Welche Spiele werden unterstützt?</h3>
                <p className="text-white/90">Wir unterstützen alle gängigen Spiele wie Minecraft, CS2, Rust, ARK, Valheim und viele mehr. Die vollständige Liste finden Sie in unserem Konfigurator.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Kann ich Mods installieren?</h3>
                <p className="text-white/90">Ja, Sie haben vollen Zugriff auf Ihren Server und können Mods, Plugins und andere Erweiterungen nach Belieben installieren.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Wie schnell ist die Bereitstellung?</h3>
                <p className="text-white/90">Die Bereitstellung Ihres Game Servers erfolgt vollautomatisch innerhalb weniger Minuten nach Zahlungseingang.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Gibt es eine Mindestvertragslaufzeit?</h3>
                <p className="text-white/90">Nein, unsere Server können monatlich gekündigt werden. Wir bieten auch Rabatte bei längerer Vertragsbindung an.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}