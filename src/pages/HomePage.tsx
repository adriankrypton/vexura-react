import { motion } from 'framer-motion';
import { Server, Users, Clock, Shield, Cpu, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StatCard } from '../components/StatCard';
import { ProductCard } from '../components/ProductCard';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { NewsSection } from '../components/NewsSection';

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

  const products = [
    {
      icon: Server,
      title: "KVM Root Server",
      description: "Leistungsstarke Server mit voller Root-Kontrolle",
      href: "/products/root-server"
    },
    {
      icon: Server,
      title: "Dedicated Server",
      description: "Dedizierte Hardware für maximale Performance",
      href: "/products/dedicated"
    },
    {
      icon: Globe,
      title: "Webhosting",
      description: "Professionelles Hosting für Ihre Website",
      href: "/products/webspaces"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Sicherheit",
      description: "Modernste Sicherheitssysteme und DDoS-Schutz"
    },
    {
      icon: Cpu,
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
      {/* Hero Section with 3D-like Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0B3D91] via-[#1E88E5] to-[#00BCD4]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30">
            {/* Grid Pattern */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
            
            {/* Floating Elements */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white/10 rounded-full"
                style={{
                  width: Math.random() * 100 + 50 + 'px',
                  height: Math.random() * 100 + 50 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                }}
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: Math.random() * 2 + 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                Die Zukunft des
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-turquoise to-white"> Hostings </span>
                ist hier
              </h1>
              <p className="text-xl lg:text-2xl mb-6 text-white/90">
                Modernste Technologie trifft auf erstklassigen Support.
                Entdecken Sie Hosting der nächsten Generation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/products/root-server"
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold flex items-center justify-center group hover:bg-accent-turquoise hover:text-white transition-all duration-300"
                >
                  Server konfigurieren
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/info/datacenter"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Mehr erfahren
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-turquoise/20 rounded-xl blur-3xl" />
                <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="bg-white/5 p-4 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="h-20 flex items-center justify-center">
                          <Server className="h-8 w-8 text-accent-turquoise" />
                        </div>
                        <div className="text-white/80 text-center text-sm">Server {i + 1}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section with Modern Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Warum Vexura?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir kombinieren modernste Technologie mit jahrelanger Expertise, 
              um Ihnen die beste Hosting-Lösung zu bieten.
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
                className="group relative bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-turquoise/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <feature.icon className="h-12 w-12 text-primary mb-6 relative z-10" />
                <h3 className="text-2xl font-semibold mb-4 relative z-10">{feature.title}</h3>
                <p className="text-gray-600 relative z-10">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Numbers */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid with Hover Effects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Unsere Hosting-Lösungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von virtuellen Servern bis zu dedizierten Hosting-Lösungen - 
              wir haben das passende Produkt für Ihre Anforderungen.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                icon={product.icon}
                href={product.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Modern Design */}
      <TestimonialSlider />

      {/* News Section with Enhanced Modal */}
      <NewsSection />

      {/* CTA Section with Gradient */}
      <section className="py-20 bg-gradient-to-br from-[#0B3D91] via-[#1E88E5] to-[#00BCD4] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-display font-bold mb-6 text-white">
              Bereit für professionelles Hosting?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Starten Sie noch heute mit Vexura und erleben Sie modernste 
              Hosting-Technologie kombiniert mit erstklassigem Support.
            </p>
            <Link
              to="/products/root-server"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent-turquoise hover:text-white transition-all duration-300"
            >
              Server konfigurieren
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}