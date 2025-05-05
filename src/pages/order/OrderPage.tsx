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

  // Get order details from location state
  const orderDetails = location.state?.orderDetails as OrderDetails;

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Keine Bestelldetails gefunden</h1>
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
  const finalPrice = orderDetails.price * (1 - discount / 100) + 
    (orderDetails.additionalIPv4 || 0) * ipv4Price;

  const handlePayment = () => {
    if (!termsAccepted || !withdrawalAccepted) {
      alert('Bitte akzeptieren Sie die AGBs und das Widerrufsrecht.');
      return;
    }

    // Here you would typically proceed with payment
    console.log('Proceeding to payment with order details:', {
      ...orderDetails,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-primary/5 to-background" style={{ paddingTop: '41px', paddingBottom: '41px' }}>
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
          <h1 className="text-xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
            Bestellübersicht
          </h1>

          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-3 sm:gap-8 w-full px-0 sm:px-4">
            {/* Order Summary */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-3 sm:p-8 border border-white/20 flex-1 min-w-0 sm:min-w-[350px] self-stretch flex flex-col h-full">
              <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-6 text-gray-800">Ihre Bestellung</h2>
              {orderDetails.image && (
                <div className="relative overflow-hidden rounded-xl mb-3 sm:mb-6">
                  <img
                    src={orderDetails.image}
                    alt={orderDetails.productName}
                    className="w-full h-32 sm:h-56 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <h3 className="text-base sm:text-xl font-semibold mb-2 sm:mb-4 text-gray-800">{orderDetails.productName}</h3>
              <ul className="space-y-2 sm:space-y-4 mb-3 sm:mb-6">
                {orderDetails.features.map((feature, index) => (
                  <li key={index} className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 sm:p-3 bg-gray-50 rounded-lg ${feature.label === 'Betriebssystem' ? 'border-l-4 border-primary bg-primary/10 font-semibold' : ''}`}>
                    <span className="text-gray-600 flex items-center gap-2 text-xs sm:text-base">
                      {feature.label === 'Betriebssystem' && (
                        <img src="/img/os/ubuntu.svg" alt="OS" className="w-3 h-3 sm:w-5 sm:h-5" />
                      )}
                      {feature.label}:
                    </span>
                    <span className="font-medium text-gray-800 text-xs sm:text-base">{feature.value}</span>
                  </li>
                ))}
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600 text-xs sm:text-base">
                    Inklusive IPs:
                  </span>
                  <span className="font-medium text-gray-800 text-xs sm:text-base">
                    Jeweils eine IPv4 sowie IPv6
                  </span>
                </li>
                {orderDetails.selectedOS && (
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 sm:p-3 bg-gray-50 rounded-lg border-l-4 border-primary bg-primary/10 font-semibold">
                    <span className="text-gray-600 flex items-center gap-2 text-xs sm:text-base">
                      Betriebssystem:
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-gray-800 text-xs sm:text-base">
                        {operatingSystems.find(os => os.id === orderDetails.selectedOS)?.name || orderDetails.selectedOS}
                        {operatingSystems.find(os => os.id === orderDetails.selectedOS)?.version ? ` ${operatingSystems.find(os => os.id === orderDetails.selectedOS)?.version}` : ''}
                      </span>
                      <button
                        onClick={() => navigate('/order/os-select', { state: { orderDetails: { ...orderDetails, selectedOS: undefined } } })}
                        className="text-primary hover:text-primary-light text-xs sm:text-sm font-medium transition-colors"
                      >
                        Ändern
                      </button>
                    </div>
                  </li>
                )}
                {orderDetails.additionalIPv4 && orderDetails.additionalIPv4 > 0 && (
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 text-xs sm:text-base">
                      Zusätzliche IPv4-Adressen:
                    </span>
                    <span className="font-medium text-gray-800 text-xs sm:text-base">
                      {orderDetails.additionalIPv4} IP{orderDetails.additionalIPv4 !== 1 ? 's' : ''}
                    </span>
                  </li>
                )}
                {orderDetails.additionalIPv6 && (
                  <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 text-xs sm:text-base">
                      Zusätzliche IPv6-Adresse:
                    </span>
                    <span className="font-medium text-gray-800 text-xs sm:text-base">
                      Inklusive
                    </span>
                  </li>
                )}
              </ul>

              <div className="border-t border-gray-200 pt-3 sm:pt-6 space-y-2 sm:space-y-3">
                {discount > 0 && (
                  <div className="flex justify-between text-green-600 text-xs sm:text-base">
                    <span>Rabatt ({discount}%):</span>
                    <span>-{(orderDetails.price * discount / 100).toFixed(2)} €</span>
                  </div>
                )}
                {orderDetails.additionalIPv4 && orderDetails.additionalIPv4 > 0 && (
                  <div className="flex justify-between text-gray-600 text-xs sm:text-base">
                    <span>Zusätzliche IPv4-Adressen ({orderDetails.additionalIPv4}):</span>
                    <span>+{(orderDetails.additionalIPv4 * ipv4Price).toFixed(2)} €</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-base sm:text-xl text-gray-800 pt-2">
                  <span>Gesamtsumme:</span>
                  <span>{finalPrice.toFixed(2)} €</span>
                </div>
                <div className="text-[10px] sm:text-sm text-gray-500 text-right">
                  Alle Preise inklusive 19% MwSt.
                </div>
              </div>
            </div>

            {/* Voucher and Payment */}
            <div className="space-y-3 sm:space-y-4 flex-1 min-w-0 sm:min-w-[350px] self-stretch flex flex-col h-full">
              {/* Voucher Code */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-3 sm:p-8 border border-white/20">
                <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-6 text-gray-800">Gutscheincode</h2>
                <form onSubmit={handleVoucherSubmit} className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <input
                      type="text"
                      value={voucherCode}
                      onChange={(e) => setVoucherCode(e.target.value)}
                      placeholder="Gutscheincode eingeben"
                      className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white/50 text-xs sm:text-base"
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
                      isVoucherValid ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
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

              {/* Payment Button */}
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-white/20">
                  <div className="space-y-2 sm:space-y-3">
                    <label className="flex items-start gap-2 sm:gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="mt-1 h-3 w-3 sm:h-4 sm:w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-[10px] sm:text-sm text-gray-600">
                        Ich habe die <a href="/agb" className="text-primary hover:underline">allgemeinen Geschäftsbedingungen</a> und <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> gelesen und akzeptiere diese.
                      </span>
                    </label>
                    
                    <label className="flex items-start gap-2 sm:gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={withdrawalAccepted}
                        onChange={(e) => setWithdrawalAccepted(e.target.checked)}
                        className="mt-1 h-3 w-3 sm:h-4 sm:w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-[10px] sm:text-sm text-gray-600">
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
                      ? 'bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-xl'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
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