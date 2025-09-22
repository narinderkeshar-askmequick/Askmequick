'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    question: 'How long does the job placement process typically take?',
    answer: 'Our average placement time is 45 days, though this can vary based on your industry, experience level, and specific requirements. We work diligently to match you with the right opportunity as quickly as possible.'
  },
  {
    question: 'What makes Ask Me Quick different from other career services?',
    answer: 'With 27 years of experience, we offer a comprehensive approach combining personalized counseling, professional development, and direct placement assistance. Our 92% success rate and global network of 500+ partner companies set us apart.'
  },
  {
    question: 'Do you provide services for international job placements?',
    answer: 'Yes! We specialize in global placements across USA/Canada, Europe, and Asia-Pacific markets. Our international team understands visa requirements, cultural nuances, and market-specific demands.'
  },
  {
    question: 'What is included in your resume building service?',
    answer: 'Our resume service includes complete resume restructuring, ATS optimization, keyword integration, professional formatting, LinkedIn profile optimization, and a cover letter template tailored to your target roles.'
  },
  {
    question: 'How do you ensure the quality of job opportunities?',
    answer: 'We maintain strict partnerships only with verified companies, conduct thorough background checks on employers, and ensure all opportunities meet our quality standards for compensation, work environment, and growth potential.'
  },
  {
    question: 'What support do you provide after job placement?',
    answer: 'We offer 3-month post-placement support including onboarding assistance, performance guidance, and career development advice to ensure your long-term success in your new role.'
  },
  {
    question: 'Are your services available for fresh graduates?',
    answer: 'Absolutely! We have specialized programs for fresh graduates including skill assessment, industry orientation, interview preparation, and entry-level job placement assistance.'
  },
  {
    question: 'What are your payment terms and refund policy?',
    answer: 'We offer flexible payment plans and a satisfaction guarantee. If we cannot secure a suitable placement within the agreed timeframe, we provide partial refunds as per our terms and conditions.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#291969] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 hover-cursor"
              >
                <h3 className="text-lg font-semibold text-[#291969] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <FiMinus className="w-5 h-5 text-[#d42620]" />
                  ) : (
                    <FiPlus className="w-5 h-5 text-[#291969]" />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Still have questions? We&#39;re here to help!
          </p>
          <button className="bg-[#d42620] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 hover-cursor">
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}