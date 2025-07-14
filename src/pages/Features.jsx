import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import React from 'react';
import { Benefits } from "../components/Benefits";

const AnimatedHeading = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Benefits
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="bg-green-50 rounded-2xl p-6 md:p-8 border border-green-100"
      >
        <div className="flex items-start mb-4">
          <span className="text-3xl mr-3">🔬</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-left">
            Bridging Technology and Agricultural Research
          </h2>
        </div>
        
        <motion.p 
          className="text-lg text-gray-700 mb-4 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Grid Sphere's systems are not just made for farms — they're built for experimentation, validation, and education. 
          Our solutions are actively being used in agricultural research, pilot projects, and institutional studies across India.
        </motion.p>
        
        <motion.p 
          className="text-lg text-gray-700 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          We empower scientists, professors, and students with tools that deliver accurate data, real-time monitoring, 
          and AI-backed insights — transforming traditional research into smart research.
        </motion.p>
      </motion.div>
    </div>
  );
};

export const Features = () => {
  return (
    <>
      <Header />
      <AnimatedHeading />
      <Benefits />
      <Footer />
    </>
  );
}