import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

interface NewsItem {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  href: string;
}

export function NewsSection() {
  const news: NewsItem[] = [
    {
      title: "Neue Generation von Root-Servern verfügbar",
      date: "2025-03-15",
      excerpt: "Erleben Sie unsere neuesten High-Performance Server mit DDR5 RAM und PCIe 5.0.",
      category: "Produkte",
      href: "#"
    },
    {
      title: "Frankfurt Rechenzentrum erhält ISO 27001 Zertifizierung",
      date: "2025-03-10",
      excerpt: "Unser Engagement für höchste Sicherheitsstandards wurde erneut bestätigt.",
      category: "Unternehmen",
      href: "#"
    },
    {
      title: "Neue Backup-Funktionen für alle Hosting-Pakete",
      date: "2025-03-05",
      excerpt: "Automatische Backups und verbesserte Wiederherstellungsoptionen jetzt verfügbar.",
      category: "Updates",
      href: "#"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-display font-bold">
            Aktuelle News
          </h2>
          <a 
            href="/news" 
            className="flex items-center text-primary hover:text-primary-light transition-colors font-semibold"
          >
            Alle News
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:border-primary/20 transition-colors"
            >
              <a href={item.href} className="block p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(item.date).toLocaleDateString('de-DE')}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.excerpt}
                </p>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}