import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, X } from 'lucide-react';
import { useState } from 'react';

interface NewsItem {
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  href: string;
}

export function NewsSection() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const news: NewsItem[] = [
    {
      title: "Neue Generation von Root-Servern verfügbar",
      date: "2025-03-15",
      excerpt: "Erleben Sie unsere neuesten High-Performance Server mit DDR5 RAM und PCIe 5.0.",
      content: `Wir freuen uns, unsere neueste Generation von Root-Servern vorzustellen. 
      Ausgestattet mit der neuesten AMD EPYC™ Prozessor-Generation, DDR5 RAM und PCIe 5.0 
      bieten diese Server maximale Performance für Ihre Anwendungen.

      Highlights der neuen Server-Generation:
      • Bis zu 96 CPU-Kerne
      • DDR5 RAM mit bis zu 4800 MHz
      • PCIe 5.0 für maximale I/O-Performance
      • Neueste NVMe SSDs
      • 100 GBit/s Netzwerkanbindung

      Die Server sind ab sofort in allen unseren Rechenzentrumsstandorten verfügbar.`,
      category: "Produkte",
      href: "#"
    },
    {
      title: "Frankfurt Rechenzentrum erhält ISO 27001 Zertifizierung",
      date: "2025-03-10",
      excerpt: "Unser Engagement für höchste Sicherheitsstandards wurde erneut bestätigt.",
      content: `Wir freuen uns bekannt geben zu können, dass unser Rechenzentrum in Frankfurt 
      erfolgreich nach ISO 27001 zertifiziert wurde. Diese Zertifizierung bestätigt unsere 
      Einhaltung höchster Sicherheitsstandards im Bereich Informationssicherheit.

      Die ISO 27001 Zertifizierung umfasst:
      • Informationssicherheitsmanagement
      • Physische Sicherheit
      • Netzwerksicherheit
      • Datenschutz
      • Business Continuity

      Diese Zertifizierung unterstreicht unser Engagement für die Sicherheit 
      Ihrer Daten und Systeme.`,
      category: "Unternehmen",
      href: "#"
    },
    {
      title: "Neue Backup-Funktionen für alle Hosting-Pakete",
      date: "2025-03-05",
      excerpt: "Automatische Backups und verbesserte Wiederherstellungsoptionen jetzt verfügbar.",
      content: `Ab sofort bieten wir allen Kunden erweiterte Backup-Funktionen an. 
      Das neue Backup-System ermöglicht noch flexiblere und sicherere Datensicherung.

      Neue Funktionen im Überblick:
      • Stündliche inkrementelle Backups
      • 30 Tage Aufbewahrung
      • Schnelle Wiederherstellung
      • Selektive Wiederherstellung einzelner Dateien
      • Automatische Verifizierung
      
      Die neuen Backup-Funktionen sind für alle Hosting-Pakete verfügbar 
      und können im Kundenbereich aktiviert werden.`,
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
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:border-primary/20 transition-colors cursor-pointer"
              onClick={() => setSelectedNews(item)}
            >
              <div className="p-6">
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
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* News Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {selectedNews.category}
                      </span>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(selectedNews.date).toLocaleDateString('de-DE')}
                      </div>
                    </div>
                    <h2 className="text-2xl font-semibold">{selectedNews.title}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedNews(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="prose max-w-none">
                  {selectedNews.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}