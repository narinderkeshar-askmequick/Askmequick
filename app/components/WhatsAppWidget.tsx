'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX } from 'react-icons/fi';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "+1234567890"; // Replace with actual WhatsApp number
  const message = "Hi! I'm interested in your career consultation services. Can you help me?";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* WhatsApp Button - Responsive size adjustment */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 group"
          aria-label="Open WhatsApp chat"
        >
          <FiMessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </button>
      </motion.div>

      {/* Chat Popup - Responsive adjustments for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-24 right-6 left-6 z-50 bg-white rounded-lg shadow-2xl border border-gray-200 w-auto max-w-[340px] mx-auto"
          >
            {/* Header */}
            <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <FiMessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Ask Me Quick</h4>
                  <p className="text-sm opacity-90">Career Consultation</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors duration-200"
                aria-label="Close chat"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="bg-gray-100 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-700">
                  {"👋 Hi there! Need help with your career? I'm here to assist you with:"}
                </p>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• Resume building</li>
                  <li>• Interview preparation</li>
                  <li>• Job placement assistance</li>
                  <li>• Career counseling</li>
                </ul>
              </div>
              
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                <FiMessageCircle className="w-5 h-5 mr-2" />
                Start WhatsApp Chat
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-2">
                We typically reply within minutes
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}