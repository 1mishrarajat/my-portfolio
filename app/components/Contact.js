"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiCheck,
} from "react-icons/fi";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = () => {
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3500);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "rajatmishra74150@gmail.com",
      link: "mailto:rajatmishra74150@gmail.com",
    },
    { icon: FaPhone, label: "Phone", value: "+91 8737004720", link: "tel:+918737004720" },
    { icon: FaMapMarkerAlt, label: "Location", value: "Lucknow, India", link: null },
  ];

  const socialLinks = [
    { icon: FaGithub, link: "https://github.com", label: "GitHub" },
    { icon: FaLinkedin, link: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaTwitter, link: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 bg-[#10171f] text-white"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30 blur-[160px] bg-[#34495E] dark:bg-[#1A242F]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#F99F20] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-300 max-w-xl mx-auto mt-4">
            Let’s collaborate or just have a friendly chat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#F99F20] transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[#F99F20] flex items-center justify-center text-white text-xl shadow-md">
                  <item.icon />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{item.label}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-lg font-semibold hover:text-[#F99F20] transition"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-[#F99F20] hover:border-[#F99F20] transition"
                >
                  <s.icon className="text-xl" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
         {/* Right - Form */}
<motion.div
  initial={{ opacity: 0, x: 25 }}
  animate={isInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.6 }}
  className="p-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
>
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">

    {/* Floating Label Styles */}
    <style jsx>{`
      .form-group { position: relative; }
      .form-input {
        width: 100%;
        background: transparent;
        border-bottom: 1.5px solid rgba(255,255,255,0.25);
        padding: 12px 0;
        color: white;
        outline: none;
        transition: 0.3s ease;
      }
      .form-input:focus {
        border-color: #F99F20;
      }
      .form-label {
        position: absolute;
        top: 12px;
        left: 0;
        color: rgba(255,255,255,0.6);
        pointer-events: none;
        transition: 0.3s ease;
      }
      .form-input:focus + .form-label,
      .form-input:not(:placeholder-shown) + .form-label {
        transform: translateY(-18px);
        font-size: 0.75rem;
        color: #F99F20;
      }
    `}</style>

    {/* Two-column input grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="form-group">
        <input
          {...register("name", { required: true })}
          placeholder=" "
          className="form-input"
        />
        <label className="form-label">Full Name</label>
      </div>

      <div className="form-group">
        <input
          {...register("email", { required: true })}
          placeholder=" "
          className="form-input"
        />
        <label className="form-label">Email Address</label>
      </div>
    </div>

    {/* Full-width message */}
    <div className="form-group">
      <textarea
        {...register("message", { required: true })}
        placeholder=" "
        className="form-input h-32 resize-none"
      ></textarea>
      <label className="form-label">Your Message</label>
    </div>

    {/* Submit Button */}
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type="submit"
      className="w-full py-4 rounded-lg bg-[#F99F20] hover:bg-[#ffae48] font-semibold shadow-lg flex items-center justify-center gap-2"
    >
      {isSubmitted ? (
        <>
          <FiCheck className="text-xl" /> Sent Successfully
        </>
      ) : (
        <>
          <FiSend className="text-xl" /> Send Message
        </>
      )}
    </motion.button>

  </form>
</motion.div>

        </div>
      </div>
    </section>
  );
}
