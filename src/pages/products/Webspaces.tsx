import { motion } from 'framer-motion';
import { HardDrive, Shield, Gauge, Globe, Code, Database, Clock, Users, Server } from 'lucide-react';

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
              Webhosting für Profis
            </h1>
            <p className="text-xl text-white/90">
              Schnelles und sicheres Hosting für Ihre Webprojekte mit modernster Technologie
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Wählen Sie Ihr Hosting-Paket
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 text-left">Features</th>
                {plans.map((plan, index) => (
                  <th key={index} className={`p-4 text-center ${plan.recommended ? 'bg-[#0B3D91] text-white' : ''}`}>
                    <div className="font-semibold text-lg">{plan.name}</div>
                    <div className="text-2xl font-bold mt-2">
                      {plan.price} €<span className="text-sm font-normal">/Monat</span>
                    </div>
                    {plan.recommended && (
                      <div className="mt-2 text-sm bg-white/20 px-3 py-1 rounded-full inline-block">
                        Empfohlen
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium">SSD Speicher</td>
                {plans.map((plan, index) => (
                  <td key={index} className="p-4 text-center">{plan.storage}</td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Domains</td>
                {plans.map((plan, index) => (
                  <td key={index} className="p-4 text-center">{plan.domains}</td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Datenbanken</td>
                {plans.map((plan, index) => (
                  <td key={index} className="p-4 text-center">{plan.databases}</td>
                ))}
              </tr>
              {['SSL-Zertifikate', 'PHP 8.x', 'MySQL 8.0', 'FTP-Zugang', 'Priority Support', 'Backups', 'SSH-Zugang', 'Redis Cache', 'Node.js Support'].map((feature) => (
                <tr key={feature} className="border-b">
                  <td className="p-4 font-medium">{feature}</td>
                  {plans.map((plan, index) => (
                    <td key={index} className="p-4 text-center">
                      {plan.features.includes(feature) ? (
                        <div className="text-[#0B3D91]">✓</div>
                      ) : (
                        <div className="text-gray-300">×</div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-4"></td>
                {plans.map((plan, index) => (
                  <td key={index} className="p-4 text-center">
                    <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      plan.recommended
                        ? 'bg-[#0B3D91] text-white hover:bg-[#1E88E5]'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}>
                      Jetzt bestellen
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Technologies */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">
              Unterstützte Technologien
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wir unterstützen alle gängigen Web-Technologien für Ihre Projekte. 
              Von klassischen PHP-Anwendungen bis hin zu modernen Node.js-Projekten.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'PHP', icon: '⚡', description: 'PHP 7.4 - 8.3' },
              { name: 'MySQL', icon: '🗄️', description: 'MySQL 8.0' },
              { name: 'Node.js', icon: '🟢', description: 'LTS Version' },
              { name: 'Python', icon: '🐍', description: 'Python 3.x' },
              { name: 'Ruby', icon: '💎', description: 'Ruby 3.x' },
              { name: 'WordPress', icon: '📝', description: 'Auto-Updates' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-center"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
              <span className="text-[#0B3D91]">⚡</span>
              <span className="text-sm text-gray-700">
                Alle Technologien werden regelmäßig auf die neuesten Versionen aktualisiert
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Häufig gestellte Fragen
          </h2>
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