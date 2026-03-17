import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 mix-blend-multiply dark:mix-blend-screen" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-text-secondary">Have a question or want to work together? Drop me a message!</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 font-heading">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <span>uwakaraf@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-2/3"
          >
            <form className="glass p-8 rounded-2xl space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-primary">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-bg border border-border-color rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-primary">Email</label>
                  <input type="email" placeholder="uwakaraf@gmail.com" className="w-full bg-bg border border-border-color rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-primary">Message</label>
                <textarea rows="4" placeholder="Your message here..." className="w-full bg-bg border border-border-color rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 group cursor-pointer">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
