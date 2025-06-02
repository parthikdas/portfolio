import { motion } from "framer-motion";
import { FaJava, FaPython, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiSpringboot, SiMongodb, SiMysql } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";



export default function Skills({reverse = false}) {
    const technologies = ["Java", "Python", "JavaScript", "C++", "SpringBoot", "Redis", "NextJs", "Tailwind", "Mongo", "MySql", "Docker"];
    const iconMap = {
        java: <FaJava className="inline-block md:w-6 md:h-6 w-5 h-5 mr-2 text-orange-500" />,
        python: <FaPython className="inline-block md:w-6 md:h-6 w-5 h-5 mr-2 text-blue-500" />,
        javascript: <IoLogoJavascript className="inline-block md:w-6 md:h-6 w-5 h-5 mr-2 text-yellow-400" />,
        springboot: <SiSpringboot className="inline-block md:w-6 md:h-6 w-5 h-5 mr-2 text-green-700" />,
        redis: <DiRedis className="inline-block md:w-6 md:h-6 w-5 h-5 mr-2 text-red-600" />,
        nextjs: <RiNextjsFill className="inline-block md:w-6 md:h-6 w-5 h-5 mr-2 text-cyan-800" />,
        tailwind: <RiTailwindCssFill className="inline-block md:w-6 md:h-6 w-5 h-5 mr-2 text-blue-400" />,
        mongo: <SiMongodb className="inline-block md:w-6 md:h-6 w-5 h-5 mr-2 text-green-400" />,
        mysql: <SiMysql className="inline-block md:w-6 md:h-6 w-5 h-5 mr-2 text-blue-500" />,
        docker: <FaDocker className="inline-block md:w-6 md:h-6 w-5 h-5 mr-2 text-cyan-400" />
    }
    const scrollingItems = Array.from({ length: 50 }, (_, i) => technologies[i % technologies.length]); // virtualItems = ["java", "python", "javascript", "c++", "java", "python", "javascript", "c++", // ... repeated up to 50 elements ];
    const direction = reverse ? ["-50%", "0%"] : ["0%", "-50%"]; // right or left
    return (
        <div className="absolute bottom-10 left-0 overflow-hidden whitespace-nowrap w-full bg-white/10 backdrop-blur-md shadow-md md:py-4 py-3 mt-2">
            <motion.div
                className="flex gap-8"
                animate={{ x: direction }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                }}
            >
                {scrollingItems.map((tech, index) => (
                    <span key={index} className="md:text-xl text-l font-semibold text-gray-400 uppercase">
                        {iconMap[tech.toLowerCase()] || null}
                        {tech.toUpperCase()}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}