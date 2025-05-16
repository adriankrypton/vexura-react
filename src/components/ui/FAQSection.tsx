import { motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-gradient-to-r from-[#0732C5] to-[#016CF3] dark:from-[#0732C5]/90 dark:to-[#016CF3]/90 rounded-xl shadow-lg p-8 text-white">
        <h2 className="text-3xl font-display font-bold text-center mb-12 dark:text-white/95">
          Häufig gestellte Fragen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((faq, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm dark:bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 dark:text-white/95">{faq.question}</h3>
              <p className="text-white/90 dark:text-white/80">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}