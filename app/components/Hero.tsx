"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "ONE STOP SHOP YOUR EXPRESS NEED";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white pt-24 pb-12  sm:pt-36"
    >
      {/* Floating geometric shapes - Adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 md:w-20 md:h-20 bg-[#291969] opacity-10 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-12 h-12 md:w-16 md:h-16 bg-[#d42620] opacity-10 rounded-lg"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-10 h-10 md:w-12 md:h-12 bg-[#291969] opacity-10 rounded-full"
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 md:mb-8"
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#291969] mb-4 md:mb-6">
            Ask Me Quick
          </h1>
          <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-6 md:mb-8 h-12">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            With 27 years of excellence since 1998, we have helped over 50,000
            professionals find their dream careers across PAN India And Gulf, Europe,
            and Asia-Pacific markets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-[#d42620] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover-cursor min-h-[44px] min-w-[120px]">
            Find Your Dream Job
          </button>
          <button className="border-2 border-[#291969] text-[#291969] px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#291969] hover:text-white transition-all duration-200 hover-cursor min-h-[44px] min-w-[120px]">
            Learn More
          </button>
        </motion.div>

        {/* Trust indicators - Responsive grid layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8"
        >
          <div className="text-center p-2">
            <div className="text-2xl md:text-3xl font-bold text-[#291969]">
              27+
            </div>
            <div className="text-sm md:text-gray-600">Years of Excellence</div>
          </div>
          <div className="text-center p-2">
            <div className="text-2xl md:text-3xl font-bold text-[#291969]">
              50,000+
            </div>
            <div className="text-sm md:text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-2">
            <div className="text-2xl md:text-3xl font-bold text-[#291969]">
              500+
            </div>
            <div className="text-sm md:text-gray-600">Partner Companies</div>
          </div>
          <div className="text-center p-2">
            <div className="text-2xl md:text-3xl font-bold text-[#291969]">
              92%
            </div>
            <div className="text-sm md:text-gray-600">Success Rate</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - Optimized for mobile visibility */}
      <motion.div
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2  "
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-[#291969] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#291969] rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
