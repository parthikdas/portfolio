// "use client" // if ur component relies on states or effect or like any client related things like window u use this to tell that render this on client side

import { motion } from "framer-motion";
import { FaJava, FaNodeJs, FaAws, FaDocker, FaJenkins, FaReact, FaDatabase, FaPython } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { GiFiles } from "react-icons/gi";
import { SiSpringboot, SiApachekafka, SiKubernetes, SiJavascript, SiMysql } from "react-icons/si";

const skills = [
    { name: "Java", icon: <FaJava size={24} />, color: "#FF5733" },
    { name: "Spring Boot", icon: <SiSpringboot size={24} />, color: "#28A745" },
    { name: "JavaScript", icon: <SiJavascript size={24} />, color: "#F7DF1E" },
    { name: "React", icon: <FaReact size={24} />, color: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs size={24} />, color: "#8CC84B" },
    { name: "Microservices", icon: <FaGears size={24} />, color: "#FF8C00" },
    { name: "Database", icon: <FaDatabase size={24} />, color: "#6A0DAD" },
    { name: "MySQL", icon: <SiMysql size={24} />, color: "#00758F" },
    { name: "Python", icon: <FaPython size={24} />, color: "#FFD43B" },
    { name: "Distributed Systems", icon: <GiFiles size={24} />, color: "#1E90FF" },
    { name: "Kafka", icon: <SiApachekafka size={24} />, color: "#231F20" },
    { name: "AWS", icon: <FaAws size={24} />, color: "#FF9900" },
    { name: "Docker", icon: <FaDocker size={24} />, color: "#0DB7ED" },
    { name: "Kubernetes", icon: <SiKubernetes size={24} />, color: "#326CE5" },
    { name: "CI/CD", icon: <FaJenkins size={24} />, color: "#D24939" }
  ];

// Path drawing animation (only triggers when in view)
const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

export default function SkillsSection() {
  return (
    <section id="skills" className="mt-16 bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-3xl font-semibold text-blue-400 text-center mb-8">Skills</h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center justify-center bg-gray-700 p-0 rounded-lg aspect-square shadow-md"
            whileHover={{ scale: 1.1 }}
          >
            {/* SVG Animated Border */}
            <motion.svg
               width="100"
              height="100"
              viewBox="0 0 100 100"
              className="absolute top-0 left-0 w-full h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Triggers once when 30% is visible
            >
              <motion.rect
                x="5"
                y="5"
                width="90"
                height="90"
                rx="10"
                stroke={skill.color}
                strokeWidth="3"
                fill="transparent"
                variants={draw}
              />
            </motion.svg>

            {/* Skill Icon */}
            <motion.div 
              whileHover={{ rotate: 10 }} 
              transition={{ type: "spring", stiffness: 200 }}
              className="text-5xl"
            >
              {skill.icon}
            </motion.div>

            {/* Skill Name */}
            <span className="text-xs md:text-lg font-semibold mt-1">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
