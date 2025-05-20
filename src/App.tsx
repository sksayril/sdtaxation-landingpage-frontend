import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Support from './pages/Support';
import Career from './pages/Career';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Branches from './pages/Branches';
import ContactPopup from './components/ContactPopup'; // Import the popup component

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="relative">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-50"
          style={{ scaleX }}
        />
        <Navbar />
        <ContactPopup /> {/* Show the popup globally */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/support" element={<Support />} />
          <Route path="/career" element={<Career />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;