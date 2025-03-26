import { motion } from 'framer-motion';
import { Users, Award, Gift, Zap, ArrowRight } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  website: string;
}

export function Partners() {
  const features = [
    {
      icon: Users,
      title: 'Lorem Ipsum',
      description: 'Sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: Award,
      title: 'Dolor Sit',
      description: 'Consectetur adipiscing elit, sed do eiusmod'
    },
    {
      icon: Gift,
      title: 'Amet Consectetur',
      description: 'Ut enim ad minim veniam, quis nostrud'
    },
    {
      icon: Zap,
      title: 'Tempor Incididunt',
      description: 'Duis aute irure dolor in reprehenderit'
    }
  ];

  const partners: Partner[] = [
    {
      name: "Lorem Tech",
      logo: "https://placehold.co/200x100/4e54c8/FFFFFF/png?text=Lorem",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      website: "#"
    },
    {
      name: "Ipsum Solutions",
      logo: "https://placehold.co/200x100/8f94fb/FFFFFF/png?text=Ipsum",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore",
      website: "#"
    },
    {
      name: "Dolor Systems",
      logo: "https://placehold.co/200x100/4e54c8/FFFFFF/png?text=Dolor",
      description: "Ut enim ad minim veniam, quis nostrud exercitation",
      website: "#"
    },
    {
      name: "Sit Services",
      logo: "https://placehold.co/200x100/8f94fb/FFFFFF/png?text=Sit",
      description: "Duis aute irure dolor in reprehenderit in voluptate",
      website: "#"
    },
    {
      name: "Amet Corp",
      logo: "https://placehold.co/200x100/4e54c8/FFFFFF/png?text=Amet",
      description: "Excepteur sint occaecat cupidatat non proident",
      website: "#"
    },
    {
      name: "Elit Solutions",
      logo: "https://placehold.co/200x100/8f94fb/FFFFFF/png?text=Elit",
      description: "Sunt in culpa qui officia deserunt mollit anim",
      website: "#"
    },
    {
      name: "Tempor Inc",
      logo: "https://placehold.co/200x100/4e54c8/FFFFFF/png?text=Tempor",
      description: "Sed ut perspiciatis unde omnis iste natus error",
      website: "#"
    },
    {
      name: "Veniam LLC",
      logo: "https://placehold.co/200x100/8f94fb/FFFFFF/png?text=Veniam",
      description: "Nemo enim ipsam voluptatem quia voluptas sit",
      website: "#"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#8f94fb] to-[#4e54c8] py-24">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:16px_16px]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl font-display font-bold mb-6">
              Lorem Ipsum Partners
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-white text-[#4e54c8] px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center group">
              Partner werden
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <feature.icon className="h-12 w-12 text-[#4e54c8] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partner Showcase */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Unsere Partner
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.website}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group"
            >
              <div className="aspect-[2/1] mb-4 overflow-hidden rounded-lg">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#4e54c8] transition-colors">
                {partner.name}
              </h3>
              <p className="text-gray-600">
                {partner.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#8f94fb] to-[#4e54c8] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Lorem Ipsum Dolor?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="bg-white text-[#4e54c8] px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors inline-flex items-center group">
            Jetzt bewerben
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}