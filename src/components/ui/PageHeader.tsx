import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="relative bg-gradient-to-r from-[#0732C5] to-[#016CF3] py-24 dark:from-[#0732C5]/90 dark:to-[#016CF3]/90">
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px] dark:bg-grid-white/[0.05]" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-5xl font-display font-bold mb-6 dark:text-white/95">{title}</h1>
          {description && (
            <p className="text-xl mb-8 text-white/90 dark:text-white/80">{description}</p>
          )}
          {children}
        </motion.div>
      </div>
    </div>
  );
}