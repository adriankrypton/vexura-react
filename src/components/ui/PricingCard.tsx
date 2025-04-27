import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
  onSelect?: () => void;
  delay?: number;
}

export function PricingCard({ name, price, features, recommended, onSelect, delay = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`relative bg-white rounded-xl shadow-lg p-8 border-2 ${
        recommended ? 'border-primary' : 'border-gray-100'
      }`}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          Empfohlen
        </div>
      )}
      <h3 className="text-2xl font-semibold mb-4">{name}</h3>
      <div className="text-3xl font-bold mb-6">
        {price} €<span className="text-lg font-normal text-gray-600">/Monat</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <Check className="h-5 w-5 text-primary mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className={`w-full py-3 rounded-lg font-medium transition-colors ${
          recommended
            ? 'bg-primary text-white hover:bg-primary-light'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        Jetzt bestellen
      </button>
    </motion.div>
  );
}