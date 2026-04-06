import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Linkedin, Github, Twitter, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/felixcityartworks', color: 'hover:text-white' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/felix-uwakara-826467310', color: 'hover:text-[#0A66C2]' },
  { icon: Twitter, label: 'Twitter', href: 'https://x.com/UwakaraFelix', color: 'hover:text-[#1DA1F2]' },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
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
            Contact
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Let's Work Together</h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="mt-6 text-text-secondary max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new projects and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 font-heading">Get in Touch</h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:uwakaraf@gmail.com"
                  className="flex items-center gap-4 text-text-secondary hover:text-primary transition-all group p-4 rounded-xl hover:bg-card"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Email</p>
                    <p className="font-medium">uwakaraf@gmail.com</p>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>

                <motion.div
                  className="flex items-center gap-4 text-text-secondary p-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Location</p>
                    <p className="font-medium">Lagos, Nigeria</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <MagneticButton key={social.label} strength={0.3}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`w-12 h-12 rounded-xl bg-card border border-border-color flex items-center justify-center text-text-secondary transition-all hover:border-primary ${social.color}`}
                      >
                        <Icon size={20} />
                      </a>
                    </MagneticButton>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              className="glass p-8 rounded-3xl space-y-6 relative overflow-hidden group"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                  padding: '1px',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'xor',
                  WebkitMaskComposite: 'xor',
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-primary">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-bg border border-border-color rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-text-secondary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-primary">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-bg border border-border-color rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-text-secondary/50"
                  />
                </div>
              </div>

              <div className="space-y-2 relative z-10">
                <label className="text-sm font-medium text-text-primary">Subject</label>
                <input
                  type="text"
                  placeholder="Project inquiry"
                  className="w-full bg-bg border border-border-color rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-text-secondary/50"
                />
              </div>

              <div className="space-y-2 relative z-10">
                <label className="text-sm font-medium text-text-primary">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-bg border border-border-color rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none placeholder:text-text-secondary/50"
                ></textarea>
              </div>

              <MagneticButton className="w-full relative z-10" strength={0.1}>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary-hover hover:to-blue-600 text-white py-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Send Message
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 3, y: -3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Send size={18} />
                  </motion.span>
                </button>
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
