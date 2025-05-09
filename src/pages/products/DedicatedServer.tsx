import { motion } from 'framer-motion';
import { Server, Cpu, HardDrive, Map, Shield, Gauge, Globe } from 'lucide-react';
import { useState } from 'react';
import { LocationSelector } from '../../components/LocationSelector';
import { useNavigate } from 'react-router-dom';

// Interface für Dedicated Server-Pakete
interface Package {
  name: string;        // Name des Pakets (z.B. "Starter", "Professional")
  price: number;       // Monatlicher Preis in Euro
  cpu: string;         // CPU-Modell (z.B. "Intel Xeon E-2236")
  cores: number;       // Anzahl der CPU-Kerne
  ram: number;         // RAM in GB
  storage: string;     // Speicherkonfiguration (z.B. "2x 1TB NVMe")
  bandwidth: string;   // Bandbreite (z.B. "1 Gbit/s")
}

// Interface für den Konfigurator-Zustand
interface ConfiguratorState {
  cpu: string;         // Ausgewähltes CPU-Modell
  ram: number;         // Ausgewähltes RAM
  storage: string;     // Ausgewählte Speicherkonfiguration
  operatingSystem: OperatingSystem | null; // Ausgewähltes Betriebssystem
}

// Interface für Betriebssysteme
interface OperatingSystem {
  name: string;        // Name des Betriebssystems (z.B. "Ubuntu")
  category: 'Linux' | 'Windows'; // Kategorie des Betriebssystems
  version: string;     // Version des Betriebssystems
}

interface Config {
  cpu: number;
  ram: number;
  storage: number;
}

