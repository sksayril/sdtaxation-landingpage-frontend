// Using React JSX transforms, no explicit import needed
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle, Briefcase, ShoppingBag, GraduationCap, Hotel, DollarSign, Users } from 'lucide-react';

const industries = [
  {
    name: 'Restaurant',
    description: 'Specialized taxation services for the restaurant industry, including GST compliance, employee payroll, and inventory management tax solutions.',
    icon: <Briefcase className="w-12 h-12 text-orange-500" />,
    benefits: [
      'Industry-specific tax deductions',
      'Food & beverage GST compliance',
      'Employee tip reporting',
      'Inventory tax management'
    ]
  },
  {
    name: 'Retail',
    description: 'Tax solutions tailored for retail businesses with focus on inventory management, sales tax compliance, and employee tax management.',
    icon: <ShoppingBag className="w-12 h-12 text-blue-500" />,
    benefits: [
      'Sales tax compliance',
      'Inventory tax planning',
      'Seasonal employee management',
      'Multiple location tax filing'
    ]
  },
  {
    name: 'Education',
    description: 'Compliance and tax services for educational institutions, including fee structures, charitable status, and educational tax benefits.',
    icon: <GraduationCap className="w-12 h-12 text-green-500" />,
    benefits: [
      'Educational institution tax exemptions',
      
      'Faculty tax planning',
      'Educational grants compliance'
    ]
  },
  {
    name: 'Hospitality',
    description: 'Comprehensive tax management for hospitality businesses including hotels, resorts, and tourism services.',
    icon: <Hotel className="w-12 h-12 text-purple-500" />,
    benefits: [
      'Seasonal revenue tax planning',
      'Foreign tourist tax compliance',
      'Hospitality-specific deductions',
      'Property tax optimization'
    ]
  },
  {
    name: 'Finance',
    description: 'Specialized financial and taxation services for banking, insurance, and investment firms with complex regulatory requirements.',
    icon: <DollarSign className="w-12 h-12 text-yellow-500" />,
    benefits: [
      'Investment portfolio tax planning',
      'Financial product tax compliance',
      'Banking regulations',
      'Insurance premium tax management'
    ]
  },
  {
    name: 'Human Resources',
    description: 'HR compliance and payroll tax solutions to ensure your business meets all employee-related tax obligations.',
    icon: <Users className="w-12 h-12 text-red-500" />,
    benefits: [
      'Payroll tax compliance',
      'Employee benefits tax planning',
      'HR regulatory compliance',
      'International employee tax management'
    ]
  }
];

const Industries = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
            Industry-Specific Tax Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our taxation expertise spans across various industries with specialized solutions for each sector
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-50 p-3 rounded-lg mr-4 transform group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{industry.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{industry.description}</p>
              </div>
              
              <div className="p-6 bg-gray-50">
                <h4 className="font-medium text-gray-900 mb-3">Key Benefits:</h4>
                <ul className="space-y-2 mb-6">
                  {industry.benefits.map((benefit, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg flex items-center justify-center gap-2 group"
                >
                  Explore Solutions
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
