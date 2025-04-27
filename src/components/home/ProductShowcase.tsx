import { motion } from 'framer-motion';
import { Server, Globe, Shield, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  icon: typeof Server;
  title: string;
  description: string;
  price: string;
  link: string;
  features: string[];
}

export function ProductShowcase() {
  const products: Product[] = [
    {
      icon: Server,
      title: "KVM Root Server",
      description: "High-Performance Server mit voller Root-Kontrolle",
      price: "ab 9.99€",
      link: "/products/root-server",
      features: ["Volle Root-Rechte", "DDoS-Schutz", "SSD Storage"]
    },
    {
      icon: Globe,
      title: "Webhosting",
      description: "Professionelles Hosting für Ihre Webprojekte",
      price: "ab 2.99€",
      link: "/products/webspaces",
      features: ["SSL-Zertifikate", "PHP 8.x", "24/7 Support"]
    },
    {
      icon: Shield,
      title: "Dedicated Server",
      description: "Dedizierte Hardware für maximale Leistung",
      price: "ab 49.99€",
      link: "/products/dedicated",
      features: ["Enterprise Hardware", "Backup inklusive", "Monitoring"]
    },
    {
      icon: Cpu,
      title: "Game Server",
      description: "Optimierte Server für Gaming-Performance",
      price: "ab 4.99€",
      link: "/products/game-server",
      features: ["DDoS-Schutz", "Niedrige Latenz", "24/7 Support"]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-6">
            Unsere Hosting-Lösungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere maßgeschneiderten Hosting-Lösungen für jeden Bedarf
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-turquoise/5 rounded-xl transform transition-transform group-hover:scale-105" />
              <Link
                to={product.link}
                className="block relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="p-3 bg-gradient-to-br from-primary to-primary-light rounded-lg w-fit mb-4">
                  <product.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-2xl font-bold text-primary mb-4">
                  {product.price}
                </div>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}