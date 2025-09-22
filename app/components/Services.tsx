'use client';

import { motion } from 'framer-motion';
import { FiFileText, FiUsers, FiTarget, FiBriefcase, FiBarChart } from 'react-icons/fi';

const services = [
  {
    icon: FiFileText,
    title: 'Resume Building',
    description: 'Professional resume crafting that highlights your strengths and achievements to stand out in the competitive job market.',
  },
  {
    icon: FiUsers,
    title: 'Interview Coaching',
    description: 'Comprehensive interview preparation with mock sessions, behavioral questions, and industry-specific guidance.',
  },
  {
    icon: FiTarget,
    title: 'Career Counseling',
    description: 'Personalized career guidance to help you identify the right path and make informed professional decisions.',
  },
  {
    icon: FiBriefcase,
    title: 'Job Placement',
    description: 'Direct placement assistance with our network of 500+ partner companies across global markets.',
  },
  {
    icon: FiBarChart,
    title: 'Skill Assessment',
    description: 'Comprehensive evaluation of your skills and competencies with recommendations for improvement.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50 mobile-spacing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#291969] mb-4">
            Our Services
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive career solutions tailored to your professional journey
          </p>
        </motion.div>

        {/* Responsive grid layout with proper spacing for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-5 md:mb-6">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#291969] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#d42620] transition-colors duration-300">
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#291969] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
              <button className="text-[#d42620] font-semibold hover:text-red-700 transition-colors duration-200 flex items-center group min-h-[44px]">
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200 hover-cursor">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}