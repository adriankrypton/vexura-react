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
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <h3 className="text-xl font-semibold mb-6">Standort wählen</h3>
      
      {/* Map View (Desktop) */}
      <div className="hidden md:block relative w-full h-[400px] bg-gray-100 rounded-xl mb-8">
        <div className="absolute inset-0">
          {locations.map((location) => (
            <motion.button
              key={location.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 group ${
                selectedLocation === location.id ? 'scale-110' : 'scale-100'
              }`}
              style={{
                top: `${((54 - location.lat) / (54 - 46)) * 100}%`,
                left: `${((location.lng - 2) / (15 - 2)) * 100}%`
              }}
              onClick={() => onLocationSelect(location.id)}
              whileHover={{ scale: 1.1 }}
            >
              <div className={`p-2 rounded-full ${
                selectedLocation === location.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary hover:bg-primary/10'
              } shadow-lg transition-colors`}>
                <MapPin className="h-6 w-6" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                  <div className="font-semibold">
                    {location.name}, {location.country}
                  </div>
                  <div className="text-sm text-gray-600">
                    {location.datacenter}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* List View (Mobile & Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {locations.map((location) => (
          <motion.button
            key={location.id}
            className={`text-left p-4 rounded-lg border-2 transition-all ${
              selectedLocation === location.id
                ? 'border-primary bg-primary/5'
                : 'border-gray-200 hover:border-primary/50'
            }`}
            onClick={() => onLocationSelect(location.id)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-full ${
                selectedLocation === location.id
                  ? 'bg-primary text-white'
                  : 'bg-primary/10 text-primary'
              }`}>
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">
                  {location.name}, {location.country}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  {location.datacenter}
                </div>
                <div className="flex flex-wrap gap-2">
                  {location.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}