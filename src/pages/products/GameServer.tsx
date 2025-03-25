import { motion } from 'framer-motion';
import { Gamepad2, Cpu, Gauge, Shield, Server, Clock, Users, Wifi, HardDrive } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface GameServerPlan {
  name: string;
  price: number;
  slots: number;
  cpu: string;
  ram: string;
  storage: string;
  features: string[];
  recommended?: boolean;
}

interface Game {
  id: string;
  name: string;
  icon: string;
  image: string;
  price: number;
  platforms: string[];
  minSlots: number;
  maxSlots: number;
}

export function GameServer() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const games: Game[] = [
    {
      id: 'minecraft-java',
      name: 'Minecraft Java Edition',
      icon: '⛏️',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
      price: 2.00,
      platforms: ['windows'],
      minSlots: 4,
      maxSlots: 100
    },
    {
      id: 'minecraft-bedrock',
      name: 'Minecraft Bedrock',
      icon: '🏗️',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
      price: 1.50,
      platforms: ['windows', 'android', 'xbox', 'playstation', 'cross'],
      minSlots: 4,
      maxSlots: 50
    },
    {
      id: 'palworld',
      name: 'Palworld',
      icon: '🎮',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
      price: 4.00,
      platforms: ['windows', 'xbox', 'cross'],
      minSlots: 4,
      maxSlots: 32
    },
    {
      id: 'zomboid',
      name: 'Project Zomboid',
      icon: '🧟',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
      price: 5.40,
      platforms: ['windows'],
      minSlots: 4,
      maxSlots: 64
    }
  ];

  const plans: GameServerPlan[] = [
    {
      name: 'Starter',
      price: 4.99,
      slots: 10,
      cpu: '3.8 GHz',
      ram: '4GB',
      storage: '50GB SSD',
      features: ['DDoS Protection', 'Backup System', '24/7 Support']
    },
    {
      name: 'Pro',
      price: 9.99,
      slots: 25,
      cpu: '4.2 GHz',
      ram: '8GB',
      storage: '100GB SSD',
      features: ['DDoS Protection', 'Backup System', '24/7 Support', 'Mod Support', 'Priority Setup'],
      recommended: true
    },
    {
      name: 'Ultimate',
      price: 19.99,
      slots: 100,
      cpu: '4.5 GHz',
      ram: '16GB',
      storage: '250GB SSD',
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

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'windows':
        return '🪟';
      case 'android':
        return '📱';
      case 'xbox':
        return '🎮';
      case 'playstation':
        return '🎮';
      case 'cross':
        return '↔️';
      default:
        return '💻';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary-light py-24">
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
        <div className="bg-white rounded-xl shadow-xl p-8 mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">
              <Gamepad2 className="inline-block mr-2 h-6 w-6 text-primary" />
              Beliebte Spiele
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game) => (
              <Link
                key={game.id}
                to={`/products/game-server/${game.id}`}
                className="block group relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:-translate-y-1"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${game.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20" />
                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{game.icon}</span>
                    <span className="bg-white/90 text-primary px-2 py-1 rounded text-sm font-medium">
                      bereits ab {game.price.toFixed(2)} €
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{game.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {game.platforms.map((platform) => (
                      <span key={platform} className="text-white/80">
                        {getPlatformIcon(platform)}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {game.minSlots}-{game.maxSlots} Slots
                    </div>
                    <div className="flex items-center">
                      <HardDrive className="h-4 w-4 mr-1" />
                      SSD
                    </div>
                    <div className="flex items-center">
                      <Wifi className="h-4 w-4 mr-1" />
                      DDoS
                    </div>
                  </div>
                  <div className="mt-4 text-center text-white/90 group-hover:text-white transition-colors">
                    Alle Server ansehen →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Unsere Server-Pakete
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-xl shadow-lg p-8 border-2 ${
                plan.recommended
                  ? 'border-primary'
                  : 'border-gray-100'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Empfohlen
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6">
                {plan.price} €<span className="text-lg font-normal text-gray-600">/Monat</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  {plan.slots} Spieler-Slots
                </li>
                <li className="flex items-center">
                  <Cpu className="h-5 w-5 text-primary mr-2" />
                  {plan.cpu} CPU
                </li>
                <li className="flex items-center">
                  <Server className="h-5 w-5 text-primary mr-2" />
                  {plan.ram} RAM
                </li>
                <li className="flex items-center">
                  <HardDrive className="h-5 w-5 text-primary mr-2" />
                  {plan.storage}
                </li>
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <div className="h-5 w-5 text-primary mr-2">✓</div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                plan.recommended
                  ? 'bg-primary text-white hover:bg-primary-light'
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
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Häufig gestellte Fragen
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Wie schnell ist mein Server verfügbar?</h3>
            <p className="text-gray-600">Nach erfolgreicher Bestellung wird dein Server innerhalb weniger Minuten automatisch eingerichtet und ist sofort einsatzbereit.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Kann ich meinen Server jederzeit upgraden?</h3>
            <p className="text-gray-600">Ja, du kannst deinen Server jederzeit upgraden oder downgraden. Die Änderungen werden sofort wirksam.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Gibt es eine Mindestvertragslaufzeit?</h3>
            <p className="text-gray-600">Nein, du kannst monatlich kündigen. Wir bieten auch Rabatte bei längerer Vertragsbindung an.</p>
          </div>
        </div>
      </div>
    </div>
  );
}