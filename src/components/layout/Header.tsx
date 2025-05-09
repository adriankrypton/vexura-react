import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      to={href}
      className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium font-sans"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: NavLinkProps & { onClick?: () => void }) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium py-2 font-sans"
    >
      {children}
    </Link>
  );
}

function DropdownNavLink({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium font-sans">
        {title}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50 border border-gray-100 dark:border-gray-700"
          >
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 hover:text-primary dark:hover:text-primary transition-colors font-sans"
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
  const { theme, toggleTheme } = useTheme();

  const serverProducts = [
    { label: 'KVM Server', href: '/products/root-server' },
    { label: 'Dedicated Server', href: '/products/dedicated' },
    { label: 'Gameserver', href: '/products/game-server' },
    { label: 'Teamspeak Server', href: '/products/teamspeak' }
  ];

  const webhosting = [
    { label: 'Webspaces', href: '/products/webspaces' },
    { label: 'Domains', href: '/products/domains' }
  ];

  const services = [
    { label: 'Storageboxen', href: '/products/storage' },
    { label: 'VPN', href: '/products/vpn' }
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
      'root-server': 'KVM Server',
      'dedicated': 'Dedicated Server',
      'game-server': 'Gameserver',
      'teamspeak': 'TeamSpeak Server',
      'webspaces': 'Webhosting',
      'domains': 'Domains',
      'storage': 'Storageboxen',
      'licenses': 'Lizenzen',
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
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/img/logo.png" alt="Vexura" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between w-full ml-8">
          <div className="flex items-center space-x-6">
            <NavLink href="/">Startseite</NavLink>
            <DropdownNavLink title="Server" items={serverProducts} />
            <DropdownNavLink title="Webhosting" items={webhosting} />
            <DropdownNavLink title="Dienste" items={services} />
            <DropdownNavLink title="Lizenzen" items={licenses} />
            <DropdownNavLink title="Informationen" items={infoPages} />
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors font-medium font-sans"
            >
              Dashboard
            </Link>
            
            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Theme wechseln"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 lg:hidden">
          {/* Theme Switcher for Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Theme wechseln"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="text-gray-600 dark:text-gray-300"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed inset-0 z-40"
          >
            {/* Overlay */}
            <div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="container mx-auto px-4 py-8 space-y-6">
                <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>Startseite</MobileNavLink>
                
                <div className="py-3">
                  <p className="font-semibold mb-3 text-sm dark:text-gray-300">Server</p>
                  <div className="space-y-2">
                    {serverProducts.map((item, index) => (
                      <MobileNavLink key={index} href={item.href} onClick={() => setIsMenuOpen(false)}>
                        {item.label}
                      </MobileNavLink>
                    ))}
                  </div>
                </div>

                <div className="py-3">
                  <p className="font-semibold mb-3 text-sm dark:text-gray-300">Webhosting</p>
                  <div className="space-y-2">
                    {webhosting.map((item, index) => (
                      <MobileNavLink key={index} href={item.href} onClick={() => setIsMenuOpen(false)}>
                        {item.label}
                      </MobileNavLink>
                    ))}
                  </div>
                </div>

                <div className="py-3">
                  <p className="font-semibold mb-3 text-sm dark:text-gray-300">Dienste</p>
                  <div className="space-y-2">
                    {services.map((item, index) => (
                      <MobileNavLink key={index} href={item.href} onClick={() => setIsMenuOpen(false)}>
                        {item.label}
                      </MobileNavLink>
                    ))}
                  </div>
                </div>

                <div className="py-3">
                  <p className="font-semibold mb-3 text-sm dark:text-gray-300">Lizenzen</p>
                  <div className="space-y-2">
                    {licenses.map((item, index) => (
                      <MobileNavLink key={index} href={item.href} onClick={() => setIsMenuOpen(false)}>
                        {item.label}
                      </MobileNavLink>
                    ))}
                  </div>
                </div>

                <div className="py-3">
                  <p className="font-semibold mb-3 text-sm dark:text-gray-300">Informationen</p>
                  <div className="space-y-2">
                    {infoPages.map((item, index) => (
                      <MobileNavLink key={index} href={item.href} onClick={() => setIsMenuOpen(false)}>
                        {item.label}
                      </MobileNavLink>
                    ))}
                  </div>
                </div>

                <div className="py-3">
                  <p className="font-semibold mb-3 text-sm dark:text-gray-300">Rechtliches</p>
                  <div className="space-y-2">
                    {legal.map((item, index) => (
                      <MobileNavLink key={index} href={item.href} onClick={() => setIsMenuOpen(false)}>
                        {item.label}
                      </MobileNavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}