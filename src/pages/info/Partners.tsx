import { motion } from 'framer-motion';
import {
  Users, Award, Gift, Zap, ArrowRight, Facebook, Twitter, Instagram, Linkedin,
  Globe, Gamepad2, Youtube, Twitch, X as XIcon, Palette, Calendar, Hourglass, BarChart2, Heart
} from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  socialMedia?: {
    x?: string;
    instagram?: string;
    twitch?: string;
    youtube?: string;
    tiktok?: string;
    globe?: string;
    gamepad?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export function Partners() {
  const partners: Partner[] = [
    {
      name: "Lorem Ipsum",
      logo: "https://placehold.co/200x200/4e54c8/FFFFFF/png?text=LI",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      socialMedia: {
        x: '#',
        instagram: '#',
        twitch: '#',
        youtube: '#'
      }
    },
    {
      name: "Dolor Sit",
      logo: "https://placehold.co/200x200/8f94fb/FFFFFF/png?text=DS",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      socialMedia: {
        x: '#',
        instagram: '#',
        tiktok: '#',
        twitch: '#',
        youtube: '#'
      }
    },
    {
      name: "Amet Consectetur",
      logo: "https://placehold.co/200x200/4e54c8/FFFFFF/png?text=AC",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      socialMedia: {
        x: '#',
        instagram: '#',
        gamepad: '#',
        globe: '#'
      }
    },
    {
      name: "Tempor Incididunt",
      logo: "https://placehold.co/200x200/8f94fb/FFFFFF/png?text=TI",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      socialMedia: {
        x: '#',
        instagram: '#',
        twitch: '#',
        gamepad: '#',
        globe: '#'
      }
    }
  ];

  const socialIcons: Record<string, any> = {
    x: XIcon,
    instagram: Instagram,
    twitch: Twitch,
    youtube: Youtube,
    tiktok: Globe, // fallback for TikTok
    globe: Globe,
    gamepad: Gamepad2,
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin
  };

  const heroFeatures = [
    {
      icon: Palette,
      title: 'Early Access',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: Calendar,
      title: 'Kostenlose Produkte',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: Gift,
      title: 'Und vieles mehr...',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full min-h-[600px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0732C5]/90 via-[#0B3D91]/80 to-[#0732C5]/95 dark:from-[#0732C5]/95 dark:via-[#0B3D91]/90 dark:to-[#0732C5]/98 z-10" />
        <div className="relative z-20 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between py-20">
          {/* Left: Text */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Deine Vorteile als <span className="text-[#00BCD4]">Partner</span>
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-2xl">
              Wir setzen auf die Zusammenarbeit mit kreativen und ambitionierten Partnern – besonders aus der Gaming-Community. Unser Anspruch ist es, vielversprechende Projekte und talentierte Content-Creator gezielt zu fördern, sei es durch die Bereitstellung von Produkten, Tools oder anderen Ressourcen. Gemeinsam möchten wir neue Maßstäbe setzen und Ideen realisieren, die sowohl die Projektbeteiligten als auch die Community inspirieren und weiterbringen.<br /><br />
              Indem wir ein Netzwerk aus engagierten Köpfen aufbauen und vielfältige, spannende Initiativen unterstützen, entstehen wertvolle Synergien. Diese Partnerschaften eröffnen nicht nur neue Chancen, sondern schaffen auch eine solide Basis für langfristigen, gemeinsamen Erfolg.
            </p>
            <button className="bg-[#00BCD4] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1E88E5] transition-colors">
              Jetzt bewerben
            </button>
          </div>
        </div>
      </div>

      {/* Partner Showcase */}
      <div className="py-24 relative bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center text-[#0B3D91] dark:text-primary-light mb-12">
            Unsere Partner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white dark:bg-gray-700 rounded-2xl shadow-lg pt-16 pb-6 px-6 flex flex-col items-center text-center min-h-[300px] border border-gray-100 dark:border-gray-600 hover:border-[#0B3D91] dark:hover:border-primary-light transition-colors"
              >
                <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                  <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-700 shadow-lg bg-gradient-to-r from-[#0732C5] to-[#0B3D91] dark:from-[#0732C5]/90 dark:to-[#0B3D91]/90 flex items-center justify-center overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-1 text-[#0B3D91] dark:text-primary-light">{partner.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-base">{partner.description}</p>
                </div>
                {partner.socialMedia && (
                  <div className="flex gap-4 mt-auto pt-4">
                    {Object.entries(partner.socialMedia).map(([key, url]) => {
                      if (!url) return null;
                      const Icon = socialIcons[key];
                      return Icon ? (
                        <a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#00BCD4] dark:hover:text-primary-light transition-colors p-2 rounded-full"
                          aria-label={key}
                        >
                          <Icon className="w-6 h-6" />
                        </a>
                      ) : null;
                    })}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Vorteile/Features Container */}
      <div className="py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-[#0B3D91] dark:text-primary-light mb-6">
              Deine Vorteile
            </h2>
            <div className="w-24 h-1 bg-[#00BCD4] dark:bg-primary-light mx-auto mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Entdecke die exklusiven Vorteile, die wir unseren Partnern bieten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heroFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full"
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="bg-gradient-to-br from-[#0732C5]/20 to-[#0B3D91]/5 dark:from-[#0732C5]/30 dark:to-[#0B3D91]/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-10 w-10 text-[#0B3D91] dark:text-primary-light" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                  <div className="h-1 bg-gradient-to-r from-[#0732C5]/50 to-[#0B3D91] dark:from-primary-light/50 dark:to-primary-light w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mt-6" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}