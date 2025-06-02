"use client";
import { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer/build/spline-viewer.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Motion variants for slide in from right
  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const contacts = [
    { icon: <FaEnvelope size={30} />, text: "parthikdas@gmail.com", href: "mailto:parthikdas@gmail.com" },
    { icon: <FaPhoneAlt size={30} />, text: "+91 8768457901", href: "tel:8768457901" },
    { icon: <FaLinkedinIn size={30} />, text: "linkedin.com/parthik-kumar-das", href: "https://linkedin.com/in/parthik-kumar-das-833b221ab" },
    { icon: <FaGithub size={30} />, text: "github.com/parthikdas", href: "https://github.com/parthikdas" },
    { icon: <FaInstagram size={30} />, text: "instagram.com/parthikdas", href: "https://www.instagram.com/kit_d_rock" },
    { icon: <SiLeetcode size={30} />, text: "leetcode.com/parthik_das", href: "https://leetcode.com/u/parthik_das/" },
  ];

  return (
    <section id="contact" className="snap-start min-h-screen flex items-center justify-center bg-bg relative">
      <div className="absolute top-0 left-0 w-full h-full z-10 flex">
        <div className="md:w-1/2 md:h-full w-full h-1/2 mx-auto my-auto flex">
          <spline-viewer
            url="https://prod.spline.design/fJ2ptJKzT-sDkpfO/scene.splinecode"
            background="rgba(0,0,0,0)"
            style={{ width: "100%", height: "100%" }}
          ></spline-viewer>
          <div className="md:block hidden absolute bottom-10 left-10 z-50 bg-black bg-opacity-60 text-white px-3 py-1 rounded-md text-sm animate-fadeOut pointer-events-none">
            Try zoom or click rotate the cube 👆
          </div>
        </div>

        <div className="md:relative absolute md:w-1/2 w-full h-full flex flex-col justify-center items-center p-8 z-20 space-y-6 
                bg-transparent bg-opacity-10 backdrop-filter backdrop-blur-sm">
          <h2 className="text-4xl mb-6 text-bg font-semibold">Contact</h2>

          {contacts.map(({ icon, text, href }, i) => (
            <motion.div
              key={i}
              className="text-lg flex items-center space-x-4 w-full max-w-xs"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={slideInFromRight}
            >
              {icon}
              <p className="w-full px-4 py-2 rounded-md">
                <a href={href} target="_blank" rel="noopener noreferrer" className="md:text-blue-400 text-bg">
                  {text}
                </a>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
