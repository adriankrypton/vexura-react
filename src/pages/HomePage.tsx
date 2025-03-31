import { motion } from 'framer-motion';
import { Server, Users, Clock, Award, ArrowRight } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { ProductCard } from '../components/ProductCard';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { ServerMap } from '../components/ServerMap';
import { NewsSection } from '../components/NewsSection';

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)',
            backgroundBlendMode: 'overlay',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D91]/90 to-[#1E88E5]/80" />
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-6 text-white text-left">
              Hosting der
              <span className="text-accent-turquoise"> nächsten </span>
              Generation
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 text-left">
              Maximale Performance und Sicherheit für Ihre digitale Infrastruktur
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent-turquoise hover:bg-accent-turquoise/90 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center group">
                Produkte entdecken
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold">
                Kontakt aufnehmen
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              icon={Clock}
              value="99.9%"
              label="Uptime"
              description="Garantierte Verfügbarkeit"
            />
            <StatCard
              icon={Users}
              value="10,000+"
              label="Kunden"
              description="Zufriedene Nutzer"
            />
            <StatCard
              icon={Server}
              value="500+"
              label="Server"
              description="Hochleistungsserver"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Unsere Hosting-Lösungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="Root Server"
              description="Maximale Kontrolle und Performance für anspruchsvolle Projekte"
              icon={Server}
              href="/products/root-server"
            />
            {/* Add more ProductCards here */}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Server Map */}
      <ServerMap />

      {/* News Section */}
      <NewsSection />
    </>
  );
}