import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Software Engineer - Incedo",
    location: "Hyderabad, India",
    duration: "08/2024 – Present",
    points: [
      "Designed a distributed authentication system with load balancing, optimizing JWT-based security and API execution, reducing latency by 20%.",
      "Streamlined deployment through CI/CD pipelines using Docker.",
      "Architected API integrations for optimized data retrieval, increasing system performance by 30% and cutting query execution time by 50%.",
      "Implemented advanced data filtering techniques, minimizing unnecessary data transmission by 25% through distributed caching.",
    ],
    isCurrent: true, // Highlight this
  },
  {
    title: "Web Developer - CDATS",
    location: "Chennai, India",
    duration: "03/2021 – 01/2022",
    points: [
      "Improved user retention on SRM websites by 25% through a redesign of content management and performance optimization.",
      "Reduced website update turnaround by 50% with efficient admin panel upgrades and bug fixes.",
    ],
    isCurrent: false,
  },
];

export default function SxpSection() {
  return (
    <section id="experience" className="mt-16 relative bg-gray-800 p-8 rounded-lg shadow-lg overflow-hidden">
      <h3 className="text-2xl font-semibold border-b pb-2 text-blue-400">Experience</h3>

      <div className="relative mt-6">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 top-0 w-1 bg-blue-500 h-full"></div>

        <div className="space-y-8 pl-10">
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.4 }}
              className="relative bg-gray-700 p-6 rounded-lg shadow-md"
            >
              {/* Circle Indicator */}
              <div
                className={`absolute left-[-20px] top-5 w-5 h-5 rounded-full ${
                  job.isCurrent ? "bg-blue-400 border-2 border-white" : "bg-gray-500"
                }`}
              ></div>

              <h4 className="text-xl font-semibold text-blue-200">{job.title}</h4>
              <p className="text-gray-400 text-sm">{job.location} | {job.duration}</p>
              <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
