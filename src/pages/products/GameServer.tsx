import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, Shield, Cpu, Server, Clock, Gauge, Globe } from 'lucide-react';
import { LocationSelector } from '../../components/LocationSelector';
import { useNavigate } from 'react-router-dom';

// Interface für GameServer-Pakete
interface Package {
  name: string;        // Name des Pakets (z.B. "Starter", "Professional")
  price: number;       // Monatlicher Preis in Euro
  ram: number;         // RAM in GB
  storage: number;     // Speicherplatz in GB
  cpu: number;         // CPU-Kerne
  bandwidth: string;   // Bandbreite (z.B. "1 Gbit/s")
}

// Interface für den Konfigurator-Zustand
interface ConfiguratorState {
  ram: number;         // Ausgewähltes RAM
  storage: number;     // Ausgewählter Speicher
  game: string;        // Ausgewähltes Spiel
  gameVersion: string; // Ausgewählte Spielversion
}

// Interface für Spielversionen
interface GameVersion {
  id: string;
  name: string;
  minRam: number;
  recommendedRam: number;
  minStorage: number;
  recommendedStorage: number;
}

// Liste der unterstützten Spiele mit Versionen
const games = [
  { 
    id: 'minecraftjava', 
    name: 'Minecraft Java', 
    icon: '🎮', 
    previewImage: '/img/minecraftjava.webp',
    versions: [
      { id: '1.20.4', name: '1.20.4', minRam: 2, recommendedRam: 4, minStorage: 2, recommendedStorage: 5 },
      { id: '1.20.2', name: '1.20.2', minRam: 2, recommendedRam: 4, minStorage: 2, recommendedStorage: 5 },
      { id: '1.19.4', name: '1.19.4', minRam: 2, recommendedRam: 4, minStorage: 2, recommendedStorage: 5 },
      { id: '1.18.2', name: '1.18.2', minRam: 2, recommendedRam: 4, minStorage: 2, recommendedStorage: 5 },
      { id: '1.17.1', name: '1.17.1', minRam: 2, recommendedRam: 4, minStorage: 2, recommendedStorage: 5 },
      { id: '1.16.5', name: '1.16.5', minRam: 2, recommendedRam: 4, minStorage: 2, recommendedStorage: 5 },
      { id: '1.12.2', name: '1.12.2', minRam: 2, recommendedRam: 4, minStorage: 2, recommendedStorage: 5 },
      { id: '1.8.9', name: '1.8.9', minRam: 2, recommendedRam: 4, minStorage: 2, recommendedStorage: 5 }
    ]
  },
  { 
    id: 'mcbedrock', 
    name: 'Minecraft Bedrock', 
    icon: '🎮', 
    previewImage: '/img/mcbedrock.webp',
    versions: [
      { id: '1.20.50', name: '1.20.50', minRam: 2, recommendedRam: 4, minStorage: 2, recommendedStorage: 5 },
      { id: '1.20.40', name: '1.20.40', minRam: 2, recommendedRam: 4, minStorage: 2, recommendedStorage: 5 },
      { id: '1.19.80', name: '1.19.80', minRam: 2, recommendedRam: 4, minStorage: 2, recommendedStorage: 5 },
      { id: '1.18.30', name: '1.18.30', minRam: 2, recommendedRam: 4, minStorage: 2, recommendedStorage: 5 }
    ]
  },
  { 
    id: 'csgo2', 
    name: 'Counter-Strike 2', 
    icon: '🔫', 
    previewImage: '/img/csgo2.webp',
    versions: [
      { id: 'latest', name: 'Latest', minRam: 4, recommendedRam: 8, minStorage: 20, recommendedStorage: 40 }
    ]
  },
  { 
    id: 'altv', 
    name: 'Alt:V', 
    icon: '🚗', 
    previewImage: '/img/altv.jpg',
    versions: [
      { id: 'latest', name: 'Latest', minRam: 4, recommendedRam: 8, minStorage: 20, recommendedStorage: 40 }
    ]
  },
  { 
    id: 'rust', 
    name: 'Rust', 
    icon: '🏰', 
    previewImage: '/img/rust.webp',
    versions: [
      { id: 'latest', name: 'Latest', minRam: 8, recommendedRam: 16, minStorage: 30, recommendedStorage: 60 }
    ]
  },
  { 
    id: 'ark', 
    name: 'ARK: Survival Evolved', 
    icon: '🦖', 
    previewImage: '/img/ark.webp',
    versions: [
      { id: 'latest', name: 'Latest', minRam: 8, recommendedRam: 16, minStorage: 50, recommendedStorage: 100 }
    ]
  },
  { 
    id: 'valheim', 
    name: 'Valheim', 
    icon: '⚔️', 
    previewImage: '/img/valheim.webp',
    versions: [
      { id: 'latest', name: 'Latest', minRam: 4, recommendedRam: 8, minStorage: 20, recommendedStorage: 40 }
    ]
  },
  { 
    id: 'terraria', 
    name: 'Terraria', 
    icon: '🗡️', 
    previewImage: '/img/terraria.webp',
    versions: [
      { id: 'latest', name: 'Latest', minRam: 2, recommendedRam: 4, minStorage: 10, recommendedStorage: 20 }
    ]
  },
  { 
    id: 'gmod', 
    name: 'Garry\'s Mod', 
    icon: '🔧', 
    previewImage: '/img/gmod.webp',
    versions: [
      { id: 'latest', name: 'Latest', minRam: 4, recommendedRam: 8, minStorage: 20, recommendedStorage: 40 }
    ]
  },
  { 
    id: 'tf2', 
    name: 'Team Fortress 2', 
    icon: '🎭', 
    previewImage: '/img/tf2.webp',
    versions: [
      { id: 'latest', name: 'Latest', minRam: 2, recommendedRam: 4, minStorage: 15, recommendedStorage: 30 }
    ]
  },
  { 
    id: 'satisfactory', 
    name: 'Satisfactory', 
    icon: '🏭', 
    previewImage: '/img/satisfactory.webp',
    versions: [
      { id: 'latest', name: 'Latest', minRam: 8, recommendedRam: 16, minStorage: 30, recommendedStorage: 60 }
    ]
  },
  { 
    id: 'spaceengineers', 
    name: 'Space Engineers', 
    icon: '🚀', 
    previewImage: '/img/spaceengineers.webp',
    versions: [
      { id: 'latest', name: 'Latest', minRam: 8, recommendedRam: 16, minStorage: 30, recommendedStorage: 60 }
    ]
  },
  { 
    id: '7daystodie', 
    name: '7 Days to Die', 
    icon: '🧟', 
    previewImage: '/img/7daystodie.webp',
    versions: [
      { id: 'latest', name: 'Latest', minRam: 8, recommendedRam: 16, minStorage: 30, recommendedStorage: 60 }
    ]
  },
  { 
    id: 'conanexiles', 
    name: 'Conan Exiles', 
    icon: '⚔️', 
    previewImage: '/img/conanexiles.webp',
    versions: [
      { id: 'latest', name: 'Latest', minRam: 8, recommendedRam: 16, minStorage: 30, recommendedStorage: 60 }
    ]
  },
  { 
    id: 'dayz', 
    name: 'DayZ', 
    icon: '🧟', 
    previewImage: '/img/dayz.webp',
    versions: [
      { id: 'latest', name: 'Latest', minRam: 8, recommendedRam: 16, minStorage: 30, recommendedStorage: 60 }
    ]
  },
  { 
    id: 'eco', 
    name: 'ECO', 
    icon: '🌍', 
    previewImage: '/img/eco.webp',
    versions: [
      { id: 'latest', name: 'Latest', minRam: 8, recommendedRam: 16, minStorage: 30, recommendedStorage: 60 }
    ]
  },
  { 
    id: 'factorio', 
    name: 'Factorio', 
    icon: '⚙️', 
    previewImage: '/img/factorio.webp',
    versions: [
      { id: 'latest', name: 'Latest', minRam: 4, recommendedRam: 8, minStorage: 20, recommendedStorage: 40 }
    ]
  },
  { 
    id: 'projectzomboid', 
    name: 'Project Zomboid', 
    icon: '🧟', 
    previewImage: '/img/projectzomboid.webp',
    versions: [
      { id: 'latest', name: 'Latest', minRam: 4, recommendedRam: 8, minStorage: 20, recommendedStorage: 40 }
    ]
  },
  { 
    id: 'starbound', 
    name: 'Starbound', 
    icon: '🌌', 
    previewImage: '/img/starbound.webp',
    versions: [
      { id: 'latest', name: 'Latest', minRam: 4, recommendedRam: 8, minStorage: 20, recommendedStorage: 40 }
    ]
  },
  { 
    id: 'unturned', 
    name: 'Unturned', 
    icon: '🧟', 
    previewImage: '/img/unturned.webp',
    versions: [
      { id: 'latest', name: 'Latest', minRam: 2, recommendedRam: 4, minStorage: 10, recommendedStorage: 20 }
    ]
  }
];

