import React from "react";
import { motion } from "framer-motion";

const ExpertiseCard = ({ icon: Icon, title, description, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.02 }}
    className="relative group"
  >
    <div className="absolute -inset-0.5 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-fuchsia-600 to-purple-600" />
    <div className="relative flex flex-col h-full bg-black rounded-2xl p-8 overflow-hidden">
      {/* Glowing background effect */}
      <div
        className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${color}`}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon container */}
        <div className="mb-6 relative">
          <div
            className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center relative z-10`}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className={`absolute inset-0 ${color} blur-lg opacity-50`} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed">{description}</p>

        {/* Hover indicator */}
        <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-purple-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Expertise = () => {
  const expertiseData = [
    {
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Frontend Development",
      description:
        "Building responsive and performant web applications using React, Next.js, and modern CSS frameworks.",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 15l4-4c.5-.5 1.5-.5 2 0l4 4"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 13l2-2c.5-.5 1.5-.5 2 0l2 2"
          />
        </svg>
      ),
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful user interfaces with a focus on user experience and accessibility.",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7h16M4 12h16M4 17h16"
          />
        </svg>
      ),
      title: "Backend Development",
      description:
        "Developing scalable server-side solutions using Node.js, Express, and modern databases.",
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16v-4M12 8h.01"
          />
        </svg>
      ),
      title: "API Development",
      description:
        "Building and maintaining RESTful APIs with comprehensive documentation and security best practices.",
      color: "bg-gradient-to-br from-red-500 to-rose-500",
    },
    {
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
      title: "DevOps",
      description:
        "Implementing CI/CD pipelines and managing cloud infrastructure using modern DevOps tools.",
      color: "bg-gradient-to-br from-amber-500 to-yellow-500",
    },
    {
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Performance Optimization",
      description:
        "Optimizing web applications for speed, efficiency, and better user experience.",
      color: "bg-gradient-to-br from-teal-500 to-cyan-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                My Expertise
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Transforming ideas into exceptional digital experiences
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <ExpertiseCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
