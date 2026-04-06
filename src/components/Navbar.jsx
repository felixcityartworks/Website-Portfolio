import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useDarkMode();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold font-heading cursor-pointer flex items-center hover-target"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-primary text-gradient-animate flex items-center gap-2"
          >
            <motion.span
              animate={{
                textShadow: [
                  '0 0 10px rgba(59, 130, 246, 0.3)',
                  '0 0 20px rgba(59, 130, 246, 0.5)',
                  '0 0 10px rgba(59, 130, 246, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Felixcity
            </motion.span>
            <motion.span
              className="text-xs align-top opacity-70"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              .dev
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="text-primary font-semibold"
                className="relative px-4 py-2 text-text-secondary hover:text-primary transition-colors cursor-pointer font-medium group"
              >
                {link.name}
                <motion.span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all duration-300 rounded-full"
                />
              </Link>
            </motion.div>
          ))}

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="ml-4 p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors hover-target relative overflow-hidden"
            aria-label="Toggle Dark Mode"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {theme === 'dark' ? (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="md:hidden flex items-center space-x-3">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-primary focus:outline-none p-2"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full glass border-t border-border-color overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="text-text-primary hover:text-primary text-lg font-medium transition-colors cursor-pointer block py-2"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
