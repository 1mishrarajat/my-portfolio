"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Line */}
        <div className="flex items-center justify-between">

          {/* LEFT - Short Branding */}
          <div className="text-lg font-bold tracking-wide">
            RM
          </div>

          {/* CENTER - Copyright */}
          <p className="text-gray-600 text-sm text-center flex-1">
            © {new Date().getFullYear()} Rajat Mishra. All Rights Reserved.
          </p>

          {/* RIGHT - Social Icons */}
          <div className="flex gap-3">
            {[
              { icon: FaGithub, link: "https://github.com/1mishrarajat" },
              { icon: FaLinkedin, link: "https://www.linkedin.com/in/rajat-mishra-6a0822255/" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-full 
                bg-gray-100 border border-gray-200 text-gray-700 
                hover:bg-[#F99F20] hover:text-white hover:border-[#F99F20]
                transition duration-300"
              >
                <s.icon className="text-base" />
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
