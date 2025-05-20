import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle, Star, Zap, Target, Users, BarChart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const taxServices = [
  {
    title: 'EPF Registration',
    description: 'Complete employee provident fund registration services for your business. We handle all documentation and compliance requirements to ensure smooth registration process.',
    icon: <CheckCircle className="w-12 h-12 text-orange-500" />,
    features: [
      { title: 'Documentation Support', desc: 'Complete assistance with all required paperwork' },
      { title: 'Compliance Guidance', desc: 'Ensure adherence to EPF regulations' },
      { title: 'Online Registration', desc: 'Streamlined digital registration process' },
      { title: 'Post-Registration Support', desc: 'Ongoing assistance with EPF compliance' }
    ],
    color: 'from-orange-400 to-red-500',
    stats: { clients: '500+', satisfaction: '99%', turnaround: '3-5 days' }
  },
  {
    title: 'ESIC Registration',
    description: 'Comprehensive Employee State Insurance Corporation registration services to ensure your employees receive proper health benefits and insurance coverage.',
    icon: <Users className="w-12 h-12 text-blue-500" />,
    features: [
      { title: 'Eligibility Assessment', desc: 'Determine if your business needs ESIC registration' },
      { title: 'Documentation Preparation', desc: 'Complete all required forms and documents' },
      { title: 'Registration Processing', desc: 'Handle the entire registration process' },
      { title: 'Compliance Management', desc: 'Ensure ongoing compliance with ESIC regulations' }
    ],
    color: 'from-blue-400 to-indigo-500',
    stats: { processing: '7 days', accuracy: '100%', support: '24/7' }
  },
  {
    title: 'GST Registration',
    description: 'Expert Goods and Services Tax registration services to ensure your business is fully compliant with GST regulations and ready to operate legally in the market.',
    icon: <Target className="w-12 h-12 text-purple-500" />,
    features: [
      { title: 'Business Assessment', desc: 'Determine GST applicability for your business' },
      { title: 'Documentation Support', desc: 'Prepare all required documents for registration' },
      { title: 'Online Registration', desc: 'Complete the GST registration process online' },
      { title: 'GSTIN Acquisition', desc: 'Obtain your GST Identification Number' }
    ],
    color: 'from-purple-400 to-pink-500',
    stats: { businesses: '1000+', success: '100%', time: '3-7 days' }
  },
  {
    title: 'INCOME TAX RETURN',
    description: 'Professional income tax filing and return services for individuals and businesses. We ensure accurate filing while maximizing eligible deductions and minimizing tax liability.',
    icon: <BarChart className="w-12 h-12 text-green-500" />,
    features: [
      { title: 'Tax Planning', desc: 'Strategic planning to optimize tax benefits' },
      { title: 'Documentation Review', desc: 'Thorough review of financial documents' },
      { title: 'Return Preparation', desc: 'Accurate preparation of tax returns' },
      { title: 'E-Filing', desc: 'Electronic filing with tax authorities' }
    ],
    color: 'from-green-400 to-teal-500',
    stats: { returns: '10,000+', accuracy: '99.9%', refunds: 'Maximized' }
  },
  {
    title: 'PROFESSIONAL TAX',
    description: 'Complete professional tax registration and filing services for businesses and professionals. We handle all compliance requirements to keep you in good standing.',
    icon: <Zap className="w-12 h-12 text-orange-600" />,
    features: [
      { title: 'Registration', desc: 'Professional tax registration for businesses' },
      { title: 'Monthly Returns', desc: 'Timely filing of monthly returns' },
      { title: 'Annual Returns', desc: 'Preparation and submission of annual returns' },
      { title: 'Compliance Management', desc: 'Ongoing compliance monitoring' }
    ],
    color: 'from-orange-500 to-red-600',
    stats: { businesses: '2,000+', compliance: '100%', support: 'Year-round' }
  },
  {
    title: 'PAN, TAN',
    description: 'Efficient PAN and TAN card application and processing services for individuals and businesses. We simplify the process to get your identification numbers quickly.',
    icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
    features: [
      { title: 'Application Assistance', desc: 'Help with completing application forms' },
      { title: 'Document Verification', desc: 'Ensure all documents meet requirements' },
      { title: 'Application Submission', desc: 'Submit applications to tax authorities' },
      { title: 'Status Tracking', desc: 'Track application status until completion' }
    ],
    color: 'from-blue-500 to-indigo-600',
    stats: { applications: '5,000+', success: '99.8%', delivery: 'Fast' }
  },
  {
    title: 'Payroll',
    description: 'Comprehensive payroll management services to ensure accurate and timely payment processing, tax withholding, and compliance with labor regulations.',
    icon: <Star className="w-12 h-12 text-purple-600" />,
    features: [
      { title: 'Salary Processing', desc: 'Accurate calculation and processing of salaries' },
      { title: 'Tax Deductions', desc: 'Proper withholding of taxes and other deductions' },
      { title: 'Compliance', desc: 'Adherence to labor laws and regulations' },
      { title: 'Reporting', desc: 'Detailed payroll reports for management' }
    ],
    color: 'from-purple-500 to-pink-600',
    stats: { employees: '50,000+', accuracy: '100%', timeliness: 'Always' }
  },
  {
    title: 'TDS',
    description: 'Professional Tax Deducted at Source (TDS) filing and compliance services to ensure your business meets all TDS obligations and avoids penalties.',
    icon: <BarChart className="w-12 h-12 text-green-600" />,
    features: [
      { title: 'TDS Calculation', desc: 'Accurate calculation of TDS amounts' },
      { title: 'Quarterly Returns', desc: 'Timely filing of quarterly TDS returns' },
      { title: 'Form 16/16A Generation', desc: 'Preparation and issuance of TDS certificates' },
      { title: 'Compliance Management', desc: 'Ensure ongoing TDS compliance' }
    ],
    color: 'from-green-500 to-teal-600',
    stats: { filings: '20,000+', accuracy: '99.9%', penalties: 'Zero' }
  }
];

