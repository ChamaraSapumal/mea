import React from "react";
import { motion } from "framer-motion";

const technologies = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    description: "Component-based UI development",
    experience: "3 years",
    level: "Advanced",
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Spring Boot",
    category: "Backend",
    description: "Java-based microservices",
    experience: "2 years",
    level: "Intermediate",
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "MySQL",
    category: "Database",
    description: "Relational database management",
    experience: "4 years",
    level: "Expert",
    color: "bg-amber-500",
  },
  {
    id: 4,
    name: "Tailwind",
    category: "Styling",
    description: "Utility-first CSS framework",
    experience: "2 years",
    level: "Advanced",
    color: "bg-cyan-500",
  },
  {
    id: 5,
    name: "Git",
    category: "DevOps",
    description: "Version control system",
    experience: "3 years",
    level: "Advanced",
    color: "bg-red-500",
  },
];

const TechCard = ({ tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative bg-black rounded-xl p-6 ring-1 ring-gray-900/5 h-full flex flex-col">
        {/* Top Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${tech.color}`} />
            <span className="text-gray-400 text-sm">{tech.category}</span>
          </div>
          <div className="px-3 py-1 rounded-full bg-gray-800 text-xs text-gray-300">
            {tech.experience}
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
            {tech.name}
          </h3>
          <p className="text-gray-400 text-sm mb-4">{tech.description}</p>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">Proficiency</span>
            <span className="text-gray-300 text-sm">{tech.level}</span>
          </div>
          <div className="mt-2 h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width:
                  tech.level === "Expert"
                    ? "100%"
                    : tech.level === "Advanced"
                    ? "85%"
                    : "70%",
              }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className={`h-full ${tech.color}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Technologies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Modern technologies I leverage to create exceptional digital
            experiences
          </p>
        </motion.div>
      </div>

      {/* Tech Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <TechCard key={tech.id} tech={tech} index={index} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mt-16 text-gray-400"
      >
        <p className="text-sm">
          Continuously learning and expanding my technical expertise
        </p>
      </motion.div>
    </div>
  );
};

export default Technologies;
