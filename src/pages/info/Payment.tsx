import { motion } from 'framer-motion';
import { CreditCard, Wallet, Ban as Bank, Shield, Clock, Gift } from 'lucide-react';

interface PaymentMethod {
  icon: any;
  name: string;
  description: string;
  processingTime: string;
}

export function Payment() {
  const paymentMethods: PaymentMethod[] = [
    {
      icon: CreditCard,
      name: "Kreditkarte",
      description: "Visa, Mastercard, American Express",
      processingTime: "Sofort"
    },
    {
      icon: Bank,
      name: "Banküberweisung",
      description: "SEPA Überweisung",
      processingTime: "1-3 Werktage"
    },
    {
      icon: Wallet,
      name: "PayPal",
      description: "Schnell und sicher bezahlen",
      processingTime: "Sofort"
    },
    {
      icon: Gift,
      name: "Gutschein",
      description: "Vexura Geschenkgutscheine",
      processingTime: "Sofort"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Sichere Zahlung",
      description: "256-bit SSL Verschlüsselung"
    },
    {
      icon: Clock,
      title: "Sofortige Aktivierung",
      description: "Nach Zahlungseingang"
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
              Zahlungsmethoden
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Flexible und sichere Zahlungsmöglichkeiten für Ihre Dienste
            </p>
          </motion.div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <method.icon className="h-12 w-12 text-[#00B4DB] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{method.name}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <div className="text-sm text-gray-500">
                Bearbeitungszeit: {method.processingTime}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            >
              <feature.icon className="h-12 w-12 text-[#00B4DB] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Häufig gestellte Fragen
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Wann wird mein Dienst aktiviert?</h3>
              <p className="text-gray-600">Nach erfolgreicher Zahlung wird Ihr Dienst sofort automatisch aktiviert.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Wie sicher sind meine Zahlungsdaten?</h3>
              <p className="text-gray-600">Ihre Daten werden mit modernster SSL-Verschlüsselung übertragen und nach höchsten Sicherheitsstandards verarbeitet.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Kann ich die Zahlungsmethode später ändern?</h3>
              <p className="text-gray-600">Ja, Sie können Ihre Zahlungsmethode jederzeit in Ihrem Kundenkonto anpassen.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}