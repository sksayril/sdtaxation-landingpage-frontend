import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle, Star, Zap, Target, Users, BarChart, FileText } from 'lucide-react';

const taxServices = [
  {
    title: 'EPF Registration',
    description: 'Complete employee provident fund registration services for your business. We handle all documentation and compliance requirements to ensure smooth registration process.',
    icon: <CheckCircle className="w-12 h-12 text-orange-500" />,
    features: [
      'Documentation Support',
      'Compliance Guidance', 
      'Online Registration',
      'Post-Registration Support'
    ],
    color: 'from-orange-400 to-red-500',
    iconBg: 'bg-orange-100'
  },
  {
    title: 'ESIC Registration',
    description: 'Comprehensive Employee State Insurance Corporation registration services to ensure your employees receive proper health benefits and insurance coverage.',
    icon: <Users className="w-12 h-12 text-blue-500" />,
    features: [
      'Eligibility Assessment',
      'Documentation Preparation',
      'Registration Processing', 
      'Compliance Management'
    ],
    color: 'from-blue-400 to-indigo-500',
    iconBg: 'bg-blue-100'
  },
  {
    title: 'GST Registration',
    description: 'Expert Goods and Services Tax registration services to ensure your business is fully compliant with GST regulations and ready to operate legally in the market.',
    icon: <Target className="w-12 h-12 text-purple-500" />,
    features: [
      'Business Assessment',
      'Documentation Support',
      'Online Registration',
      'GSTIN Acquisition'
    ],
    color: 'from-purple-400 to-pink-500',
    iconBg: 'bg-purple-100'
  },
  {
    title: 'Income Tax Return',
    description: 'Professional income tax filing and return services for individuals and businesses. We ensure accurate filing while maximizing eligible deductions and minimizing tax liability.',
    icon: <BarChart className="w-12 h-12 text-green-500" />,
    features: [
      'Tax Planning',
      'Documentation Review',
      'Return Preparation',
      'E-Filing'
    ],
    color: 'from-green-400 to-teal-500',
    iconBg: 'bg-green-100'
  },
  {
    title: 'Professional Tax',
    description: 'Complete professional tax registration and filing services for businesses and professionals. We handle all compliance requirements to keep you in good standing.',
    icon: <Zap className="w-12 h-12 text-orange-600" />,
    features: [
      'Registration',
      'Monthly Returns',
      'Annual Returns',
      'Compliance Management'
    ],
    color: 'from-orange-500 to-red-600',
    iconBg: 'bg-orange-100'
  },
  {
    title: 'PAN, TAN',
    description: 'Efficient PAN and TAN card application and processing services for individuals and businesses. We simplify the process to get your identification numbers quickly.',
    icon: <FileText className="w-12 h-12 text-blue-600" />,
    features: [
      'Application Assistance',
      'Document Verification',
      'Application Submission',
      'Status Tracking'
    ],
    color: 'from-blue-500 to-indigo-600',
    iconBg: 'bg-blue-100'
  },
  {
    title: 'Payroll',
    description: 'Comprehensive payroll management services to ensure accurate and timely payment processing, tax withholding, and compliance with labor regulations.',
    icon: <Star className="w-12 h-12 text-purple-600" />,
    features: [
      'Salary Processing',
      'Tax Deductions',
      'Compliance',
      'Reporting'
    ],
    color: 'from-purple-500 to-pink-600',
    iconBg: 'bg-purple-100'
  },
  {
    title: 'TDS',
    description: 'Professional Tax Deducted at Source (TDS) filing and compliance services to ensure your business meets all TDS obligations and avoids penalties.',
    icon: <BarChart className="w-12 h-12 text-green-600" />,
    features: [
      'TDS Calculation',
      'Quarterly Returns', 
      'Form 16/16A Generation',
      'Compliance Management'
    ],
    color: 'from-green-500 to-teal-600',
    iconBg: 'bg-green-100'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Professional Financial Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We offer comprehensive taxation, HR, and payroll solutions to help your business 
              maintain regulatory compliance while optimizing financial operations.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-4"
            >
              {/* <button className="px-8 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-orange-600 text-orange-600 rounded-full hover:bg-orange-50 transition-colors">
                Learn More
              </button> */}
            </motion.div>
          </motion.div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {taxServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Icon Section */}
                <div className="p-8 pb-6">
                  <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="scale-75">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Key Benefits Section */}
                <div className="px-8 pb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="px-8 pb-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 group/btn transition-colors"
                  >
                    Explore Solutions
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;