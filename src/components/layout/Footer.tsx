import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-display text-xl font-bold mb-4">Vexura</h3>
            <p className="text-gray-400 mb-4">
              Professionelle Hosting-Lösungen für Ihr Unternehmen
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Produkte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Root Server</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Domains</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Game Server</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Webspaces</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rechenzentrum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partner</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Karriere</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <a href="tel:+49123456789" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                +49 123 456 789
              </a>
              <a href="mailto:info@vexura.de" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                info@vexura.de
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vexura. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}