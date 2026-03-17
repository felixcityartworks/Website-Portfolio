import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 mix-blend-multiply dark:mix-blend-screen" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 7, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 mix-blend-multiply dark:mix-blend-screen" 
      />

      <div className="container mx-auto px-6 md:px-12 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-medium tracking-wider uppercase mb-4">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
            Felix <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Uwakara</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            A computer science student and frontend developer building clean, responsive, and modern web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="projects"
            smooth={true}
            offset={-80}
            className="cursor-pointer bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 group w-full sm:w-auto"
          >
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <div className="flex gap-4 w-full sm:w-auto mt-4 sm:mt-0 justify-center">
            <a href="/felix-uwakara-cv.pdf" download className="flex items-center justify-center gap-2 bg-card hover:bg-card-hover text-text-primary px-6 py-4 rounded-full font-medium transition-all border border-border-color shadow-sm w-full sm:w-auto">
              <Download size={20} />
              <span>CV</span>
            </a>
            
            <a href="https://github.com/felixcityartworks" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="flex items-center justify-center p-4 bg-card hover:bg-card-hover text-text-primary rounded-full transition-all border border-border-color shadow-sm group hover:border-primary hover:text-primary">
              <Github size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/felix-uwakara-826467310" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="flex items-center justify-center p-4 bg-card hover:bg-card-hover text-text-primary rounded-full transition-all border border-border-color shadow-sm group hover:border-primary hover:text-primary">
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://x.com/UwakaraFelix" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X Profile" className="flex items-center justify-center p-4 bg-card hover:bg-card-hover text-text-primary rounded-full transition-all border border-border-color shadow-sm group hover:border-primary hover:text-primary">
              <Twitter size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
