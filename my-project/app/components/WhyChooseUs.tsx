"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaChartLine, FaGem, FaUserTie } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Secure Transactions",
      description: "Our legal experts ensure every property transaction is 100% secure and transparent."
    },
    {
      icon: <FaGem />,
      title: "Premium Properties",
      description: "We curate only the finest homes that meet our strict quality and design standards."
    },
    {
      icon: <FaChartLine />,
      title: "High ROI Potential",
      description: "Invest in locations with proven historical growth and future appreciation potential."
    },
    {
      icon: <FaUserTie />,
      title: "Expert Agents",
      description: "Our team of dedicated professionals provides personalized service every step of the way."
    }
  ];

  return (
    <section className="py-20 bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-forest-400 font-bold uppercase tracking-wider mb-2"
          >
            Why Choose Us
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            The Lumina Estates Advantage
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-forest-800 rounded-2xl p-8 hover:bg-forest-700 transition-colors border border-forest-700/50"
            >
              <div className="w-14 h-14 bg-forest-600 rounded-xl flex items-center justify-center text-2xl text-white mb-6 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-earth-200 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
