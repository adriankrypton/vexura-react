import { motion } from 'framer-motion';
import { Globe, Search, ShieldCheck, ArrowRight, Check, X, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface DomainPrice {
  tld: string;
  price: number;
  special?: boolean;
}

export function Domains() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const [availabilityStatus, setAvailabilityStatus] = useState<Record<string, 'loading' | 'available' | 'unavailable'>>({});
  const [isChecking, setIsChecking] = useState(false);

  const domainPrices: DomainPrice[] = [
    { tld: '.de', price: 0.99, special: true },
    { tld: '.com', price: 9.99, special: true },
    { tld: '.net', price: 9.99 },
    { tld: '.org', price: 9.99 },
    { tld: '.eu', price: 4.99 },
    { tld: '.info', price: 2.99 },
    { tld: '.biz', price: 8.99 },
    { tld: '.online', price: 3.99 },
    { tld: '.store', price: 5.99 },
    { tld: '.app', price: 12.99 },
    { tld: '.dev', price: 12.99 },
    { tld: '.io', price: 29.99 }
  ];

  const features = [
    {
      icon: Globe,
      title: 'DNS-Verwaltung',
      description: 'Volle Kontrolle über DNS-Einträge'
    },
    {
      icon: ShieldCheck,
      title: 'DNSSEC',
      description: 'Erhöhte DNS-Sicherheit'
    },
    {
      icon: Search,
      title: 'Whois-Datenschutz',
      description: 'Schutz persönlicher Daten'
    }
  ];

  const faqs = [
    {
      question: 'Wie lange dauert die Domain-Registrierung?',
      answer: 'Die Registrierung erfolgt in der Regel innerhalb weniger Minuten. Bei manchen TLDs kann es bis zu 24 Stunden dauern.'
    },
    {
      question: 'Kann ich meine bestehende Domain umziehen?',
      answer: 'Ja, Sie können Ihre bestehende Domain zu uns transferieren. Wir unterstützen Sie beim gesamten Prozess.'
    },
    {
      question: 'Welche Zahlungsmethoden werden akzeptiert?',
      answer: 'Wir akzeptieren alle gängigen Zahlungsmethoden wie Kreditkarte, PayPal, Überweisung und mehr.'
    },
    {
      question: 'Sind SSL-Zertifikate inklusive?',
      answer: 'Ja, für alle Domains bieten wir kostenlose Let\'s Encrypt SSL-Zertifikate an.'
    }
  ];

  // Simulate domain availability check
  const checkDomainAvailability = async (domain: string) => {
    setIsChecking(true);
    setAvailabilityStatus(prev => ({ ...prev, [domain]: 'loading' }));
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const isAvailable = Math.random() > 0.5;
    setAvailabilityStatus(prev => ({
      ...prev,
      [domain]: isAvailable ? 'available' : 'unavailable'
    }));
    setIsChecking(false);
  };

  // Check availability when search becomes active
  useEffect(() => {
    if (searchActive && searchQuery) {
      const searchTld = domainPrices.find(domain => 
        searchQuery.toLowerCase().endsWith(domain.tld.toLowerCase())
      );
      
      if (searchTld) {
        checkDomainAvailability(searchQuery);
      } else {
        domainPrices.slice(0, 5).forEach(domain => {
          checkDomainAvailability(`${searchQuery}${domain.tld}`);
        });
      }
    }
  }, [searchActive, searchQuery]);

  const handleOrder = (domain: string, price: number) => {
    const orderDetails = {
      productName: `Domain - ${domain}`,
      price: price,
      features: [
        { label: 'Domain', value: domain },
        { label: 'DNS-Verwaltung', value: 'Inklusive' },
        { label: 'DNSSEC', value: 'Inklusive' },
        { label: 'Whois-Datenschutz', value: 'Inklusive' }
      ]
    };

    navigate('/order', { state: { orderDetails } });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] py-24">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl font-display font-bold mb-6">
              Domain Registration
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Sichere dir deine perfekte Domain. Über 500 Endungen verfügbar.
            </p>

            {/* Domain Search */}
            <div className="bg-white rounded-lg p-2 shadow-lg">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Finde deine Domain..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-3 outline-none text-gray-800"
                />
                <button
                  onClick={() => setSearchActive(true)}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-light transition-colors flex items-center group"
                >
                  Suchen
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search Results */}
      {searchActive && searchQuery && (
        <div className="container mx-auto px-4 -mt-12 relative z-10">
          <div className="bg-white rounded-xl shadow-xl p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-6">Suchergebnisse für "{searchQuery}"</h2>
            <div className="space-y-4">
              {(() => {
                const searchTld = domainPrices.find(domain => 
                  searchQuery.toLowerCase().endsWith(domain.tld.toLowerCase())
                );

                const domainsToShow = searchTld 
                  ? [searchTld]
                  : domainPrices.slice(0, 5);

                return domainsToShow.map((domain, index) => {
                  const fullDomain = searchTld ? searchQuery : `${searchQuery}${domain.tld}`;
                  const status = availabilityStatus[fullDomain];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 border rounded-lg hover:border-primary/20 transition-colors"
                    >
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-primary mr-3" />
                        <span className="font-medium">{fullDomain}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="font-semibold">{domain.price} €/Jahr</span>
                        <div className="flex items-center space-x-2">
                          {status === 'loading' ? (
                            <div className="flex items-center text-gray-600">
                              <Loader2 className="h-5 w-5 mr-1 animate-spin" />
                              <span className="text-sm">Prüfe Verfügbarkeit...</span>
                            </div>
                          ) : status === 'available' ? (
                            <div className="flex items-center text-green-600">
                              <Check className="h-5 w-5 mr-1" />
                              <span className="text-sm">Verfügbar</span>
                            </div>
                          ) : status === 'unavailable' ? (
                            <div className="flex items-center text-red-600">
                              <X className="h-5 w-5 mr-1" />
                              <span className="text-sm">Nicht verfügbar</span>
                            </div>
                          ) : null}
                          <button 
                            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={status === 'loading' || status === 'unavailable'}
                            onClick={() => handleOrder(fullDomain, domain.price)}
                          >
                            Registrieren
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                });
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Domain Prices */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Domain-Preise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {domainPrices.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`bg-white p-6 rounded-xl shadow-md border-2 ${
                domain.special ? 'border-primary' : 'border-gray-100'
              }`}
            >
              <div className="text-2xl font-bold mb-2">{domain.tld}</div>
              <div className="text-3xl font-bold text-primary">
                {domain.price} €
                <span className="text-sm font-normal text-gray-600">/Jahr</span>
              </div>
              {domain.special && (
                <div className="mt-2 text-sm text-primary font-medium">
                  Sonderangebot
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Inklusive Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Häufig gestellte Fragen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-white/90">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}