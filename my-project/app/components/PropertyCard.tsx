"use client";

import Link from "next/link";
import { Property } from "../data/mockData";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaPlus, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

interface PropertyCardProps {
  property: Property;
  onCompareToggle: (property: Property) => void;
  isCompared: boolean;
}

export default function PropertyCard({ property, onCompareToggle, isCompared }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-earth-100 transition-all group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-forest-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          {property.type}
        </div>
        {property.featured && (
          <div className="absolute top-4 right-4 bg-earth-800 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="text-2xl font-bold text-forest-900 mb-2">
          ${property.price.toLocaleString("en-US")}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
          {property.title}
        </h3>
        <p className="flex items-center text-gray-500 mb-4 text-sm">
          <FaMapMarkerAlt className="text-forest-500 mr-2" />
          {property.location}
        </p>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4 mb-6">
          <div className="flex items-center text-gray-600">
            <FaBed className="text-forest-600 mr-2" />
            <span className="text-sm font-medium">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaBath className="text-forest-600 mr-2" />
            <span className="text-sm font-medium">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaRulerCombined className="text-forest-600 mr-2" />
            <span className="text-sm font-medium">{property.area} sqft</span>
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            href={`/property/${property.id}`}
            className="flex-1 text-center bg-forest-50 text-forest-800 border border-forest-200 hover:bg-forest-700 hover:text-white py-2.5 rounded-xl font-medium transition-colors"
          >
            View Details
          </Link>
          <button
            onClick={() => onCompareToggle(property)}
            className={`px-4 py-2.5 rounded-xl flex items-center justify-center transition-colors border ${
              isCompared
                ? "bg-earth-800 text-white border-earth-800"
                : "bg-white text-forest-700 border-forest-200 hover:bg-forest-50"
            }`}
            title={isCompared ? "Remove from Compare" : "Add to Compare"}
          >
            {isCompared ? <FaCheck /> : <FaPlus />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
