import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const ContactPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isDone, setIsDone] = useState(false); // covers both submit & dismiss

  useEffect(() => {
    const submitted   = localStorage.getItem("contactFormSubmitted");
    const alreadySeen = localStorage.getItem("contactPopupShown");

    // If user has either submitted the form or dismissed the popup before, do nothing
    if (submitted || alreadySeen) {
      setIsDone(true);
      return;
    }

    // Show the popup once after 5 s
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const closeForever = () => {
    localStorage.setItem("contactPopupShown", "true");
    setIsDone(true);
    setShowPopup(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("contactFormSubmitted", "true");
    closeForever();
  };

  if (isDone) return null;

  return (
    showPopup && (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            onClick={closeForever}
          >
            <X size={20} />
          </button>

          <h3 className="text-xl font-semibold text-orange-600 mb-3">
            Let's Connect!
          </h3>
          <p className="text-gray-600 mb-4">
            Fill the form and we'll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-2 border border-orange-500 rounded-md focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-2 border border-orange-500 rounded-md focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="number"
              placeholder="Your Contact Number"
              required
              className="w-full p-2 border border-orange-500 rounded-md focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Your Message"
              required
              className="w-full p-2 border border-orange-500 rounded-md focus:ring-2 focus:ring-orange-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    )
  );
};

export default ContactPopup;
