"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-white pt-16 pb-8 text-black border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-wide">Rajat Mishra</h3>
            <p className="text-gray-600 text-sm mt-1">
              Frontend Developer • UI Designer • Creative Thinker
            </p>
          </div>

          {/* Navigation */}
          <ul className="flex gap-8 text-sm font-medium text-gray-600">
            <li><a href="#hero" className="hover:text-[#F99F20] transition">Home</a></li>
            <li><a href="#projects" className="hover:text-[#F99F20] transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-[#F99F20] transition">Skills</a></li>
            <li><a href="#contact" className="hover:text-[#F99F20] transition">Contact</a></li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: FaGithub, link: "https://github.com" },
              { icon: FaLinkedin, link: "https://linkedin.com" },
              { icon: FaTwitter, link: "https://twitter.com" },
              { icon: FaEnvelope, link: "mailto:rajatmishra74150@gmail.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full 
                bg-gray-100 border border-gray-200 text-gray-800 hover:bg-[#F99F20] hover:text-white hover:border-[#F99F20]
                transition duration-300 shadow-sm"
              >
                <s.icon className="text-lg" />
              </a>
            ))}
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-10"></div>

        {/* Bottom Text */}
        <p className="text-center text-gray-500 text-sm tracking-wide">
          © {new Date().getFullYear()} Rajat Mishra. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
