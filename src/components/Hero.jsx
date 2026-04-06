import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-scroll';
import GlitchText from './GlitchText';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'A computer science student and frontend developer building clean, responsive, and modern web applications.';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, -5, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] -z-10"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[100px] -z-10"
      />

      <div className="container mx-auto px-6 md:px-12 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-primary font-medium tracking-wider uppercase mb-4"
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.2em' }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight">
            <GlitchText
              text="Felix Uwakara"
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-500"
            />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed min-h-[3.5rem]">
            <span className="typewriter-cursor">{typedText}</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton className="w-full sm:w-auto">
            <Link
              to="projects"
              smooth={true}
              offset={-80}
              className="block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 group pulse-glow"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>

          <div className="flex gap-3 w-full sm:w-auto mt-4 sm:mt-0 justify-center">
            <MagneticButton className="hover-target" strength={0.2}>
              <a
                href="/felix-uwakara-cv.pdf"
                download
                className="flex items-center justify-center gap-2 bg-card hover:bg-card-hover text-text-primary px-6 py-4 rounded-full font-medium transition-all border border-border-color shadow-sm"
              >
                <Download size={20} />
                <span>CV</span>
              </a>
            </MagneticButton>

            <MagneticButton className="hover-target" strength={0.2}>
              <a
                href="https://github.com/felixcityartworks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center justify-center p-4 bg-card hover:bg-card-hover text-text-primary rounded-full transition-all border border-border-color shadow-sm hover:border-primary hover:text-primary"
              >
                <Github size={20} />
              </a>
            </MagneticButton>

            <MagneticButton className="hover-target" strength={0.2}>
              <a
                href="https://www.linkedin.com/in/felix-uwakara-826467310"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center justify-center p-4 bg-card hover:bg-card-hover text-text-primary rounded-full transition-all border border-border-color shadow-sm hover:border-primary hover:text-primary"
              >
                <Linkedin size={20} />
              </a>
            </MagneticButton>

            <MagneticButton className="hover-target" strength={0.2}>
              <a
                href="https://x.com/UwakaraFelix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X Profile"
                className="flex items-center justify-center p-4 bg-card hover:bg-card-hover text-text-primary rounded-full transition-all border border-border-color shadow-sm hover:border-primary hover:text-primary"
              >
                <Twitter size={20} />
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-text-secondary/30 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
