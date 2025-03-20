import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function ProductCard({ title, description, icon: Icon, href }: ProductCardProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -5 }}
      className="block bg-white rounded-xl shadow-lg border border-gray-100 p-6 transition-colors hover:border-primary/20"
    >
      <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.a>
  );
}