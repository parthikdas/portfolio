// Skills + exp
"use client";
import { motion } from "framer-motion";
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
export default function Experience() {
    return (
        <section id="experience" className="relative snap-start min-h-screen flex flex-col items-center justify-center">
            <Timeline/>
            <Skills/>
        </section>
    );
}