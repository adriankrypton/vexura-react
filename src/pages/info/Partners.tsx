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
      title: 'Personalisierte',
      highlight: 'Designs',
    },
    {
      icon: Calendar,
      title: 'Monatliche',
      highlight: 'Auszahlungen',
    },
    {
      icon: Gift,
      title: 'Kostenlose',
      highlight: 'Produkte',
    },
    {
      icon: Hourglass,
      title: 'Early',
      highlight: 'Access',
    },
    {
      icon: BarChart2,
      title: 'Unsere',
      highlight: 'Werbung',
    },
    {
      icon: Heart,
      title: 'und vieles',
      highlight: 'mehr...',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full min-h-[600px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B3D91]/90 via-[#1E88E5]/80 to-[#0B3D91]/95 z-10" />
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
      <div className="py-24 relative bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center text-[#0B3D91] mb-12">
            Unsere Partner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-2xl shadow-lg pt-16 pb-6 px-6 flex flex-col items-center text-center min-h-[340px] border border-gray-100 hover:border-[#0B3D91] transition-colors"
              >
                <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                  <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-gradient-to-r from-[#0B3D91] to-[#1E88E5] flex items-center justify-center overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="mt-20">
                  <h3 className="text-xl font-bold mb-1 text-[#0B3D91]">{partner.name}</h3>
                  <p className="text-gray-600 mb-4 text-base">{partner.description}</p>
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
                          className="text-gray-400 hover:text-[#00BCD4] transition-colors p-2 rounded-full"
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
      <div className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-[#0B3D91] mb-6">
              Deine Vorteile
            </h2>
            <div className="w-24 h-1 bg-[#00BCD4] mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Entdecke die exklusiven Vorteile, die wir unseren Partnern bieten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {heroFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="group"
              >
                <div className="bg-white p-8 rounded-lg border-2 border-gray-100 hover:border-[#00BCD4] transition-colors duration-300">
                  <div className="mb-6">
                    <feature.icon className="w-10 h-10 text-[#00BCD4]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-2xl font-bold text-[#0B3D91]">
                    {feature.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}