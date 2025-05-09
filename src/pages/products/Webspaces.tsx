import { motion } from 'framer-motion';
import { HardDrive, Shield, Gauge, Globe, Code, Database, Clock, Users, Server } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LocationSelector } from '../../components/LocationSelector';
import { useState } from 'react';

interface WebspaceFeature {
  icon: any;
  title: string;
  description: string;
}

interface WebspacePlan {
  name: string;
  price: number;
  storage: string;
  domains: string;
  databases: string;
  features: string[];
  recommended?: boolean;
}

interface Config {
  storage: number;
  databases: number;
  subdomains: number;
}

export function Webspaces() {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState<string>('nuremberg');
  const [config, setConfig] = useState<Config>({
    storage: 10,
    databases: 1,
    subdomains: 5
  });

  const features: WebspaceFeature[] = [
    {
      icon: Shield,
      title: 'SSL Zertifikate',
      description: 'Kostenlose SSL-Zertifikate für alle Ihre Domains'
    },
    {
      icon: Gauge,
      title: 'SSD Speicher',
      description: 'Schnelle SSD-Festplatten für maximale Performance'
    },
    {
      icon: Globe,
      title: 'Domain Manager',
      description: 'Einfache Verwaltung aller Ihrer Domains'
    },
    {
      icon: Code,
      title: 'PHP 8.x',
      description: 'Unterstützung der neuesten PHP-Version'
    },
    {
      icon: Database,
      title: 'MySQL 8.0',
      description: 'Aktuelle MySQL-Datenbanken'
    },
    {
      icon: Clock,
      title: '99.9% Uptime',
      description: 'Garantierte Verfügbarkeit'
    }
  ];

  const plans: WebspacePlan[] = [
    {
      name: 'Basic',
      price: 2.99,
      storage: '10 GB',
      domains: '1 Domain',
      databases: '2 Datenbanken',
      features: [
        'SSL-Zertifikate',
        'PHP 8.x',
        'MySQL 8.0',
        'FTP-Zugang',
        'E-Mail Support'
      ]
    },
    {
      name: 'Professional',
      price: 5.99,
      storage: '25 GB',
      domains: '5 Domains',
      databases: '10 Datenbanken',
      features: [
        'SSL-Zertifikate',
        'PHP 8.x',
        'MySQL 8.0',
        'FTP-Zugang',
        'Priority Support',
        'Tägliche Backups',
        'SSH-Zugang'
      ],
      recommended: true
    },
    {
      name: 'Business',
      price: 9.99,
      storage: '50 GB',
      domains: 'Unbegrenzt',
      databases: 'Unbegrenzt',
      features: [
        'SSL-Zertifikate',
        'PHP 8.x',
        'MySQL 8.0',
        'FTP-Zugang',
        'Priority Support',
        'Stündliche Backups',
        'SSH-Zugang',
        'Redis Cache',
        'Node.js Support'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Wie schnell ist mein Webspace verfügbar?',
      answer: 'Nach erfolgreicher Bestellung wird Ihr Webspace innerhalb weniger Minuten automatisch eingerichtet.'
    },
    {
      question: 'Kann ich eine bestehende Website umziehen?',
      answer: 'Ja, wir unterstützen Sie beim Umzug Ihrer Website. Unser Support-Team hilft Ihnen gerne dabei.'
    },
    {
      question: 'Welche PHP-Versionen werden unterstützt?',
      answer: 'Wir unterstützen alle aktuellen PHP-Versionen von 7.4 bis 8.3. Sie können die Version jederzeit wechseln.'
    },
    {
      question: 'Sind Backups inklusive?',
      answer: 'Ja, wir erstellen automatisch tägliche Backups Ihrer Daten und bewahren diese 30 Tage lang auf.'
    }
  ];

  const calculatePrice = () => {
    const basePrice = 5;
    const storagePrice = config.storage * 0.5;
    const databasePrice = config.databases * 2;
    const subdomainPrice = config.subdomains * 0.2;
    return (basePrice + storagePrice + databasePrice + subdomainPrice).toFixed(2);
  };

  const handleCustomOrder = () => {
    navigate('/order', {
      state: {
        type: 'webspace',
        config: {
          ...config,
          location: selectedLocation
        }
      }
    });
  };

  const handleOrder = (plan: WebspacePlan) => {
    const orderDetails = {
      productName: `Webspace - ${plan.name}`,
      price: plan.price,
      features: [
        { label: 'Webspace', value: plan.storage },
        { label: 'Datenbanken', value: plan.databases },
        { label: 'Subdomains', value: plan.domains },
        { label: 'E-Mail-Adressen', value: 'Unbegrenzt' }
      ]
    };

    navigate('/order', { state: { orderDetails } });
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
              Webspaces
            </h1>
            <p className="text-xl mb-8 text-white/90 dark:text-white/80">
              Professionelle Webhosting-Lösungen für Ihre Online-Projekte.
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
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">Webspace Konfigurator</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 -mt-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Speicher (GB)
                </label>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={config.storage}
                  onChange={(e) => setConfig({ ...config, storage: Number(e.target.value) })}
                  className="w-full accent-primary dark:accent-primary-light"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <span>5 GB</span>
                  <span>{config.storage} GB</span>
                  <span>100 GB</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Datenbanken
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={config.databases}
                  onChange={(e) => setConfig({ ...config, databases: Number(e.target.value) })}
                  className="w-full accent-primary dark:accent-primary-light"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <span>1</span>
                  <span>{config.databases}</span>
                  <span>10</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subdomains
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={config.subdomains}
                  onChange={(e) => setConfig({ ...config, subdomains: Number(e.target.value) })}
                  className="w-full accent-primary dark:accent-primary-light"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <span>1</span>
                  <span>{config.subdomains}</span>
                  <span>50</span>
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
                    <span>Speicher:</span>
                    <span className="font-medium">{config.storage} GB</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Datenbanken:</span>
                    <span className="font-medium">{config.databases}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Subdomains:</span>
                    <span className="font-medium">{config.subdomains}</span>
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