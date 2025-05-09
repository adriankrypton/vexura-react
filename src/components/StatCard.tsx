import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

export function StatCard({ icon: Icon, value, label, description }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{value}</h3>
      <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">{label}</p>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
}