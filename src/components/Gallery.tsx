import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';

const videos = [
  {
    title: 'Digital Marketing Strategy',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://online.jwu.edu/wp-content/uploads/2023/06/Digital20Marketing20Careers.jpg'
  },
  {
    title: 'Social Media Success',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://online.jwu.edu/wp-content/uploads/2023/06/Digital20Marketing20Careers.jpg'
  },
  {
    title: 'Content Creation Tips',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://online.jwu.edu/wp-content/uploads/2023/06/Digital20Marketing20Careers.jpg'
  }
];

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Gallery</h2>
          <p className="text-xl text-gray-600">
            Watch our latest success stories and tutorials
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative pb-[56.25%]">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button className="bg-orange-600 text-white rounded-full p-4 hover:bg-orange-700 transition-colors">
                    <Play size={24} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;