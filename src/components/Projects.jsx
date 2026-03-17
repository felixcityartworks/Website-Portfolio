import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with dynamic product routing, cart management, and seamless Stripe payment integration.',
    tech: ['React', 'Tailwind', 'Node.js', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#'
  },
  {
    title: 'SaaS Dashboard',
    description: 'A responsive analytics dashboard for comprehensive data visualization. Features customizable widgets and real-time updates.',
    tech: ['React', 'Framer Motion', 'Recharts'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#'
  },
  {
    title: 'AI Content Generator',
    description: 'A web application that leverages OpenAI APIs to generate engaging marketing copy and blog posts with a click.',
    tech: ['React', 'Tailwind', 'OpenAI API'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 12 }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group glass border border-transparent hover:border-border-color rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={project.image} 
                  alt={`${project.title} project screenshot`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative z-20">
                <h3 className="text-2xl font-bold font-heading mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a href={project.link} className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-2 rounded-lg transition-colors font-medium">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.github} className="p-2 border border-border-color rounded-lg hover:bg-white/10 transition-colors text-text-primary">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
