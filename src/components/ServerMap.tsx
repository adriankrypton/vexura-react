import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export function ServerMap() {
  const locations = [
    { city: 'Frankfurt', lat: '50.1109', lng: '8.6821', ping: '5ms' },
    { city: 'Berlin', lat: '52.5200', lng: '13.4050', ping: '7ms' },
    { city: 'München', lat: '48.1351', lng: '11.5820', ping: '8ms' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12">
          Unsere Serverstandorte
        </h2>
        <div className="relative w-full h-[400px] bg-white rounded-xl shadow-lg p-6">
          {/* Simple map representation - In a real project, use a proper map library */}
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
                      <p className="text-gray-600">Ping: {location.ping}</p>
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