import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface PaymentMethodCardProps {
  icon: typeof LucideIcon;
  name: string;
  description: string;
  processingTime: string;
  benefits: string[];
  index: number;
}

export function PaymentMethodCard({ icon: Icon, name, description, processingTime, benefits, index }: PaymentMethodCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/0 dark:from-primary/10 dark:to-primary/5 group-hover:from-primary/10 dark:group-hover:from-primary/20 transition-colors" />
      <div className="relative p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-lg group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
            <Icon className="h-8 w-8 text-primary dark:text-primary-light" />
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">Bearbeitungszeit:</span>
            <span className="ml-2">{processingTime}</span>
          </div>
          
          <ul className="space-y-2">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="w-1.5 h-1.5 bg-primary dark:bg-primary-light rounded-full mr-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}