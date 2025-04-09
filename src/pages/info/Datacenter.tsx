import { motion } from 'framer-motion';
import { Shield, Server, Zap, Wifi, Cloud, Lock, ThermometerSnowflake, Users } from 'lucide-react';

interface Datacenter {
  name: string;
  location: string;
  country: string;
  features: string[];
  certifications: string[];
  specs: {
    power: string[];
    cooling: string[];
    security: string[];
    network: string[];
  };
}

export function Datacenter() {
  const datacenters: Datacenter[] = [
    {
      name: "NorthC",
      location: "Nürnberg",
      country: "Deutschland",
      features: [
        'Tier 4 Design',
        'Redundante Stromversorgung',
        'Modernste Klimatisierung',
        '24/7 Sicherheitspersonal'
      ],
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
      features: [
        'Tier 3+ Design',
        'Grüne Energie',
        'Modernste Sicherheitssysteme',
        'Multi-Carrier-Anbindung'
      ],
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

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0B3D91] via-[#1E88E5] to-[#00BCD4] py-24">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl font-display font-bold mb-6">
              Unsere Rechenzentren
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Modernste Infrastruktur für höchste Ansprüche an Sicherheit, 
              Verfügbarkeit und Performance.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Datacenter Grid */}
      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {datacenters.map((dc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{dc.name} Datacenter</h2>
                  <p className="text-gray-600">{dc.location}, {dc.country}</p>
                </div>
                <div className="flex gap-2">
                  {dc.certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Zap className="h-5 w-5 text-primary mr-2" />
                    Stromversorgung
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {dc.specs.power.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <ThermometerSnowflake className="h-5 w-5 text-primary mr-2" />
                    Klimatisierung
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {dc.specs.cooling.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    Sicherheit
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {dc.specs.security.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Wifi className="h-5 w-5 text-primary mr-2" />
                    Netzwerk
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {dc.specs.network.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infrastructure Overview */}
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-6">
            Unsere Infrastruktur
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modernste Technologie und redundante Systeme für maximale 
            Verfügbarkeit und Performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Server className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hardware</h3>
            <p className="text-gray-600">
              Hochwertige Server-Hardware von führenden Herstellern für maximale Zuverlässigkeit
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Cloud className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Netzwerk</h3>
            <p className="text-gray-600">
              Redundante Netzwerkanbindung mit mehreren 100 GBit/s Uplinks und DDoS-Schutz
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Lock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sicherheit</h3>
            <p className="text-gray-600">
              24/7 Überwachung und mehrstufige Sicherheitssysteme zum Schutz Ihrer Daten
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-gray-600">
              Kompetenter technischer Support rund um die Uhr für alle Ihre Anliegen
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}