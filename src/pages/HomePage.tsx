import { motion } from 'framer-motion';
import { Server, Users, Clock, Shield, ArrowRight } from 'lucide-react';
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
      <section className="py-8 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="container mx-auto px-2 md:px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-turquoise/5 dark:from-primary/10 dark:to-accent-turquoise/10 rounded-xl transform transition-transform group-hover:scale-105" />
                <div className="relative bg-white dark:bg-gray-800 p-3 md:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="p-2 md:p-3 bg-gradient-to-br from-primary to-primary-light rounded-lg w-fit mb-2 md:mb-4">
                    <stat.icon className="h-4 w-4 md:h-6 md:w-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2">{stat.value}</h3>
                  <p className="text-sm md:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">{stat.label}</p>
                  <p className="text-xs md:text-base text-gray-600 dark:text-gray-400">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductShowcase />

      <NewsHighlight />

      {/* Features Section */}
      <section className="py-8 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D91] via-[#1E88E5] to-[#00BCD4] dark:from-[#0B3D91]/90 dark:via-[#1E88E5]/90 dark:to-[#00BCD4]/90" />
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px] dark:bg-grid-white/[0.05]" />
        <div className="container mx-auto px-2 md:px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-16"
          >
            <h2 className="text-xl md:text-4xl font-display font-bold text-white dark:text-white/95 mb-3 md:mb-6">
              Warum Vexura?
            </h2>
            <p className="text-sm md:text-xl text-white/90 dark:text-white/80 max-w-3xl mx-auto">
              Wir kombinieren modernste Technologie mit jahrelanger Expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm dark:bg-white/5 p-3 md:p-6 rounded-xl border border-white/20"
              >
                <feature.icon className="h-6 w-6 md:h-12 md:w-12 text-white mb-2 md:mb-4" />
                <h3 className="text-base md:text-xl font-semibold text-white dark:text-white/95 mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-xs md:text-base text-white/80 dark:text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="container mx-auto px-2 md:px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-xl md:text-4xl font-display font-bold mb-3 md:mb-6 dark:text-white">
              Bereit für professionelles Hosting?
            </h2>
            <p className="text-sm md:text-xl mb-4 md:mb-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Starten Sie noch heute mit Vexura und erleben Sie modernste
              Hosting-Technologie kombiniert mit erstklassigem Support.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-primary-light text-white px-4 md:px-8 py-2 md:py-4 rounded-lg font-semibold inline-flex items-center group text-sm md:text-base"
            >
              Server konfigurieren
              <ArrowRight className="ml-2 h-3 w-3 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}