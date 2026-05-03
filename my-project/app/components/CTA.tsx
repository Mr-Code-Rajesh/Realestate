"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Modern Home" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-900/80 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Ready to Find Your Dream Home?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-earth-200 mb-10"
        >
          Schedule a free consultation with our luxury real estate experts today.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="bg-white text-forest-900 hover:bg-earth-100 font-bold py-4 px-8 rounded-xl transition-colors shadow-lg">
            Schedule a Visit
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl transition-colors">
            Browse Properties
          </button>
        </motion.div>
      </div>
    </section>
  );
}
