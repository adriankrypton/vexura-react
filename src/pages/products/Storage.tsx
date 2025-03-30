import { motion } from 'framer-motion';
import { HardDrive, Shield, Upload, Download, Lock, Share2, Clock, Gauge } from 'lucide-react';
import { useState } from 'react';

interface StoragePlan {
  name: string;
  price: number;
  space: string;
  transfer: string;
  features: string[];
  recommended?: boolean;
}

export function Storage() {
  const [storageSize, setStorageSize] = useState(100);
  
  const plans: StoragePlan[] = [
    {
      name: 'Basic',
      price: 4.99,
      space: '100 GB',
      transfer: '1 TB',
      features: ['Backup System', 'Web Interface', 'FTP Zugang']
    },
    {
      name: 'Professional',
      price: 9.99,
      space: '500 GB',
      transfer: '5 TB',
      features: ['Backup System', 'Web Interface', 'FTP Zugang', 'Snapshots', 'API Zugriff'],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 19.99,
      space: '2 TB',
      transfer: '20 TB',
      features: ['Backup System', 'Web Interface', 'FTP Zugang', 'Snapshots', 'API Zugriff', 'Dedizierte IP']
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Sicher',
      description: 'AES-256 Verschlüsselung'
    },
    {
      icon: Gauge,
      title: 'Schnell',
      description: 'SSD Speicher'
    },
    {
      icon: Clock,
      title: 'Verfügbar',
      description: '99.9% Uptime'
    },
    {
      icon: Share2,
      title: 'Flexibel',
      description: 'Einfaches Sharing'
    }
  ];

  const faqs = [
    {
      question: 'Wie sicher sind meine Daten?',
      answer: 'Ihre Daten werden mit AES-256 verschlüsselt und in mehreren Rechenzentren redundant gespeichert.'
    },
    {
      question: 'Welche Zugriffsmöglichkeiten gibt es?',
      answer: 'Sie können über WebDAV, FTP, SFTP oder unsere Web-Oberfläche auf Ihre Daten zugreifen.'
    },
    {
      question: 'Gibt es Backup-Systeme?',
      answer: 'Ja, wir erstellen automatisch tägliche Backups Ihrer Daten und bewahren diese 30 Tage lang auf.'
    },
    {
      question: 'Wie funktioniert die Abrechnung?',
      answer: 'Sie zahlen nur für den tatsächlich genutzten Speicherplatz. Die Abrechnung erfolgt monatlich.'
    }
  ];

  const calculatePrice = () => {
    return (storageSize * 0.05).toFixed(2);
  };

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
              Cloud Storage
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Sicherer und schneller Cloud-Speicher für deine Daten. Mit modernster Technologie und höchsten Sicherheitsstandards.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Storage Calculator */}
      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6">Storage Konfigurator</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Speicherplatz
              </label>
              <input
                type="range"
                min="50"
                max="2000"
                step="50"
                value={storageSize}
                onChange={(e) => setStorageSize(parseInt(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>50 GB</span>
                <span>{storageSize} GB</span>
                <span>2 TB</span>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">
                {calculatePrice()} €<span className="text-lg font-normal text-gray-600">/Monat</span>
              </div>
              <p className="text-gray-600">Inklusive aller Features</p>
              <button className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-light transition-colors">
                Jetzt bestellen
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Unsere Storage-Pakete
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
                  ? 'border-primary'
                  : 'border-gray-100'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Empfohlen
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6">
                {plan.price} €<span className="text-lg font-normal text-gray-600">/Monat</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <HardDrive className="h-5 w-5 text-primary mr-2" />
                  {plan.space} Speicher
                </li>
                <li className="flex items-center">
                  <Upload className="h-5 w-5 text-primary mr-2" />
                  {plan.transfer} Transfer
                </li>
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <div className="h-5 w-5 text-primary mr-2">✓</div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                plan.recommended
                  ? 'bg-primary text-white hover:bg-primary-light'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                Jetzt bestellen
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Unsere Storage-Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Anwendungsmöglichkeiten
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Lock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backup</h3>
            <p className="text-gray-600">Sichere Backups deiner wichtigen Daten mit automatischer Versionierung.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Share2 className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">File Sharing</h3>
            <p className="text-gray-600">Teile große Dateien einfach und sicher mit anderen.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Download className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cloud Storage</h3>
            <p className="text-gray-600">Greife von überall auf deine Daten zu.</p>
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