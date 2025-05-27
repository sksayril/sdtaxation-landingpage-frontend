import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, Layers, Cloud, Users, Settings, ArrowRight, HelpCircle, Phone, Mail } from 'lucide-react';

const supportOptions = [
  {
    name: 'Mobile App',
    description: 'Access all of our taxation services through our convenient mobile application available for download.',
    icon: <Smartphone className="w-12 h-12 text-orange-500" />,
    features: [
      'File returns on the go',
      'Document scanning & upload',
      'Real-time notifications',
      'Secure account access'
    ],
    buttonText: 'Download App'
  },
  {
    name: 'Android & iOS',
    description: 'Our mobile applications are available on both major mobile platforms for your convenience.',
    icon: <Layers className="w-12 h-12 text-blue-500" />,
    features: [
      'Optimized for both platforms',
      'Regular security updates',
      'Native device features',
      'Cross-device synchronization'
    ],
    buttonText: 'Get Started'
  },
  {
    name: 'Cloud Software',
    description: 'Secure cloud-based taxation and compliance tools for businesses of all sizes.',
    icon: <Cloud className="w-12 h-12 text-purple-500" />,
    features: [
      'Automatic data backup',
      'Multi-user access',
      'Role-based permissions',
      'Advanced encryption'
    ],
    buttonText: 'Try Cloud Solution'
  },
  {
    name: 'Employee Login',
    description: 'Dedicated portal for employees to access tax documents, payroll information, and benefits.',
    icon: <Users className="w-12 h-12 text-green-500" />,
    features: [
      'Payslip downloads',
      'Tax document access',
      'Benefits management',
      'Personal details updates'
    ],
    buttonText: 'Employee Login'
  },
  {
    name: 'Admin Login',
    description: "Secure administrative access to manage your organization's taxation and compliance needs.",
    icon: <Settings className="w-12 h-12 text-red-500" />,
    features: [
      'User management',
      'Company-wide reporting',
      'Compliance monitoring',
      'Tax filing oversight'
    ],
    buttonText: 'Admin Login'
  }
];

const Support = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Support Options
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We provide multiple ways to access our services and support for your convenience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {supportOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300"
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-50 p-3 rounded-full mr-4">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{option.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{option.description}</p>
              </div>
              
              <div className="p-6">
                <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {option.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2"
                    >
                      <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg flex items-center justify-center gap-2 group"
                >
                  {option.buttonText}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-orange-50 rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Additional Support?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our dedicated customer support team is available to assist you with any questions or issues you may have.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">+91 99935 56791</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">sdtaxtion@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <HelpCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">24/7 Customer Support</span>
                </div>
              </div>
            </div>
            <div className="md:ml-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-orange-600 text-white font-medium rounded-lg shadow-lg flex items-center justify-center gap-2 group"
              >
                Contact Support
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Support;
