"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaHandshake, FaAward } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="About Lumina Estates" 
                className="rounded-3xl shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-forest-100 rounded-3xl -z-10"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 border-4 border-earth-200 rounded-3xl -z-10"></div>
              
              <div className="absolute -bottom-6 right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 z-20">
                <div className="text-4xl font-bold text-forest-600">15+</div>
                <div className="text-sm font-medium text-gray-600 leading-tight">Years of<br/>Excellence</div>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-forest-600 font-bold uppercase tracking-wider mb-2"
            >
              Our Story
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-forest-900 mb-6"
            >
              Redefining Luxury Living with Nature
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg mb-8"
            >
              At Lumina Estates, we believe that a home is more than just a place to live—it's a sanctuary. We specialize in connecting discerning clients with premium properties that harmonize modern architecture with breathtaking natural surroundings.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-forest-100 text-forest-600 flex items-center justify-center shrink-0">
                  <FaLeaf className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Sustainable Approach</h4>
                  <p className="text-sm text-gray-500">Focusing on eco-friendly and sustainable properties.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-forest-100 text-forest-600 flex items-center justify-center shrink-0">
                  <FaHandshake className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Trusted Partners</h4>
                  <p className="text-sm text-gray-500">Transparent and secure transaction processes.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
