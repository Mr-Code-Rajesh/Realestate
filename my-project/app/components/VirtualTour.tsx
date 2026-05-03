"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

export default function VirtualTour() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-forest-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Experience It Virtually
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-earth-200 max-w-2xl mx-auto"
          >
            Take a 360° tour of our most exclusive properties without leaving your home.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl aspect-video bg-black"
        >
          {!isPlaying ? (
            <div className="absolute inset-0 group cursor-pointer" onClick={() => setIsPlaying(true)}>
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                alt="Virtual Tour Preview" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-forest-600/90 rounded-full flex items-center justify-center text-white pl-1 shadow-[0_0_30px_rgba(64,145,108,0.5)] group-hover:scale-110 transition-transform duration-300">
                  <FaPlay className="text-3xl" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <div className="bg-earth-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                    Virtual Tour Available
                  </div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">Riverside Estate</h3>
                </div>
                <div className="text-white/80 text-sm">3:45 mins</div>
              </div>
            </div>
          ) : (
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="Virtual Tour Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          )}
        </motion.div>
      </div>
    </section>
  );
}
