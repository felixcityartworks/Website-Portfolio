import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';
import TextScramble from './TextScramble';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with dynamic product routing, cart management, and seamless Stripe payment integration.',
    tech: ['React', 'Tailwind', 'Node.js', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    description: 'A responsive analytics dashboard for comprehensive data visualization. Features customizable widgets and real-time updates.',
    tech: ['React', 'Framer Motion', 'Recharts'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'A web application that leverages OpenAI APIs to generate engaging marketing copy and blog posts with a click.',
    tech: ['React', 'Tailwind', 'OpenAI API'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A stunning portfolio website with 3D effects, particle animations, and smooth transitions built with React and Framer Motion.',
    tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 5,
    title: 'Task Management App',
    description: 'A productivity app with drag-and-drop functionality, real-time collaboration, and persistent storage.',
    tech: ['React', 'Firebase', 'Tailwind', 'DnD Kit'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    description: 'Real-time weather tracking with location-based forecasts, interactive maps, and beautiful visualizations.',
    tech: ['React', 'Weather API', 'Chart.js', 'Mapbox'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 12 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-primary font-medium tracking-wider uppercase mb-4 block"
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.2em' }}
            viewport={{ once: true }}
          >
            Portfolio
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Featured Projects</h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="mt-6 text-text-secondary max-w-2xl mx-auto">
            A collection of projects that showcase my skills in frontend development, UI/UX design, and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <TiltCard className="h-full" tiltAmount={8}>
                <div className="group glass border border-transparent hover:border-primary/20 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col">
                  {/* Image container */}
                  <div className="relative h-52 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    {project.featured && (
                      <motion.div
                        className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-primary/90 text-white text-xs px-3 py-1 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Sparkles size={12} />
                        Featured
                      </motion.div>
                    )}

                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Hover overlay with links */}
                    <motion.div
                      className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <a
                        href={project.link}
                        className="flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        className="p-2 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    </motion.div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow relative z-20">
                    <TextScramble
                      text={project.title}
                      className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors"
                      trigger="hover"
                    />

                    <p className="text-text-secondary mb-4 flex-grow text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full group-hover:bg-primary group-hover:text-white transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/felixcityartworks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-border-color hover:border-primary hover:bg-primary/5 transition-all hover-target group"
          >
            <Github size={20} className="group-hover:scale-110 transition-transform" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
