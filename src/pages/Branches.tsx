import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Building2, Code } from 'lucide-react';

const branchData = [
  // {
  //   name: 'DigiAgency Headquarters',
  //   location: 'Silicon Valley, CA',
  //   code: 'HQ001',
  // },
  // {
  //   name: 'DigiAgency Innovation Hub',
  //   location: 'New York City, NY',
  //   code: 'NY002',
  // },
  // {
  //   name: 'DigiAgency Tech Center',
  //   location: 'Austin, TX',
  //   code: 'TX003',
  // },
  // {
  //   name: 'DigiAgency Creative Studio',
  //   location: 'Los Angeles, CA',
  //   code: 'LA004',
  // },
];

const Branches = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-400/90 z-10"
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Our Branches
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-center max-w-2xl px-4"
          >
            Discover our global network of digital marketing excellence
          </motion.p>
        </div>
      </div>

      {/* Branches Table Section */}
      {/* <motion.div
        ref={ref}
        initial={{ y: 20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-orange-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-orange-600">
                    <div className="flex items-center space-x-2">
                      <Building2 size={20} />
                      <span>Branch Name</span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-orange-600">
                    <div className="flex items-center space-x-2">
                      <MapPin size={20} />
                      <span>Location</span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-orange-600">
                    <div className="flex items-center space-x-2">
                      <Code size={20} />
                      <span>Branch Code</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {branchData.map((branch, index) => (
                  <motion.tr
                    key={branch.code}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-orange-50 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {branch.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {branch.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {branch.code}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div> */}
    </div>
  );
};

export default Branches;
