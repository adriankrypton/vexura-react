import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  datacenter: string;
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
      datacenter: 'NorthC Datacenter'
    },
    {
      id: 'eygelshoven',
      name: 'Eygelshoven',
      country: 'Niederlande',
      countryCode: 'NL',
      datacenter: 'SkyLink Datacenter'
    }
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      <h2 className="text-2xl font-semibold mb-6">Wähle deine Region</h2>
      
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
            <div className="relative h-32 bg-gradient-to-br from-gray-800 to-gray-600">
              <div className="absolute inset-0 opacity-20 bg-[url('https://flagcdn.com/w2560/${location.countryCode.toLowerCase()}.png')] bg-center bg-cover" />
              <div className="absolute inset-0 flex items-center p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                    <img 
                      src={`https://flagcdn.com/w80/${location.countryCode.toLowerCase()}.png`}
                      alt={`${location.country} flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-bold">{location.name}</h3>
                    <p className="text-sm text-white/80">{location.datacenter}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}