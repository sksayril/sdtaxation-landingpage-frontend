import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight,  MapPin, Clock, Upload, CheckCircle, Search } from 'lucide-react';

// const jobOpenings = [
  
//   {
//     title: 'GST Compliance Officer',
//     location: 'Delhi, NCR',
//     type: 'Full-Time',
//     description: 'Responsible for ensuring complete GST compliance for our clients across multiple industries.',
//     requirements: [
//       'CA/CMA with 3+ years in GST compliance',
//       'Experience with GST filing and reconciliation',
//       'Knowledge of GST audit procedures',
//       'Familiar with e-way bill requirements'
//     ]
//   },
//   {
//     title: 'Payroll Administrator',
//     location: 'Bangalore, Karnataka',
//     type: 'Full-Time',
//     description: 'Handle end-to-end payroll processing and ensure compliance with all statutory requirements.',
//     requirements: [
//       'Bachelors degree in accounting or finance',
//       '3+ years of payroll processing experience',
//       'Experience with payroll software',
//       'Knowledge of PF, ESI, and Professional Tax'
//     ]
//   },
//   {
//     title: 'Tax Filing Specialist',
//     location: 'Hyderabad, Telangana',
//     type: 'Full-Time',
//     description: 'Process income tax returns for individuals and businesses with attention to detail and accuracy.',
//     requirements: [
//       'Bachelors degree in accounting or finance',
//       '2+ years of tax filing experience',
//       'Knowledge of latest tax regulations',
//       'Experience with tax filing software'
//     ]
//   },
//   {
//     title: 'Corporate Tax Advisor',
//     location: 'Remote',
//     type: 'Contract',
//     description: 'Provide strategic tax planning advice to corporate clients to optimize their tax positions.',
//     requirements: [
//       'CA/CMA with specialization in corporate taxation',
//       '5+ years of corporate tax advisory experience',
//       'Knowledge of international tax practices',
//       'Strong analytical and problem-solving skills'
//     ]
//   }
// ];
const jobOpenings =[]
const Career = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const filteredJobs = jobOpenings.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the form data to a server
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
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
            Career Opportunities
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our team of taxation experts and grow your career with us
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-xl mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for jobs by title, location, or keywords"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Listings */}
          <div className="lg:col-span-2">
            {filteredJobs.length > 0 ? (
              <div className="space-y-6">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white rounded-lg shadow-md overflow-hidden border-l-4 ${
                      selectedJob === index ? 'border-orange-500' : 'border-transparent'
                    } hover:border-orange-500 transition-all duration-300`}
                    onClick={() => setSelectedJob(index)}
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                          <div className="flex flex-wrap items-center text-sm text-gray-600 mt-2">
                            <div className="flex items-center mr-4 mb-2 md:mb-0">
                              <MapPin size={16} className="mr-1 text-orange-500" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock size={16} className="mr-1 text-orange-500" />
                              {job.type}
                            </div>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-3 md:mt-0 px-4 py-2 bg-orange-500 text-white rounded-lg flex items-center text-sm font-medium"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedJob(index);
                            document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          Apply Now
                          <ArrowRight size={16} className="ml-2" />
                        </motion.button>
                      </div>
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      
                      {selectedJob === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="border-t pt-4 mt-4"
                        >
                          <h4 className="font-medium text-gray-900 mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                <span className="text-gray-700">{req}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-lg shadow-md p-8 text-center"
              >
                <p className="text-gray-600 text-lg">No job openings match your search criteria.</p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="mt-4 text-orange-500 font-medium"
                >
                  Clear Search
                </button>
              </motion.div>
            )}
          </div>

          {/* Application Form */}
          <motion.div
            id="apply-form"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Submit Your CV</h3>
            <p className="text-gray-600 mb-6">
              {selectedJob !== null 
                ? `Apply for ${jobOpenings[selectedJob].title}` 
                : "Upload your CV to apply for our open positions"}
            </p>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    Position Applied For
                  </label>
                  <select
                    id="position"
                    required
                    value={selectedJob !== null ? selectedJob : ""}
                    onChange={(e) => setSelectedJob(e.target.value ? Number(e.target.value) : null)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    {jobOpenings.map((job, index) => (
                      <option key={index} value={index}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Upload CV</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOCX, or RTF (Max 5MB)</p>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.docx,.rtf"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="cover" className="block text-sm font-medium text-gray-700 mb-1">Cover Letter (Optional)</label>
                  <textarea
                    id="cover"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us why you're a good fit for this position"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg flex items-center justify-center gap-2 group"
                >
                  Submit Application
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-green-50 p-6 rounded-md text-center"
              >
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-green-800 mb-2">Application Submitted!</h4>
                <p className="text-green-600">Thank you for your interest. We'll review your application and get back to you soon.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Career;
