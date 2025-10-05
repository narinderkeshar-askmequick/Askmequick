'use client';

import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[#291969] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Ask Me Quick</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Your trusted career partner since 1998. We&#39;ve been helping professionals 
              achieve their career goals for over 27 years with a 92% success rate.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <FiMapPin className="w-5 h-5 text-[#d42620] mr-3" />
                <span className="text-blue-100">SCO 148-149 Ground Floor, Sector 34-A Chandigarh, 160034</span>
              </div>
              <div className="flex items-center">
                <FiPhone className="w-5 h-5 text-[#d42620] mr-3" />
                <span className="text-blue-100">+91-9316527107</span>
              </div>
              <div className="flex items-center">
                <FiMail className="w-5 h-5 text-[#d42620] mr-3" />
                <span className="text-blue-100">globex.kumar@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a href="#" className="block text-blue-100 hover:text-white transition-colors duration-200">
                  Resume Building
                </a>
                <a href="#" className="block text-blue-100 hover:text-white transition-colors duration-200">
                  Interview Coaching
                </a>
                <a href="#" className="block text-blue-100 hover:text-white transition-colors duration-200">
                  Career Counseling
                </a>
                <a href="#" className="block text-blue-100 hover:text-white transition-colors duration-200">
                  Job Placement
                </a>
              </div>
              <div className="space-y-3">
                <a href="#" className="block text-blue-100 hover:text-white transition-colors duration-200">
                  Skill Assessment
                </a>
                <a href="#" className="block text-blue-100 hover:text-white transition-colors duration-200">
                  Salary Negotiation
                </a>
                <a href="#" className="block text-blue-100 hover:text-white transition-colors duration-200">
                  Global Placement
                </a>
                <a href="#" className="block text-blue-100 hover:text-white transition-colors duration-200">
                  Corporate Solutions
                </a>
              </div>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Stay Connected</h4>
            <p className="text-blue-100 mb-4">
              Subscribe to our newsletter for career tips and job opportunities.
            </p>
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d42620]"
                />
                <button className="bg-[#d42620] px-6 py-3 rounded-r-lg hover:bg-red-700 transition-colors duration-200 font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d42620] transition-colors duration-200">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d42620] transition-colors duration-200">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d42620] transition-colors duration-200">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d42620] transition-colors duration-200">
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-100 text-sm mb-4 md:mb-0">
              © 2025 Ask Me Quick. All rights reserved. | GSTIN: 04AGNPK7695L1ZM | UDYAM: UDYAM-CH-01-0028602
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}