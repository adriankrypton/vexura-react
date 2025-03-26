import { motion } from 'framer-motion';
import { Users, Award, Gift, Zap, ArrowRight } from 'lucide-react';

interface CreatorTier {
  name: string;
  requirements: string[];
  benefits: string[];
  commission: string;
}

export function Partners() {
  const features = [
    {
      icon: Users,
      title: 'Große Community',
      description: 'Erreiche Millionen von potenziellen Kunden'
    },
    {
      icon: Award,
      title: 'Exklusive Vorteile',
      description: 'Spezielle Rabatte und Sonderkonditionen'
    },
    {
      icon: Gift,
      title: 'Bonus-Programme',
      description: 'Attraktive Provisionen und Boni'
    },
    {
      icon: Zap,
      title: 'Schnelle Auszahlung',
      description: 'Monatliche Provisionszahlungen'
    }
  ];

  const tiers: CreatorTier[] = [
    {
      name: 'Bronze Creator',
      requirements: [
        '1.000+ Follower',
        'Min. 3 Videos/Monat',
        'Gaming/Tech Content'
      ],
      benefits: [
        '5% Provision auf Neukunden',
        'Eigener Rabatt-Code',
        'Partner-Dashboard'
      ],
      commission: '5%'
    },
    {
      name: 'Silver Creator',
      requirements: [
        '10.000+ Follower',
        'Min. 5 Videos/Monat',
        'Dedizierte Gaming/Tech Rubrik'
      ],
      benefits: [
        '10% Provision auf Neukunden',
        'Eigener Rabatt-Code',
        'Partner-Dashboard',
        'Kostenlose Server zum Testen'
      ],
      commission: '10%'
    },
    {
      name: 'Gold Creator',
      requirements: [
        '50.000+ Follower',
        'Min. 8 Videos/Monat',
        'Hauptfokus Gaming/Tech'
      ],
      benefits: [
        '15% Provision auf Neukunden',
        'Eigener Rabatt-Code',
        'Partner-Dashboard',
        'Kostenlose Server zum Testen',
        'Dedizierter Partner Manager',
        'Exklusive Events'
      ],
      commission: '15%'
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
              Creator Partner Programm
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Werde Teil unseres exklusiven Partner-Programms und profitiere von attraktiven Provisionen und einzigartigen Vorteilen.
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center group">
              Partner werden
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Features */}
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
              <feature.icon className="h-12 w-12 text-[#00B4DB] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Creator Tiers */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Partner Level & Vorteile
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-100"
            >
              <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-[#00B4DB] mb-6">
                {tier.commission}
                <span className="text-lg font-normal text-gray-600"> Provision</span>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Anforderungen:</h4>
                <ul className="space-y-2">
                  {tier.requirements.map((req, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <div className="h-5 w-5 text-[#00B4DB] mr-2">•</div>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Vorteile:</h4>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <div className="h-5 w-5 text-[#00B4DB] mr-2">✓</div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How it Works */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            So funktioniert's
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#00B4DB] text-white rounded-full flex items-center justify-center mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Bewerbung einreichen</h3>
                  <p className="text-gray-600">Fülle das Bewerbungsformular aus und erzähle uns von deinem Content und deiner Community.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#00B4DB] text-white rounded-full flex items-center justify-center mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Verifizierung</h3>
                  <p className="text-gray-600">Wir prüfen deine Bewerbung und melden uns innerhalb von 48 Stunden bei dir.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-[#00B4DB] text-white rounded-full flex items-center justify-center mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Onboarding</h3>
                  <p className="text-gray-600">Nach erfolgreicher Verifizierung erhältst du Zugang zu deinem Partner-Dashboard und allen Vorteilen.</p>
                </div>
              </div>
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
            <h3 className="text-lg font-semibold mb-2">Wie werden die Provisionen berechnet?</h3>
            <p className="text-gray-600">Die Provisionen werden auf Basis des Netto-Umsatzes berechnet, den deine vermittelten Kunden generieren. Die Auszahlung erfolgt monatlich.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Wie lange ist die Partnerlaufzeit?</h3>
            <p className="text-gray-600">Die Partnerschaft läuft zunächst für 6 Monate und verlängert sich automatisch, wenn die Anforderungen weiterhin erfüllt werden.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Kann ich im Level aufsteigen?</h3>
            <p className="text-gray-600">Ja, sobald du die Anforderungen eines höheren Levels erfüllst, wird dein Account automatisch upgegradet.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#00B4DB] to-[#0083B0] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Bereit, Partner zu werden?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Werde jetzt Teil unseres Partner-Programms und starte deine erfolgreiche Zusammenarbeit mit uns.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors inline-flex items-center group">
            Jetzt bewerben
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}