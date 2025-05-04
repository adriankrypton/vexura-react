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
  const [selectedOS, setSelectedOS] = useState<string>('');

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

  const finalPrice = orderDetails.price * (1 - discount / 100);

  const handlePayment = () => {
    if (!termsAccepted || !withdrawalAccepted) {
      alert('Bitte akzeptieren Sie die AGBs und das Widerrufsrecht.');
      return;
    }

    if (orderDetails.isKVM && !selectedOS) {
      alert('Bitte wählen Sie ein Betriebssystem aus.');
      return;
    }

    // Here you would typically proceed with payment
    console.log('Proceeding to payment with order details:', {
      ...orderDetails,
      selectedOS: selectedOS ? operatingSystems.find(os => os.id === selectedOS) : null
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
            Bestellübersicht
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Ihre Bestellung</h2>
              {orderDetails.image && (
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={orderDetails.image}
                    alt={orderDetails.productName}
                    className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{orderDetails.productName}</h3>
              <ul className="space-y-4 mb-6">
                {orderDetails.features.map((feature, index) => (
                  <li key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">{feature.label}:</span>
                    <span className="font-medium text-gray-800">{feature.value}</span>
                  </li>
                ))}
              </ul>

              {orderDetails.isKVM && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">Betriebssystem auswählen</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {operatingSystems.map((os) => (
                      <button
                        key={os.id}
                        onClick={() => setSelectedOS(os.id)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          selectedOS === os.id
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
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
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-gray-200 pt-6 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Zwischensumme:</span>
                  <span>{orderDetails.price.toFixed(2)} €</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Rabatt ({discount}%):</span>
                    <span>-{(orderDetails.price * discount / 100).toFixed(2)} €</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-xl text-gray-800 pt-2">
                  <span>Gesamtsumme:</span>
                  <span>{finalPrice.toFixed(2)} €</span>
                </div>
                <div className="text-sm text-gray-500 text-right">
                  Alle Preise inklusive 19% MwSt.
                </div>
              </div>
            </div>

            {/* Voucher and Payment */}
            <div className="space-y-4">
              {/* Voucher Code */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Gutscheincode</h2>
                <form onSubmit={handleVoucherSubmit} className="space-y-4">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={voucherCode}
                      onChange={(e) => setVoucherCode(e.target.value)}
                      placeholder="Gutscheincode eingeben"
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white/50"
                    />
                    <button
                      type="submit"
                      className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-light transition-all shadow-lg hover:shadow-xl"
                    >
                      Einlösen
                    </button>
                  </div>
                  {isVoucherValid !== null && (
                    <div className={`flex items-center gap-2 p-3 rounded-lg ${
                      isVoucherValid ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {isVoucherValid ? (
                        <>
                          <Check className="h-5 w-5" />
                          <span>Gutscheincode erfolgreich eingelöst!</span>
                        </>
                      ) : (
                        <>
                          <X className="h-5 w-5" />
                          <span>Ungültiger Gutscheincode</span>
                        </>
                      )}
                    </div>
                  )}
                </form>
              </div>

              {/* Payment Button */}
              <div className="space-y-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-gray-600">
                        Ich habe die <a href="/agb" className="text-primary hover:underline">allgemeinen Geschäftsbedingungen</a> und <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> gelesen und akzeptiere diese.
                      </span>
                    </label>
                    
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={withdrawalAccepted}
                        onChange={(e) => setWithdrawalAccepted(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-gray-600">
                        Ich wünsche die vollständige Ausführung der Dienstleistung vor Fristablauf des Widerrufsrechts gemäß Fernabsatzgesetz. Die automatische Einrichtung und Erbringung der Dienstleistung führt zum Erlöschen des Widerrufsrechts.
                      </span>
                    </label>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={!termsAccepted || !withdrawalAccepted || (orderDetails.isKVM && !selectedOS)}
                  className={`w-full py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 ${
                    termsAccepted && withdrawalAccepted && (!orderDetails.isKVM || selectedOS)
                      ? 'bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-xl'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Zur Zahlung ({finalPrice.toFixed(2)} €)
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 