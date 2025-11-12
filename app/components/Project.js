'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'Pharmacy System',
      image: 'https://s.wordpress.com/mshots/v1/https://pharmacy1-weld.vercel.app?w=1200',
      link: 'https://pharmacy1-weld.vercel.app/',
      tech: ['Next.js', 'Tailwind CSS', 'JavaScript'],
    },
    {
      title: 'OJS Default Theme',
      image: 'https://s.wordpress.com/mshots/v1/https://default-theme.openjournalcloud.com?w=1200',
      link: 'https://default-theme.openjournalcloud.com/',
      tech: ['OJS', 'PHP', 'MySQL'],
    },
    {
      title: 'OJS Classic Theme',
      image: 'https://s.wordpress.com/mshots/v1/https://classic-theme.openjournalcloud.com?w=1200',
      link: 'https://classic-theme.openjournalcloud.com/',
      tech: ['OJS', 'PHP', 'Theme Customization'],
    },
    {
      title: 'Insurance Website',
      image: 'https://s.wordpress.com/mshots/v1/https://umbrellainsurance.ie?w=1200',
      link: 'https://umbrellainsurance.ie/',
      tech: ['React', 'Tailwind', 'UI/UX'],
    },
    {
      title: 'Brand Portfolio Template',
      image: 'https://s.wordpress.com/mshots/v1/https://logoipsum-pied.vercel.app?w=1200',
      link: 'https://logoipsum-pied.vercel.app/',
      tech: ['Next.js', 'Tailwind CSS'],
    },
  ];

  const fadeUp = (i) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay: i * 0.12 },
  });

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 bg-white dark:bg-[#1A242F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#34495E] dark:text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[#F99F20] mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              {...fadeUp(i)}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden
              shadow-[0_4px_18px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.18)]
              transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Image Preview */}
              <div className="h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={600}
                  height={350}
                  unoptimized
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-[#34495E] dark:text-white">
                  {p.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 rounded-full bg-[#F99F20]/15 text-[#F99F20] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  className="flex items-center gap-2 text-[#F99F20] font-semibold hover:underline"
                >
                  View Project <FiExternalLink />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
