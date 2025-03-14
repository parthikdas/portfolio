import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contacts() {
    return (
        <section id="contact" className="mt-16 pb-16 relative bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg text-center z-10">
        <h3 className="text-s font-s pb-2 text-blue-200">Contact</h3>
        <h1 className="text-3xl font-bold border-b pb-2 text-blue-400">Get In Touch</h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-6 space-y-4"
        >
          <p className="text-gray-400 flex justify-center items-center space-x-2">
            <FaEnvelope size={20} /> <a href="mailto:parthikdas@gmail.com" target="_blank" className="text-blue-400 hover:underline">parthikdas@gmail.com</a>
          </p>
          <p className="text-gray-400 flex justify-center items-center space-x-2">
            <FaLinkedin size={20} /> <Link href="https://linkedin.com/in/parthik-kumar-das-833b221ab" target="_blank" className="text-blue-400 hover:underline">linkedin.com/parthik-kumar-das</Link>
          </p>
          <p className="text-gray-400 flex justify-center items-center space-x-2">
            <FaGithub size={20} /> <Link href="https://github.com/parthikdas" target="_blank" className="text-blue-400 hover:underline">github.com/parthikdas</Link>
          </p>
          <p className="text-gray-400 flex justify-center items-center space-x-2">
            <FaInstagram size={20} /> <Link href="https://www.instagram.com/kit_d_rock" target="_blank" className="text-blue-400 hover:underline">instagram.com/parthikdas</Link>
          </p>
        </motion.div>
      </section>
    );
};