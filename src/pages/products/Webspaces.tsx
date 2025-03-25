import { motion } from 'framer-motion';
import { Server, Shield, Gauge, Globe, Code, Database, Clock, Users } from 'lucide-react';

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

export function Webspaces() {
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

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#00B4DB] to-[#0083B0] py-24">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl font-display font-bold mb-6">
              Webhosting für Profis
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Schnelles und sicheres Hosting für Ihre Webprojekte mit modernster Technologie
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Hosting vergleichen
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Features entdecken
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-[#00B4DB] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Wählen Sie Ihr Hosting-Paket
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-xl shadow-lg p-8 border-2 ${
                plan.recommended
                  ? 'border-[#00B4DB]'
                  : 'border-gray-100'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00B4DB] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Empfohlen
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6">
                {plan.price} €<span className="text-lg font-normal text-gray-600">/Monat</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Server className="h-5 w-5 text-[#00B4DB] mr-2" />
                  {plan.storage} SSD Speicher
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 text-[#00B4DB] mr-2" />
                  {plan.domains}
                </li>
                <li className="flex items-center">
                  <Database className="h-5 w-5 text-[#00B4DB] mr-2" />
                  {plan.databases}
                </li>
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <div className="h-5 w-5 text-[#00B4DB] mr-2">✓</div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                plan.recommended
                  ? 'bg-[#00B4DB] text-white hover:bg-[#0083B0]'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                Jetzt bestellen
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Unterstützte Technologien
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['PHP', 'MySQL', 'Node.js', 'Python', 'Ruby', 'WordPress'].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <p className="font-semibold">{tech}</p>
              </motion.div>
            ))}
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
            <h3 className="text-lg font-semibold mb-2">Wie schnell ist mein Webspace verfügbar?</h3>
            <p className="text-gray-600">Nach erfolgreicher Bestellung wird Ihr Webspace innerhalb weniger Minuten automatisch eingerichtet.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Kann ich eine bestehende Website umziehen?</h3>
            <p className="text-gray-600">Ja, wir unterstützen Sie beim Umzug Ihrer Website. Unser Support-Team hilft Ihnen gerne dabei.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Welche PHP-Versionen werden unterstützt?</h3>
            <p className="text-gray-600">Wir unterstützen alle aktuellen PHP-Versionen von 7.4 bis 8.3. Sie können die Version jederzeit wechseln.</p>
          </div>
        </div>
      </div>
    </div>
  );
}