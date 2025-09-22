'use client';

import { motion } from 'framer-motion';
import { FiShield, FiClock, FiGlobe, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi';

const reasons = [
  {
    icon: FiShield,
    title: 'Proven Track Record',
    description: '27 years of excellence with 92% success rate in job placements',
    color: 'bg-blue-500'
  },
  {
    icon: FiClock,
    title: 'Quick Results',
    description: 'Average placement time of 45 days with our accelerated process',
    color: 'bg-green-500'
  },
  {
    icon: FiGlobe,
    title: 'Global Network',
    description: 'Partnerships with 500+ companies across USA, Canada, Europe & APAC',
    color: 'bg-purple-500'
  },
  {
    icon: FiTrendingUp,
    title: 'Career Growth',
    description: 'Average 40% salary increase for our successfully placed candidates',
    color: 'bg-orange-500'
  },
  {
    icon: FiUsers,
    title: 'Expert Team',
    description: 'Certified career counselors with industry-specific expertise',
    color: 'bg-indigo-500'
  },
  {
    icon: FiAward,
    title: 'Quality Assurance',
    description: 'ISO certified processes and continuous quality improvement',
    color: 'bg-red-500'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#291969] mb-4">
            Why Choose Ask Me Quick?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what sets us apart in the career consultation industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100"
            >
              <div className="relative mb-6">
                <div className={`w-16 h-16 ${reason.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#d42620] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-[#291969] mb-3 group-hover:text-[#d42620] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <span className="text-[#d42620] font-semibold text-sm group-hover:underline cursor-pointer">
                  Learn More →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-[#291969] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have successfully advanced their careers with our expert guidance.
            </p>
            <button className="bg-[#d42620] text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover-cursor">
              Start Your Journey Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}