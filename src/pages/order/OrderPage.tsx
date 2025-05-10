import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Check, X } from 'lucide-react';

interface OrderDetails {
  productName: string;
  price: number;
  features: { label: string; value: string }[];
  image?: string;
  isKVM?: boolean;
  selectedOS?: string;
  isDedicated?: boolean;
  additionalIPv4?: number;
  additionalIPv6?: boolean;
  type?: string;
  licenseType?: string;
  isTransfer?: boolean;
}

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

export function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [voucherCode, setVoucherCode] = useState('');
  const [isVoucherValid, setIsVoucherValid] = useState<boolean | null>(null);
  const [discount, setDiscount] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [withdrawalAccepted, setWithdrawalAccepted] = useState(false);
  const [backupAmount, setBackupAmount] = useState(0);
  const [additionalIPv4, setAdditionalIPv4] = useState(0);
  const [additionalIPv6, setAdditionalIPv6] = useState(0);
  const [bandwidth, setBandwidth] = useState('1');
  const [authCode, setAuthCode] = useState('');

  // Get order details from location state
  const orderDetails = location.state?.orderDetails as OrderDetails;

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4 dark:text-white">Keine Bestelldetails gefunden</h1>
            <button
              onClick={() => navigate(-1)}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-light transition-colors shadow-lg hover:shadow-xl"
            >
              Zurück zur Produktseite
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleVoucherSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically validate the voucher code with your backend
    // For now, we'll just simulate a successful validation
    setIsVoucherValid(true);
    setDiscount(5); // 5% discount
  };

  const ipv4Price = 2.99; // Price per additional IPv4
  const ipv6Price = 1.99; // Price per additional IPv6
  const backupPrices = {
    3: 9.99,
    5: 14.99,
    10: 24.99
  };

  const bandwidthPrices = {
    '1': 0, // 1 Gbit/s ist Standard
    '5': 19.99, // 5 Gbit/s Upgrade
    '10': 39.99 // 10 Gbit/s Upgrade
  };

  const finalPrice = orderDetails.price * (1 - discount / 100) + 
    (orderDetails.type !== 'license' ? (
      additionalIPv4 * ipv4Price +
      additionalIPv6 * ipv6Price +
      (backupAmount > 0 ? backupPrices[backupAmount as keyof typeof backupPrices] : 0) +
      (orderDetails.isKVM ? bandwidthPrices[bandwidth as keyof typeof bandwidthPrices] : 0)
    ) : 0);

  const handlePayment = () => {
    if (!termsAccepted || !withdrawalAccepted) {
      alert('Bitte akzeptieren Sie die AGBs und das Widerrufsrecht.');
      return;
    }

    // Here you would typically proceed with payment
    console.log('Proceeding to payment with order details:', {
      ...orderDetails,
      backupAmount,
      additionalIPv4,
      additionalIPv6,
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900" style={{ paddingTop: '41px', paddingBottom: '41px' }}>
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-16 max-w-[1920px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <a
            href="#"
            onClick={e => { e.preventDefault(); navigate(-1); }}
            className="block sm:absolute left-0 top-0 mt-2 sm:mt-8 ml-2 sm:ml-8 text-primary hover:underline text-xs sm:text-base font-medium z-20 mb-2 sm:mb-0"
          >
            &larr; Zurück zum Produkt
          </a>
          <h1 className="text-xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light dark:from-primary-light dark:to-primary">
            Bestellübersicht
          </h1>

          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-3 sm:gap-8 w-full px-0 sm:px-4">
            {/* Order Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 sm:p-8 border border-gray-200 dark:border-gray-700 flex-1 min-w-0 sm:min-w-[350px] self-stretch flex flex-col h-full">
              <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-6 text-gray-800 dark:text-white">Ihre Bestellung</h2>
              {orderDetails.image && (
                <div className="relative overflow-hidden rounded-xl mb-3 sm:mb-6">
                  <img
                    src={orderDetails.image}
                    alt={orderDetails.productName}
                    className="w-full h-32 sm:h-56 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <h3 className="text-base sm:text-xl font-semibold mb-2 sm:mb-4 text-gray-800 dark:text-white">{orderDetails.productName}</h3>
              <ul className="space-y-2 sm:space-y-4 mb-3 sm:mb-6">
                {orderDetails.features.map((feature, index) => (
                  <li key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-base">
                      {feature.label}:
                    </span>
                    <span className="font-medium text-gray-800 dark:text-white text-xs sm:text-base">{feature.value}</span>
                  </li>
                ))}
                {orderDetails.type !== 'license' && (
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-base">
                      Inklusive IPs:
                    </span>
                    <span className="font-medium text-gray-800 dark:text-white text-xs sm:text-base">
                      Jeweils eine IPv4 sowie IPv6
                    </span>
                  </li>
                )}
                {orderDetails.type === 'license' && (
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-base">
                      Lizenztyp:
                    </span>
                    <span className="font-medium text-gray-800 dark:text-white text-xs sm:text-base">
                      {orderDetails.licenseType === 'vps' ? 'VPS Lizenz' : 'Dedicated Lizenz'}
                    </span>
                  </li>
                )}
              </ul>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-3 sm:pt-6 space-y-2 sm:space-y-3">
                {discount > 0 && (
                  <div className="flex justify-between text-green-600 dark:text-green-400 text-xs sm:text-base">
                    <span>Rabatt ({discount}%):</span>
                    <span>-{(orderDetails.price * discount / 100).toFixed(2)} €</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-base sm:text-xl text-gray-800 dark:text-white pt-2">
                  <span>Gesamtsumme:</span>
                  <span>{finalPrice.toFixed(2)} €</span>
                </div>
                <div className="text-[10px] sm:text-sm text-gray-500 dark:text-gray-400 text-right">
                  Alle Preise inklusive 19% MwSt.
                </div>
              </div>
            </div>

            {/* Voucher and Payment */}
            <div className="space-y-3 sm:space-y-4 flex-1 min-w-0 sm:min-w-[350px] self-stretch flex flex-col h-full">
              {/* Voucher Code */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 sm:p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-6 text-gray-800 dark:text-white">Zusätzliche Optionen</h2>
                
                {/* Authcode für Domain-Transfer */}
                {orderDetails.isTransfer && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Authcode für Domain-Transfer
                    </label>
                    <input
                      type="text"
                      value={authCode}
                      onChange={(e) => setAuthCode(e.target.value)}
                      placeholder="Authcode eingeben"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Der Authcode wird von Ihrem aktuellen Domain-Provider benötigt
                    </div>
                  </div>
                )}

                {/* Backup Option - nur anzeigen wenn keine Lizenz, kein Storage, kein Webspace, kein Teamspeak und kein VPN */}
                {orderDetails.type !== 'license' && 
                 !orderDetails.productName.includes('Speicher') && 
                 !orderDetails.productName.includes('Webspace') &&
                 !orderDetails.productName.includes('TeamSpeak') &&
                 orderDetails.type !== 'vpn' && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Backup-Speicher
                    </label>
                    <select
                      value={backupAmount}
                      onChange={(e) => setBackupAmount(parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="0">Kein Backup</option>
                      <option value="3">3x Backups (+9,99 €/Monat)</option>
                      <option value="5">5x Backups (+14,99 €/Monat)</option>
                      <option value="10">10x Backups (+24,99 €/Monat)</option>
                    </select>
                  </div>
                )}

                {/* Additional IPv4 - nur anzeigen wenn keine Lizenz, kein Storage, kein Webspace, kein Teamspeak und kein VPN */}
                {orderDetails.type !== 'license' && 
                 !orderDetails.productName.includes('Speicher') && 
                 !orderDetails.productName.includes('Webspace') &&
                 !orderDetails.productName.includes('Game Server') &&
                 !orderDetails.productName.includes('TeamSpeak') &&
                 orderDetails.type !== 'vpn' &&
                 !orderDetails.productName.includes('Domain') && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Zusätzliche IPv4 Adressen
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="16"
                      value={additionalIPv4}
                      onChange={(e) => setAdditionalIPv4(parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      +2,99 € pro zusätzliche IPv4
                    </div>
                  </div>
                )}

                {/* Additional IPv6 - nur anzeigen wenn keine Lizenz, kein Storage, kein Webspace, kein Teamspeak und kein VPN */}
                {orderDetails.type !== 'license' && 
                 !orderDetails.productName.includes('Speicher') && 
                 !orderDetails.productName.includes('Webspace') &&
                 !orderDetails.productName.includes('Game Server') &&
                 !orderDetails.productName.includes('TeamSpeak') &&
                 orderDetails.type !== 'vpn' &&
                 !orderDetails.productName.includes('Domain') && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Zusätzliche IPv6 Adressen
                    </label>
                    <select
                      value={additionalIPv6}
                      onChange={(e) => setAdditionalIPv6(parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="0">Keine zusätzliche IPv6</option>
                      <option value="1">1 IPv6 (+1,99 €/Monat)</option>
                      <option value="2">2 IPv6 (+3,98 €/Monat)</option>
                      <option value="3">3 IPv6 (+5,97 €/Monat)</option>
                      <option value="4">4 IPv6 (+7,96 €/Monat)</option>
                      <option value="5">5 IPv6 (+9,95 €/Monat)</option>
                      <option value="6">6 IPv6 (+11,94 €/Monat)</option>
                      <option value="7">7 IPv6 (+13,93 €/Monat)</option>
                      <option value="8">8 IPv6 (+15,92 €/Monat)</option>
                      <option value="9">9 IPv6 (+17,91 €/Monat)</option>
                      <option value="10">10 IPv6 (+19,90 €/Monat)</option>
                      <option value="11">11 IPv6 (+21,89 €/Monat)</option>
                      <option value="12">12 IPv6 (+23,88 €/Monat)</option>
                      <option value="13">13 IPv6 (+25,87 €/Monat)</option>
                      <option value="14">14 IPv6 (+27,86 €/Monat)</option>
                      <option value="15">15 IPv6 (+29,85 €/Monat)</option>
                      <option value="16">16 IPv6 (+31,84 €/Monat)</option>
                    </select>
                  </div>
                )}

                {/* Bandwidth Option für Root-Server */}
                {orderDetails.isKVM && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Bandbreite
                    </label>
                    <select
                      value={bandwidth}
                      onChange={(e) => setBandwidth(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="1">1 Gbit/s (Standard)</option>
                      <option value="5">5 Gbit/s (+19,99 €/Monat)</option>
                      <option value="10">10 Gbit/s (+39,99 €/Monat)</option>
                    </select>
                  </div>
                )}

                {/* Voucher Form */}
                <div className="mt-6">
                  <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-6 text-gray-800 dark:text-white">Gutscheincode</h2>
                  <form onSubmit={handleVoucherSubmit} className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <input
                        type="text"
                        value={voucherCode}
                        onChange={(e) => setVoucherCode(e.target.value)}
                        placeholder="Gutscheincode eingeben"
                        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-xs sm:text-base"
                      />
                      <button
                        type="submit"
                        className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-primary-light transition-all shadow-lg hover:shadow-xl text-xs sm:text-base"
                      >
                        Einlösen
                      </button>
                    </div>
                    {isVoucherValid !== null && (
                      <div className={`flex items-center gap-2 p-2 sm:p-3 rounded-lg text-xs sm:text-base ${
                        isVoucherValid ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' : 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                      }`}>
                        {isVoucherValid ? (
                          <>
                            <Check className="h-3 w-3 sm:h-5 sm:w-5" />
                            <span>Gutscheincode erfolgreich eingelöst!</span>
                          </>
                        ) : (
                          <>
                            <X className="h-3 w-3 sm:h-5 sm:w-5" />
                            <span>Ungültiger Gutscheincode</span>
                          </>
                        )}
                      </div>
                    )}
                  </form>
                </div>
              </div>

              {/* Payment Button */}
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-2 sm:p-4 border border-gray-200 dark:border-gray-700">
                  <div className="space-y-2 sm:space-y-3">
                    <label className="flex items-start gap-2 sm:gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="mt-1 h-3 w-3 sm:h-4 sm:w-4 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary dark:focus:ring-primary-light bg-white dark:bg-gray-700"
                      />
                      <span className="text-[10px] sm:text-sm text-gray-600 dark:text-gray-400">
                        Ich habe die <a href="/agb" className="text-primary hover:underline">allgemeinen Geschäftsbedingungen</a> und <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> gelesen und akzeptiere diese.
                      </span>
                    </label>
                    
                    <label className="flex items-start gap-2 sm:gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={withdrawalAccepted}
                        onChange={(e) => setWithdrawalAccepted(e.target.checked)}
                        className="mt-1 h-3 w-3 sm:h-4 sm:w-4 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary dark:focus:ring-primary-light bg-white dark:bg-gray-700"
                      />
                      <span className="text-[10px] sm:text-sm text-gray-600 dark:text-gray-400">
                        Ich wünsche die vollständige Ausführung der Dienstleistung vor Fristablauf des Widerrufsrechts gemäß Fernabsatzgesetz. Die automatische Einrichtung und Erbringung der Dienstleistung führt zum Erlöschen des Widerrufsrechts.
                      </span>
                    </label>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={!termsAccepted || !withdrawalAccepted}
                  className={`w-full py-2 sm:py-4 rounded-xl text-sm sm:text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 ${
                    termsAccepted && withdrawalAccepted
                      ? 'bg-gradient-to-r from-primary to-primary-light dark:from-primary-light dark:to-primary text-white hover:shadow-xl'
                      : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Zur Zahlung ({finalPrice.toFixed(2)} €)
                </button>
                <a
                  href="/products/root-server"
                  onClick={e => { e.preventDefault(); navigate('/products/root-server'); }}
                  className="mt-3 sm:mt-4 block text-primary hover:underline text-xs sm:text-base font-medium text-center"
                >
                  &larr; Doch nochmal umschauen
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 