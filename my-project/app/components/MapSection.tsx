"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function MapSection() {
  return (
    <section className="bg-earth-50 py-20 border-t border-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-forest-900 mb-4"
            >
              Discover Our Locations
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 mb-8"
            >
              We curate properties in the most sought-after neighborhoods. From vibrant city centers to tranquil forest retreats, find the perfect setting for your next chapter.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-earth-100">
                <div className="w-10 h-10 bg-forest-100 rounded-full flex items-center justify-center text-forest-600">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Evergreen Hills, WA</h4>
                  <p className="text-sm text-gray-500">Premium Forest Estates</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-earth-100">
                <div className="w-10 h-10 bg-forest-100 rounded-full flex items-center justify-center text-forest-600">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Sedona, AZ</h4>
                  <p className="text-sm text-gray-500">Earth-Toned Eco Homes</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-2/3 w-full h-[400px] rounded-3xl overflow-hidden shadow-lg"
          >
            {/* Generic Map iframe, replace src with actual Google Maps API later */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1680123456789!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Property Locations"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
