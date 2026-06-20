"use client";

import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" },
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden
      bg-gradient-to-br from-[#0F172A] via-[#1A242F] to-[#111827] text-white"
    >
      {/* Smooth Modern Gradient Light */}
      <motion.div
        animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-[#F99F20]/20 via-transparent to-[#F99F20]/20 blur-[160px]"
      />

      {/* Content */}
      <div className="relative z-10 px-6">
        <motion.span
          {...fadeUp(0.2)}
          className="text-lg font-light tracking-widest text-gray-300 uppercase"
        >
          Hello, I'm
        </motion.span>

        <motion.h1
          {...fadeUp(0.5)}
          className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none"
        >
          Rajat <span className="text-[#F99F20]">Mishra</span>
        </motion.h1>

        <motion.h2
          {...fadeUp(0.8)}
          className="text-xl md:text-3xl font-medium text-gray-300 mt-3"
        >
          Full-Stack Developer & UI Engineer
        </motion.h2>

        <motion.p
          {...fadeUp(1.1)}
          className="max-w-3xl mx-auto text-gray-400 mt-6 text-lg md:text-xl leading-relaxed"
        >
          I build visually stunning, performance-driven web experiences that feel
          effortless and intuitive — blending clean UI with efficient engineering.
        </motion.p>

        {/* ⭐ Only One Modern CTA Button */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => scrollToSection("projects")}
          className="mt-10 px-10 py-4 rounded-full text-lg font-medium
          bg-[#F99F20] text-black hover:shadow-[0_0_25px_#F99F20aa] 
          transition-all duration-300"
        >
          View My Work
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <FiArrowDown className="w-8 h-8 text-[#F99F20]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
