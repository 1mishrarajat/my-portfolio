'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
 
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);




  // ✅ Smooth scroll with header offset
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70; // adjust for your fixed header
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // ✅ Change 'home' → 'hero'
  const navItems = ['hero', 'about', 'skills', 'projects', 'experience-Education','services','contact'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-[#ffffff] dark:bg-[#1A242F]
        ${isScrolled ? 'shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-b border-gray-300 dark:border-gray-700' : ''}
      `}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* ✅ Logo scrolls to Hero */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold cursor-pointer select-none"
            style={{ color: '#F99F20' }}
            onClick={() => scrollToSection('hero')}
          >
            RM
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="relative text-[#34495E] dark:text-gray-200 hover:text-[#F99F20] transition font-medium"
              >
                {id === 'hero' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}

           
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-4">
        

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#34495E] dark:text-gray-200">
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 bg-white dark:bg-[#1A242F] text-[#34495E] dark:text-gray-200 rounded-lg shadow-lg mt-2 border border-gray-300 dark:border-gray-700"
          >
            {navItems.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#22313F] transition"
              >
                {id === 'hero' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
