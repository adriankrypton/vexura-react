import { motion } from 'framer-motion';
import { Shield, Server, Zap, Wifi, Cloud, Lock, ThermometerSnowflake, Users } from 'lucide-react';

export function Datacenter() {
  const features = [
    {
      icon: Shield,
      title: 'Höchste Sicherheit',
      description: '24/7 Sicherheitspersonal, biometrische Zugangskontrolle'
    },
    {
      icon: Zap,
      title: 'Redundante Stromversorgung',
      description: 'Mehrfach redundante USV-Systeme und Notstromaggregate'
    },
    {
      icon: ThermometerSnowflake,
      title: 'Klimatisierung',
      description: 'Moderne Kühlsysteme für optimale Betriebstemperatur'
    },
    {
      icon: Wifi,
      title: 'Netzwerk',
      description: '400G Backbone-Anbindung mit mehreren Carriern'
    }
  ];

  const certifications = [
    'ISO 27001',
    'ISO 9001',
    'TÜV Certified',
    'EN 50600'
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] py-24">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl font-display font-bold mb-6">
              NorthC Datacenter Nürnberg
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Eines der modernsten Rechenzentren Deutschlands mit höchsten Standards für Sicherheit und Verfügbarkeit.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <feature.icon className="h-12 w-12 text-[#0B3D91] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Datacenter Details */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">
              Über das Rechenzentrum
            </h2>
            <p className="text-gray-600 mb-6">
              Das NorthC Datacenter in Nürnberg ist ein Hochleistungsrechenzentrum der neuesten Generation. Mit einer Fläche von über 12.000 m² bietet es optimale Bedingungen für Enterprise-Hosting und Colocation.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Server className="h-6 w-6 text-[#0B3D91] mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Carrier-neutrales Rechenzentrum</h3>
                  <p className="text-gray-600">Anbindung an alle wichtigen Carrier und Internet-Exchanges</p>
                </div>
              </li>
              <li className="flex items-start">
                <Lock className="h-6 w-6 text-[#0B3D91] mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Höchste Sicherheitsstandards</h3>
                  <p className="text-gray-600">Mehrstufiges Zutrittskontrollsystem und 24/7 Sicherheitspersonal</p>
                </div>
              </li>
              <li className="flex items-start">
                <Cloud className="h-6 w-6 text-[#0B3D91] mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Modernste Infrastruktur</h3>
                  <p className="text-gray-600">Redundante Systeme für Strom, Kühlung und Netzwerk</p>
                </div>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-[#0B3D91] mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Erfahrenes Team</h3>
                  <p className="text-gray-600">24/7 technischer Support durch qualifizierte Mitarbeiter</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Technische Spezifikationen</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Stromversorgung</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>2N redundante USV-Systeme</li>
                    <li>Diesel-Notstromaggregate</li>
                    <li>Separate A/B Stromversorgung</li>
                    <li>Bis zu 20 kW pro Rack möglich</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Klimatisierung</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>N+1 redundante Klimaanlagen</li>
                    <li>Hot/Cold Aisle Containment</li>
                    <li>Energieeffiziente Freikühlung</li>
                    <li>24/7 Temperaturüberwachung</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Konnektivität</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Carrier-neutral</li>
                    <li>400G Backbone-Anbindung</li>
                    <li>Redundante Glasfaseranbindung</li>
                    <li>Direct Connect zu Cloud-Providern</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Zertifizierungen
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 text-center"
              >
                <Shield className="h-12 w-12 text-[#0B3D91] mx-auto mb-4" />
                <p className="font-semibold">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Interesse an einer Besichtigung?
          </h2>
          <p className="text-gray-600 mb-8">
            Vereinbaren Sie einen Termin für eine persönliche Führung durch unser Rechenzentrum.
          </p>
          <button className="bg-[#0B3D91] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1E88E5] transition-colors">
            Termin vereinbaren
          </button>
        </div>
      </div>
    </div>
  );
}