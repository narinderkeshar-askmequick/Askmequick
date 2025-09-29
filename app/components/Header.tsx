"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from 'next/image';

// Enhanced Header component with improved mobile responsiveness
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to close mobile menu when clicking on a navigation item
  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Packages", href: "#packages" },
    { name: "About Us", href: "#about" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Global Reach", href: "#global-reach" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      } overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div>
              <Image
                src="/logo.png"
                alt="Ask Me Quick Logo"
                width={100}
                height={32}
                className="cover"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#291969] hover:text-[#d42620] transition-colors duration-200 font-medium hover-cursor flex items-center justify-center"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <button className="bg-[#d42620] text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium hover-cursor">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#291969] hover:text-[#d42620] transition-colors duration-200 hover-cursor p-2"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced for better responsiveness */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 overflow-hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-[#291969] hover:text-[#d42620] transition-colors duration-200 font-medium hover-cursor border-b border-gray-100"
                  onClick={handleNavItemClick}
                  aria-label={item.name}
                >
                  {item.name}
                </a>
              ))}
              <button 
                className="w-full mt-4 bg-[#d42620] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium hover-cursor"
                onClick={handleNavItemClick}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
