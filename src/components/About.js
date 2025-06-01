"use client";
import React from 'react';
import { motion } from "framer-motion";
import { AnimatePresence, useInView } from 'framer-motion';
export default function About() {
    const text = "Parthik Kumar Das";
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <h1 className="text-5xl font-bold">
            <AnimatePresence>
              {text.split('').map((char, i) => (
                <motion.span
                  ref={ref}
                  key={i}
                  initial={{ opacity: 0, x: -18 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  exit="hidden"
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-4xl text-center font-bold tracking-tighter md:text-6xl md:leading-[3rem]"
                >
                  {char === ' ' ? <span>&nbsp;</span> : char}
                </motion.span>
              ))}
            </AnimatePresence>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: text.length * 0.1 }}
                className="md:text-2xl text-xl text-gray-400 font-medium mt-2">
                Software Engineer
            </motion.p>
        </h1>
    );
}