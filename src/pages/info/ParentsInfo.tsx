import { motion } from 'framer-motion';

export function ParentsInfo() {
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
            <h1 className="text-4xl font-display font-bold mb-8">Elterninformationen</h1>
            <p className="text-xl text-white/90 mb-6">
              Informationen für Eltern über unsere Dienste und Sicherheitsmaßnahmen.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Informationen für Eltern über unsere Dienste und Sicherheitsmaßnahmen.
          </p>
        </div>
      </div>
    </div>
  );
}