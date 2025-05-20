import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'EPF Registration',
    description: 'Complete employee provident fund registration services',
    icon: '📝'
  },
  {
    title: 'GST Registration',
    description: 'Goods and Services Tax registration and compliance',
    icon: '🧾'
  },
  {
    title: 'INCOME TAX RETURN',
    description: 'Professional income tax filing and returns',
    icon: '💰'
  },
  {
    title: 'PROFESSIONAL TAX',
    description: 'Professional tax registration and filing services',
    icon: '📊'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive digital solutions for your business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-orange-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="flex items-center text-orange-600 hover:text-orange-700 transition-colors">
                Learn More <ArrowRight size={16} className="ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;