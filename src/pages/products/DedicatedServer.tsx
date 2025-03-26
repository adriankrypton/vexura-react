import { motion } from 'framer-motion';
import { Server, Shield, Gauge, Globe, Cpu, HardDrive, Network, Clock } from 'lucide-react';
import { useState } from 'react';

interface ServerConfig {
  cpu: string;
  ram: number;
  storage: number;
  bandwidth: string;
}

export function DedicatedServer() {
  const [selectedConfig, setSelectedConfig] = useState<ServerConfig>({
    cpu: 'AMD EPYC 7443P',
    ram: 64,
    storage: 2000,
    bandwidth: '1 Gbit/s'
  });

  const features = [
    {
      icon: Shield,
      title: 'DDoS Protection',
      description: 'Enterprise DDoS-Schutz inklusive'
    },
    {
      icon: Network,
      title: 'Premium Netzwerk',
      description: 'Redundante 400G Anbindung'
    },
    {
      icon: Clock,
      title: 'Schnelle Bereitstellung',
      description: 'Setup innerhalb von 24h'
    },
    {
      icon: Globe,
      title: 'Standort Deutschland',
      description: 'NorthC Datacenter Nürnberg'
    }
  ];

  const serverConfigs = [
    {
      name: 'Enterprise S',
      price: 129.99,
      specs: {
        cpu: 'AMD EPYC 7443P',
        cores: '24 Kerne',
        ram: '64 GB DDR4 ECC',
        storage: '2x 1TB NVMe SSD',
        bandwidth: '1 Gbit/s'
      }
    },
    {
      name: 'Enterprise M',
      price: 199.99,
      specs: {
        cpu: 'AMD EPYC 7543P',
        cores: '32 Kerne',
        ram: '128 GB DDR4 ECC',
        storage: '2x 2TB NVMe SSD',
        bandwidth: '1 Gbit/s'
      },
      recommended: true
    },
    {
      name: 'Enterprise L',
      price: 299.99,
      specs: {
        cpu: 'AMD EPYC 7643',
        cores: '48 Kerne',
        ram: '256 GB DDR4 ECC',
        storage: '2x 4TB NVMe SSD',
        bandwidth: '2 Gbit/s'
      }
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] py-24">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl font-display font-bold mb-6">
              Dedicated Server
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Enterprise Hardware für höchste Ansprüche. Hosted im NorthC Datacenter Nürnberg.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <feature.icon className="h-12 w-12 text-[#0B3D91] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Server Configurations */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Enterprise Server Konfigurationen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serverConfigs.map((config, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-xl shadow-lg p-8 border-2 ${
                config.recommended ? 'border-[#0B3D91]' : 'border-gray-100'
              }`}
            >
              {config.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0B3D91] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Empfohlen
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-4">{config.name}</h3>
              <div className="text-3xl font-bold mb-6">
                {config.price} €<span className="text-lg font-normal text-gray-600">/Monat</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Cpu className="h-5 w-5 text-[#0B3D91] mr-2" />
                  {config.specs.cpu}
                </li>
                <li className="flex items-center">
                  <Server className="h-5 w-5 text-[#0B3D91] mr-2" />
                  {config.specs.cores}
                </li>
                <li className="flex items-center">
                  <HardDrive className="h-5 w-5 text-[#0B3D91] mr-2" />
                  {config.specs.ram}
                </li>
                <li className="flex items-center">
                  <HardDrive className="h-5 w-5 text-[#0B3D91] mr-2" />
                  {config.specs.storage}
                </li>
                <li className="flex items-center">
                  <Gauge className="h-5 w-5 text-[#0B3D91] mr-2" />
                  {config.specs.bandwidth}
                </li>
              </ul>
              <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                config.recommended
                  ? 'bg-[#0B3D91] text-white hover:bg-[#1E88E5]'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                Server konfigurieren
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technical Details */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Enterprise Hardware
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Prozessoren</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AMD EPYC 7443P (24 Kerne, 48 Threads)</li>
                <li>• AMD EPYC 7543P (32 Kerne, 64 Threads)</li>
                <li>• AMD EPYC 7643 (48 Kerne, 96 Threads)</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Arbeitsspeicher</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• DDR4 ECC Registered RAM</li>
                <li>• Bis zu 256 GB RAM</li>
                <li>• Multi-Channel Konfiguration</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Storage</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• NVMe SSDs in RAID-Konfiguration</li>
                <li>• Bis zu 8 TB Gesamtspeicher</li>
                <li>• Enterprise Storage Controller</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Netzwerk</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Redundante 400G Backbone-Anbindung</li>
                <li>• Enterprise DDoS-Schutz</li>
                <li>• IPv4 & IPv6 Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Häufig gestellte Fragen
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Wie lange dauert die Bereitstellung?</h3>
            <p className="text-gray-600">Die Bereitstellung Ihres Dedicated Servers erfolgt in der Regel innerhalb von 24 Stunden nach Bestelleingang.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Welche Betriebssysteme werden unterstützt?</h3>
            <p className="text-gray-600">Wir unterstützen alle gängigen Linux-Distributionen sowie Windows Server. Das Betriebssystem können Sie bei der Bestellung auswählen.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Gibt es eine Mindestvertragslaufzeit?</h3>
            <p className="text-gray-600">Die Mindestvertragslaufzeit beträgt 1 Monat. Bei längerer Vertragsbindung gewähren wir attraktive Rabatte.</p>
          </div>
        </div>
      </div>
    </div>
  );
}