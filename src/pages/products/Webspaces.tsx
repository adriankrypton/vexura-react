import { motion } from 'framer-motion';
import { HardDrive, Shield, Gauge, Globe, Code, Database, Clock, Users, Server } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
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
              Webhosting für Profis
            </h1>
            <p className="text-xl text-white/90 dark:text-white/80">
              Schnelles und sicheres Hosting für Ihre Webprojekte mit modernster Technologie
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-display font-bold text-center mb-12 dark:text-white">
          Wählen Sie Ihr Hosting-Paket
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700 hover:border-primary/20 dark:hover:border-primary-light/20 hover:shadow-xl transition-all ${
                plan.recommended ? 'ring-2 ring-primary dark:ring-primary-light' : ''
              }`}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 dark:text-white">{plan.name}</h3>
              <div className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-primary-light">
                {plan.price} €<span className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-400">/Monat</span>
              </div>
              {plan.recommended && (
                <div className="mb-6">
                  <span className="bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light px-3 py-1 rounded-full text-sm font-medium">
                    Empfohlen
                  </span>
                </div>
              )}
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-center">
                  <HardDrive className="h-5 w-5 md:h-6 md:w-6 text-primary dark:text-primary-light mr-2 md:mr-3" />
                  <span className="text-base md:text-lg dark:text-gray-300">{plan.storage}</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 md:h-6 md:w-6 text-primary dark:text-primary-light mr-2 md:mr-3" />
                  <span className="text-base md:text-lg dark:text-gray-300">{plan.domains}</span>
                </li>
                <li className="flex items-center">
                  <Database className="h-5 w-5 md:h-6 md:w-6 text-primary dark:text-primary-light mr-2 md:mr-3" />
                  <span className="text-base md:text-lg dark:text-gray-300">{plan.databases}</span>
                </li>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="h-5 w-5 md:h-6 md:w-6 text-primary dark:text-primary-light mr-2 md:mr-3 flex items-center justify-center">
                      ✓
                    </div>
                    <span className="text-base md:text-lg dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleOrder(plan)}
                className="w-full bg-gradient-to-r from-primary to-primary-light dark:from-primary-light dark:to-primary text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold text-sm md:text-base hover:opacity-90 transition-opacity"
              >
                Jetzt bestellen
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4 dark:text-white">
              Unterstützte Technologien
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-center border border-gray-200 dark:border-gray-700"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 dark:text-white">{tech.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 border border-gray-200 dark:border-gray-700">
              <span className="text-[#0B3D91] dark:text-primary-light">⚡</span>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Alle Technologien werden regelmäßig auf die neuesten Versionen aktualisiert
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] dark:from-[#0B3D91]/90 dark:to-[#1E88E5]/90 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Häufig gestellte Fragen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 dark:bg-white/5 dark:backdrop-blur-xl">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-white/90 dark:text-white/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}