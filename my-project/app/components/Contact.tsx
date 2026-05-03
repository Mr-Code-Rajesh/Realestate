"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-earth-50 rounded-3xl overflow-hidden shadow-xl border border-earth-100 flex flex-col lg:flex-row">
          {/* Contact Info */}
          <div className="lg:w-2/5 bg-forest-900 text-white p-10 md:p-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-earth-200 mb-8"
            >
              Ready to find your dream home? Our team is here to assist you with any inquiries.
            </motion.p>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="text-forest-400" />
                </div>
                <div>
                  <h4 className="text-earth-200 text-sm">Phone</h4>
                  <p className="font-semibold">+1 (800) 555-0199</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-forest-400" />
                </div>
                <div>
                  <h4 className="text-earth-200 text-sm">Email</h4>
                  <p className="font-semibold">info@luminaestates.com</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-forest-400" />
                </div>
                <div>
                  <h4 className="text-earth-200 text-sm">Office</h4>
                  <p className="font-semibold">123 Evergreen Terrace<br/>Seattle, WA 98101</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                <FaWhatsapp className="text-xl" />
                Chat on WhatsApp
              </button>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-3/5 p-10 md:p-12 bg-white">
            <h3 className="text-2xl font-bold text-forest-900 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent bg-gray-50" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent bg-gray-50" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Requirement</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent bg-gray-50 appearance-none">
                  <option>I want to buy a property</option>
                  <option>I want to sell a property</option>
                  <option>I am looking for investment</option>
                  <option>Other inquiries</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent bg-gray-50" placeholder="Tell us more about your requirements..."></textarea>
              </div>
              <button type="button" className="bg-forest-700 hover:bg-forest-800 text-white font-medium py-3 px-8 rounded-xl transition-colors w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
