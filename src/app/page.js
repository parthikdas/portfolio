"use client";
import './globals.css';
import ParticlesBackground from "@/components/ParticlesBackground";
import About from '@/components/About';
import Contact from '@/components/Contact';
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";
import Experience from '@/components/Experience';

export default function Home() {
  const [isDark, setIsDark] = useState(false); // For theme

  useEffect(() => {
    // Check current theme on mount
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(prev => !prev);
  };

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">

      {/* Nav Section */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-bg/10 backdrop-blur-sm shadow-lg rounded-full px-6 py-2 flex items-center text-bg text-lg font-medium justify-between max-w-3xl w-fit space-x-8">
        <div className="flex space-x-8">
          <Link href="#about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link href="#experience" className="hover:text-blue-400 transition">
            Experience
          </Link>
          <Link href="#contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>
        <div>
          <button aria-label="Toggle Dark Mode" onClick={toggleTheme}
            className="rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none">
            <span className="text-xl">{isDark ? <CiLight /> : <CiDark />}</span>
          </button>
        </div>
      </nav>


      {/* Main Header Section */}
      <section id="about" className="snap-start relative h-screen overflow-hidden bg-bg-50">
        <ParticlesBackground />
        <div className="relative z-10 flex items-center justify-center h-full pointer-events-none">
          <About/>
          <div className="absolute bottom-10 right-10 z-50 bg-black bg-opacity-60 text-white px-3 py-1 rounded-md text-sm animate-fadeOut pointer-events-none">
            Try hovering or clicking the background 👆
          </div>
        </div>
      </section>

      {/* Experience and skills Section */}
      <Experience/>

      {/* Contact Section */}
      <Contact/>
    </div>
  );
}
