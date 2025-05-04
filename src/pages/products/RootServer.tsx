import { motion } from 'framer-motion';
import { useState } from 'react';
import { Server, Cpu, HardDrive, Map, Shield, Gauge, Globe, X } from 'lucide-react';
import { LocationSelector } from '../../components/LocationSelector';

interface Package {
  name: string;
  price: number;
  cpu: number;
  ram: number;
  storage: number;
  bandwidth: string;
}

interface ConfiguratorState {
  cpu: number;
  ram: number;
  storage: number;
  operatingSystem: OperatingSystem | null;
}

interface OperatingSystem {
  name: string;
  category: 'Linux' | 'Windows';
  version: string;
}

export function RootServer() {
  const [selectedLocation, setSelectedLocation] = useState<string>('nuremberg');
  const [config, setConfig] = useState<ConfiguratorState>({
    cpu: 2,
    ram: 4,
    storage: 50,
    operatingSystem: null,
  });
  const [showOsModal, setShowOsModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const operatingSystems: OperatingSystem[] = [
    { name: 'Ubuntu', category: 'Linux', version: '22.04 LTS' },
    { name: 'Ubuntu', category: 'Linux', version: '20.04 LTS' },
    { name: 'Debian', category: 'Linux', version: '12' },
    { name: 'Debian', category: 'Linux', version: '11' },
    { name: 'CentOS', category: 'Linux', version: 'Stream 9' },
    { name: 'Windows Server', category: 'Windows', version: '2022' },
    { name: 'Windows Server', category: 'Windows', version: '2019' },
  ];

  const getPackages = (location: string): Package[] => {
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

    // Apply location-based price adjustment
    return basePackages.map(pkg => ({
      ...pkg,
      price: location === 'eygelshoven' ? pkg.price * 0.95 : pkg.price
    }));
  };

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

  const calculatePrice = () => {
    const locationMultiplier = selectedLocation === 'eygelshoven' ? 0.95 : 1;
    return (
      (config.cpu * 5 +
      config.ram * 2 +
      config.storage * 0.1) * locationMultiplier
    ).toFixed(2);
  };

  const faqs = [
    {
      question: 'Was ist ein KVM Root Server?',
      answer: 'Ein KVM Root Server ist ein virtueller Server mit garantierten Ressourcen und voller Root-Zugriff. Sie haben die komplette Kontrolle über Ihr System und können es nach Ihren Wünschen konfigurieren.'
    },
    {
      question: 'Welche Betriebssysteme werden unterstützt?',
      answer: 'Wir unterstützen alle gängigen Linux-Distributionen (Ubuntu, Debian, CentOS, etc.) sowie Windows Server. Sie können das Betriebssystem jederzeit neu installieren.'
    },
    {
      question: 'Wie schnell ist die Bereitstellung?',
      answer: 'Die Bereitstellung Ihres KVM Root Servers erfolgt vollautomatisch innerhalb weniger Minuten nach Zahlungseingang.'
    },
    {
      question: 'Gibt es eine Mindestvertragslaufzeit?',
      answer: 'Nein, unsere Server können monatlich gekündigt werden. Wir bieten auch Rabatte bei längerer Vertragsbindung an.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
        <div className="container mx-auto px-4 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl font-display font-bold mb-6">
              KVM Root Server
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Maximale Performance und volle Kontrolle: Unsere KVM Root Server bieten Ihnen die perfekte Basis für Ihre Projekte.
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

      <div className="container mx-auto px-4 py-12">
        {/* Location Selection */}
        <div className="mb-12">
          <div className="w-full">
            <LocationSelector
              selectedLocation={selectedLocation}
              onLocationSelect={setSelectedLocation}
            />
          </div>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {getPackages(selectedLocation).map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:border-primary/20 hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-semibold mb-4">{pkg.name}</h3>
              <p className="text-4xl font-bold mb-8 text-primary">{pkg.price.toFixed(2)} €<span className="text-base font-normal text-gray-600">/Monat</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Cpu className="h-6 w-6 text-primary mr-3" />
                  <span className="text-lg">{pkg.cpu} Kerne</span>
                </li>
                <li className="flex items-center">
                  <Server className="h-6 w-6 text-primary mr-3" />
                  <span className="text-lg">{pkg.ram} GB RAM</span>
                </li>
                <li className="flex items-center">
                  <HardDrive className="h-6 w-6 text-primary mr-3" />
                  <span className="text-lg">{pkg.storage} GB SSD</span>
                </li>
                <li className="flex items-center">
                  <Map className="h-6 w-6 text-primary mr-3" />
                  <span className="text-lg">{pkg.bandwidth}</span>
                </li>
              </ul>
              <button 
                className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary-light transition-colors text-lg font-semibold"
                onClick={() => {
                  setSelectedPackage(pkg);
                  setShowOsModal(true);
                }}
              >
                Jetzt bestellen
              </button>
            </motion.div>
          ))}
        </div>

        {/* OS Selection Modal */}
        {showOsModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 relative"
            >
              <button
                onClick={() => setShowOsModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
              
              <h2 className="text-2xl font-semibold mb-6">Betriebssystem auswählen</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Linux Distributionen</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {operatingSystems
                      .filter(os => os.category === 'Linux')
                      .map((os, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setConfig({ ...config, operatingSystem: os });
                            setShowOsModal(false);
                            if (showOrderSummary) {
                              setShowOrderSummary(true);
                            }
                          }}
                          className="p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-left"
                        >
                          <div className="font-medium">{os.name}</div>
                          <div className="text-sm text-gray-600">{os.version}</div>
                        </button>
                      ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Windows Server</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {operatingSystems
                      .filter(os => os.category === 'Windows')
                      .map((os, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setConfig({ ...config, operatingSystem: os });
                            setShowOsModal(false);
                            if (showOrderSummary) {
                              setShowOrderSummary(true);
                            }
                          }}
                          className="p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-left"
                        >
                          <div className="font-medium">{os.name}</div>
                          <div className="text-sm text-gray-600">{os.version}</div>
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Order Summary Modal */}
        {showOrderSummary && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 relative"
            >
              <button
                onClick={() => setShowOrderSummary(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
              
              <h2 className="text-2xl font-semibold mb-6">Bestellübersicht</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Ihre Server-Konfiguration</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600">CPU:</span>
                      <span className="font-medium">{config.cpu} Kerne</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">RAM:</span>
                      <span className="font-medium">{config.ram} GB</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Speicher:</span>
                      <span className="font-medium">{config.storage} GB SSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Standort:</span>
                      <span className="font-medium">
                        {selectedLocation === 'nuremberg' ? 'Nürnberg' : 'Eygelshoven'}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Betriebssystem:</span>
                      <span className="font-medium">
                        {config.operatingSystem?.name} {config.operatingSystem?.version}
                      </span>
                    </li>
                    <li className="flex justify-between pt-3 border-t">
                      <span className="text-gray-600">Monatspreis:</span>
                      <span className="font-bold text-primary">{calculatePrice()} €</span>
                    </li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setShowOrderSummary(false)}
                    className="flex-1 py-3 px-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Zurück
                  </button>
                  <button
                    onClick={() => {
                      // Here you would typically handle the order submission
                      setShowOrderSummary(false);
                    }}
                    className="flex-1 bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-light transition-colors"
                  >
                    Bestellung bestätigen
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Configurator */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg p-8 mb-16 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Server Konfigurator</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CPU Kerne
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="32"
                    value={config.cpu}
                    onChange={(e) => setConfig({ ...config, cpu: parseInt(e.target.value) })}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>1 Kern</span>
                    <span>{config.cpu} Kerne</span>
                    <span>32 Kerne</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    RAM
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="64"
                    step="2"
                    value={config.ram}
                    onChange={(e) => setConfig({ ...config, ram: parseInt(e.target.value) })}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>2 GB</span>
                    <span>{config.ram} GB</span>
                    <span>64 GB</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Speicher (SSD)
                  </label>
                  <input
                    type="range"
                    min="25"
                    max="1000"
                    step="25"
                    value={config.storage}
                    onChange={(e) => setConfig({ ...config, storage: parseInt(e.target.value) })}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>25 GB</span>
                    <span>{config.storage} GB</span>
                    <span>1000 GB</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Ihre Konfiguration</h2>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg border border-primary/10">
                <ul className="space-y-3 mb-6">
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
                  <li className="flex justify-between">
                    <span>Betriebssystem:</span>
                    <div className="text-right">
                      {config.operatingSystem ? (
                        <span className="font-medium">
                          {config.operatingSystem.name} {config.operatingSystem.version}
                        </span>
                      ) : (
                        <button
                          onClick={() => setShowOsModal(true)}
                          className="text-primary hover:text-primary-dark font-medium"
                        >
                          Betriebssystem auswählen
                        </button>
                      )}
                    </div>
                  </li>
                </ul>
                <div className="text-3xl font-bold mb-4 text-primary">
                  {calculatePrice()} €<span className="text-sm font-normal text-gray-600">/Monat</span>
                </div>
                <button 
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-light transition-colors"
                  onClick={() => {
                    if (!config.operatingSystem) {
                      setShowOsModal(true);
                    } else {
                      setShowOrderSummary(true);
                    }
                  }}
                >
                  Jetzt bestellen
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
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