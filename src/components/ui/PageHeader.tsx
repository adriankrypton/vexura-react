import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="relative bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] py-24">
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px]" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-5xl font-display font-bold mb-6">{title}</h1>
          {description && (
            <p className="text-xl mb-8 text-white/90">{description}</p>
          )}
          {children}
        </motion.div>
      </div>
    </div>
  );
}