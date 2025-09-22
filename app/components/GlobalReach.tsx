'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiGlobe } from 'react-icons/fi';

const regions = [
  {
    name: 'USA & Canada',
    description: 'Comprehensive job placement services across North America',
    stats: '15,000+ Placements',
    color: 'bg-blue-500'
  },
  {
    name: 'Europe',
    description: 'Strategic partnerships with leading European companies',
    stats: '20,000+ Placements',
    color: 'bg-green-500'
  },
  {
    name: 'Asia-Pacific',
    description: 'Extensive network across APAC markets and emerging economies',
    stats: '15,000+ Placements',
    color: 'bg-purple-500'
  }
];

export default function GlobalReach() {
  return (
    <section id="global-reach" className="py-20 bg-[#291969] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#d42620] rounded-full flex items-center justify-center">
              <FiGlobe className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Global Reach, Local Expertise
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Connecting talent with opportunities across three major global markets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="flex items-center mb-4">
                <div className={`w-4 h-4 ${region.color} rounded-full mr-3`}></div>
                <FiMapPin className="w-6 h-6 text-[#d42620]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{region.name}</h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
                {region.description}
              </p>
              <div className="text-[#d42620] font-semibold text-lg">
                {region.stats}
              </div>
            </motion.div>
          ))}
        </div>

        {/* World map visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#d42620] mb-2">50,000+</div>
                <div className="text-blue-100">Global Placements</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#d42620] mb-2">500+</div>
                <div className="text-blue-100">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#d42620] mb-2">25+</div>
                <div className="text-blue-100">Countries Served</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}