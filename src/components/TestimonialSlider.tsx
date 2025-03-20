import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function TestimonialSlider() {
  const testimonials = [
    {
      name: "Michael Schmidt",
      company: "TechCorp GmbH",
      text: "Vexura bietet uns genau die Zuverlässigkeit und Performance, die wir für unsere Enterprise-Anwendungen benötigen.",
      rating: 5
    },
    // Add more testimonials
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12">
          Was unsere Kunden sagen
        </h2>
        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}