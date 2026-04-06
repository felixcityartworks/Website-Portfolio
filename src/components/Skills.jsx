import { motion } from 'framer-motion';
import { Code2, Palette, Terminal, Cpu, Layers, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';

const skillCategories = [
  {
    icon: Code2,
    name: 'Frontend Development',
    skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'Next.js', 'HTML5/CSS3'],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Palette,
    name: 'Styling & Design',
    skills: ['Tailwind CSS', 'Framer Motion', 'GSAP', 'Responsive Design', 'UI/UX'],
    color: 'from-purple-500 to-pink-400',
  },
  {
    icon: Terminal,
    name: 'Tools & Workflow',
    skills: ['Git & GitHub', 'Vite', 'npm/pnpm', 'ESLint/Prettier', 'VS Code'],
    color: 'from-orange-500 to-yellow-400',
  },
  {
    icon: Cpu,
    name: 'Emerging Tech',
    skills: ['AI Integration', 'OpenAI API', 'Vercel AI SDK', 'Chrome Extensions', 'Web APIs'],
    color: 'from-green-500 to-emerald-400',
  },
  {
    icon: Layers,
    name: 'Backend Basics',
    skills: ['Node.js', 'Express', 'RESTful APIs', 'MongoDB', 'Firebase'],
    color: 'from-red-500 to-orange-400',
  },
  {
    icon: Sparkles,
    name: 'Soft Skills',
    skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Self-Learning', 'Time Management'],
    color: 'from-indigo-500 to-blue-400',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 md:px-12">
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
            Expertise
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Skills & Technologies</h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.name} variants={itemVariants}>
                <TiltCard className="h-full">
                  <div className="glass p-6 rounded-2xl h-full group hover:border-primary/30 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={24} />
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className="text-sm px-3 py-1 rounded-full bg-primary/10 text-text-secondary hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