// const industries = [
//   { name: 'Restaurant', description: 'Specialized taxation services for the restaurant industry' },
//   { name: 'Retail', description: 'Tax solutions tailored for retail businesses' },
//   { name: 'Education', description: 'Compliance and tax services for educational institutions' },
//   { name: 'Hospitality', description: 'Comprehensive tax management for hospitality businesses' },
//   { name: 'Finance', description: 'Specialized financial and taxation services' },
//   { name: 'Human Resources', description: 'HR compliance and payroll tax solutions' }
// ];

// const supportOptions = [
//   { name: 'Mobile App', description: 'Access our services through our convenient mobile application' },
//   { name: 'Android & iOS', description: 'Available on both major mobile platforms' },
//   { name: 'Cloud Software', description: 'Secure cloud-based taxation and compliance tools' },
//   { name: 'Employee Login', description: 'Dedicated portal for employee access' },
//   { name: 'Admin Login', description: 'Secure administrative access to your account' }
// ];

// const careerOptions = [
//   { name: 'Opening Jobs', description: 'View our current job openings' },
//   { name: 'Submit Your CV', description: 'Apply to join our team of professionals' }
// ];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.2
  //     }
  //   }
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0 }
  // };

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
              <button className="px-8 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-orange-600 text-orange-600 rounded-full hover:bg-orange-50 transition-colors">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Services Carousel */}
          <Swiper
            modules={[Autoplay, Navigation, EffectCoverflow]}
            effect="coverflow"
            spaceBetween={30}
            slidesPerView={1}
            navigation
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {taxServices.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl overflow-hidden shadow-xl h-full group"
                >
                  <div className={`p-6 bg-gradient-to-r ${service.color} transform group-hover:scale-105 transition-transform duration-300`}>
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/90">{service.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-gray-900">{feature.title}</p>
                              <p className="text-sm text-gray-600">{feature.desc}</p>
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Performance Stats</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(service.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-xl font-bold text-orange-600">{value}</div>
                            <div className="text-sm text-gray-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg flex items-center justify-center gap-2 group"
                    >
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Industries Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our taxation expertise spans across various industries with specialized solutions for each sector
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
                <button className="mt-4 text-orange-600 font-medium flex items-center hover:text-orange-700 transition-colors">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Support Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solutions</h2>
                    <p className="text-lg text-gray-600 mb-6">
                      From tax filing to HR compliance and payroll management, we provide end-to-end
                      financial services tailored to your business needs.
                    </p>
                    <ul className="space-y-4">
                      {supportOptions.map((option, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                          className="flex items-start"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3" />
                          <div>
                            <h4 className="font-medium text-gray-900">{option.name}</h4>
                            <p className="text-sm text-gray-600">{option.description}</p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">{option.name}</h4>
                        <p className="text-sm text-gray-600">{option.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-orange-50 p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Opportunities</h3>
                <p className="text-gray-600 mb-6">
                  Join our team of taxation experts and grow your career with us
                </p>
                {careerOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white p-4 rounded-md shadow-sm mb-4 last:mb-0"
                  >
                    <h4 className="font-medium text-gray-900 mb-1">{option.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{option.description}</p>
                    <button className="text-orange-600 text-sm font-medium flex items-center hover:text-orange-700 transition-colors">
                      View Details <ArrowRight size={14} className="ml-1" />
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Services;