import React, { useRef, useEffect, useState } from 'react';
import { motion, useTransform, useAnimation, useInView } from 'framer-motion';
import { Play, CheckCircle, TrendingUp, Users, Target, Globe, Mail } from 'lucide-react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import TrustedCompanies from '../components/TrustedCompanies';
import 'swiper/css';

const tools = [
  { 
    name: 'SD Payroll', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU2wgeX-kkynwhKc04HyZDkuIDloB2GRluzQ&s'
  },
  { 
    name: 'SD Accounting', 
    logo: 'https://bongsrey.sgp1.digitaloceanspaces.com/library/32781/images/671b5b516abf9.png'
  },
  { 
    name: 'SD HR Software', 
    logo: 'https://c8.alamy.com/comp/2T1PCEE/hr-letter-logo-monogram-simple-hexagon-shield-shape-with-triangle-crown-isolated-style-design-template-2T1PCEE.jpg'
  },
  { 
    name: 'SD CRM Software', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9U_VgSYUwU9o2_0N5mKrWviFNR2bGi-Mb7g&s'
  },{ 
    name: 'SD Payroll', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU2wgeX-kkynwhKc04HyZDkuIDloB2GRluzQ&s'
  },
  { 
    name: 'SD Accounting', 
    logo: 'https://bongsrey.sgp1.digitaloceanspaces.com/library/32781/images/671b5b516abf9.png'
  },
  { 
    name: 'SD HR Software', 
    logo: 'https://c8.alamy.com/comp/2T1PCEE/hr-letter-logo-monogram-simple-hexagon-shield-shape-with-triangle-crown-isolated-style-design-template-2T1PCEE.jpg'
  },
  { 
    name: 'SD CRM Software', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9U_VgSYUwU9o2_0N5mKrWviFNR2bGi-Mb7g&s'
  },
  
];

const stats = [
  { label: 'Tax Returns Filed', value: 0, target: 2500 },
  { label: 'Businesses Served', value: 0, target: 1000 },
  { label: 'Compliance Rate', value: 0, target: 99.8 },
  { label: 'Tax Savings (₹ Millions)', value: 0, target: 100 },
];

const services = [
  {
    title: 'Taxation Services',
    description: 'Comprehensive tax planning, filing, and compliance services for individuals and businesses',
    icon: '📋',
    features: ['Income Tax Returns', 'GST Registration & Filing', 'TDS Services', 'Tax Planning']
  },
  {
    title: 'Payroll Management',
    description: 'End-to-end payroll solutions ensuring accurate and timely processing while maintaining compliance',
    icon: '💼',
    features: ['Salary Processing', 'Statutory Compliance', 'Pay Slip Generation', 'Tax Calculations']
  },
  {
    title: 'HR Services',
    description: 'Complete human resources management solutions to optimize your workforce operations',
    icon: '👥',
    features: ['Employee Onboarding', 'HR Documentation', 'Compliance Management', 'Performance Systems']
  },
  {
    title: 'Business Registration',
    description: 'Streamlined business and statutory registration services for all types of enterprises',
    icon: '🏢',
    features: ['Company Registration', 'EPF Registration', 'ESIC Registration', 'Professional Tax']
  },
  {
    title: 'Compliance Management',
    description: 'Ensure your business meets all regulatory requirements and avoid penalties',
    icon: '✅',
    features: ['Regulatory Updates', 'Compliance Reviews', 'Documentation Management', 'Audit Support']
  },
  {
    title: 'Financial Consulting',
    description: 'Expert financial guidance to help your business grow and optimize operations',
    icon: '📈',
    features: ['Financial Planning', 'Cash Flow Management', 'Investment Advisory', 'Business Strategy']
  }
];

const process = [
  {
    step: '01',
    title: 'Assessment',
    description: 'We analyze your financial and compliance needs'
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Develop customized taxation and financial strategies'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Execute tax filings, registrations, and HR systems'
  },
  {
    step: '04',
    title: 'Ongoing Support',
    description: 'Continuous compliance monitoring and financial guidance'
  }
];

const VideoPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-[9999] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-orange-500 z-[10000] p-2"
        >
          Close
        </button>
        <div className="relative pt-[56.25%] w-full">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/M1E2NqahP2I?autoplay=1"
            title="YouTube Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const controls = useAnimation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleOnHover = {
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  const [counts, setCounts] = React.useState(stats.map(() => 0));

  React.useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.target) {
            newCounts[index] = Math.min(newCounts[index] + stat.target / 100, stat.target);
          }
          return newCounts;
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="pt-16">
      <VideoPopup isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      {/* Hero Section */}
      <motion.section 
        className="min-h-[80vh] bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)"
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Simplify Your Financial Compliance
              </motion.h1>
              <p className="text-xl text-gray-600 mb-8">
                We provide expert taxation, HR, and payroll solutions to ensure your business 
                remains compliant while optimizing financial efficiency.
              </p>
              <div className="flex gap-4 items-center">
                <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors">
                  Get a Consultation
                </button>
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-full hover:bg-orange-50 border-2 border-orange-600 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md z-10"
                >
                  <Play className="w-5 h-5 mr-2" /> Watch Our Approach
                </button>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" />
                  <span>Tax Expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" />
                  <span>Compliance Focused</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" />
                  <span>Financial Specialists</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <img
                src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202405/664c865cc7f08-the-income-tax-act-allows-deductions-for-investments--savings--and-expenses-in-a-financial-year-that-213242968-16x9.jpg"
                alt="Financial Compliance"
                className="rounded-lg shadow-xl"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-lg"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trusted Companies Section */}
      {/* <TrustedCompanies /> */}

      {/* Why Choose Us Section */}
      <motion.section 
        className="py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Us</h2>
            <p className="text-lg text-gray-600">Experience the difference with our comprehensive financial compliance approach</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Data-Driven Strategy',
                description: 'We make decisions based on real data and analytics to ensure maximum ROI',
                icon: <TrendingUp className="w-8 h-8 text-orange-600" />
              },
              {
                title: 'Target Audience Focus',
                description: 'Reach the right people with precise audience targeting and segmentation',
                icon: <Target className="w-8 h-8 text-orange-600" />
              },
              {
                title: 'Multi-Channel Presence',
                description: 'Establish your brand across all relevant digital platforms',
                icon: <Globe className="w-8 h-8 text-orange-600" />
              }
            ].map(feature => (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                  hover: { scale: 1.05, transition: { duration: 0.2 } }
                }}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <motion.div 
                  className="mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={index}
                className="text-center"
              >
                <motion.div 
                  className="text-4xl font-bold text-orange-600 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {Math.round(counts[index])}+
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-12 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Financial Compliance Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions to ensure your business remains compliant</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-4 h-4" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        className="py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Process</h2>
            <p className="text-lg text-gray-600">How we deliver results for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <motion.div 
                  className="bg-orange-50 p-8 rounded-xl"
                  whileHover={{
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div className="text-4xl font-bold text-orange-600 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 border-t-2 border-r-2 border-orange-300 transform rotate-45"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tools Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Financial Software We Use</h2>
            <p className="text-lg text-gray-600">Industry-leading platforms for accurate financial management</p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex gap-8 tools-scroll">
                {[...tools, ...tools].map((tool, i) => (
                <div
                  key={`${tool.name}-${i}`}
                  className="flex-shrink-0 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} logo`} 
                    className="h-12 w-auto object-contain mx-auto transition-all duration-300"
                  />
                  <p className="text-center text-gray-700 mt-4 font-medium">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add CSS for continuous scroll animation */}
      <style jsx>{`
        .tools-scroll {
          animation: scroll 30s linear infinite;
          min-width: max-content;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .tools-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* CTA Section */}
      <motion.section 
        className="py-12 bg-orange-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h2 
              className="text-3xl font-bold mb-3"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Ready to Optimize Your Financial Compliance?
            </motion.h2>
            <motion.p 
              className="text-lg mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Get started with our taxation and HR services today
            </motion.p>
            <motion.button 
              className="bg-white text-orange-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Tax Consultation
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 