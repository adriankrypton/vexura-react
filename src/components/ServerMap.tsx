import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

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

export function ServerMap() {
  const locations: Location[] = [
    {
      city: 'Frankfurt',
      country: 'Deutschland',
      lat: '50.1109',
      lng: '8.6821',
      features: [
        'Tier 4 Design',
        'Redundante Stromversorgung',
        'Modernste Klimatisierung',
        '24/7 Sicherheitspersonal'
      ],
      certifications: ['ISO 27001', 'ISO 9001', 'PCI DSS'],
      connectivity: '400G Backbone-Anbindung',
      power: '2N+1 Redundanz'
    },
    {
      city: 'Berlin',
      country: 'Deutschland',
      lat: '52.5200',
      lng: '13.4050',
      features: [
        'Tier 3+ Design',
        'Grüne Energie',
        'Modernste Sicherheitssysteme',
        'Direktanbindung DE-CIX'
      ],
      certifications: ['ISO 27001', 'ISO 14001'],
      connectivity: '200G Backbone-Anbindung',
      power: '2N Redundanz'
    },
    {
      city: 'München',
      country: 'Deutschland',
      lat: '48.1351',
      lng: '11.5820',
      features: [
        'Tier 3 Design',
        'Hocheffiziente Kühlung',
        'Biometrische Zugangskontrolle',
        'Multi-Carrier-Anbindung'
      ],
      certifications: ['ISO 27001', 'ISO 50001'],
      connectivity: '100G Backbone-Anbindung',
      power: 'N+1 Redundanz'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-bold mb-6">
            Unsere Rechenzentren
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modernste Infrastruktur an strategisch wichtigen Standorten in Deutschland
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">
                  {location.city}, {location.country}
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Features:</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    {location.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Zertifizierungen:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Konnektivität:</h4>
                  <p className="text-gray-600">{location.connectivity}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Stromversorgung:</h4>
                  <p className="text-gray-600">{location.power}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative w-full h-[400px] bg-white rounded-xl shadow-lg p-6">
          <div className="absolute inset-0 bg-gray-100 rounded-xl overflow-hidden">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="absolute"
                style={{
                  top: `${100 - (parseFloat(location.lat) - 47) * 30}%`,
                  left: `${(parseFloat(location.lng) - 8) * 10}%`
                }}
              >
                <div className="relative group">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white px-3 py-1 rounded-lg shadow-lg text-sm whitespace-nowrap">
                      <p className="font-semibold">{location.city}</p>
                      <p className="text-gray-600">{location.connectivity}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}