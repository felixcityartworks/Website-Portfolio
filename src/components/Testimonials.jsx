import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager at TechCorp',
    content: 'Felix delivered exceptional work on our frontend project. His attention to detail and ability to translate designs into pixel-perfect implementations is remarkable.',
    avatar: 'SJ',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Senior Developer at StartupXYZ',
    content: 'Working with Felix was a pleasure. He brought creative solutions to complex problems and consistently delivered high-quality code ahead of schedule.',
    avatar: 'MC',
  },
  {
    id: 3,
    name: 'Amara Okafor',
    role: 'Founder at DesignStudio',
    content: 'Felix has an eye for design and a deep understanding of user experience. Our website traffic increased by 40% after his redesign.',
    avatar: 'AO',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">What People Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <Quote className="absolute top-0 left-0 w-16 h-16 text-primary/10 -translate-x-8 -translate-y-8" />

          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="glass p-8 md:p-12 rounded-3xl text-center"
              >
                <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
                  "{testimonials[current].content}"
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[current].avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
                    <p className="text-text-secondary text-sm">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-card border border-border-color hover:border-primary hover:text-primary transition-all hover-target"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all hover-target ${
                    index === current ? 'bg-primary w-6' : 'bg-border-color'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-card border border-border-color hover:border-primary hover:text-primary transition-all hover-target"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
