import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

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

  const orderDetails = location.state?.orderDetails as OrderDetails;

  const handleSelect = (osId: string) => {
    setSelectedOS(osId);
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100/50 to-background dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-white/95 via-blue-50/90 to-white/85 dark:from-gray-800/95 dark:via-gray-700/90 dark:to-gray-800/85 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-100/20 dark:border-gray-700/20 max-w-2xl w-full relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/30 via-blue-100/20 to-transparent dark:from-blue-900/30 dark:via-blue-800/20 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/25 via-blue-50/15 to-transparent dark:from-blue-800/25 dark:via-gray-700/15 -z-10" />
        <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
          Betriebssystem auswählen
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/25 via-blue-50/20 to-transparent dark:from-blue-900/25 dark:via-gray-700/20 rounded-xl -z-10" />
          {operatingSystems.map((os, index) => (
            <motion.button
              key={os.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedOS(os.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 w-full group hover:shadow-lg relative overflow-hidden ${
                selectedOS === os.id
                  ? 'border-blue-400 dark:border-blue-500 bg-gradient-to-r from-blue-100/50 to-blue-50/50 dark:from-blue-900/50 dark:to-gray-800/50 shadow-lg'
                  : 'border-blue-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 bg-white/50 dark:bg-gray-800/50'
              }`}
            >
              <div className={`p-2 rounded-lg transition-all duration-300 ${
                selectedOS === os.id ? 'bg-blue-100/50 dark:bg-blue-900/50' : 'bg-blue-50/50 dark:bg-gray-700/50 group-hover:bg-blue-100/30 dark:group-hover:bg-blue-900/30'
              }`}>
                <img
                  src={os.icon}
                  alt={os.name}
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/os/default.svg';
                  }}
                />
              </div>
              <div className="text-left flex-1">
                <div className="font-medium text-blue-900 dark:text-blue-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{os.name}</div>
                <div className="text-sm text-blue-600 dark:text-blue-400">{os.version}</div>
              </div>
              {selectedOS === os.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-blue-500 dark:text-blue-400"
                >
                  <Check className="w-5 h-5" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex justify-end"
        >
          <button
            onClick={() => handleSelect(selectedOS)}
            disabled={!selectedOS}
            className={`px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 ${
              selectedOS
                ? 'bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500 text-white hover:shadow-xl'
                : 'bg-blue-100 dark:bg-gray-700 text-blue-300 dark:text-gray-500 cursor-not-allowed'
            }`}
          >
            Zur Bestellübersicht →
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
} 