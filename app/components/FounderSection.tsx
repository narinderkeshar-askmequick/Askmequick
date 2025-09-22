"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="py-20 bg-gradient-to-br from-[#291969] to-[#3a2a7a] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Meet Our Visionary Founder
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Narinder Keshar, with his exceptional leadership and industry
            expertise, has been the driving force behind our success since 1998.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Founder Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20"
          >
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-48 h-48 mb-4">
                <Image
                  src="/founder-professionl-photo.png"
                  alt="Narinder Keshar - Founder & CEO"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#d42620] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold">Narinder Keshar</h3>
              <p className="text-blue-100">Founder & CEO</p>
            </div>

            <div className="text-left space-y-4">
              <p className="leading-relaxed">
                With over 30 years of experience in career consulting and human
                resources management, Narinder has established himself as a
                trusted advisor and mentor to thousands of professionals
                worldwide.
              </p>
              <p className="leading-relaxed">
                His visionary approach to career development has been the
                cornerstone of Ask Me Quick&#39;s success, helping countless
                individuals achieve their professional goals.
              </p>
              <div className="mt-6 flex justify-center">
                <button className="bg-[#d42620] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-200">
                  Learn More About Narinder
                </button>
              </div>
            </div>
          </motion.div>

          {/* Founder in Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#d42620] to-[#ff4d4f] rounded-2xl transform rotate-3 scale-[0.97] z-0"></div>
            <div className="relative z-10 h-full">
              <Image
                src="/founder-image.png"
                alt="Narinder Keshar providing career consultation"
                fill
                className="rounded-2xl object-cover border-4 border-white bg-"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-2xl">
                <p className="text-lg font-semibold">
                  Empowering Careers Through Personalized Guidance
                </p>
              </div>
            </div>
          </motion.div>

          {/* Founder Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20 flex-grow mb-6">
              <h3 className="text-xl font-bold mb-4">Our Founder&#39;s Vision</h3>
              <blockquote className="text-lg italic text-blue-100 mb-6 border-l-4 border-[#d42620] pl-4">
                I believe every individual has unique talents and potential. My
                mission is to create a platform that helps people discover their
                true calling and connect them with opportunities that align with
                their aspirations.
              </blockquote>
              <p className="leading-relaxed">
                Under Narinder&#39;s leadership, Ask Me Quick has grown from a small
                consultancy to a global career services provider with a presence
                in multiple countries.
              </p>
            </div>
            <div className="relative h-48">
              <Image
                src="/founder-giving-consultaion.png"
                alt="Narinder Keshar"
                fill
                className="rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Founder's Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-[#291969] mb-6 text-center">
            The Impact of Narinder&#39;s Leadership
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d42620] mb-2">27+</div>
              <p className="text-gray-700">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d42620] mb-2">
                50,000+
              </div>
              <p className="text-gray-700">Professionals Helped</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d42620] mb-2">92%</div>
              <p className="text-gray-700">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d42620] mb-2">12+</div>
              <p className="text-gray-700">Countries Served</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
