"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-white/30 backdrop-blur-xl pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Name */}
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
          Rajat Mishra
        </h3>

        {/* Small Tagline */}
        <p className="mt-1 text-sm text-gray-500">
          Frontend Developer & UI/UX Enthusiast
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 mt-6">
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
              className="p-3 rounded-full border border-gray-300/60 text-gray-700 bg-white/40
              hover:bg-black hover:text-white hover:border-black transition-all duration-300 ease-out 
              shadow-sm hover:shadow-md hover:scale-110"
            >
              <s.icon className="text-lg" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300/50 mt-10 mb-5" />

        {/* Copyright */}
        <p className="text-xs text-gray-500 tracking-wide">
          © {new Date().getFullYear()} Rajat Mishra — Made with passion.
        </p>
      </div>
    </footer>
  );
}