export function GameServer() {
  // Navigation-Hook für die Weiterleitung
  const navigate = useNavigate();
  
  // Zustand für den ausgewählten Standort
  const [selectedLocation, setSelectedLocation] = useState<string>('nuremberg');
  
  // Zustand für die Server-Konfiguration
  const [config, setConfig] = useState<ConfiguratorState>({
    ram: 4,
    storage: 50,
    game: '',
    gameVersion: ''
  });

  // Funktion zur Berechnung der Paketpreise basierend auf dem Standort
  const getPackages = (location: string): Package[] => {
    // Basis-Pakete mit Standardpreisen
    const basePackages: Package[] = [
      {
        name: 'Standard',
        price: 1.00,
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

  // Funktion zur Berechnung des Preises für die individuelle Konfiguration
  const calculatePrice = () => {
    const locationMultiplier = selectedLocation === 'eygelshoven' ? 0.95 : 1;
    const selectedGame = games.find(g => g.id === config.game);
    const selectedVersion = selectedGame?.versions.find(v => v.id === config.gameVersion);
    
    if (!selectedGame || !selectedVersion) return 0;

    const basePrice = (
      config.ram * 2 +
      config.storage * 0.1
    ) * locationMultiplier;

    return basePrice.toFixed(2);
  };

  // Funktion zum Bestellen einer individuellen Konfiguration
  const handleCustomOrder = () => {
    if (!config.game || !config.gameVersion) {
      alert('Bitte wähle zuerst ein Spiel und eine Version aus');
      return;
    }
    if (!selectedLocation) {
      alert('Bitte wähle zuerst einen Standort aus');
      return;
    }
    
    const selectedGame = games.find(g => g.id === config.game);
    const selectedVersion = selectedGame?.versions.find(v => v.id === config.gameVersion);
    
    if (!selectedGame || !selectedVersion) return;

    navigate('/order', {
      state: {
        orderDetails: {
          productName: `Game Server - ${selectedGame.name} ${selectedVersion.name}`,
          price: calculatePrice(),
          features: [
            { label: 'Spiel', value: `${selectedGame.name} ${selectedVersion.name}` },
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

  // Funktion zum Aktualisieren der RAM- und Speicherwerte basierend auf der Spielversion
  const handleGameVersionChange = (gameId: string, versionId: string) => {
    const selectedGame = games.find(g => g.id === gameId);
    const selectedVersion = selectedGame?.versions.find(v => v.id === versionId);
    
    if (selectedVersion) {
      setConfig(prev => ({
        ...prev,
        game: gameId,
        gameVersion: versionId,
        ram: selectedVersion.recommendedRam,
        storage: selectedVersion.recommendedStorage
      }));
    }
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
              Gameserver
            </h1>
            <p className="text-base md:text-xl mb-6 md:mb-8 text-white/90">
              Hochperformante Server für dein optimales Gaming-Erlebnis. Starte in wenigen Minuten durch!
            </p>
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
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">Gameserver Konfigurator</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 -mt-6">
            <div className="space-y-6">
              {/* Spielauswahl */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Spiel
                </label>
                <select
                  value={config.game}
                  onChange={(e) => handleGameVersionChange(e.target.value, games.find(g => g.id === e.target.value)?.versions[0].id || '')}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Spiel auswählen</option>
                  {games.map(game => (
                    <option key={game.id} value={game.id}>
                      {game.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Spielversion Auswahl */}
              {config.game && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Spielversion
                  </label>
                  <select
                    value={config.gameVersion}
                    onChange={(e) => handleGameVersionChange(config.game, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {games.find(g => g.id === config.game)?.versions.map(version => (
                      <option key={version.id} value={version.id}>
                        {version.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

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

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-6 rounded-lg border border-primary/10 dark:border-primary/20">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold dark:text-white">Deine Konfiguration</h3>
                <div className="text-2xl font-bold text-primary dark:text-primary-light">
                  {calculatePrice()} €<span className="text-lg font-normal text-gray-600 dark:text-gray-400">/Monat</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex justify-between dark:text-gray-300">
                  <span className="text-gray-600 dark:text-gray-400">Spiel:</span>
                  <span className="font-medium">
                    {config.game ? `${games.find(g => g.id === config.game)?.name} ${games.find(g => g.id === config.game)?.versions.find(v => v.id === config.gameVersion)?.name}` : 'Nicht ausgewählt'}
                  </span>
                </li>
                <li className="flex justify-between dark:text-gray-300">
                  <span className="text-gray-600 dark:text-gray-400">Region:</span>
                  <span className="font-medium">
                    {selectedLocation ? (selectedLocation === 'nuremberg' ? 'Nürnberg' : 'Eygelshoven') : 'Nicht ausgewählt'}
                  </span>
                </li>
                <li className="flex justify-between dark:text-gray-300">
                  <span className="text-gray-600 dark:text-gray-400">RAM:</span>
                  <span className="font-medium">{config.ram} GB</span>
                </li>
                <li className="flex justify-between dark:text-gray-300">
                  <span className="text-gray-600 dark:text-gray-400">Speicher:</span>
                  <span className="font-medium">{config.storage} GB</span>
                </li>
              </ul>
              <button 
                className={`w-full py-3 rounded-lg transition-colors ${
                  config.game && config.gameVersion && selectedLocation
                    ? 'bg-primary dark:bg-primary-light text-white hover:bg-primary-light dark:hover:bg-primary'
                    : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
                onClick={handleCustomOrder}
                disabled={!config.game || !config.gameVersion || !selectedLocation}
              >
                {config.game && config.gameVersion && selectedLocation ? 'Jetzt bestellen' : 'Bitte wähle ein Spiel, eine Version und einen Standort aus'}
              </button>
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
                <h3 className="text-lg font-semibold mb-2">Welche Spiele werden unterstützt?</h3>
                <p className="text-white/90 dark:text-white/80">Wir unterstützen eine große Auswahl an Spielen wie Minecraft, CS2, Rust, ARK, Valheim und viele mehr. Die vollständige Liste finden Sie in unserem Konfigurator.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-white/5 dark:backdrop-blur-xl">
                <h3 className="text-lg font-semibold mb-2">Kann ich Mods installieren?</h3>
                <p className="text-white/90 dark:text-white/80">Ja, Sie haben vollen Zugriff auf Ihren Server und können Mods, Plugins und andere Erweiterungen nach Belieben installieren.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-white/5 dark:backdrop-blur-xl">
                <h3 className="text-lg font-semibold mb-2">Wie schnell ist die Bereitstellung?</h3>
                <p className="text-white/90 dark:text-white/80">Die Bereitstellung Ihres Game Servers erfolgt vollautomatisch innerhalb weniger Minuten nach Zahlungseingang.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-white/5 dark:backdrop-blur-xl">
                <h3 className="text-lg font-semibold mb-2">Gibt es eine Mindestvertragslaufzeit?</h3>
                <p className="text-white/90 dark:text-white/80">Nein, unsere Server können monatlich gekündigt werden. Wir bieten auch Rabatte bei längerer Vertragsbindung an.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}