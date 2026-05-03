"use client";

import { useState } from "react";
import { Property } from "../data/mockData";
import PropertyCard from "./PropertyCard";
import { motion } from "framer-motion";

interface FeaturedPropertiesProps {
  properties: Property[];
  comparedProperties: Property[];
  onCompareToggle: (property: Property) => void;
}

export default function FeaturedProperties({ properties, comparedProperties, onCompareToggle }: FeaturedPropertiesProps) {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "House", "Villa", "Penthouse", "Townhome"];

  const filteredProperties = filter === "All" 
    ? properties 
    : properties.filter(p => p.type === filter);

  return (
    <section id="properties" className="py-20 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-forest-900 mb-4"
          >
            Featured Properties
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Explore our handpicked selection of premium estates. Find the perfect home that resonates with your lifestyle.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.05 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === category
                  ? "bg-forest-700 text-white"
                  : "bg-white text-forest-800 border border-forest-200 hover:bg-forest-50"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              onCompareToggle={onCompareToggle}
              isCompared={comparedProperties.some((p) => p.id === property.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
