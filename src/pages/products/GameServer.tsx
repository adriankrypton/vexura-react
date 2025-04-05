import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, Shield, Cpu, Server, Clock, Gauge } from 'lucide-react';

interface Game {
  id: string;
  name: string;
  image: string;
  price: number;
}

export function GameServer() {
  const [selectedGame, setSelectedGame] = useState('minecraft');

  const games: Game[] = [
    {
      id: 'minecraft-java',
      name: 'Minecraft Java Edition',
      image: '/img/minecraftjava.jpg',
      price: 2.00
    },
    {
      id: 'minecraft-bedrock',
      name: 'Minecraft Bedrock Edition',
      image: '/img/mcbedrock.webp',
      price: 1.50
    },
    {
      id: 'csgo',
      name: 'Counter-Strike 2',
      image: '/img/csgo2.webp',
      price: 2.00
    },
    {
      id: 'gta5',
      name: 'alt:V',
      image: '/img/altv.jpg',
      price: 2.00
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
      title: 'High Performance',
      description: 'Beste Sprachqualität'
    },
    {
      icon: Server,
      title: 'Eigene Domain',
      description: 'Kostenlose .ts3.cloud Domain'
    },
    {
      icon: Users,
      title: 'Unbegrenzte Channels',
      description: 'Keine Channel-Limitierung'
    }
  ];

  const faqs = [
    {
      question: 'Wie schnell ist mein TeamSpeak Server verfügbar?',
      answer: 'Dein TeamSpeak Server wird sofort nach der Bestellung automatisch eingerichtet und ist innerhalb weniger Sekunden verfügbar.'
    },
    {
      question: 'Kann ich die Anzahl der Slots später ändern?',
      answer: 'Ja, du kannst die Anzahl der Slots jederzeit erhöhen oder verringern. Die Änderung wird sofort wirksam.'
    },
    {
      question: 'Welche TeamSpeak Version wird unterstützt?',
      answer: 'Wir unterstützen die neueste TeamSpeak 3 Version und halten deinen Server immer automatisch aktuell.'
    },
    {
      question: 'Gibt es eine Mindestlaufzeit?',
      answer: 'Nein, du kannst monatlich kündigen. Es gibt keine langfristige Vertragsbindung.'
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

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Inklusive Features
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