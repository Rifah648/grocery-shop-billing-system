import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
"https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/flagged/photo-1568004614679-c938da0922fb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://plus.unsplash.com/premium_photo-1664391960037-8aefeab6482b?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"



];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="min-h-[75vh] bg-gradient-to-r from-green-100 via-white to-lime-100 flex items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-6xl w-full">
        {/* Text Section */}
        <motion.div
          className="text-center lg:text-left space-y-4"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Grocery Billing <br className="hidden md:block" />
            <span className="text-primary">Made Easy!</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Smart, fast, and efficient way to handle grocery shop billing.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-green-700 transition"
          >
            Get Started
          </motion.button>
        </motion.div>

       
        <motion.div
          className="w-full lg:w-1/2"
          key={currentImage}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img
            src={images[currentImage]}
            alt="Grocery Shop"
            className="w-full max-h-[400px] object-contain rounded-xl"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
// Compare this snippet from src/components/Navbar/Navbar.jsx: