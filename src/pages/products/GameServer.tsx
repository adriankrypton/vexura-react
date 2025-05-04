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
  const [step, setStep] = useState<'game' | 'region' | 'config'>('game');
  const [selectedGame, setSelectedGame] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [slots, setSlots] = useState(32);
  const [serverName, setServerName] = useState('');

  const games: Game[] = [
    {
      id: 'minecraft-java',
      name: 'Minecraft Java Edition',
      image: 'https://assetsio.gnwcdn.com/ar1or8.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
      price: 2.00
    },
    {
      id: 'minecraft-bedrock',
      name: 'Minecraft Bedrock Edition',
      image: 'https://gagadget.com/media/post_big/apps.608.13510798887677013.5c7792f0-b887-4250-8c4e-4617af9c4509.jpeg',
      price: 1.50
    },
    {
      id: 'csgo',
      name: 'Counter-Strike 2',
      image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1745368595',
      price: 2.00
    },
    {
      id: 'gta5',
      name: 'alt:V',
      image: 'https://altv.mp/img/de/landing/og_image.jpg',
      price: 2.00
    }
  ];

  const regions = [
    {
      id: 'nuremberg',
      name: 'Nürnberg',
      country: 'Deutschland',
      flag: '🇩🇪',
      status: 'available',
      ping: '~10ms',
      datacenter: 'NorthC Datacenter',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 'eygelshoven',
      name: 'Eygelshoven',
      country: 'Niederlande',
      flag: '🇳🇱',
      status: 'available',
      ping: '~15ms',
      datacenter: 'SkyLink Datacenter',
      color: 'from-red-600 to-red-800'
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

  const calculatePrice = () => {
    const basePrice = slots * 0.08;
    const regionMultiplier = selectedRegion === 'eygelshoven' ? 0.95 : 1;
    return (basePrice * regionMultiplier).toFixed(2);
  };

  const renderStep = () => {
    switch (step) {
      case 'game':
        return (
          <div className="container mx-auto px-4 -mt-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">Wähle dein Spiel</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {games.map((game) => (
                  <motion.div
                    key={game.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5 }}
                    className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer group ${
                      selectedGame === game.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => {
                      setSelectedGame(game.id);
                      setStep('region');
                    }}
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
                        <h3 className="text-white text-xl font-bold text-center px-4">
                          {game.name}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        );

      case 'region':
        return (
          <div className="container mx-auto px-4 -mt-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-xl p-8"
            >
              <button
                onClick={() => setStep('game')}
                className="text-primary hover:text-primary-light mb-4 flex items-center"
              >
                ← Zurück zur Spielauswahl
              </button>
              <h2 className="text-2xl font-semibold mb-6">Wähle deine Region</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {regions.map((region) => (
                  <motion.div
                    key={region.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5 }}
                    className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer group ${
                      selectedRegion === region.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => {
                      setSelectedRegion(region.id);
                      setStep('config');
                    }}
                  >
                    <div className="relative h-48">
                      <div className="absolute inset-0">
                        <div className={`absolute inset-0 bg-gradient-to-br ${region.color}`} />
                      </div>
                      <div className="absolute inset-0 flex items-end p-6">
                        <div className="text-white">
                          <h3 className="text-xl font-bold">
                            {region.name}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {region.datacenter}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        );

      case 'config':
        return (
          <div className="container mx-auto px-4 -mt-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-xl p-8"
            >
              <button
                onClick={() => setStep('region')}
                className="text-primary hover:text-primary-light mb-4 flex items-center"
              >
                ← Zurück zur Regionsauswahl
              </button>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Server Konfiguration</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Server Name
                      </label>
                      <input
                        type="text"
                        value={serverName}
                        onChange={(e) => setServerName(e.target.value)}
                        placeholder="Mein Game Server"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Anzahl der Slots
                      </label>
                      <input
                        type="range"
                        min="5"
                        max="100"
                        value={slots}
                        onChange={(e) => setSlots(parseInt(e.target.value))}
                        className="w-full accent-primary"
                      />
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>5 Slots</span>
                        <span>{slots} Slots</span>
                        <span>100 Slots</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-semibold mb-4">Deine Konfiguration</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex justify-between">
                      <span>Spiel:</span>
                      <span className="font-medium">
                        {games.find(g => g.id === selectedGame)?.name}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Region:</span>
                      <span className="font-medium">
                        {regions.find(r => r.id === selectedRegion)?.name}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Server Name:</span>
                      <span className="font-medium">{serverName || 'Nicht angegeben'}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Slots:</span>
                      <span className="font-medium">{slots}</span>
                    </li>
                  </ul>
                  <div className="text-3xl font-bold mb-4 text-primary">
                    {calculatePrice()} €<span className="text-sm font-normal text-gray-600">/Monat</span>
                  </div>
                  <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-light transition-colors">
                    Jetzt bestellen
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        );
    }
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
              Game Server
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Hochperformante Server für dein optimales Gaming-Erlebnis. Starte in wenigen Minuten durch!
            </p>
          </motion.div>
        </div>
      </div>

      {renderStep()}

      {/* Features */}
      <div className="bg-gray-50 py-16 mt-16">
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
    </div>
  );
}