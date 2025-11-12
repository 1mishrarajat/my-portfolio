'use client';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImg from '../../public/rajat-img.png';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const stats = [
    { number: '4+', label: 'Projects' },
    { number: '1+', label: 'Years Exp.' },
    { number: '100%', label: 'Satisfaction' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-white dark:bg-[#1A242F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >

          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#34495E] dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-[#F99F20] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Profile Image */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#F99F20] shadow-[0_4px_8px_rgba(0,0,0,0.25)]"
                >
                  <Image
                    src={profileImg}
                    alt="Rajat Mishra"
                    className="w-full h-full object-cover"
                    width={320}
                    height={320}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6 text-[#34495E] dark:text-gray-300">
              <h3 className="text-2xl md:text-3xl font-semibold">
                Passionate Developer & Problem Solver
              </h3>

              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  I'm a dedicated full-stack web developer with a strong focus on building clean, scalable, and intuitive applications.
                </p>
                <p>
                  My experience spans modern frontend frameworks like React and Next.js, alongside backend technologies such as PHP, CodeIgniter, and MySQL.
                </p>
                <p>
                  I love solving real-world problems and continuously sharpening my skills through new challenges and learning.
                </p>
              </div>

              {/* Stats */}
              <motion.div variants={containerVariants} className="grid grid-cols-3 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.07 }}
                    className="text-center p-4 rounded-lg border border-[#F99F20] bg-[#F99F20]/10 dark:bg-[#F99F20]/20"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-[#F99F20]">
                      {stat.number}
                    </div>
                    <div className="text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
