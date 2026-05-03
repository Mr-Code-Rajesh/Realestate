"use client";

import { motion } from "framer-motion";
import { FaSearch, FaMapMarkerAlt, FaHome, FaDollarSign } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center pt-20">
      {/* Background Video or Image (Using Image for now) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Modern Real Estate"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg"
        >
          Find Your Dream Property
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-earth-100 mb-10 max-w-2xl drop-shadow-md"
        >
          Discover luxury living that connects you with nature. Explore premium estates tailored to your lifestyle.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Location */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <FaMapMarkerAlt className="text-forest-600" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent text-gray-800 placeholder-gray-500"
                placeholder="City, Neighborhood, or Zip"
              />
            </div>

            {/* Property Type */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <FaHome className="text-forest-600" />
              </div>
              <select className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent text-gray-800 appearance-none bg-white">
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="penthouse">Penthouse</option>
                <option value="apartment">Apartment</option>
              </select>
            </div>

            {/* Budget */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <FaDollarSign className="text-forest-600" />
              </div>
              <select className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent text-gray-800 appearance-none bg-white">
                <option value="">Max Budget</option>
                <option value="500000">$500k</option>
                <option value="1000000">$1M</option>
                <option value="2500000">$2.5M</option>
                <option value="5000000">$5M+</option>
              </select>
            </div>

            {/* CTA Button */}
            <button className="bg-forest-700 hover:bg-forest-800 text-white py-3 px-8 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 md:w-auto w-full">
              <FaSearch />
              Search
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
