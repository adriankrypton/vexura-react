import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const infoPages = [
    { label: 'Elterninformationen', href: '/info/parents' },
    { label: 'Rechenzentrum', href: '/info/datacenter' },
    { label: 'Zahlungsmethoden', href: '/info/payment' },
    { label: 'Infrastruktur', href: '/info/infrastructure' },
    { label: 'Reselling', href: '/info/reselling' },
    { label: 'Partner', href: '/info/partners' }
  ];

  const products = [
    { label: 'KVM Root Server', href: '/products/root-server' },
    { label: 'Domains', href: '/products/domains' },
    { label: 'GameServer', href: '/products/game-server' },
    { label: 'Webspaces', href: '/products/webspaces' },
    { label: 'Teamspeak Server', href: '/products/teamspeak' },
    { label: 'Storageboxen', href: '/products/storage' },
    { label: 'Dedicated Server', href: '/products/dedicated' }
  ];

  const legal = [
    { label: 'Impressum', href: '/legal/imprint' },
    { label: 'Datenschutz', href: '/legal/privacy' },
    { label: 'AGB', href: '/legal/terms' }
  ];

  return (
    <footer className="relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7FB069] to-[#C6E377] opacity-90" />
      
      <div className="relative text-gray-800 pt-16 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <img src="/img/logo.png" alt="Vexura" className="h-8 mb-6" />
              <p className="text-gray-700 mb-6">
                Professionelle Hosting-Lösungen für Ihr Unternehmen
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Info Pages */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-4 text-gray-900">Informationen</h3>
              <ul className="space-y-2">
                {infoPages.map((item, index) => (
                  <li key={index}>
                    <Link to={item.href} className="text-gray-700 hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-4 text-gray-900">Produkte</h3>
              <ul className="space-y-2">
                {products.map((item, index) => (
                  <li key={index}>
                    <Link to={item.href} className="text-gray-700 hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Legal */}
            <div>
              <div className="mb-8">
                <h3 className="font-display text-lg font-semibold mb-4 text-gray-900">Kontakt</h3>
                <div className="space-y-3">
                  <a href="tel:+49123456789" className="flex items-center text-gray-700 hover:text-primary transition-colors">
                    <Phone className="h-5 w-5 mr-2" />
                    +49 123 456 789
                  </a>
                  <a href="mailto:info@vexura.de" className="flex items-center text-gray-700 hover:text-primary transition-colors">
                    <Mail className="h-5 w-5 mr-2" />
                    info@vexura.de
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold mb-4 text-gray-900">Legal</h3>
                <ul className="space-y-2">
                  {legal.map((item, index) => (
                    <li key={index}>
                      <Link to={item.href} className="text-gray-700 hover:text-primary transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700/20 text-center text-gray-700">
            <p>&copy; {new Date().getFullYear()} Vexura. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}