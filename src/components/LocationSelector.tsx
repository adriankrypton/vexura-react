import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  datacenter: string;
  lat: number;
  lng: number;
  features: string[];
  certifications: string[];
  connectivity: string;
  power: string;
}

interface LocationSelectorProps {
  selectedLocation: string;
  onLocationSelect: (locationId: string) => void;
  className?: string;
}

export function LocationSelector({ selectedLocation, onLocationSelect, className }: LocationSelectorProps) {
  const locations: Location[] = [
    {
      id: 'nuremberg',
      name: 'Nürnberg',
      country: 'Deutschland',
      countryCode: 'DE',
      datacenter: 'NorthC Datacenter',
      lat: 49.4521,
      lng: 11.0767,
      features: [
        'Tier 3+ Design',
        'Green Energy',
        'Niedrige Latenz in DE',
        'Redundante Systeme'
      ],
      certifications: ['ISO 27001', 'ISO 9001', 'ISO 14001'],
      connectivity: '400G Backbone-Anbindung',
      power: '2N Redundanz'
    },
    {
      id: 'eygelshoven',
      name: 'Eygelshoven',
      country: 'Niederlande',
      countryCode: 'NL',
      datacenter: 'SkyLink Datacenter',
      lat: 50.8923,
      lng: 6.0459,
      features: [
        'Direkt an DE-Grenze',
        'AMS-IX Anbindung',
        'Kosteneffizient',
        'Multi-Carrier'
      ],
      certifications: ['ISO 27001', 'ISO 50001'],
      connectivity: '200G Backbone-Anbindung',
      power: 'N+1 Redundanz'
    }
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      <h2 className="text-2xl font-semibold mb-6">Wähle deine Region</h2>
      <p className="text-gray-600 mb-6">Wähle eine Region in der Nähe deiner Zielgruppe</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {locations.map((location) => (
          <motion.div
            key={location.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            onClick={() => onLocationSelect(location.id)}
            className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer group ${
              selectedLocation === location.id ? 'ring-2 ring-primary' : ''
            }`}
          >
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-600">
                <div className="absolute inset-0 opacity-20 bg-[url('https://flagcdn.com/w2560/${location.countryCode.toLowerCase()}.png')] bg-center bg-cover" />
              </div>
              <div className="absolute top-2 left-2">
                <div className="bg-white/90 text-primary px-2 py-1 rounded text-sm font-medium">
                  {location.connectivity}
                </div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <h3 className="text-2xl font-bold text-center mb-2">
                  {location.name}, {location.country}
                </h3>
                <p className="text-lg text-center text-white/90">{location.datacenter}</p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {location.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-white/20 text-white"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}