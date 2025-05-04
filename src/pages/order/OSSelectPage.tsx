import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

interface OperatingSystem {
  id: string;
  name: string;
  icon: string;
  version: string;
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

  // Hole orderDetails aus dem State, falls vorhanden
  const orderDetails = location.state?.orderDetails;

  const handleSelect = (osId: string) => {
    setSelectedOS(osId);
    // Navigiere zur OrderPage und übergebe das gewählte OS
    navigate('/order', {
      state: {
        orderDetails: {
          ...orderDetails,
          selectedOS: osId,
        },
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-background px-4 py-16">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Betriebssystem auswählen</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {operatingSystems.map((os) => (
            <button
              key={os.id}
              onClick={() => handleSelect(os.id)}
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
      </div>
    </div>
  );
} 