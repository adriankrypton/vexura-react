import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0B3D91] via-[#1E88E5] to-[#00BCD4] pb-16 sm:pb-0">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          {/* Animated Background Elements */}
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
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-7xl font-bold mb-8 text-white leading-tight">
            Hosting der
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-turquoise to-white"> nächsten </span>
            Generation
          </h1>
          <p className="text-2xl mb-8 text-white/90 leading-relaxed">
            Entdecken Sie die Zukunft des Hostings mit modernster Technologie 
            und erstklassigem Support. Für Ihre digitale Erfolgsgeschichte.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              to="/products/root-server"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold flex items-center justify-center group hover:bg-accent-turquoise hover:text-white transition-all duration-300"
            >
              Server konfigurieren
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/info/datacenter"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
            >
              Infrastruktur entdecken
              <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}