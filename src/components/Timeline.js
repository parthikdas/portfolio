import { motion } from "framer-motion";

export default function Timeline() {
  const current = {
    company: "Amazon",
    role: "SDE I",
    duration: "Jun'25 – Present",
    description:
      "Building scalable backend systems in the retail org. Led optimization of Lambda-based microservices, reducing latency by 25%.",
  };

  const previous = [
    {
      company: "Incedo",
      role: "Software Engineer",
      duration: "Aug '24 – Jun '25",
      description:
        "Built internal tools for financial clients. Full-stack work with Spring Boot, React, Docker. Collaborated with 3 teams on a scalable report automation system.",
    },
    {
      company: "CDATS",
      role: "Web Developer",
      duration: "Jan '21 – Mar '22",
      description:
        "Developed internal dashboards and automation scripts using vanilla JS and Node. Optimized legacy PHP systems.",
    }
  ];

  return (
    <div className="px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT – Current Role */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-bg p-8 shadow-xl rounded-lg border border-gray-600"
        >
          <h4 className="text-sm uppercase text-gray-400 text-bg mb-2">Current Role</h4>
          <h3 className="text-2xl font-bold text-amber-500 mb-1">{current.role}</h3>
          <p className="text-lg text-bg">{current.company}</p>
          <p className="text-sm text-bg mb-4">{current.duration}</p>
          <div className="max-h-32 overflow-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
            <p className="text-bg">{current.description}</p>
          </div>
        </motion.div>

        {/* RIGHT – Previous Roles */}
        <div className="flex flex-col h-full">
          <h4 className="text-sm uppercase text-gray-400 mb-2">Previous Roles</h4>
          <div className="space-y-6 overflow-y-auto pr-2 max-h-[400px] scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
            {previous.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-bg p-6 shadow-lg rounded-lg border border-gray-600"
              >
                <h4 className="text-xl font-semibold text-bg">
                  {exp.role}
                </h4>
                <p className="text-sm text-bg">{exp.company} | {exp.duration}</p>
                <div className="max-h-24 overflow-auto mt-2 pr-1 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
                  <p className="text-bg">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
