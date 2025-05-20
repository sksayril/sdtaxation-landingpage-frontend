import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/TrustedCompanies.css';

// Add company logos
const companies = [
  { id: 1, name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png' },
  { id: 2, name: 'Microsoft', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8u8BZcgcIxcfgSJsas_HDf2pfYTBlmo2q3g&s' },
  { id: 3, name: 'Amazon', logo: '/logos/amazone.png' },
  { id: 4, name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png' },
  { id: 5, name: 'Apple', logo: 'https://static-00.iconduck.com/assets.00/apple-logo-icon-1661x2048-8adk63j7.png' },
  { id: 6, name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png' },
  { id: 7, name: 'Intel', logo: 'https://www.hatchwise.com/wp-content/uploads/2023/03/image-20.png' },
  { id: 8, name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png' },
];

const TrustedCompanies = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.section 
      className="trusted-companies"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Trusted Partners</h2>
          <p className="section-subtitle">Working with industry leaders to deliver excellence</p>
        </motion.div>
        
        <div className="partners-container">
          <div className="gradient-overlay left"></div>
          <div className="gradient-overlay right"></div>
          
          <div className="logo-scroll-container" ref={scrollRef}>
            <div className="logo-track">
              {/* Display logos twice to create seamless infinite scroll effect */}
              {[...companies, ...companies].map((company, index) => (
                <motion.div
                  key={`${company.id}-${index}`}
                  className="logo-item"
                  whileHover={{ 
                    scale: 1.1,
                    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={company.logo} alt={`${company.name} logo`} />
                  <motion.span 
                    className="company-name"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {company.name}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TrustedCompanies;
