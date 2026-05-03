"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";
import CompareTool from "./components/CompareTool";
import Calculator from "./components/Calculator";
import VirtualTour from "./components/VirtualTour";
import MapSection from "./components/MapSection";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { properties, Property } from "./data/mockData";

export default function Home() {
  const [comparedProperties, setComparedProperties] = useState<Property[]>([]);

  const handleCompareToggle = (property: Property) => {
    setComparedProperties(prev => {
      const isAlreadyCompared = prev.some(p => p.id === property.id);
      if (isAlreadyCompared) {
        return prev.filter(p => p.id !== property.id);
      } else {
        if (prev.length >= 3) {
          alert("You can only compare up to 3 properties at a time.");
          return prev;
        }
        return [...prev, property];
      }
    });
  };

  const handleRemoveCompare = (property: Property) => {
    setComparedProperties(prev => prev.filter(p => p.id !== property.id));
  };

  return (
    <main className="min-h-screen bg-earth-50 font-sans text-forest-900">
      <Navbar />
      <Hero />
      <FeaturedProperties 
        properties={properties} 
        comparedProperties={comparedProperties}
        onCompareToggle={handleCompareToggle} 
      />
      <About />
      <WhyChooseUs />
      <VirtualTour />
      <MapSection />
      <Calculator />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      
      <CompareTool 
        comparedProperties={comparedProperties}
        onRemove={handleRemoveCompare}
        onClearAll={() => setComparedProperties([])}
      />
    </main>
  );
}
