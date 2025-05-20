import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, X, ChevronLeft, ChevronRight, Maximize2, Camera, Video } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const videos = [
  {
    title: 'Digital Marketing Strategy',
    description: 'Learn how we create effective digital marketing strategies that drive results',
    url: 'https://www.youtube.com/embed/fh1s6UbzJ7k',
    thumbnail: 'https://as1.ftcdn.net/jpg/01/57/26/36/1000_F_157263670_pAhwu7Ux5b6R5NkcQYk4FwRkvTNXGx8w.jpg',
    duration: '42:53',
    views: '5.2K'
  },
  {
    title: 'Social Media Success',
    description: 'Discover the secrets behind successful social media campaigns',
    url: 'https://www.youtube.com/embed/fh1s6UbzJ7k',
    thumbnail: 'https://i.etsystatic.com/23269047/r/il/5c179d/4772612230/il_fullxfull.4772612230_jc8s.jpg',
    duration: '42:53',
    views: '3.8K'
  },
  {
    title: 'Content Creation Tips',
    description: 'Expert tips for creating engaging content that converts',
    url: 'https://www.youtube.com/embed/fh1s6UbzJ7k',
    thumbnail: 'https://www.reliablesoft.net/wp-content/uploads/2021/10/digital-marketing-team.webp',
    duration: '42:53',
    views: '4.1K'
  },
  {
    title: 'Content Creation Tips',
    description: 'Expert tips for creating engaging content that converts',
    url: 'https://www.youtube.com/embed/fh1s6UbzJ7k',
    thumbnail: 'https://online.jwu.edu/wp-content/uploads/2023/06/Digital20Marketing20Careers.jpg',
    duration: '42:53',
    views: '4.1K'
  }
];

const images = [
  {
    url: 'https://as1.ftcdn.net/jpg/01/57/26/36/1000_F_157263670_pAhwu7Ux5b6R5NkcQYk4FwRkvTNXGx8w.jpg',
    title: 'Digital Marketing Workshop',
    description: 'Our team conducting a digital marketing workshop for startups',
    category: 'Workshops',
    date: 'March 2024'
  },
  {
    url: 'https://i.etsystatic.com/23269047/r/il/5c179d/4772612230/il_fullxfull.4772612230_jc8s.jpg',
    title: 'Content Creation',
    description: 'Creating engaging content for social media campaigns',
    category: 'Behind the Scenes',
    date: 'February 2024'
  },
  {
    url: 'https://www.reliablesoft.net/wp-content/uploads/2021/10/digital-marketing-team.webp',
    title: 'Team Collaboration',
    description: 'Our team working together on client projects',
    category: 'Team',
    date: 'January 2024'
  },
  {
    url: 'https://online.jwu.edu/wp-content/uploads/2023/06/Digital20Marketing20Careers.jpg',
    title: 'Strategy Meeting',
    description: 'Planning digital marketing strategies for our clients',
    category: 'Meetings',
    date: 'December 2023'
  }
];

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedImage, setSelectedImage] = useState<null | typeof images[0]>(null);
  const [selectedVideo, setSelectedVideo] = useState<null | typeof videos[0]>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex(img => img.url === selectedImage.url);
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;
    
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
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
              Our Work in Action
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful digital marketing campaigns, 
              behind-the-scenes content, and educational resources.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Video className="w-8 h-8 text-orange-500 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">Featured Videos</h2>
            </div>
            <p className="text-xl text-gray-600">
              Watch our latest success stories and tutorials
            </p>
          </motion.div>

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
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl overflow-hidden shadow-xl group cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="relative pb-[56.25%]">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                    <motion.div
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-orange-600 text-white rounded-full p-4 shadow-lg"
                        >
                          <Play className="w-8 h-8" />
                        </motion.div>
                      </div>
                    </motion.div>
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                      <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                      <p className="text-sm text-gray-200">{video.description}</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Camera className="w-8 h-8 text-orange-500 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">Photo Gallery</h2>
            </div>
            <p className="text-xl text-gray-600">
              A glimpse into our work and team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-orange-400 text-sm mb-2">{image.category}</p>
                      <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                      <p className="text-gray-300 text-sm">{image.description}</p>
                      <p className="text-orange-400 text-sm mt-2">{image.date}</p>
                    </div>
                  </div>
                  <motion.div 
                    className="absolute top-4 right-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative pt-[56.25%] w-full">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={`${selectedVideo.url}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white mt-6"
              >
                <h3 className="text-2xl font-semibold mb-2">{selectedVideo.title}</h3>
                <p className="text-gray-300">{selectedVideo.description}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <div className="flex items-center justify-center">
                <button
                  className="absolute left-4 text-white hover:text-orange-500 transition-colors"
                  onClick={() => navigateImage('prev')}
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full rounded-lg"
                />
                <button
                  className="absolute right-4 text-white hover:text-orange-500 transition-colors"
                  onClick={() => navigateImage('next')}
                >
                  <ChevronRight className="w-10 h-10" />
                </button>
              </div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white mt-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold">{selectedImage.title}</h3>
                  <span className="text-orange-400">{selectedImage.date}</span>
                </div>
                <p className="text-gray-300 mb-2">{selectedImage.description}</p>
                <p className="text-orange-400 text-sm">{selectedImage.category}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;