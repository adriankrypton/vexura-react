import { motion } from 'framer-motion';
import { useState } from 'react';
import { Server, Cpu, HardDrive, Map, Shield, Gauge, Globe } from 'lucide-react';
import { LocationSelector } from '../../components/LocationSelector';
import { useNavigate } from 'react-router-dom';

// Interface für Server-Pakete
interface Package {
  name: string;        // Name des Pakets (z.B. "Starter", "Professional")
  price: number;       // Monatlicher Preis in Euro
  cpu: number;         // Anzahl der CPU-Kerne
  ram: number;         // RAM in GB
  storage: number;     // Speicherplatz in GB
  bandwidth: string;   // Bandbreite (z.B. "1 Gbit/s")
}

// Interface für den Konfigurator-Zustand
interface ConfiguratorState {
  cpu: number;         // Ausgewählte CPU-Kerne
  ram: number;         // Ausgewähltes RAM
  storage: number;     // Ausgewählter Speicher
  operatingSystem: OperatingSystem | null; // Ausgewähltes Betriebssystem
}

// Interface für Betriebssysteme
interface OperatingSystem {
  name: string;        // Name des Betriebssystems (z.B. "Ubuntu")
  category: 'Linux' | 'Windows'; // Kategorie des Betriebssystems
  version: string;     // Version des Betriebssystems
  icon: string;         // Pfad zur Icon-Datei des Betriebssystems
}

