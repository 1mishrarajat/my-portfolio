'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import { FaReact, FaPhp, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaServer, FaTools } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa6';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiCodeigniter,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiMongodb,
} from 'react-icons/si';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'PHP', icon: FaPhp },
    { name: 'CodeIgniter 4', icon: SiCodeigniter },
    { name: 'MySQL', icon: SiMysql },
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'Bootstrap', icon: FaBootstrap },
    { name: 'Hostinger / cPanel Deployment', icon: FaServer },
    { name: 'OJS Maintenance & Debugging', icon: FaTools },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 md:py-32 bg-[#34495E] dark:bg-[#1A242F] overflow-hidden"
    >
      {/* 🔥 SAME GLOW FROM HERO SECTION */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orange Soft Glow */}
        <motion.div
          animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.25, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[60vw] h-[60vw] rounded-full blur-[200px]
          bg-[#F99F20]/25 top-1/4 left-1/2 -translate-x-1/2"
        />

        {/* Light Beam */}
        <div className="absolute -rotate-45 w-[140%] h-[200%] top-[-30%] left-[-20%]
        bg-gradient-to-br from-white/5 to-transparent opacity-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Tools
          </h2>
          <div className="w-20 h-1 bg-[#F99F20] mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.1, y: -6 }}
                className="p-6 text-center rounded-xl border border-[#F99F20]
                bg-[#F99F20]/10 dark:bg-[#F99F20]/20 shadow-lg backdrop-blur-sm
                transition-all hover:shadow-[0_4px_25px_#f99f2066] cursor-pointer"
              >
                <Icon className="w-12 h-12 text-[#F99F20] mx-auto mb-4" />
                <p className="text-white font-medium text-sm md:text-base">
                  {skill.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16 text-gray-200 text-lg"
        >
          Growing consistently — Improving every day 
        </motion.p>
      </div>
    </section>
  );
}
