"use client";

import { motion } from "framer-motion";

export default function ExperienceEducation() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  });

  return (
    <section
      id="experience-Education"
      className="relative py-24 bg-white text-gray-900 overflow-hidden"
    >
      {/* Modern Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[45vw] h-[45vw] rounded-full blur-[180px] bg-[#F99F20]/20 top-1/3 left-1/4"
        />
        <motion.div
          animate={{ opacity: [0.15, 0.4, 0.15], scale: [1, 1.4, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[35vw] h-[35vw] rounded-full blur-[200px] bg-[#F9D320]/10 bottom-1/4 right-1/4"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          {...fadeUp(0.2)}
          className="text-5xl md:text-6xl font-extrabold text-center tracking-tight mb-20 text-gray-900"
        >
          <span className="text-[#F99F20]">Experience</span> & Education
        </motion.h2>

        {/* Modern Vertical Timeline Layout */}
        <div className="relative border-l-2 border-[#F99F20]/40 ml-6 space-y-16">

          {/* Experience - Full Stack Developer */}
          <motion.div {...fadeUp(0.3)} className="relative pl-10">
            <div className="absolute w-5 h-5 bg-[#F99F20] rounded-full left-[-12px] top-2 shadow-lg" />
            <div className="bg-white shadow-sm p-8 rounded-2xl border border-[#F99F20]/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#F99F20]">Full Stack Developer</h3>
              <p className="text-gray-500 italic mt-1">Risecore Technologies Pvt. Ltd • Dec 2024 – Present</p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Working on production-ready applications using <span className="font-semibold">Next.js, React.js, CodeIgniter 4, PHP, and MySQL</span>. 
                Responsible for API development, UI engineering, system optimization, and delivering scalable web solutions.
              </p>
            </div>
          </motion.div>

          {/* Experience - Internship */}
          <motion.div {...fadeUp(0.5)} className="relative pl-10">
            <div className="absolute w-5 h-5 bg-[#F99F20] rounded-full left-[-12px] top-2 shadow-lg" />
            <div className="bg-white shadow-sm p-8 rounded-2xl border border-[#F99F20]/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#F99F20]">Full Stack Developer Intern</h3>
              <p className="text-gray-500 italic mt-1">Risecore Technologies Pvt. Ltd • Sept 2024 – Nov 2024</p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Learned full-stack development from basic to advanced including <span className="font-semibold">React.js, Next.js, Tailwind, CI4, MySQL, authentication systems, API integration</span>, 
                and deployment. Assisted in real-world client projects with hands-on development.
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div {...fadeUp(0.7)} className="relative pl-10">
            <div className="absolute w-5 h-5 bg-[#F99F20] rounded-full left-[-12px] top-2 shadow-lg" />
            <div className="bg-white shadow-sm p-8 rounded-2xl border border-[#F99F20]/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#F99F20]">B.Tech • Electronics & Communication Engineering</h3>
              <p className="text-gray-500 italic mt-1">Feroze Gandhi Institute of Engineering & Technology • 2020–2024</p>
              <p className="text-gray-500 italic">Percentage: 75%</p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Built strong fundamentals in engineering, problem-solving, and full-stack development with modern technologies. 
                Participated in project-based learning and multiple technical activities.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
