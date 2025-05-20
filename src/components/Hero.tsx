import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Simplify Your Financial Compliance
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We provide expert taxation, HR, and payroll solutions to ensure your business 
              remains compliant while optimizing financial efficiency.
            </p>
            <div className="flex gap-4">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors">
                Get a Consultation
              </button>
              <button className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors">
                <Play size={20} /> Watch Our Approach
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="Taxation and Financial Services"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;