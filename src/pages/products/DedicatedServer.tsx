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
    <div>
      {/* Hero-Sektion mit Hauptüberschrift und Features */}
      <div className="relative bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] py-24">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px]" />
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
            <p className="text-xl mb-8 text-white/90">
              Maximale Performance und volle Kontrolle: Unsere Dedicated Server bieten Ihnen die perfekte Basis für Ihre Projekte.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
                >
                  <feature.icon className="h-8 w-8 text-accent-turquoise mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <LocationSelector
          selectedLocation={selectedLocation}
          onLocationSelect={setSelectedLocation}
          className="bg-white rounded-xl shadow-xl p-8 mb-16"
        />
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Vorkonfigurierte Pakete */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {getPackages(selectedLocation).map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-xl shadow-lg p-8 border-2 ${
                pkg.name === 'Enterprise' ? 'border-primary' : 'border-gray-100'
              }`}
            >
              {pkg.name === 'Enterprise' && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Empfohlen
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-4">{pkg.name}</h3>
              <div className="text-3xl font-bold mb-6 text-primary">
                {pkg.price} €<span className="text-sm font-normal text-gray-600">/Monat</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Cpu className="h-5 w-5 text-primary mr-2" />
                  {pkg.cpu}
                </li>
                <li className="flex items-center">
                  <Server className="h-5 w-5 text-primary mr-2" />
                  {pkg.cores}
                </li>
                <li className="flex items-center">
                  <HardDrive className="h-5 w-5 text-primary mr-2" />
                  {pkg.ram}
                </li>
                <li className="flex items-center">
                  <HardDrive className="h-5 w-5 text-primary mr-2" />
                  {pkg.storage}
                </li>
                <li className="flex items-center">
                  <Gauge className="h-5 w-5 text-primary mr-2" />
                  {pkg.bandwidth}
                </li>
              </ul>
              <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                pkg.name === 'Enterprise'
                  ? 'bg-primary text-white hover:bg-primary-light'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`} onClick={() => handleOrder(pkg)}>
                Server konfigurieren
              </button>
            </motion.div>
          ))}
        </div>

        {/* Individueller Konfigurator */}
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 border border-gray-200 mb-12 md:mb-16">
          {/* ... existing code ... */}
        </div>

        {/* FAQ-Sektion */}
        <div className="bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-6 text-center">Häufig gestellte Fragen</h2>
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