export function RootServer() {
  // Navigation-Hook für die Weiterleitung
  const navigate = useNavigate();
  
  // Zustand für den ausgewählten Standort
  const [selectedLocation, setSelectedLocation] = useState<string>('nuremberg');
  
  // Zustand für die Server-Konfiguration
  const [config, setConfig] = useState<ConfiguratorState>({
    cpu: 2,
    ram: 4,
    storage: 50,
    operatingSystem: null,
  });

  // Liste der verfügbaren Betriebssysteme
  const operatingSystems: OperatingSystem[] = [
    { name: 'Ubuntu', category: 'Linux', version: '22.04 LTS', icon: '/images/os/ubuntu.svg' },
    { name: 'Ubuntu', category: 'Linux', version: '20.04 LTS', icon: '/images/os/ubuntu.svg' },
    { name: 'Debian', category: 'Linux', version: '12', icon: '/images/os/debian.svg' },
    { name: 'Debian', category: 'Linux', version: '11', icon: '/images/os/debian.svg' },
    { name: 'CentOS', category: 'Linux', version: 'Stream 9', icon: '/images/os/centos.svg' },
    { name: 'Windows Server', category: 'Windows', version: '2022', icon: '/images/os/windows.svg' },
    { name: 'Windows Server', category: 'Windows', version: '2019', icon: '/images/os/windows.svg' },
  ];

  // Funktion zur Berechnung der Paketpreise basierend auf dem Standort
  const getPackages = (location: string): Package[] => {
    // Basis-Pakete mit Standardpreisen
    const basePackages: Package[] = [
      {
        name: 'Starter',
        price: 9.99,
        cpu: 2,
        ram: 4,
        storage: 50,
        bandwidth: '1 Gbit/s'
      },
      {
        name: 'Professional',
        price: 19.99,
        cpu: 4,
        ram: 8,
        storage: 100,
        bandwidth: '1 Gbit/s'
      },
      {
        name: 'Business',
        price: 39.99,
        cpu: 8,
        ram: 16,
        storage: 200,
        bandwidth: '1 Gbit/s'
      },
      {
        name: 'Enterprise',
        price: 79.99,
        cpu: 16,
        ram: 32,
        storage: 400,
        bandwidth: '1 Gbit/s'
      }
    ];

    // Anpassung der Preise basierend auf den Standorten
    return basePackages.map(pkg => ({
      ...pkg,
      price: location === 'eygelshoven' ? pkg.price * 0.95 : pkg.price
    }));
  };

  // Hauptfunktionen des KVM Servers
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
  const calculatePrice = () => {
    const locationMultiplier = selectedLocation === 'eygelshoven' ? 0.95 : 1;
    return (
      (config.cpu * 5 +
      config.ram * 2 +
      config.storage * 0.1) * locationMultiplier
    ).toFixed(2);
  };

  // Funktion zum Bestellen eines vorkonfigurierten Pakets
  const handleOrder = (pkg: Package) => {
    navigate('/order/os-select', {
      state: {
        orderDetails: {
          productName: `KVM Server - ${pkg.name}`,
          price: pkg.price,
          features: [
            { label: 'CPU', value: `${pkg.cpu} Kerne` },
            { label: 'RAM', value: `${pkg.ram} GB` },
            { label: 'Speicher', value: `${pkg.storage} GB SSD` },
            { label: 'Bandbreite', value: pkg.bandwidth },
            { label: 'Standort', value: selectedLocation === 'nuremberg' ? 'Nürnberg' : 'Eygelshoven' },
          ],
          isKVM: true,
        },
      },
    });
  };

  // Funktion zum Bestellen einer individuellen Konfiguration
  const handleCustomOrder = () => {
    navigate('/order/os-select', {
      state: {
        orderDetails: {
          productName: 'KVM Root Server (Konfigurator)',
          price: calculatePrice(),
          features: [
            { label: 'CPU', value: `${config.cpu} Kerne` },
            { label: 'RAM', value: `${config.ram} GB` },
            { label: 'Speicher', value: `${config.storage} GB SSD` },
            { label: 'Standort', value: selectedLocation === 'nuremberg' ? 'Nürnberg' : 'Eygelshoven' },
          ],
          isKVM: true,
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
        <div className="container mx-auto px-2 md:px-4 py-12 md:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6">
              KVM Server
            </h1>
            <p className="text-base md:text-xl mb-6 md:mb-8 text-white/90">
              Maximale Performance und volle Kontrolle: Unsere KVM Server bieten Ihnen die perfekte Basis für Ihre Projekte.
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
                  <h3 className="text-base md:text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm md:text-base text-white/80 dark:text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-2 md:px-4 py-8 md:py-12 bg-white dark:bg-gray-900">
        {/* Standortauswahl */}
        <div className="mb-8 md:mb-12">
          <div className="w-full">
            <LocationSelector
              selectedLocation={selectedLocation}
              onLocationSelect={setSelectedLocation}
            />
          </div>
        </div>

        {/* Pakete */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {getPackages(selectedLocation).map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700 hover:border-primary/20 dark:hover:border-primary-light/20 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 dark:text-white">{pkg.name}</h3>
              <div className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-primary-light">
                {pkg.price} €<span className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-400">/Monat</span>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-center">
                  <Cpu className="h-5 w-5 md:h-6 md:w-6 text-primary dark:text-primary-light mr-2 md:mr-3" />
                  <span className="text-base md:text-lg dark:text-gray-300">{pkg.cpu} Kerne</span>
                </li>
                <li className="flex items-center">
                  <Server className="h-5 w-5 md:h-6 md:w-6 text-primary dark:text-primary-light mr-2 md:mr-3" />
                  <span className="text-base md:text-lg dark:text-gray-300">{pkg.ram} GB RAM</span>
                </li>
                <li className="flex items-center">
                  <HardDrive className="h-5 w-5 md:h-6 md:w-6 text-primary dark:text-primary-light mr-2 md:mr-3" />
                  <span className="text-base md:text-lg dark:text-gray-300">{pkg.storage} GB SSD</span>
                </li>
                <li className="flex items-center">
                  <Map className="h-5 w-5 md:h-6 md:w-6 text-primary dark:text-primary-light mr-2 md:mr-3" />
                  <span className="text-base md:text-lg dark:text-gray-300">{pkg.bandwidth}</span>
                </li>
              </ul>
              <button
                onClick={() => handleOrder(pkg)}
                className="w-full bg-gradient-to-r from-primary to-primary-light dark:from-primary-light dark:to-primary text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold text-sm md:text-base hover:opacity-90 transition-opacity"
              >
                Jetzt bestellen
              </button>
            </motion.div>
          ))}
        </div>

        {/* Individueller Konfigurator */}
        <div className="container mx-auto px-4 -mt-12 relative z-10">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-16 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6 dark:text-white">Server Konfigurator</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      CPU Kerne
                    </label>
                    <input
                      type="range"
                      min="2"
                      max="32"
                      value={config.cpu}
                      onChange={(e) => setConfig({ ...config, cpu: parseInt(e.target.value) })}
                      className="w-full accent-primary dark:accent-primary-light"
                    />
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                      <span>2 Kerne</span>
                      <span>{config.cpu} Kerne</span>
                      <span>32 Kerne</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      RAM (GB)
                    </label>
                    <input
                      type="range"
                      min="4"
                      max="64"
                      value={config.ram}
                      onChange={(e) => setConfig({ ...config, ram: parseInt(e.target.value) })}
                      className="w-full accent-primary dark:accent-primary-light"
                    />
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                      <span>4 GB</span>
                      <span>{config.ram} GB</span>
                      <span>64 GB</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Speicher (GB)
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="800"
                      value={config.storage}
                      onChange={(e) => setConfig({ ...config, storage: parseInt(e.target.value) })}
                      className="w-full accent-primary dark:accent-primary-light"
                    />
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                      <span>50 GB</span>
                      <span>{config.storage} GB</span>
                      <span>800 GB</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6 dark:text-white">Ihre Konfiguration</h2>
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-6 rounded-lg border border-primary/10 dark:border-primary/20">
                  <ul className="space-y-3 mb-6 dark:text-gray-300">
                    <li className="flex justify-between">
                      <span>CPU:</span>
                      <span className="font-medium">{config.cpu} Kerne</span>
                    </li>
                    <li className="flex justify-between">
                      <span>RAM:</span>
                      <span className="font-medium">{config.ram} GB</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Speicher:</span>
                      <span className="font-medium">{config.storage} GB SSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Standort:</span>
                      <span className="font-medium">
                        {selectedLocation === 'nuremberg' ? 'Nürnberg' : 'Eygelshoven'}
                      </span>
                    </li>
                  </ul>
                  <div className="text-3xl font-bold mb-4 text-primary dark:text-primary-light">
                    {calculatePrice()} €<span className="text-sm font-normal text-gray-600 dark:text-gray-400">/Monat</span>
                  </div>
                  <button 
                    className="w-full bg-primary dark:bg-primary-light text-white py-3 rounded-lg hover:bg-primary-light dark:hover:bg-primary transition-colors"
                    onClick={handleCustomOrder}
                  >
                    Betriebssystem auswählen →
                  </button>
                </div>
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
                <h3 className="text-lg font-semibold mb-2">Was ist ein KVM Server?</h3>
                <p className="text-white/90 dark:text-white/80">Ein KVM Server ist ein virtueller Server mit garantierten Ressourcen und voller Root-Zugriff. Sie haben die komplette Kontrolle über Ihr System und können es nach Ihren Wünschen konfigurieren.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-white/5 dark:backdrop-blur-xl">
                <h3 className="text-lg font-semibold mb-2">Welche Betriebssysteme werden unterstützt?</h3>
                <p className="text-white/90 dark:text-white/80">Wir unterstützen alle gängigen Linux-Distributionen (Ubuntu, Debian, CentOS, etc.) sowie Windows Server. Sie können das Betriebssystem jederzeit neu installieren.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-white/5 dark:backdrop-blur-xl">
                <h3 className="text-lg font-semibold mb-2">Wie schnell ist die Bereitstellung?</h3>
                <p className="text-white/90 dark:text-white/80">Die Bereitstellung Ihres KVM Server erfolgt vollautomatisch innerhalb weniger Minuten nach Zahlungseingang.</p>
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