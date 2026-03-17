import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-600 rounded-3xl rotate-6 opacity-30 blur-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-400 rounded-3xl -rotate-3 scale-105 opacity-20 transition-transform hover:rotate-0 duration-500"></div>
              <img
                src="/profile.png"
                alt="Felix Uwakara - Frontend Developer"
                className="rounded-3xl object-cover w-full h-full shadow-xl relative z-10 transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6 text-lg text-text-secondary"
          >
            <p className="leading-relaxed">
              I'm Felix, a computer science student at Bingham University with a strong interest in building modern, user-focused digital products. Currently in my second year, I've been developing my skills in frontend development, with a focus on creating clean, responsive, and functional web applications.
            </p>
            <p className="leading-relaxed">
              My journey into tech started with curiosity, but has grown into a commitment to mastering the tools and technologies that power today's web. I work with technologies like JavaScript and React, and I'm actively expanding my knowledge into areas such as AI-assisted development and real-world application building.
            </p>
            <p className="leading-relaxed">
              I enjoy turning ideas into practical solutions, whether it's designing intuitive interfaces or building applications that solve everyday problems. I'm particularly interested in combining frontend development with emerging technologies to create smarter, more efficient user experiences.
            </p>
            <p className="leading-relaxed">
              At this stage, I'm focused on continuous learning, building impactful projects, and growing into a developer who can contribute effectively in both freelance and professional environments.
            </p>
            
            <div className="pt-4 flex gap-4">
              <div className="glass px-6 py-4 rounded-xl text-center flex-1 transition-transform hover:-translate-y-1">
                <h3 className="text-3xl font-bold text-primary mb-1">3+</h3>
                <p className="text-sm font-medium text-text-primary">Years Exp</p>
              </div>
              <div className="glass px-6 py-4 rounded-xl text-center flex-1 transition-transform hover:-translate-y-1">
                <h3 className="text-3xl font-bold text-primary mb-1">20+</h3>
                <p className="text-sm font-medium text-text-primary">Projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
