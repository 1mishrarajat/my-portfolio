"use client";

import { motion } from "framer-motion";
import { FiCode, FiLayout, FiServer, FiSettings, FiCloud, FiDatabase } from "react-icons/fi";

export default function Services() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  });

  const services = [
    {
      title: "Full-Stack Web Development",
      icon: <FiCode className="w-10 h-10 text-[#F99F20]" />,
      description:
        "End-to-end development using React.js, Next.js, PHP (CI4), and MySQL. Scalable, secure, and optimized applications.",
    },
    {
      title: "Modern Frontend Development",
      icon: <FiLayout className="w-10 h-10 text-[#F99F20]" />,
      description:
        "Responsive, pixel-perfect UI with Tailwind CSS, Next.js, and React. Fast, elegant, and user-friendly interface design.",
    },
    {
      title: "Backend API & Database Systems",
      icon: <FiServer className="w-10 h-10 text-[#F99F20]" />,
      description:
        "REST APIs, authentication systems, database structures, and secure CRUD operations using CI4 & MySQL.",
    },
    {
      title: "Admin Panel & Dashboard Development",
      icon: <FiSettings className="w-10 h-10 text-[#F99F20]" />,
      description:
        "Advanced dashboards, content management systems, and business-oriented admin panels with full authentication.",
    },
    {
      title: "Custom Business Platforms",
      icon: <FiDatabase className="w-10 h-10 text-[#F99F20]" />,
      description:
        "Pharmacy systems, journal management systems, insurance quote systems, and tailored enterprise tools.",
    },
    {
      title: "Deployment & Optimization",
      icon: <FiCloud className="w-10 h-10 text-[#F99F20]" />,
      description:
        "Deployments on Vercel, secure hosting, domain setup, SSL, speed optimization, and production readiness.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-[#0F141A] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute w-[40vw] h-[40vw] bg-[#F99F20]/25 blur-[180px] rounded-full top-1/3 left-1/4"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          {...fadeUp(0.2)}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16"
        >
          My <span className="text-[#F99F20]">Services</span>
        </motion.h2>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              {...fadeUp(0.3 + index * 0.1)}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1A242F]/60 backdrop-blur-xl p-8 rounded-2xl border border-[#F99F20]/20 shadow-xl 
              hover:shadow-[#F99F20]/30 hover:border-[#F99F20]/40 transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
