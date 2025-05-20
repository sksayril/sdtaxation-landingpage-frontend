import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight } from 'lucide-react';

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About S.D. Taxation
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're a team of dedicated financial professionals specializing in taxation, 
              HR, and payroll services. With over 15 years of experience helping businesses 
              navigate complex regulatory environments, we deliver accurate and reliable solutions.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Expert Taxation & Financial Services', 
                'Comprehensive HR & Payroll Management', 
                'Regulatory Compliance Solutions'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <ChevronRight className="text-orange-600 mr-2" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors">
              Our Services
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3"
              alt="Professional Tax Services"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;