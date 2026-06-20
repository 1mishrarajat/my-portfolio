'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActive(id);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }

    setMobileMenuOpen(false);
  };

  const navItems = [
    'home',
    'about',
    'skills',
    'projects',
    'experience',
    'testimonials',
    'contact',
  ];

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4"
    >
      <div
        className={`
        relative
        max-w-7xl
        mx-auto
        rounded-2xl
        border
        border-blue-900/40
        backdrop-blur-xl
        bg-[#050816]/90
        overflow-hidden
        transition-all
        duration-500
        ${
          isScrolled
            ? 'shadow-[0_15px_40px_rgba(59,130,246,0.20)]'
            : 'shadow-[0_10px_30px_rgba(0,0,0,0.35)]'
        }
      `}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 pointer-events-none" />

        <nav className="relative flex items-center justify-between h-20 px-6 md:px-10">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <h2
              className="
              text-4xl
              font-black
              bg-gradient-to-r
              from-blue-500
              via-indigo-400
              to-white
              bg-clip-text
              text-transparent
            "
            >
              RM
            </h2>

            <span className="hidden sm:block text-white font-semibold">
              Rajat Mishra
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="
                relative
                text-white/80
                hover:text-white
                transition-all
                duration-300
                font-medium
              "
              >
                <motion.span whileHover={{ y: -2 }}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.span>

                {active === item && (
                  <motion.div
                    layoutId="activeMenu"
                    className="
                      absolute
                      -bottom-3
                      left-0
                      right-0
                      mx-auto
                      h-[3px]
                      w-6
                      rounded-full
                      bg-blue-500
                    "
                  />
                )}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 25px rgba(59,130,246,0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="
                px-6
                py-3
                rounded-full
                border
                border-blue-500
                text-white
                bg-[#09111f]
                flex
                items-center
                gap-3
                transition-all
              "
            >
              Contact Me

              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-white"
          >
            <FiMenu size={28} />
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4 }}
              className="
                fixed
                top-0
                right-0
                h-screen
                w-[320px]
                bg-[#050816]
                border-l
                border-blue-900/40
                shadow-[0_0_40px_rgba(59,130,246,0.2)]
                p-6
              "
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                  <h2 className="text-4xl font-black bg-gradient-to-r from-blue-500 via-indigo-400 to-white bg-clip-text text-transparent">
                    RM
                  </h2>

                  <span className="text-white font-semibold">
                    Rajat Mishra
                  </span>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white"
                >
                  <FiX size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="
                      text-left
                      text-white/80
                      hover:text-white
                      border-b
                      border-blue-900/20
                      pb-4
                      transition
                    "
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                onClick={() => scrollToSection('contact')}
                className="
                  mt-10
                  w-full
                  py-4
                  rounded-full
                  border
                  border-blue-500
                  text-white
                  flex
                  justify-center
                  items-center
                  gap-3
                "
              >
                Contact Me
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}   