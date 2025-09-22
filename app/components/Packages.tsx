"use client";

import { motion } from "framer-motion";
import { FiCheck, FiStar } from "react-icons/fi";

const packages = [
  {
    name: "Starter Package",
    price: "₹2,999",
    popular: false,
    description: "Perfect for job seekers starting their career journey",
    features: [
      "Basic resume review and optimization",
      "One consultation session (60 minutes)",
      "Email support for one week",
      "Basic interview tips guide",
      "LinkedIn profile optimization tips",
      "Template for cover letter",
      "Access to basic job search tools",
      "Follow-up support for 1 week",
    ],
  },
  {
    name: "Professional Package",
    price: "₹7,999",
    popular: true,
    description: "Comprehensive career guidance for professionals",
    features: [
      "Complete resume building from scratch",
      "Three consultation sessions (60 minutes)",
      "Two rounds of mock interviews",
      "In-depth career path guidance",
      "Full LinkedIn profile optimization",
      "One-month email and phone support",
      "Industry-specific job search strategy",
      "Personalized cover letter writing",
    ],
  },
  {
    name: "Premium Package",
    price: "₹14,999",
    popular: false,
    description: "Complete placement assistance with guaranteed support",
    features: [
      "All features from Professional package",
      "Direct job placement assistance",
      "Access to exclusive job openings",
      "Professional salary negotiation guidance",
      "Three months of follow-up support",
      "Personal career coach assigned",
      "Guaranteed interviews with partners",
      "Professional networking opportunities",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#291969] mb-4">
            Choose Your Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible pricing options designed to meet your career advancement
            needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                pkg.popular
                  ? "border-[#d42620] transform scale-105"
                  : "border-gray-200 hover:border-[#291969]"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#d42620] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <FiStar className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#291969] mb-2">
                  {pkg.name}
                </h3>
                <div className="text-4xl font-bold text-[#d42620] mb-2">
                  {pkg.price}
                </div>
                <p className="text-gray-600 text-sm">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <FiCheck className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  pkg.popular
                    ? "bg-[#d42620] text-white hover:bg-red-700"
                    : "bg-[#291969] text-white hover:bg-blue-900"
                } hover-cursor`}
              >
                {pkg.price === "Custom" ? "Contact Us" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Not sure which package is right for you?
          </p>
          <button className="border-2 border-[#291969] text-[#291969] px-8 py-3 rounded-lg font-semibold hover:bg-[#291969] hover:text-white transition-all duration-200">
            Schedule Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
