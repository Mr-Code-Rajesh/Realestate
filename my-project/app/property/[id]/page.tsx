"use client";

import { use } from "react";
import Link from "next/link";
import { properties } from "../../data/mockData";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaCheck, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export default function PropertyDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const property = properties.find((p) => p.id === resolvedParams.id);

  if (!property) {
    return (
      <div className="min-h-screen bg-earth-50 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-forest-900 mb-4">Property Not Found</h1>
        <Link href="/" className="text-forest-600 hover:text-forest-800 flex items-center gap-2">
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-earth-50 font-sans text-forest-900">
      <Navbar />
      
      <div className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-800 mb-6 transition-colors">
            <FaArrowLeft /> Back to Properties
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl overflow-hidden shadow-lg h-[400px] md:h-[500px] mb-8 relative"
              >
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-forest-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  {property.type}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-earth-100 mb-8"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{property.title}</h1>
                    <p className="flex items-center text-gray-500 text-lg">
                      <FaMapMarkerAlt className="text-forest-500 mr-2" />
                      {property.location}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 text-3xl font-bold text-forest-700">
                    ${property.price.toLocaleString("en-US")}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 border-y border-gray-100 py-6 mb-6">
                  <div className="flex items-center text-gray-600 text-lg">
                    <FaBed className="text-forest-600 mr-3 text-2xl" />
                    <span className="font-medium">{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-lg">
                    <FaBath className="text-forest-600 mr-3 text-2xl" />
                    <span className="font-medium">{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-lg">
                    <FaRulerCombined className="text-forest-600 mr-3 text-2xl" />
                    <span className="font-medium">{property.area} sqft</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {property.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center text-gray-600 bg-earth-50 py-2 px-4 rounded-xl border border-earth-100">
                        <FaCheck className="text-forest-500 mr-2 shrink-0" />
                        <span className="font-medium">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Map Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-earth-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Location</h3>
                <div className="w-full h-[300px] rounded-2xl overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1680123456789!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Property Location"
                  ></iframe>
                </div>
              </motion.div>
            </div>

            {/* Sidebar (Contact Form) */}
            <div className="lg:w-1/3">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-earth-100 sticky top-28"
              >
                <h3 className="text-2xl font-bold text-forest-900 mb-2">Interested?</h3>
                <p className="text-gray-500 mb-6">Contact our agent for this property.</p>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-gray-50" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-gray-50" placeholder="Your Email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-gray-50" placeholder="Your Phone Number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-500 bg-gray-50" defaultValue={`I am interested in ${property.title}.`}></textarea>
                  </div>
                  <button type="button" className="w-full bg-forest-700 hover:bg-forest-800 text-white font-bold py-3 rounded-xl transition-colors shadow-md mt-4">
                    Request Information
                  </button>
                  <button type="button" className="w-full bg-white border border-forest-200 text-forest-800 hover:bg-forest-50 font-bold py-3 rounded-xl transition-colors mt-3">
                    Schedule a Tour
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
