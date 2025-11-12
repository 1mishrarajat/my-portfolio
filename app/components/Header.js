'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDark = typeof window !== 'undefined' && localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) document.documentElement.classList.add('dark');

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', newMode);
      document.documentElement.classList.toggle('dark');
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

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

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold cursor-pointer select-none"
            style={{ color: '#F99F20' }}
            onClick={() => scrollToSection('home')}
          >
            RM
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="relative text-[#34495E] dark:text-gray-200 hover:text-[#F99F20] transition font-medium"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-[#F99F20] hover:brightness-110 shadow-md transition"
            >
              {darkMode ? <FiSun className="w-5 h-5 text-white" /> : <FiMoon className="w-5 h-5 text-white" />}
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-[#F99F20] shadow-md"
            >
              {darkMode ? <FiSun className="w-5 h-5 text-white" /> : <FiMoon className="w-5 h-5 text-white" />}
            </button>

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
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
