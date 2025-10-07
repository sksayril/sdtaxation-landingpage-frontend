import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import billingPandaLogo from '/sdtaxationlogoremovebgsd.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isActive = (path) => location.pathname === path;
  
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
              <img src={billingPandaLogo} alt="S.D. Taxation Logo" className="h-18 w-16 object-contain" />
              <span className="text-2xl font-bold text-yellow-600   rounded-sm">S.D. Taxation Associate</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <div className="flex space-x-8 mr-6">
              <Link 
                to="/" 
                className={`${isActive('/') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
                onClick={handleNavigation}
              >
                Home
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
                to="/about" 
                className={`${isActive('/about') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
                onClick={handleNavigation}
              >
                About Us
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
            
            {/* Glowing Login Button - Now opens external dashboard in new tab */}
            <a 
              href="https://dashboard.sdtaxation.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg group"
            >
              <span className="relative z-10 flex items-center">
                <LogIn size={18} className="mr-1" />
                <span>Login Users</span>
              </span>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"></div>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-orange-600 to-yellow-400 opacity-0 group-hover:opacity-80 blur-md transition-all duration-300 group-hover:scale-125"></div>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            {/* Mobile Login Button - Now opens external dashboard in new tab */}
            <a 
              href="https://dashboard.sdtaxation.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative flex items-center mr-3 px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg group"
            >
              <span className="relative z-10 flex items-center">
                <LogIn size={16} className="mr-1" />
                <span>Login</span>
              </span>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-orange-600 to-yellow-400 opacity-0 group-hover:opacity-80 blur-md transition-all duration-300"></div>
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-white transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
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
            to="/about" 
            className={`block px-3 py-2 ${isActive('/about') ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors`}
            onClick={handleNavigation}
          >
            About Us
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
      </div>
    </nav>
  );
};

export default Navbar;