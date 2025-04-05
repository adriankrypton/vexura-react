import { motion } from 'framer-motion';
import { Gamepad2, Cpu, Gauge, Shield, Server, Clock, Users } from 'lucide-react';
import { useState } from 'react';

interface Game {
  id: string;
  name: string;
  image: string;
  price: number;
  platforms: string[];
}

export function GameServer() {
  const [selectedGame, setSelectedGame] = useState('minecraft');

  const games: Game[] = [
    {
      id: 'minecraft-java',
      name: 'Minecraft Java Edition',
      image: 'https://images.unsplash.com/photo-1627856014754-2246bc00a590?q=80&w=1740&auto=format&fit=crop',
      price: 2.00,
      platforms: ['windows', 'mobile']
    },
    {
      id: 'minecraft-bedrock',
      name: 'Minecraft Bedrock Edition',
      image: 'https://images.unsplash.com/photo-1627856014754-2246bc00a590?q=80&w=1740&auto=format&fit=crop',
      price: 1.50,
      platforms: ['windows', 'mobile', 'xbox', 'playstation', 'switch']
    },
    {
      id: 'csgo',
      name: 'Counter-Strike 2',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1740&auto=format&fit=crop',
      price: 2.00,
      platforms: ['windows']
    },
    {
      id: 'gta5',
      name: 'alt:V',
      image: 'https://images.unsplash.com/photo-1544985361-b420d7a77043?q=80&w=1740&auto=format&fit=crop',
      price: 2.00,
      platforms: ['windows']
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: 4.99,
      slots: 10,
      cpu: '3.8 GHz',
      ram: '4GB',
      features: ['DDoS Protection', 'Backup System', '24/7 Support']
    },
    {
      name: 'Pro',
      price: 9.99,
      slots: 25,
      cpu: '4.2 GHz',
      ram: '8GB',
      features: ['DDoS Protection', 'Backup System', '24/7 Support', 'Mod Support', 'Priority Setup'],
      recommended: true
    },
    {
      name: 'Ultimate',
      price: 19.99,
      slots: 100,
      cpu: '4.5 GHz',
      ram: '16GB',
      features: ['DDoS Protection', 'Backup System', '24/7 Support', 'Mod Support', 'Priority Setup', 'Custom Domain']
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'DDoS Protection',
      description: 'Automatischer Schutz vor Angriffen'
    },
    {
      icon: Cpu,
      title: 'High-End Hardware',
      description: 'Neueste Server-Generation'
    },
    {
      icon: Clock,
      title: 'Sofortige Aktivierung',
      description: 'Server in Minuten online'
    },
    {
      icon: Gauge,
      title: 'Anti-Lag System',
      description: 'Optimierte Performance'
    }
  ];

  const faqs = [
    {
      question: 'Wie schnell ist mein Game Server verfügbar?',
      answer: 'Nach erfolgreicher Bestellung wird dein Server innerhalb weniger Minuten automatisch eingerichtet und ist sofort einsatzbereit.'
    },
    {
      question: 'Kann ich meinen Server jederzeit upgraden?',
      answer: 'Ja, du kannst deinen Server jederzeit upgraden oder downgraden. Die Änderungen werden sofort wirksam.'
    },
    {
      question: 'Gibt es eine Mindestvertragslaufzeit?',
      answer: 'Nein, unsere Server können monatlich gekündigt werden. Es gibt keine langfristige Vertragsbindung.'
    },
    {
      question: 'Welche Spiele werden unterstützt?',
      answer: 'Wir unterstützen alle gängigen Spiele wie Minecraft, ARK, Valheim, CS:GO und viele mehr. Die Liste wird ständig erweitert.'
    }
  ];

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
              Game Server Hosting
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Hochperformante Server für dein optimales Gaming-Erlebnis. Starte in wenigen Minuten durch!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Game Selection */}
      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {games.map((game) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onClick={() => setSelectedGame(game.id)}
            >
              <div className="relative h-48">
                <div className="absolute inset-0">
                  <img 
                    src={game.image} 
                    alt={game.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="absolute top-2 left-2">
                  <div className="bg-white/90 text-primary px-2 py-1 rounded text-sm font-medium">
                    bereits ab {game.price.toFixed(2)} €
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 flex gap-1">
                  {game.platforms.map((platform) => (
                    <div 
                      key={platform}
                      className="w-6 h-6 bg-white/90 rounded flex items-center justify-center"
                    >
                      {platform === 'windows' && <span>🖥️</span>}
                      {platform === 'mobile' && <span>📱</span>}
                      {platform === 'xbox' && <span>🎮</span>}
                      {platform === 'playstation' && <span>🎮</span>}
                      {platform === 'switch' && <span>🎮</span>}
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center">
                    {game.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Plans */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-xl shadow-lg p-8 border-2 ${
                plan.recommended
                  ? 'border-[#0B3D91]'
                  : 'border-gray-100'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0B3D91] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Empfohlen
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6">
                {plan.price} €<span className="text-lg font-normal text-gray-600">/Monat</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-[#0B3D91] mr-2" />
                  {plan.slots} Spieler-Slots
                </li>
                <li className="flex items-center">
                  <Cpu className="h-5 w-5 text-[#0B3D91] mr-2" />
                  {plan.cpu} CPU
                </li>
                <li className="flex items-center">
                  <Server className="h-5 w-5 text-[#0B3D91] mr-2" />
                  {plan.ram} RAM
                </li>
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <div className="h-5 w-5 text-[#0B3D91] mr-2">✓</div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                plan.recommended
                  ? 'bg-[#0B3D91] text-white hover:bg-[#1E88E5]'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                Server bestellen
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Warum unsere Game Server?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <feature.icon className="h-12 w-12 text-[#0B3D91] mb-4" />
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