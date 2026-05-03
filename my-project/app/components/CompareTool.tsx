"use client";

import { useState } from "react";
import { Property } from "../data/mockData";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExchangeAlt, FaTrash } from "react-icons/fa";

interface CompareToolProps {
  comparedProperties: Property[];
  onRemove: (property: Property) => void;
  onClearAll: () => void;
}

export default function CompareTool({ comparedProperties, onRemove, onClearAll }: CompareToolProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (comparedProperties.length === 0) return null;

  return (
    <>
      {/* Floating Bottom Bar */}
      <AnimatePresence>
        {!isModalOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-40 border-t border-earth-200"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-forest-100 text-forest-800 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  {comparedProperties.length}
                </div>
                <span className="font-medium text-forest-900">Properties selected for comparison (Max 3)</span>
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={onClearAll}
                  className="text-gray-500 hover:text-red-500 font-medium text-sm transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  disabled={comparedProperties.length < 2}
                  className={`px-6 py-2.5 rounded-xl font-medium transition-colors flex items-center gap-2 ${
                    comparedProperties.length >= 2
                      ? "bg-forest-700 hover:bg-forest-800 text-white shadow-md"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <FaExchangeAlt />
                  Compare Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comparison Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col relative z-10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-forest-900 flex items-center gap-2">
                  <FaExchangeAlt className="text-forest-600" />
                  Property Comparison
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {comparedProperties.map((property) => (
                    <div key={property.id} className="border border-gray-100 rounded-xl overflow-hidden relative">
                      <button 
                        onClick={() => {
                          onRemove(property);
                          if (comparedProperties.length <= 2) setIsModalOpen(false);
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 z-10 shadow-md"
                      >
                        <FaTrash className="text-xs" />
                      </button>
                      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
                      
                      <div className="p-4 space-y-4">
                        <div>
                          <h3 className="font-bold text-lg text-gray-800 truncate">{property.title}</h3>
                          <p className="text-forest-700 font-bold text-xl">${property.price.toLocaleString("en-US")}</p>
                        </div>
                        
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex justify-between border-b border-gray-50 pb-2">
                            <span className="text-gray-400">Location</span>
                            <span className="font-medium text-right">{property.location}</span>
                          </div>
                          <div className="flex justify-between border-b border-gray-50 pb-2">
                            <span className="text-gray-400">Type</span>
                            <span className="font-medium">{property.type}</span>
                          </div>
                          <div className="flex justify-between border-b border-gray-50 pb-2">
                            <span className="text-gray-400">Bedrooms</span>
                            <span className="font-medium">{property.bedrooms}</span>
                          </div>
                          <div className="flex justify-between border-b border-gray-50 pb-2">
                            <span className="text-gray-400">Bathrooms</span>
                            <span className="font-medium">{property.bathrooms}</span>
                          </div>
                          <div className="flex justify-between border-b border-gray-50 pb-2">
                            <span className="text-gray-400">Area</span>
                            <span className="font-medium">{property.area} sqft</span>
                          </div>
                        </div>
                        
                        <div>
                          <span className="text-sm text-gray-400 block mb-2">Amenities</span>
                          <div className="flex flex-wrap gap-1">
                            {property.amenities.map(amenity => (
                              <span key={amenity} className="bg-earth-100 text-earth-800 text-xs px-2 py-1 rounded-md">
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
