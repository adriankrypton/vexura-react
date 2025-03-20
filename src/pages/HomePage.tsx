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
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Vexura - Ihre zuverlässige Hosting-Lösung
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Professionelles Hosting mit maximaler Performance und Sicherheit für Ihr Unternehmen
            </p>
            <button className="bg-accent-turquoise hover:bg-accent-turquoise/90 text-white px-8 py-4 rounded-lg font-semibold flex items-center group">
              Jetzt entdecken
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
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