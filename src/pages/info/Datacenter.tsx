import { motion } from 'framer-motion';
import { Shield, Server, Zap, Wifi, Cloud, Lock, ThermometerSnowflake, Users } from 'lucide-react';
import { useState } from 'react';

interface Location {
  city: string;
  country: string;
  lat: string;
  lng: string;
  features: string[];
  certifications: string[];
  connectivity: string;
  power: string;
}

interface Datacenter {
  name: string;
  location: string;
  country: string;
  image: string;
  certifications: string[];
  specs: {
    power: string[];
    cooling: string[];
    security: string[];
    network: string[];
  };
}

export function Datacenter() {
  const [view, setView] = useState<'datacenter' | 'infrastructure'>('datacenter');

  const datacenters: Datacenter[] = [
    {
      name: "NorthC",
      location: "Nürnberg",
      country: "Deutschland",
      image: "/img/northnbg.jpg",
      certifications: ['ISO 27001', 'ISO 9001', 'PCI DSS'],
      specs: {
        power: [
          '2N+1 redundante USV-Systeme',
          'Diesel-Notstromaggregate',
          'Separate A/B Stromversorgung',
          'Bis zu 20 kW pro Rack'
        ],
        cooling: [
          'N+1 redundante Klimaanlagen',
          'Hot/Cold Aisle Containment',
          'Energieeffiziente Freikühlung',
          '24/7 Temperaturüberwachung'
        ],
        security: [
          'Biometrische Zugangskontrolle',
          '24/7 Sicherheitspersonal',
          'CCTV-Überwachung',
          'Brandfrüherkennung'
        ],
        network: [
          '400G Backbone-Anbindung',
          'Carrier-neutral',
          'Redundante Glasfaseranbindung',
          'Direct Connect zu Cloud-Providern'
        ]
      }
    },
    {
      name: "SkyLink",
      location: "Eygelshoven",
      country: "Niederlande",
      image: "/img/skylink.png",
      certifications: ['ISO 27001', 'ISO 14001', 'ISO 50001'],
      specs: {
        power: [
          '2N redundante USV-Systeme',
          'Moderne Notstromaggregate',
          'Dual-Power-Feed',
          'Bis zu 15 kW pro Rack'
        ],
        cooling: [
          'Redundante Kühlsysteme',
          'Effiziente Luftführung',
          'Präzisionsklimatisierung',
          'Permanentes Monitoring'
        ],
        security: [
          'Mehrstufige Zugangskontrolle',
          'Permanente Überwachung',
          'Modernste Sicherheitstechnik',
          'Frühwarnsysteme'
        ],
        network: [
          '200G Backbone-Anbindung',
          'Multiple Carrier',
          'Redundante Anbindung',
          'Low-Latency-Verbindungen'
        ]
      }
    }
  ];

  const infrastructureFeatures = [
    {
      icon: Server,
      title: 'Hardware',
      description: 'Hochwertige Server-Hardware von führenden Herstellern für maximale Zuverlässigkeit'
    },
    {
      icon: Cloud,
      title: 'Netzwerk',
      description: 'Redundante Netzwerkanbindung mit mehreren 100 GBit/s Uplinks und DDoS-Schutz'
    },
    {
      icon: Lock,
      title: 'Sicherheit',
      description: '24/7 Überwachung und mehrstufige Sicherheitssysteme zum Schutz Ihrer Daten'
    },
    {
      icon: Users,
      title: 'Support',
      description: 'Kompetenter technischer Support rund um die Uhr für alle Ihre Anliegen'
    }
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
              {view === 'datacenter' ? 'Unsere Rechenzentren' : 'Unsere Infrastruktur'}
            </h1>
            <p className="text-xl text-white/90 mb-6">
              {view === 'datacenter' 
                ? 'Modernste Infrastruktur für höchste Ansprüche an Sicherheit, Verfügbarkeit und Performance.'
                : 'State-of-the-Art Technologie und redundante Systeme für maximale Verfügbarkeit.'}
            </p>
          </motion.div>

          {/* View Toggle */}
          <div className="flex justify-center mt-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-1 inline-flex">
              <button
                onClick={() => setView('datacenter')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  view === 'datacenter'
                    ? 'bg-white text-primary'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Rechenzentren
              </button>
              <button
                onClick={() => setView('infrastructure')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  view === 'infrastructure'
                    ? 'bg-white text-primary'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Infrastruktur
              </button>
            </div>
          </div>
        </div>
      </div>

      {view === 'datacenter' ? (
        // Datacenter View
        <div className="container mx-auto px-4 py-12">
          <div className="space-y-12">
            {datacenters.map((dc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden"
              >
                {/* Datacenter Header with Image */}
                <div className="relative h-64">
                  <img
                    src={dc.image}
                    alt={dc.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h2 className="text-3xl font-bold mb-2">{dc.name} Datacenter</h2>
                    <p className="text-xl">{dc.location}, {dc.country}</p>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    {dc.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Datacenter Specs */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center text-lg">
                        <Zap className="h-6 w-6 text-primary mr-2" />
                        Stromversorgung
                      </h3>
                      <ul className="space-y-3">
                        {dc.specs.power.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-4 flex items-center text-lg">
                        <ThermometerSnowflake className="h-6 w-6 text-primary mr-2" />
                        Klimatisierung
                      </h3>
                      <ul className="space-y-3">
                        {dc.specs.cooling.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-4 flex items-center text-lg">
                        <Shield className="h-6 w-6 text-primary mr-2" />
                        Sicherheit
                      </h3>
                      <ul className="space-y-3">
                        {dc.specs.security.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-4 flex items-center text-lg">
                        <Wifi className="h-6 w-6 text-primary mr-2" />
                        Netzwerk
                      </h3>
                      <ul className="space-y-3">
                        {dc.specs.network.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        // Infrastructure View
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructureFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Netzwerk</h3>
              <p className="text-gray-600">
                Redundante Netzwerkanbindung mit mehreren 100 GBit/s Uplinks und DDoS-Schutz.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Hardware</h3>
              <p className="text-gray-600">
                Modernste Server-Hardware von führenden Herstellern für maximale Zuverlässigkeit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Sicherheit</h3>
              <p className="text-gray-600">
                24/7 Überwachung und mehrstufige Sicherheitssysteme zum Schutz Ihrer Daten.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Verfügbarkeit</h3>
              <p className="text-gray-600">
                99,9% garantierte Verfügbarkeit durch redundante Systeme und USV-Anlagen.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Technische Details</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Mehrere redundante Stromversorgungen</li>
              <li>Klimatisierte Serverräume mit präziser Temperaturkontrolle</li>
              <li>Automatische Backup-Systeme</li>
              <li>Modernste Firewall-Systeme</li>
              <li>24/7 technischer Support</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}