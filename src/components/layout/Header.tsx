import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      to={href}
      className="text-gray-600 hover:text-primary transition-colors font-medium"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      to={href}
      className="block text-gray-600 hover:text-primary transition-colors font-medium py-2"
    >
      {children}
    </Link>
  );
}

function DropdownNavLink({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="text-gray-600 hover:text-primary transition-colors font-medium">
        {title}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
          >
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const serverProducts = [
    { label: 'KVM Root Server', href: '/products/root-server' },
    { label: 'Dedicated Server', href: '/products/dedicated' },
    { label: 'Game Server', href: '/products/game-server' },
    { label: 'Teamspeak Server', href: '/products/teamspeak' }
  ];

  const webhosting = [
    { label: 'Webspaces', href: '/products/webspaces' },
    { label: 'Domains', href: '/products/domains' }
  ];

  const services = [
    { label: 'Storageboxen', href: '/products/storage' }
  ];

  const licenses = [
    { label: 'Plesk Lizenzen', href: '/products/licenses' }
  ];

  const infoPages = [
    { label: 'Elterninformationen', href: '/info/parents' },
    { label: 'Rechenzentrum', href: '/info/datacenter' },
    { label: 'Zahlungsmethoden', href: '/info/payment' },
    { label: 'Reselling', href: '/info/reselling' },
    { label: 'Partner', href: '/info/partners' },
  ];

  const legal = [
    { label: 'Impressum', href: '/legal/imprint' },
    { label: 'Datenschutz', href: '/legal/privacy' },
    { label: 'AGB', href: '/legal/terms' }
  ];

  // Update document title based on current route
  const currentPage = location.pathname.split('/').pop();
  const getGermanPageTitle = (path: string) => {
    if (!path) return 'Startseite';
    
    const germanTitles: { [key: string]: string } = {
      'root-server': 'KVM Root Server',
      'dedicated': 'Dedicated Server',
      'game-server': 'Game Server',
      'teamspeak': 'TeamSpeak Server',
      'webspaces': 'Webhosting',
      'domains': 'Domains',
      'storage': 'Storageboxen',
      'licenses': 'Plesk Lizenzen',
      'datacenter': 'Rechenzentrum',
      'payment': 'Zahlungsmethoden',
      'reselling': 'Reselling',
      'partners': 'Partner',
      'parents': 'Elterninformationen',
      'infrastructure': 'Infrastruktur',
      'imprint': 'Impressum',
      'privacy': 'Datenschutz',
      'terms': 'AGB',
      'cancellation': 'Widerrufsrecht'
    };

    return germanTitles[path] || path;
  };

  const pageTitle = currentPage ? `Vexura | ${getGermanPageTitle(currentPage)}` : 'Vexura | Startseite';
  document.title = pageTitle;

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/img/logo.png" alt="Vexura" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLink href="/">Startseite</NavLink>
          <DropdownNavLink title="Server" items={serverProducts} />
          <DropdownNavLink title="Webhosting" items={webhosting} />
          <DropdownNavLink title="Dienste" items={services} />
          <DropdownNavLink title="Lizenzen" items={licenses} />
          <DropdownNavLink title="Informationen" items={infoPages} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-8 space-y-8">
              <MobileNavLink href="/">Startseite</MobileNavLink>
              
              <div className="py-4">
                <p className="font-semibold mb-4">Server</p>
                <div className="space-y-3">
                  {serverProducts.map((item, index) => (
                    <MobileNavLink key={index} href={item.href}>
                      {item.label}
                    </MobileNavLink>
                  ))}
                </div>
              </div>

              <div className="py-4">
                <p className="font-semibold mb-4">Webhosting</p>
                <div className="space-y-3">
                  {webhosting.map((item, index) => (
                    <MobileNavLink key={index} href={item.href}>
                      {item.label}
                    </MobileNavLink>
                  ))}
                </div>
              </div>

              <div className="py-4">
                <p className="font-semibold mb-4">Dienste</p>
                <div className="space-y-3">
                  {services.map((item, index) => (
                    <MobileNavLink key={index} href={item.href}>
                      {item.label}
                    </MobileNavLink>
                  ))}
                </div>
              </div>

              <div className="py-4">
                <p className="font-semibold mb-4">Lizenzen</p>
                <div className="space-y-3">
                  {licenses.map((item, index) => (
                    <MobileNavLink key={index} href={item.href}>
                      {item.label}
                    </MobileNavLink>
                  ))}
                </div>
              </div>

              <div className="py-4">
                <p className="font-semibold mb-4">Informationen</p>
                <div className="space-y-3">
                  {infoPages.map((item, index) => (
                    <MobileNavLink key={index} href={item.href}>
                      {item.label}
                    </MobileNavLink>
                  ))}
                </div>
              </div>

              <div className="py-4">
                <p className="font-semibold mb-4">Rechtliches</p>
                <div className="space-y-3">
                  {legal.map((item, index) => (
                    <MobileNavLink key={index} href={item.href}>
                      {item.label}
                    </MobileNavLink>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}