import { motion } from 'framer-motion';
import { Server, Users, Clock, Shield } from 'lucide-react';
import { HeroSection } from '../components/home/HeroSection';
import { ProductShowcase } from '../components/home/ProductShowcase';
import { NewsHighlight } from '../components/home/NewsHighlight';

export function HomePage() {
  const stats = [
    {
      icon: Clock,
      value: "99.9%",
      label: "Uptime",
      description: "Garantierte Verfügbarkeit"
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Kunden",
      description: "Zufriedene Nutzer"
    },
    {
      icon: Server,
      value: "500+",
      label: "Server",
      description: "Hochleistungsserver"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Sicherheit",
      description: "Modernste Sicherheitssysteme und DDoS-Schutz"
    },
    {
      icon: Server,
      title: "Performance",
      description: "High-End Hardware für beste Leistung"
    },
    {
      icon: Clock,
      title: "Verfügbarkeit",
      description: "24/7 Monitoring und Support"
    }
  ];

  return (
    <>
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-turquoise/5 rounded-xl transform transition-transform group-hover:scale-105" />
                <div className="relative bg-white p-6 rounded-xl shadow-lg">
                  <div className="p-3 bg-gradient-to-br from-primary to-primary-light rounded-lg w-fit mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</p>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductShowcase />

      <NewsHighlight />

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D91] via-[#1E88E5] to-[#00BCD4]" />
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Warum Vexura?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Wir kombinieren modernste Technologie mit jahrelanger Expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <feature.icon className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Bereit für professionelles Hosting?
            </h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Starten Sie noch heute mit Vexura und erleben Sie modernste
              Hosting-Technologie kombiniert mit erstklassigem Support.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center group"
            >
              Server konfigurieren
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}