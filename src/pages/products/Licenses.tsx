import { motion } from 'framer-motion';
import { Shield, Server, Globe, Check } from 'lucide-react';
import { useState } from 'react';

interface LicensePlan {
  name: string;
  price: number;
  type: string;
  features: string[];
  recommended?: boolean;
}

export function Licenses() {
  const [licenseType, setLicenseType] = useState<'vps' | 'dedicated'>('vps');

  const features = [
    {
      icon: Shield,
      title: 'Automatische Updates',
      description: 'Immer die neueste Version'
    },
    {
      icon: Server,
      title: 'Unbegrenzte Domains',
      description: 'Hosten Sie beliebig viele Domains'
    },
    {
      icon: Globe,
      title: 'Premium Support',
      description: '24/7 technischer Support'
    }
  ];

  const vpsPlans: LicensePlan[] = [
    {
      name: 'Web Admin Edition',
      price: 9.99,
      type: 'VPS',
      features: [
        '10 Domains',
        'Mail-Support',
        'Basis Funktionen',
        'Apache & nginx',
        'PHP & MySQL'
      ]
    },
    {
      name: 'Web Pro Edition',
      price: 14.99,
      type: 'VPS',
      features: [
        'Unbegrenzte Domains',
        'Premium Support',
        'Erweiterte Funktionen',
        'Apache & nginx',
        'PHP & MySQL',
        'Node.js Support'
      ],
      recommended: true
    },
    {
      name: 'Web Host Edition',
      price: 19.99,
      type: 'VPS',
      features: [
        'Unbegrenzte Domains',
        'Premium Support',
        'Alle Funktionen',
        'Apache & nginx',
        'PHP & MySQL',
        'Node.js Support',
        'Reseller Funktionen',
        'White Label'
      ]
    }
  ];

  const dedicatedPlans: LicensePlan[] = [
    {
      name: 'Web Admin Edition',
      price: 19.99,
      type: 'Dedicated',
      features: [
        'Unbegrenzte Domains',
        'Mail-Support',
        'Basis Funktionen',
        'Apache & nginx',
        'PHP & MySQL'
      ]
    },
    {
      name: 'Web Pro Edition',
      price: 24.99,
      type: 'Dedicated',
      features: [
        'Unbegrenzte Domains',
        'Premium Support',
        'Alle Funktionen',
        'Apache & nginx',
        'PHP & MySQL',
        'Node.js Support',
        'Ruby Support'
      ],
      recommended: true
    },
    {
      name: 'Web Host Edition',
      price: 29.99,
      type: 'Dedicated',
      features: [
        'Unbegrenzte Domains',
        'Premium Support',
        'Alle Funktionen',
        'Apache & nginx',
        'PHP & MySQL',
        'Node.js Support',
        'Ruby Support',
        'Reseller Funktionen',
        'White Label'
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] overflow-hidden dark:from-[#0B3D91]/90 dark:to-[#1E88E5]/90 py-24">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px] dark:bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent dark:from-primary/40" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl font-display font-bold mb-6">
              Plesk Lizenzen
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Professionelle Plesk Lizenzen für Ihren VPS oder Dedicated Server
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <feature.icon className="h-12 w-12 text-[#0B3D91] dark:text-primary-light mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* License Type Switch */}
      <div className="container mx-auto px-4 py-24">
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg inline-flex">
            <button
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                licenseType === 'vps'
                  ? 'bg-white dark:bg-gray-700 text-[#0B3D91] dark:text-primary-light shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-[#0B3D91] dark:hover:text-primary-light'
              }`}
              onClick={() => setLicenseType('vps')}
            >
              VPS Lizenzen
            </button>
            <button
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                licenseType === 'dedicated'
                  ? 'bg-white dark:bg-gray-700 text-[#0B3D91] dark:text-primary-light shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-[#0B3D91] dark:hover:text-primary-light'
              }`}
              onClick={() => setLicenseType('dedicated')}
            >
              Dedicated Lizenzen
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(licenseType === 'vps' ? vpsPlans : dedicatedPlans).map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border-2 ${
                plan.recommended ? 'border-[#0B3D91] dark:border-primary-light' : 'border-gray-100 dark:border-gray-700'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0B3D91] dark:bg-primary-light text-white px-4 py-1 rounded-full text-sm font-medium">
                  Empfohlen
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6 text-[#0B3D91] dark:text-primary-light">
                {plan.price} €<span className="text-lg font-normal text-gray-600 dark:text-gray-400">/Monat</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center dark:text-gray-300">
                    <Check className="h-5 w-5 text-[#0B3D91] dark:text-primary-light mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                plan.recommended
                  ? 'bg-[#0B3D91] dark:bg-primary-light text-white hover:bg-[#1E88E5] dark:hover:bg-primary'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}>
                Jetzt bestellen
              </button>
            </motion.div>
          ))}
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
              <h3 className="text-lg font-semibold mb-2">Was ist der Unterschied zwischen den Editionen?</h3>
              <p className="text-white/90 dark:text-white/80">Die Pro Edition bietet zusätzliche Features wie Node.js Support und unbegrenzte Domains, während die Admin Edition für grundlegende Hosting-Anforderungen ausgelegt ist.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-white/5 dark:backdrop-blur-xl">
              <h3 className="text-lg font-semibold mb-2">Kann ich die Edition später wechseln?</h3>
              <p className="text-white/90 dark:text-white/80">Ja, Sie können jederzeit ein Upgrade oder Downgrade Ihrer Lizenz vornehmen. Die Änderungen werden sofort wirksam.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-white/5 dark:backdrop-blur-xl">
              <h3 className="text-lg font-semibold mb-2">Sind Updates inklusive?</h3>
              <p className="text-white/90 dark:text-white/80">Ja, alle Plesk-Updates sind in der Lizenz enthalten und werden automatisch zur Verfügung gestellt.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}