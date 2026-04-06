import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';
import RevealText from './RevealText';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <RevealText>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">About Me</h2>
          </RevealText>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div ref={ref} className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Image Placeholder with enhanced effects */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="w-full md:w-2/5 perspective-1000"
          >
            <div className="relative aspect-[4/5] max-w-sm mx-auto group">
              {/* Animated border gradient */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-3xl opacity-70 blur-sm"
                animate={{
                  background: [
                    'linear-gradient(0deg, #3b82f6, #8b5cf6, #3b82f6)',
                    'linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)',
                    'linear-gradient(180deg, #3b82f6, #8b5cf6, #3b82f6)',
                    'linear-gradient(270deg, #3b82f6, #8b5cf6, #3b82f6)',
                    'linear-gradient(360deg, #3b82f6, #8b5cf6, #3b82f6)',
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />

              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/profile.png"
                  alt="Felix Uwakara - Frontend Developer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm opacity-80">Frontend Developer</p>
                    <p className="text-xs opacity-60">CS Student @ Bingham University</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-card glass px-4 py-2 rounded-full shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, type: 'spring' }}
              >
                <span className="text-sm font-medium text-primary">💡 Creative</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-card glass px-4 py-2 rounded-full shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7, type: 'spring' }}
              >
                <span className="text-sm font-medium text-primary">⚡ Fast Learner</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-3/5 space-y-6 text-lg text-text-secondary"
          >
            <motion.p
              className="leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              I'm Felix, a computer science student at Bingham University with a strong interest in building modern, user-focused digital products. Currently in my second year, I've been developing my skills in frontend development, with a focus on creating clean, responsive, and functional web applications.
            </motion.p>

            <motion.p
              className="leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              My journey into tech started with curiosity, but has grown into a commitment to mastering the tools and technologies that power today's web. I work with technologies like JavaScript and React, and I'm actively expanding my knowledge into areas such as AI-assisted development and real-world application building.
            </motion.p>

            <motion.p
              className="leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              I enjoy turning ideas into practical solutions, whether it's designing intuitive interfaces or building applications that solve everyday problems. I'm particularly interested in combining frontend development with emerging technologies to create smarter, more efficient user experiences.
            </motion.p>

            {/* Stats cards */}
            <motion.div
              className="pt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="glass px-8 py-6 rounded-2xl text-center flex-1 min-w-[140px] hover-target group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-4xl font-bold text-primary mb-1 group-hover:glow-text transition-all">
                  <AnimatedCounter end={3} suffix="+" />
                </h3>
                <p className="text-sm font-medium text-text-primary">Years Exp</p>
              </motion.div>

              <motion.div
                className="glass px-8 py-6 rounded-2xl text-center flex-1 min-w-[140px] hover-target group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-4xl font-bold text-primary mb-1 group-hover:glow-text transition-all">
                  <AnimatedCounter end={20} suffix="+" />
                </h3>
                <p className="text-sm font-medium text-text-primary">Projects</p>
              </motion.div>

              <motion.div
                className="glass px-8 py-6 rounded-2xl text-center flex-1 min-w-[140px] hover-target group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-4xl font-bold text-primary mb-1 group-hover:glow-text transition-all">
                  <AnimatedCounter end={100} suffix="%" />
                </h3>
                <p className="text-sm font-medium text-text-primary">Commitment</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
