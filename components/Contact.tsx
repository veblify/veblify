import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-brand-black relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-brand-accent font-sans text-xs tracking-widest uppercase mb-6 block"
        >
          (05) What's Next?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl font-bold mb-8"
        >
          Ready to build the <br /> extraordinary?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-brand-muted text-lg mb-12 max-w-2xl mx-auto"
        >
          We are currently accepting new projects for Q4. Tell us about your vision.
        </motion.p>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-md mx-auto space-y-4 text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-1">
             <label htmlFor="email" className="text-xs font-sans uppercase tracking-widest text-brand-muted ml-1">Email Address</label>
             <input 
              type="email" 
              id="email"
              placeholder="hello@yourbrand.com"
              className="w-full bg-transparent border-b border-white/20 py-4 px-2 text-white placeholder-white/20 focus:outline-none focus:border-brand-accent transition-colors font-sans text-lg"
             />
          </div>
          
          <div className="pt-8">
            <button 
                type="submit"
                className="w-full bg-white text-brand-black font-bold font-sans py-4 px-8 hover:bg-brand-accent transition-colors duration-300 uppercase tracking-widest"
            >
                Send Inquiry
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};