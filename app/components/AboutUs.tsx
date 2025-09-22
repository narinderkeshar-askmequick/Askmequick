"use client";

import { motion } from "framer-motion";
import { FiAward, FiUsers, FiTrendingUp, FiHeart } from "react-icons/fi";
import Image from "next/image";

const achievements = [
  {
    icon: FiAward,
    title: "Industry Recognition",
    description:
      'Winner of "Best Career Consultation Service" for 5 consecutive years',
  },
  {
    icon: FiUsers,
    title: "Expert Team",
    description: "50+ certified career counselors and industry experts",
  },
  {
    icon: FiTrendingUp,
    title: "Success Rate",
    description:
      "92% of our clients secure their desired positions within 3 months",
  },
  {
    icon: FiHeart,
    title: "Client Satisfaction",
    description: "4.9/5 average rating from over 10,000 client reviews",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#291969] mb-6">
              About Ask Me Quick
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Since 1998, we have been the trusted partner for professionals
              seeking to transform their careers. With 27 years of excellence,
              we have helped over 50,000 individuals achieve their dream jobs
              across global markets.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our comprehensive approach combines personalized career
              counseling, professional development, and strategic job placement
              to ensure your success in today&#39;s competitive market.
            </p>

            {/* Founder Quote */}
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#d42620]">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                Every career journey is unique. Our mission is to provide
                personalized guidance that unlocks each individual&#39;s
                potential and connects them with opportunities that align with
                their aspirations.
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-[#291969]">
                  <img
                    src="/founder-professionl-photo.png"
                    alt="Narinder Keshar - Founder & CEO"
                    className="object-cover w-full h-full" 
                  />
                </div>
                <div>
                  <div className="font-semibold text-[#291969]">
                    Narinder Keshar
                  </div>
                  <div className="text-gray-600">Founder & CEO</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-[#291969] rounded-lg flex items-center justify-center mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#291969] mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
