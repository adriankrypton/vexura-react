import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

interface OperatingSystem {
  id: string;
  name: string;
  icon: string;
  version: string;
}

interface OrderDetails {
  productName: string;
  price: number;
  features: { label: string; value: string }[];
  image?: string;
  isKVM?: boolean;
  isDedicated?: boolean;
}

const operatingSystems: OperatingSystem[] = [
  { id: 'ubuntu-22', name: 'Ubuntu', icon: '/img/os/ubuntu.svg', version: '22.04 LTS' },
  { id: 'ubuntu-20', name: 'Ubuntu', icon: '/img/os/ubuntu.svg', version: '20.04 LTS' },
  { id: 'debian-12', name: 'Debian', icon: '/img/os/debian.svg', version: '12' },
  { id: 'debian-11', name: 'Debian', icon: '/img/os/debian.svg', version: '11' },
  { id: 'centos-9', name: 'CentOS', icon: '/img/os/centos.svg', version: 'Stream 9' },
  { id: 'windows-2022', name: 'Windows Server', icon: '/img/os/windows.svg', version: '2022' },
  { id: 'windows-2019', name: 'Windows Server', icon: '/img/os/windows.svg', version: '2019' },
];

export function OSSelectPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOS, setSelectedOS] = useState<string>('');
  const [additionalIPv4, setAdditionalIPv4] = useState(0);
  const [additionalIPv6, setAdditionalIPv6] = useState(false);

  // Hole Bestelldetails aus dem State
  const orderDetails = location.state?.orderDetails as OrderDetails;

  const handleSelect = (osId: string) => {
    setSelectedOS(osId);
    // Navigiere zur Bestellseite und übergebe das gewählte Betriebssystem und die IP-Konfigurationen
    navigate('/order', {
      state: {
        orderDetails: {
          ...orderDetails,
          selectedOS: osId,
          additionalIPv4,
          additionalIPv6,
        },
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-background px-4 py-16">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Betriebssystem auswählen</h1>
        
        {/* IP-Adressauswahl für Dedicated Server */}
        {orderDetails?.isDedicated && (
          <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Zusätzliche IP-Adressen</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zusätzliche IPv4-Adressen (2,99 € pro IP)
                </label>
                <select
                  value={additionalIPv4}
                  onChange={(e) => setAdditionalIPv4(Number(e.target.value))}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                    <option key={value} value={value}>{value} IP{value !== 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={additionalIPv6}
                    onChange={(e) => setAdditionalIPv6(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">
                    Zusätzliche IPv6-Adresse (kostenlos)
                  </span>
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {operatingSystems.map((os) => (
            <button
              key={os.id}
              onClick={() => setSelectedOS(os.id)}
              className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 w-full ${
                selectedOS === os.id
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200 hover:border-primary/50'
              }`}
            >
              <img
                src={os.icon}
                alt={os.name}
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/os/default.svg';
                }}
              />
              <div className="text-left">
                <div className="font-medium text-gray-800">{os.name}</div>
                <div className="text-sm text-gray-500">{os.version}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={() => handleSelect(selectedOS)}
            disabled={!selectedOS}
            className={`px-6 py-3 rounded-lg transition-colors ${
              selectedOS
                ? 'bg-primary text-white hover:bg-primary-light'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Zur Bestellübersicht →
          </button>
        </div>
      </div>
    </div>
  );
} 