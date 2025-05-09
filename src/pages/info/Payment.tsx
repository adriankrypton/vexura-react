import { motion } from 'framer-motion';
import { CreditCard, Wallet, Ban as Bank, Shield, Lock, CheckCircle2, Clock, Gift } from 'lucide-react';
import { PaymentMethodCard } from '../../components/payment/PaymentMethodCard';
import { SecurityFeature } from '../../components/payment/SecurityFeature';

export function Payment() {
  const paymentMethods = [
    {
      icon: CreditCard,
      name: "Kreditkarte",
      description: "Visa, Mastercard, American Express",
      processingTime: "Sofortige Aktivierung",
      benefits: [
        "Keine zusätzlichen Gebühren",
        "Automatische monatliche Abbuchung",
        "Höchste Sicherheitsstandards",
        "3D Secure Authentifizierung"
      ]
    },
    {
      icon: Bank,
      name: "SEPA-Lastschrift",
      description: "Bequeme automatische Abbuchung",
      processingTime: "2-3 Werktage für Erstabbuchung",
      benefits: [
        "Keine zusätzlichen Gebühren",
        "Automatische monatliche Abbuchung",
        "SEPA-Mandat elektronisch",
        "14 Tage Widerrufsrecht"
      ]
    },
    {
      icon: Wallet,
      name: "PayPal",
      description: "Schnell und sicher bezahlen",
      processingTime: "Sofortige Aktivierung",
      benefits: [
        "Käuferschutz inklusive",
        "Express-Checkout möglich",
        "Keine zusätzlichen Gebühren",
        "Automatische Verlängerung"
      ]
    },
    {
      icon: Gift,
      name: "Gutscheincode",
      description: "Prepaid & Geschenkgutscheine",
      processingTime: "Sofortige Aktivierung",
      benefits: [
        "Flexible Einlösung",
        "Übertragbar",
        "Ideal zum Verschenken",
        "Verschiedene Wertstufen"
      ]
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "SSL-Verschlüsselung",
      description: "Alle Zahlungsdaten werden mit modernster SSL-Technologie verschlüsselt übertragen."
    },
    {
      icon: Lock,
      title: "PCI DSS konform",
      description: "Wir erfüllen alle Anforderungen der Kreditkartenindustrie für sichere Zahlungen."
    },
    {
      icon: CheckCircle2,
      title: "Geprüfte Sicherheit",
      description: "Regelmäßige Sicherheitsaudits durch unabhängige Institutionen."
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Kontinuierliche Überwachung aller Zahlungssysteme für maximale Sicherheit."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] dark:from-[#0B3D91]/90 dark:to-[#1E88E5]/90 py-24">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px] dark:bg-grid-white/[0.05]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl font-display font-bold mb-6">
              Sichere & flexible Zahlungsmöglichkeiten
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Wählen Sie aus verschiedenen Zahlungsmethoden und profitieren Sie von höchsten Sicherheitsstandards bei jeder Transaktion.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Payment Methods Grid */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paymentMethods.map((method, index) => (
            <PaymentMethodCard key={index} {...method} index={index} />
          ))}
        </div>
      </div>

      {/* Security Features */}
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            Ihre Sicherheit hat höchste Priorität
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Modernste Sicherheitstechnologien für Ihre Zahlungen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <SecurityFeature key={index} {...feature} index={index} />
          ))}
        </div>
      </div>

      {/* Process Steps */}
      <div className="bg-white dark:bg-gray-800 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              So einfach funktioniert's
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              In wenigen Schritten zu Ihrem neuen Hosting-Produkt
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Produkt wählen",
                description: "Wählen Sie Ihr gewünschtes Hosting-Produkt aus unserem Angebot."
              },
              {
                step: "02",
                title: "Zahlungsart festlegen",
                description: "Entscheiden Sie sich für Ihre bevorzugte Zahlungsmethode."
              },
              {
                step: "03",
                title: "Sofort loslegen",
                description: "Nach erfolgreicher Zahlung steht Ihr Produkt sofort zur Verfügung."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600"
              >
                <div className="text-6xl font-bold text-primary/10 dark:text-primary-light/10 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}