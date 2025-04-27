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
      <div className="bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] rounded-xl shadow-lg p-8 text-white">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Häufig gestellte Fragen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((faq, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-white/90">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}