export function DedicatedServer() {
  // Navigation-Hook für die Weiterleitung
  const navigate = useNavigate();
  
  // Zustand für den ausgewählten Standort
  const [selectedLocation, setSelectedLocation] = useState<string>('nuremberg');
  
  // Zustand für die Server-Konfiguration
  const [config, setConfig] = useState<ConfiguratorState>({
    cpu: 'Intel Xeon E-2236',
    ram: 32,
    storage: '2x 1TB NVMe',
    operatingSystem: null,
  });

  // Liste der verfügbaren Betriebssysteme
  const operatingSystems: OperatingSystem[] = [
    { name: 'Ubuntu', category: 'Linux', version: '22.04 LTS' },
    { name: 'Ubuntu', category: 'Linux', version: '20.04 LTS' },
    { name: 'Debian', category: 'Linux', version: '12' },
    { name: 'Debian', category: 'Linux', version: '11' },
    { name: 'CentOS', category: 'Linux', version: 'Stream 9' },
    { name: 'Windows Server', category: 'Windows', version: '2022' },
    { name: 'Windows Server', category: 'Windows', version: '2019' },
  ];

  // Funktion zur Berechnung der Paketpreise basierend auf dem Standort
  const getPackages = (location: string): Package[] => {
    // Basis-Pakete mit Standardpreisen
    const basePackages: Package[] = [
      {
        name: 'Starter',
        price: 99.99,
        cpu: 'Intel Xeon E-2236',
        cores: 6,
        ram: 32,
        storage: '2x 1TB NVMe',
        bandwidth: '1 Gbit/s'
      },
      {
        name: 'Professional',
        price: 199.99,
        cpu: 'Intel Xeon E-2288G',
        cores: 8,
        ram: 64,
        storage: '2x 2TB NVMe',
        bandwidth: '1 Gbit/s'
      },
      {
        name: 'Business',
        price: 399.99,
        cpu: 'Intel Xeon Silver 4310',
        cores: 12,
        ram: 128,
        storage: '4x 2TB NVMe',
        bandwidth: '1 Gbit/s'
      },
      {
        name: 'Enterprise',
        price: 799.99,
        cpu: 'Intel Xeon Gold 6330',
        cores: 28,
        ram: 256,
        storage: '4x 4TB NVMe',
        bandwidth: '1 Gbit/s'
      }
    ];

    // Anpassung der Preise basierend auf dem Standort
    return basePackages.map(pkg => ({
      ...pkg,
      price: location === 'eygelshoven' ? pkg.price * 0.95 : pkg.price
    }));
  };

  // Liste der Hauptfunktionen des Dedicated Servers
  const features = [
    {
      icon: Shield,
      title: 'DDoS Protection',
      description: 'Automatischer Schutz vor DDoS-Angriffen'
    },
    {
      icon: Gauge,
      title: 'High Performance',
      description: 'Enterprise Hardware & NVMe Speicher'
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
      (config.ram * 2 +
      (config.storage.includes('NVMe') ? 50 : 30)) * locationMultiplier
    ).toFixed(2);
  };

  // Häufig gestellte Fragen
  const faqs = [
    {
      question: 'Was ist ein Dedicated Server?',
      answer: 'Ein Dedicated Server ist ein physischer Server, der exklusiv für Sie bereitgestellt wird. Sie haben die volle Kontrolle über die Hardware und können diese nach Ihren Wünschen nutzen.'
    },
    {
      question: 'Welche Hardware ist verfügbar?',
      answer: 'Wir bieten verschiedene CPU-Modelle von Intel Xeon, unterschiedliche RAM-Konfigurationen und schnelle NVMe-Speicher an. Die genauen Spezifikationen finden Sie in unserem Konfigurator.'
    },
    {
      question: 'Wie schnell ist die Bereitstellung?',
      answer: 'Die Bereitstellung Ihres Dedicated Servers erfolgt innerhalb von 24 Stunden nach Zahlungseingang. Express-Bereitstellung ist gegen Aufpreis möglich.'
    },
    {
      question: 'Gibt es eine Mindestvertragslaufzeit?',
      answer: 'Ja, für Dedicated Server beträgt die Mindestvertragslaufzeit 3 Monate. Wir bieten auch Rabatte bei längerer Vertragsbindung an.'
    }
  ];

  // Funktion zum Bestellen eines vorkonfigurierten Pakets
  const handleOrder = (pkg: Package) => {
    navigate('/order/os-select', {
      state: {
        orderDetails: {
          productName: `Dedicated Server - ${pkg.name}`,
          price: pkg.price,
          features: [
            { label: 'CPU', value: `${pkg.cpu} (${pkg.cores} Kerne)` },
            { label: 'RAM', value: `${pkg.ram} GB` },
            { label: 'Speicher', value: pkg.storage },
            { label: 'Bandbreite', value: pkg.bandwidth },
            { label: 'Standort', value: selectedLocation === 'nuremberg' ? 'Nürnberg' : 'Eygelshoven' },
          ],
          isDedicated: true,
        },
      },
    });
  };

  // Funktion zum Bestellen einer individuellen Konfiguration
  const handleCustomOrder = () => {
    navigate('/order/os-select', {
      state: {
        orderDetails: {
          productName: 'Dedicated Server (Konfigurator)',
          price: calculatePrice(),
          features: [
            { label: 'CPU', value: config.cpu },
            { label: 'RAM', value: `${config.ram} GB` },
            { label: 'Speicher', value: config.storage },
            { label: 'Standort', value: selectedLocation === 'nuremberg' ? 'Nürnberg' : 'Eygelshoven' },
          ],
          isDedicated: true,
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
              Dedicated Server
            </h1>
            <p className="text-xl mb-8 text-white/90 dark:text-white/80">
              Hochleistungs-Server mit vollständiger Kontrolle und maximaler Performance.
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
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">Dedicated Server Konfigurator</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 -mt-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  CPU (Kerne)
                </label>
                <input
                  type="range"
                  min="4"
                  max="32"
                  value={config.cpu}
                  onChange={(e) => setConfig({ ...config, cpu: Number(e.target.value) })}
                  className="w-full accent-primary dark:accent-primary-light"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <span>4 Kerne</span>
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
                  min="16"
                  max="256"
                  value={config.ram}
                  onChange={(e) => setConfig({ ...config, ram: Number(e.target.value) })}
                  className="w-full accent-primary dark:accent-primary-light"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <span>16 GB</span>
                  <span>{config.ram} GB</span>
                  <span>256 GB</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Speicher (GB)
                </label>
                <input
                  type="range"
                  min="500"
                  max="4000"
                  value={config.storage}
                  onChange={(e) => setConfig({ ...config, storage: Number(e.target.value) })}
                  className="w-full accent-primary dark:accent-primary-light"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <span>500 GB</span>
                  <span>{config.storage} GB</span>
                  <span>4000 GB</span>
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
                    <span>CPU:</span>
                    <span className="font-medium">{config.cpu} Kerne</span>
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
      </div>
    </div>
  );
}