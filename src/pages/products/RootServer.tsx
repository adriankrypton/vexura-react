import { motion } from 'framer-motion';

export function RootServer() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-display font-bold mb-8">Root Server / KVM</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Unsere Root Server und KVM-Lösungen.
          </p>
        </div>
      </motion.div>
    </div>
  );
}