import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border-color py-12 relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center relative">
        <div className="absolute -top-16">
          <Link 
            to="home" 
            smooth={true} 
            duration={500}
            className="bg-primary text-white p-3 rounded-full shadow-lg block cursor-pointer hover:-translate-y-1 transition-transform hover:shadow-primary/30"
          >
            <ArrowUp size={24} />
          </Link>
        </div>
        <div className="text-2xl font-bold font-heading text-primary text-gradient-animate mb-6 mt-4 flex items-center">
          Felixcity
        </div>
        
        <div className="flex gap-4 mb-8">
          <a href="https://github.com/felixcityartworks" target="_blank" rel="noopener noreferrer" className="p-2 text-text-secondary hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/felix-uwakara-826467310" target="_blank" rel="noopener noreferrer" className="p-2 text-text-secondary hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://x.com/UwakaraFelix" target="_blank" rel="noopener noreferrer" className="p-2 text-text-secondary hover:text-primary transition-colors">
            <Twitter size={20} />
          </a>
        </div>
        
        <p className="text-text-secondary text-center">
          © {new Date().getFullYear()} Felix Uwakara. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
