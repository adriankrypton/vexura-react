import { motion } from 'framer-motion';
import { Server, Cpu, HardDrive, Map, Shield, Gauge, Globe } from 'lucide-react';
import { useState } from 'react';
import { LocationSelector } from '../../components/LocationSelector';

interface Package {
  name: string;
  price: number;
  cpu: string;
  cores: string;
  ram: string;
  storage: string;
  bandwidth: string;
  recommended?: boolean;
}

export function DedicatedServer() {
  const [selectedLocation, setSelectedLocation] = useState('nuremberg');

  const packages: Package[] = [
    {
      name: 'Enterprise S',
      price: 129.99,
      cpu: 'AMD EPYC 7443P',
      cores: '24 Kerne',
      ram: '64 GB DDR4 ECC',
      storage: '2x 1TB NVMe SSD',
      bandwidth: '1 Gbit/s'
    },
    {
      name: 'Enterprise M',
      price: 199.99,
      cpu: 'AMD EPYC 7543P',
      cores: '32 Kerne',
      ram: '128 GB DDR4 ECC',
      storage: '2x 2TB NVMe SSD',
      bandwidth: '1 Gbit/s',
      recommended: true
    },
    {
      name: 'Enterprise L',
      price: 299.99,
      cpu: 'AMD EPYC 7643',
      cores: '48 Kerne',
      ram: '256 GB DDR4 ECC',
      storage: '2x 4TB NVMe SSD',
      bandwidth: '2 Gbit/s'
    }
  ];

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

  const faqs = [
    {
      question: 'Was ist ein Dedicated Server?',
      answer: 'Ein Dedicated Server ist ein physischer Server, der exklusiv für Sie bereitgestellt wird. Sie haben die komplette Kontrolle und volle Ressourcen zur Verfügung.'
    },
    {
      question: 'Welche Betriebssysteme werden unterstützt?',
      answer: 'Wir unterstützen alle gängigen Linux-Distributionen (Ubuntu, Debian, CentOS, etc.) sowie Windows Server. Sie können das Betriebssystem jederzeit neu installieren.'
    },
    {
      question: 'Wie schnell ist die Bereitstellung?',
      answer: 'Die Bereitstellung Ihres Dedicated Servers erfolgt in der Regel innerhalb von 24 Stunden nach Zahlungseingang.'
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
        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-xl shadow-lg p-8 border-2 ${
                pkg.recommended ? 'border-primary' : 'border-gray-100'
              }`}
            >
              {pkg.recommended && (
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
                pkg.recommended
                  ? 'bg-primary text-white hover:bg-primary-light'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                Server konfigurieren
              </button>
            </motion.div>
          ))}
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