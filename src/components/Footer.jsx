import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { Link } from 'react-scroll';
import MagneticButton from './MagneticButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border-color py-16 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Back to top button */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <MagneticButton strength={0.4}>
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="bg-gradient-to-br from-primary to-blue-500 text-white p-4 rounded-full shadow-lg block cursor-pointer group hover:shadow-primary/40 transition-shadow"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUp size={24} />
              </motion.div>
            </Link>
          </MagneticButton>
        </div>

        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.div
            className="text-3xl font-bold font-heading text-gradient-animate mb-8 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Felixcity.dev
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-text-secondary hover:text-primary transition-colors cursor-pointer text-sm"
              >
                {item}
              </Link>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {[
              { icon: Github, href: 'https://github.com/felixcityartworks', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/felix-uwakara-826467310', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://x.com/UwakaraFelix', label: 'Twitter' },
            ].map((social) => (
              <MagneticButton key={social.label} strength={0.3}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-card border border-border-color flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all group"
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </MagneticButton>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-24 h-px bg-gradient-to-r from-transparent via-border-color to-transparent mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />

          {/* Copyright */}
          <motion.p
            className="text-text-secondary text-sm text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            © {currentYear} Felix Uwakara. Made with{' '}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                color: ['#ef4444', '#ec4899', '#ef4444'],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              <Heart size={14} className="inline fill-current" />
            </motion.span>{' '}
            and lots of coffee
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
