import { motion } from 'framer-motion';
import { useState } from 'react';
import { Server, Cpu, HardDrive, Map, Shield, Gauge, Globe } from 'lucide-react';
import { LocationSelector } from '../../components/LocationSelector';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState<string>('nuremberg');
  const [config, setConfig] = useState<ConfiguratorState>({
    cpu: 2,
    ram: 4,
    storage: 50,
    operatingSystem: null,
  });

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
      question: 'Was ist ein KVM Server?',
      answer: 'Ein KVM Server ist ein virtueller Server mit garantierten Ressourcen und voller Root-Zugriff. Sie haben die komplette Kontrolle über Ihr System und können es nach Ihren Wünschen konfigurieren.'
    },
    {
      question: 'Welche Betriebssysteme werden unterstützt?',
      answer: 'Wir unterstützen alle gängigen Linux-Distributionen (Ubuntu, Debian, CentOS, etc.) sowie Windows Server. Sie können das Betriebssystem jederzeit neu installieren.'
    },
    {
      question: 'Wie schnell ist die Bereitstellung?',
      answer: 'Die Bereitstellung Ihres KVM Server erfolgt vollautomatisch innerhalb weniger Minuten nach Zahlungseingang.'
    },
    {
      question: 'Gibt es eine Mindestvertragslaufzeit?',
      answer: 'Nein, unsere Server können monatlich gekündigt werden. Wir bieten auch Rabatte bei längerer Vertragsbindung an.'
    }
  ];

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
    <div>
      {/* Hero Section */}
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
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-4 md:p-6"
                >
                  <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-accent-turquoise mb-3 md:mb-4" />
                  <h3 className="text-base md:text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm md:text-base text-white/80">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-2 md:px-4 py-8 md:py-12">
        {/* Location Selection */}
        <div className="mb-8 md:mb-12">
          <div className="w-full">
            <LocationSelector
              selectedLocation={selectedLocation}
              onLocationSelect={setSelectedLocation}
            />
          </div>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {getPackages(selectedLocation).map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-4 md:p-8 border border-gray-200 hover:border-primary/20 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">{pkg.name}</h3>
              <p className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-primary">{pkg.price.toFixed(2)} €<span className="text-sm md:text-base font-normal text-gray-600">/Monat</span></p>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-center">
                  <Cpu className="h-5 w-5 md:h-6 md:w-6 text-primary mr-2 md:mr-3" />
                  <span className="text-base md:text-lg">{pkg.cpu} Kerne</span>
                </li>
                <li className="flex items-center">
                  <Server className="h-5 w-5 md:h-6 md:w-6 text-primary mr-2 md:mr-3" />
                  <span className="text-base md:text-lg">{pkg.ram} GB RAM</span>
                </li>
                <li className="flex items-center">
                  <HardDrive className="h-5 w-5 md:h-6 md:w-6 text-primary mr-2 md:mr-3" />
                  <span className="text-base md:text-lg">{pkg.storage} GB SSD</span>
                </li>
                <li className="flex items-center">
                  <Map className="h-5 w-5 md:h-6 md:w-6 text-primary mr-2 md:mr-3" />
                  <span className="text-base md:text-lg">{pkg.bandwidth}</span>
                </li>
              </ul>
              <button
                onClick={() => handleOrder(pkg)}
                className="w-full bg-gradient-to-r from-primary to-primary-light text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold text-sm md:text-base"
              >
                Jetzt bestellen
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom Configurator */}
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 border border-gray-200 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 md:mb-8">Individuelle Konfiguration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div>
              <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">CPU Kerne</label>
              <select
                value={config.cpu}
                onChange={(e) => setConfig({ ...config, cpu: Number(e.target.value) })}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base"
              >
                {[2, 4, 8, 16, 32].map((value) => (
                  <option key={value} value={value}>{value}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">RAM (GB)</label>
              <select
                value={config.ram}
                onChange={(e) => setConfig({ ...config, ram: Number(e.target.value) })}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base"
              >
                {[4, 8, 16, 32, 64].map((value) => (
                  <option key={value} value={value}>{value}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">Speicher (GB)</label>
              <select
                value={config.storage}
                onChange={(e) => setConfig({ ...config, storage: Number(e.target.value) })}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base"
              >
                {[50, 100, 200, 400, 800].map((value) => (
                  <option key={value} value={value}>{value}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">Betriebssystem</label>
              <select
                value={config.operatingSystem?.name || ''}
                onChange={(e) => {
                  const os = operatingSystems.find(os => os.name === e.target.value);
                  setConfig({ ...config, operatingSystem: os || null });
                }}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base"
              >
                <option value="">Bitte wählen</option>
                {operatingSystems.map((os) => (
                  <option key={`${os.name}-${os.version}`} value={os.name}>
                    {os.name} {os.version}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-sm md:text-base text-gray-600">Monatlicher Preis:</p>
              <p className="text-2xl md:text-3xl font-bold text-primary">{calculatePrice()} €</p>
            </div>
            <button
              onClick={handleCustomOrder}
              className="w-full md:w-auto bg-gradient-to-r from-primary to-primary-light text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold text-sm md:text-base"
            >
              Konfiguration bestellen
            </button>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 md:mb-8">Häufig gestellte Fragen</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-4 md:p-6 border border-gray-200">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{faq.question}</h3>
              <p className="text-sm md:text-base text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}