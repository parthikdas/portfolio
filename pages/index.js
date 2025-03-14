import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image'

import SkillsSection from "@/components/skills";
import Contacts from "@/components/contact";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "98%"]);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const text = "Parthik Kumar Das";

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray to-blue-950 text-white px-6 sm:px-12 lg:px-24 py-12 relative overflow-hidden">
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-900 to-black opacity-0"
        style={{ y: bgY }}
      ></motion.div>
      
      <motion.div 
  className="fixed bottom-4 left-1/2 h-2 bg-blue-400 z-50 progress origin-center transform -translate-x-1/2"
  style={{ width: progressWidth }}
      ></motion.div>

      <header className="flex justify-between items-center py-6 relative z-10">
        <h1 className="text-3xl font-semibold">
            <AnimatePresence>
              {text.split('').map((char, i) => (
                <motion.span
                  ref={ref}
                  key={i}
                  initial={{ opacity: 0, x: -18 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  exit="hidden"
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-xl text-center sm:text-2xl font-bold tracking-tighter md:text-4xl md:leading-[3rem]"
                >
                  {char === ' ' ? <span>&nbsp;</span> : char}
                </motion.span>
              ))}
            </AnimatePresence>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: text.length * 0.1 }}
              className="text-xl sm:text-xl text-gray-400 font-medium"
            >
              Software Engineer
          </motion.p>
        </h1>
        <nav className="space-x-6 text-lg">
          <Link href="#experience" className="hover:text-blue-400">Experience</Link>
          <Link href="#skills" className="hover:text-blue-400">Skills</Link>
          <Link href="#projects" className="hover:text-blue-400">Projects</Link>
          <Link href="#contact" className="hover:text-blue-400">Contact</Link>
        </nav>
      </header>
      <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
      <section id="about" className="mt-16 relative bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg overflow-hidden z-10 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-left"
        >
          <h3 className="text-3xl font-semibold text-blue-400 mb-4">About Me</h3>
          <p className="text-md text-gray-400">
            I’m Parthik Kumar Das, a Software Engineer passionate about Distributed Systems, Cloud Computing, and Scalable Architectures. I specialize in backend development, system design, and performance optimization, ensuring seamless, high-availability solutions. <br /><br />
            I have worked on high-performance API integrations, load-balanced authentication systems, and CI/CD pipelines, optimizing system performance by 30% and reducing query execution time by 50%. My expertise spans Java, Spring Boot, Node.js, Microservices, Kafka, Kubernetes.<br /><br />
            I thrive on solving complex engineering problems, architecting robust and scalable solutions, and continuously learning cutting-edge technologies to stay ahead in the ever-evolving tech landscape.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image src="/try.png" alt="About Me Illustration" width={400} height={300} className="opacity-90 drop-shadow-lg filter hue-rotate-180 saturate-100 contrast-90 " />

        </motion.div>
      </section>


      <SkillsSection/>


      <section id="projects" className="mt-16 relative bg-gray-800 p-8 rounded-lg shadow-lg overflow-hidden">
        <h3 className="text-2xl font-semibold border-b pb-2 text-blue-400">Projects</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-blue-200">VeriPass - Secure Authentication</h4>
            <p className="text-600">Developed a high-availability microservices authentication system handling 200+ API requests/sec with JWT-based security.</p>
            <Link href="https://github.com/parthikdas" className="text-blue-600 hover:underline">GitHub</Link>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-blue-200">myMeet - Video Conferencing</h4>
            <p className="text-600">Optimized WebRTC & WebSocket protocols, reducing latency to 100ms, supporting 300+ concurrent users.</p>
            <Link href="https://github.com/parthikdas" className="text-blue-600 hover:underline">GitHub</Link>
          </div>
        </div>
      </section>

      <Contacts/>

    </div>
  );
}
