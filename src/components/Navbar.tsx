import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import billingPandaLogo from '../assets/billing-panda-logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;
  
  // Handle navigation and scroll to top
  const handleNavigation = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={handleNavigation}>
              <img src={billingPandaLogo} alt="S.D. Taxation Logo" className="h-12 w-12 object-contain" />
              <span className="text-2xl font-bold text-orange-600">S.D. Taxation</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
              onClick={handleNavigation}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
              onClick={handleNavigation}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className={`${isActive('/services') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
              onClick={handleNavigation}
            >
              Services
            </Link>
            <Link 
              to="/industries" 
              className={`${isActive('/industries') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
              onClick={handleNavigation}
            >
              Industries
            </Link>
            <Link 
              to="/support" 
              className={`${isActive('/support') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
              onClick={handleNavigation}
            >
              Support
            </Link>
            <Link 
              to="/career" 
              className={`${isActive('/career') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
              onClick={handleNavigation}
            >
              Career
            </Link>
            <Link 
              to="/gallery" 
              className={`${isActive('/gallery') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
              onClick={handleNavigation}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
              onClick={handleNavigation}
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link 
            to="/" 
            className={`block px-3 py-2 ${isActive('/') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
            onClick={handleNavigation}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`block px-3 py-2 ${isActive('/about') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
            onClick={handleNavigation}
          >
            About Us
          </Link>
          <Link 
            to="/services" 
            className={`block px-3 py-2 ${isActive('/services') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
            onClick={handleNavigation}
          >
            Services
          </Link>
          <Link 
            to="/industries" 
            className={`block px-3 py-2 ${isActive('/industries') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
            onClick={handleNavigation}
          >
            Industries
          </Link>
          <Link 
            to="/support" 
            className={`block px-3 py-2 ${isActive('/support') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
            onClick={handleNavigation}
          >
            Support
          </Link>
          <Link 
            to="/career" 
            className={`block px-3 py-2 ${isActive('/career') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
            onClick={handleNavigation}
          >
            Career
          </Link>
          <Link 
            to="/gallery" 
            className={`block px-3 py-2 ${isActive('/gallery') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
            onClick={handleNavigation}
          >
            Gallery
          </Link>
          <Link 
            to="/contact" 
            className={`block px-3 py-2 ${isActive('/contact') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
            onClick={handleNavigation}
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;