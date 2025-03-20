import { useState } from 'react';
import { Menu, X, Server } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Server className="h-8 w-8 text-primary" />
          <span className="font-display font-bold text-xl text-primary hidden sm:block">
            Vexura
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/products">Produkte</NavLink>
          <NavLink href="/infrastructure">Infrastruktur</NavLink>
          <NavLink href="/about">Über uns</NavLink>
          <Link 
            to="/register" 
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light transition-colors"
          >
            Jetzt starten
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
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
            className="md:hidden bg-white border-b border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <MobileNavLink href="/products">Produkte</MobileNavLink>
              <MobileNavLink href="/infrastructure">Infrastruktur</MobileNavLink>
              <MobileNavLink href="/about">Über uns</MobileNavLink>
              <Link 
                to="/register"
                className="block w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light transition-colors text-center"
              >
                Jetzt starten
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}