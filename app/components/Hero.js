'use client';

import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden
      bg-[#34495E] dark:bg-[#1A242F]"
    >
      {/* Soft Accent Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[50vw] h-[50vw] rounded-full blur-[180px]
          bg-[#F99F20]/30 top-1/3 left-1/3"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6">

        {/* Greeting */}
        <motion.span
          {...fadeUp(0.2)}
          className="text-xl font-medium text-gray-200 dark:text-gray-300 tracking-wide"
        >
          👋 Hello, I'm
        </motion.span>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.5)}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mt-3"
        >
          Rajat <span className="text-[#F99F20]">Mishra</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          {...fadeUp(0.8)}
          className="text-2xl md:text-4xl font-semibold text-gray-100 mt-4"
        >
          Full-Stack Web Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          {...fadeUp(1.1)}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200/80 mt-6 leading-relaxed"
        >
          I craft modern web experiences with clean UI, blazing-fast performance and
          seamless functionality — transforming ideas into impactful digital products.
        </motion.p>

        {/* Buttons */}
        <motion.div
          {...fadeUp(1.4)}
          className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 rounded-full text-lg font-semibold
            bg-[#F99F20] text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]
            hover:brightness-110 transition-all duration-300"
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 rounded-full text-lg font-semibold
            border-2 border-[#F99F20] text-[#F99F20] bg-transparent
            hover:bg-[#F99F20]/15 transition-all duration-300"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }} 
          className="absolute bottom-[-2.5rem] left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <FiArrowDown className="w-8 h-8 text-[#F99F20]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
