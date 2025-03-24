import { motion } from 'framer-motion';
import { Gamepad2, Cpu, Gauge, Shield, Server, Clock, Users } from 'lucide-react';
import { useState } from 'react';

interface GameServerPlan {
  name: string;
  price: number;
  slots: number;
  cpu: string;
  ram: string;
  features: string[];
  recommended?: boolean;
}

export function GameServer() {
  const [selectedGame, setSelectedGame] = useState('minecraft');

  const games = [
    { id: 'minecraft', name: 'Minecraft', icon: '🎮' },
    { id: 'valheim', name: 'Valheim', icon: '⚔️' },
    { id: 'ark', name: 'ARK', icon: '🦖' },
    { id: 'csgo', name: 'CS:GO', icon: '🎯' },
  ];

  const plans: GameServerPlan[] = [
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
          <h2 className="text-2xl font-semibold mb-6">Wähle dein Spiel</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {games.map((game) => (
              <button
                key={game.id}
                onClick={() => setSelectedGame(game.id)}
                className={`p-6 rounded-lg border-2 transition-all ${
                  selectedGame === game.id
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-primary/50'
                }`}
              >
                <div className="text-4xl mb-2">{game.icon}</div>
                <div className="font-medium">{game.name}</div>
              </button>
            ))}
          </div>
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