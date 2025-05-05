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
    <div>
      {/* Hero-Sektion mit Hauptüberschrift und Features */}
      <div className="relative bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
        <div className="container mx-auto px-2 md:px-4 py-12 md:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6">
              Gameserver
            </h1>
            <p className="text-base md:text-xl mb-6 md:mb-8 text-white/90">
              Hochperformante Server für dein optimales Gaming-Erlebnis. Starte in wenigen Minuten durch!
            </p>
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
                config.game === game.id ? 'ring-2 ring-primary' : ''
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
                  <div className="bg-white/90 text-primary px-2 py-1 rounded text-sm font-medium">
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
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 border border-gray-200">
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
                    {games.find(g => g.id === config.game)?.name || 'Nicht ausgewählt'}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Region:</span>
                  <span className="font-medium">
                    {selectedLocation ? (selectedLocation === 'nuremberg' ? 'Nürnberg' : 'Eygelshoven') : 'Nicht ausgewählt'}
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
                className={`w-full py-3 rounded-lg transition-colors ${
                  config.game && selectedLocation
                    ? 'bg-primary text-white hover:bg-primary-light'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                onClick={handleCustomOrder}
                disabled={!config.game || !selectedLocation}
              >
                {config.game && selectedLocation ? 'Jetzt bestellen' : 'Bitte wähle ein Spiel und einen Standort aus'}
              </button>
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