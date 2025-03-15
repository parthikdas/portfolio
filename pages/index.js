import React, {useState} from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import { MdKeyboardDoubleArrowUp, MdOutlineMenu } from "react-icons/md";
import SkillsSection from "@/components/skills";
import Contacts from "@/components/contact";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "98%"]);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const text = "Parthik Kumar Das";
  const [isOpen, setIsOpen] = useState(false);

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

      <header id="header" className="flex justify-between items-center py-6 relative z-10">
        {/* Animated Title */}
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
                  className="text-2xl text-center font-bold tracking-tighter md:text-4xl md:leading-[3rem]"
                >
                  {char === ' ' ? <span>&nbsp;</span> : char}
                </motion.span>
              ))}
            </AnimatePresence>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: text.length * 0.1 }}
              className="text-xl text-gray-400 font-medium"
            >
              Software Engineer
          </motion.p>
        </h1>

        {/* Desktop Navigation (Hidden on Mobile) */}
      <nav className="hidden md:flex space-x-6 text-lg">
        <Link href="#experience" className="hover:text-blue-400">Experience</Link>
        <Link href="#skills" className="hover:text-blue-400">Skills</Link>
        <Link href="#projects" className="hover:text-blue-400">Projects</Link>
        <Link href="#contact" className="hover:text-blue-400">Contact</Link>
      </nav>

      {/* Hamburger Menu Button (Visible on Mobile) */}
      <button
        className="md:hidden p-2 text-gray-600 hover:text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'X' : <MdOutlineMenu className="text-3xl text-blue-400"/>}
      </button>

      {/* Mobile Menu (Hidden by Default) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }} // 0.8 = 80% opacity
            className="fixed inset-0 z-51 flex flex-col items-center justify-center space-y-6 text-white text-2xl h-screen overflow-hidden"
          >
            <Link href="#experience" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Experience</Link>
            <Link href="#skills" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Skills</Link>
            <Link href="#projects" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="#contact" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</Link>

            {/* Close Button */}
            <button className="mt-8 text-3xl font-semibold" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
      <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />

      <section id="about" className="mt-16 relative bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-left"
        >
          <h3 className="text-3xl font-semibold text-blue-400 mb-4">About Me</h3>
          <p className="text-md md:text-lg text-gray-400 text-justify">
            Hey there! 👋 I’m Parthik Kumar Das, a Software Engineer specializing in Distributed Systems, Cloud Computing, and Scalable Architectures. I design high-performance backend systems, optimize APIs, and build fault-tolerant, low-latency solutions. <br /><br />
            🔹 Scaled authentication systems & CI/CD pipelines, improving performance by 30% and reducing query execution time by 50%.<br />
            🔹 Expertise in Java, Spring Boot, Node.js, Microservices, Kafka, Kubernetes.<br />
            🔹 Passionate about system design, performance optimization, and solving complex engineering challenges.
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
            <br/>
            <p className="text-600">Developed a high-availability microservices authentication system handling 200+ API requests/sec with JWT-based security.</p>
            <Link href="https://github.com/parthikdas" className="text-blue-600 hover:underline">GitHub</Link>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-blue-200">myMeet - Video Conferencing</h4>
            <br/>
            <p className="text-600">Optimized WebRTC & WebSocket protocols, reducing latency to 100ms, supporting 300+ concurrent users.</p>
            <Link href="https://github.com/parthikdas" className="text-blue-600 hover:underline">GitHub</Link>
          </div>
        </div>
      </section>

      <Contacts/>

      <Link href="#header" className="hover:text-blue-400">
        <button className={`fixed bottom-7 right-7 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all hover:bg-blue-700 z-50`}> <MdKeyboardDoubleArrowUp/> </button>
      </Link>

    </div>
  );
}
