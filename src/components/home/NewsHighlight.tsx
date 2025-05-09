import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useState } from 'react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
}

export function NewsHighlight() {
  const [activeNews, setActiveNews] = useState<NewsItem | null>(null);

  const news: NewsItem[] = [
    {
      id: 1,
      title: "Neue Generation von Root-Servern",
      date: "2025-03-15",
      category: "Produkte",
      excerpt: "Erleben Sie unsere neuesten High-Performance Server mit DDR5 RAM",
      content: "Detaillierte Beschreibung der neuen Server-Generation...",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg"
    },
    {
      id: 2,
      title: "Frankfurt Rechenzentrum Update",
      date: "2025-03-10",
      category: "Infrastruktur",
      excerpt: "Erweiterung unserer Kapazitäten im Frankfurter Rechenzentrum",
      content: "Details zur Erweiterung des Rechenzentrums...",
      image: "https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg"
    },
    {
      id: 3,
      title: "Neue Backup-Funktionen",
      date: "2025-03-05",
      category: "Features",
      excerpt: "Automatische Backups und verbesserte Wiederherstellungsoptionen",
      content: "Informationen zu den neuen Backup-Funktionen...",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D91]/5 via-white to-[#00BCD4]/5 dark:from-[#0B3D91]/10 dark:via-gray-800 dark:to-[#00BCD4]/10" />
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-display font-bold mb-12 dark:text-white"
        >
          Aktuelle News
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setActiveNews(item)}
            >
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-white/90 dark:bg-gray-800/90 text-primary dark:text-primary-light px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(item.date).toLocaleDateString('de-DE')}
              </div>
              <p className="text-gray-600 dark:text-gray-300">{item.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal Popup for News */}
      {activeNews && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm dark:backdrop-blur-xl z-50 flex items-center justify-center p-4"
          onClick={() => setActiveNews(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-gray-200 dark:border-gray-700"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img src={activeNews.image} alt={activeNews.title} className="w-full h-64 object-cover rounded-t-xl" />
              <button
                onClick={() => setActiveNews(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 bg-white/80 dark:bg-gray-800/80 rounded-full p-1"
              >
                <span className="sr-only">Schließen</span>
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span className="bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light px-3 py-1 rounded-full">
                  {activeNews.category}
                </span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(activeNews.date).toLocaleDateString('de-DE')}
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">{activeNews.title}</h2>
              <div className="prose dark:prose-invert max-w-none">
                {activeNews.content.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4 text-gray-600 dark:text-gray-300">{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}