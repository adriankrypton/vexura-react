import { motion } from 'framer-motion';
import { Server, Cpu, HardDrive, Map, Shield, Gauge, Globe } from 'lucide-react';
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

  const packages = [
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

  const operatingSystems = [
    { name: 'Ubuntu', versions: ['22.04 LTS', '20.04 LTS'] },
    { name: 'Debian', versions: ['12', '11'] },
    { name: 'CentOS', versions: ['Stream 9', 'Stream 8'] },
    { name: 'FreeBSD', versions: ['13.2', '12.4'] },
    { name: 'Windows', versions: ['Server 2022', 'Server 2019'] }
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
              Enterprise Hardware für höchste Ansprüche. Hosted im NorthC Datacenter Nürnberg.
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

      {/* Server Packages */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-xl shadow-lg p-8 border-2 ${
                pkg.recommended ? 'border-[#0B3D91]' : 'border-gray-100'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0B3D91] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Empfohlen
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-4">{pkg.name}</h3>
              <div className="text-3xl font-bold mb-6">
                {pkg.price} €<span className="text-lg font-normal text-gray-600">/Monat</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Cpu className="h-5 w-5 text-primary mr-2" />
                  {pkg.specs.cpu}
                </li>
                <li className="flex items-center">
                  <Server className="h-5 w-5 text-primary mr-2" />
                  {pkg.specs.cores}
                </li>
                <li className="flex items-center">
                  <HardDrive className="h-5 w-5 text-primary mr-2" />
                  {pkg.specs.ram}
                </li>
                <li className="flex items-center">
                  <HardDrive className="h-5 w-5 text-primary mr-2" />
                  {pkg.specs.storage}
                </li>
                <li className="flex items-center">
                  <Gauge className="h-5 w-5 text-primary mr-2" />
                  {pkg.specs.bandwidth}
                </li>
              </ul>
              <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                pkg.recommended
                  ? 'bg-[#0B3D91] text-white hover:bg-[#1E88E5]'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                Server konfigurieren
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Operating Systems */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Verfügbare Betriebssysteme
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {operatingSystems.map((os, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{os.name}</h3>
                <ul className="space-y-2 text-gray-600">
                  {os.versions.map((version, i) => (
                    <li key={i}>{version}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Details */}
      <div className="container mx-auto px-4 py-16">
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
  );
}