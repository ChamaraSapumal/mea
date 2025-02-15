import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaUserFriends, FaLightbulb } from "react-icons/fa";
import { SiAutocad, SiSolid } from "react-icons/si";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skills = [
    {
      icon: <FaCode />,
      title: "Software Development",
      description: "Building robust applications with modern frameworks.",
      technologies: ["React", "Node.js", "Python", "Java"],
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: <FaUserFriends />,
      title: "Team Collaboration",
      description: "Working effectively in teams to achieve common goals.",
      technologies: ["Git", "Agile", "Scrum", "Jira"],
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: <FaLightbulb />,
      title: "Creative Solutions",
      description:
        "Innovating and finding unique solutions to complex problems.",
      technologies: ["Design Thinking", "Problem Solving", "Innovation"],
      color: "bg-gradient-to-br from-amber-500 to-yellow-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Bridging the gap between digital and physical worlds
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-fuchsia-600 to-purple-600" />
              <div className="relative flex flex-col h-full bg-black rounded-2xl p-8">
                <p className="text-gray-300 leading-relaxed">
                  I'm Chamara Sapumal, a passionate engineer in training,
                  pursuing a Bachelor of Engineering Technology (Honors) in
                  Mechanical Engineering Technology at Uva Wellassa University
                  of Sri Lanka. As an aspiring Automation Engineer, I bridge the
                  gap between digital and physical worlds.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-gray-800 text-purple-400 px-4 py-2 rounded-xl"
                  >
                    <SiAutocad className="text-xl" />
                    <span>AutoCAD</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-gray-800 text-purple-400 px-4 py-2 rounded-xl"
                  >
                    <SiSolid className="text-xl" />
                    <span>SolidWorks</span>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl transition-all duration-300"
            >
              Let's Connect
            </motion.a>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div variants={containerVariants} className="grid gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute -inset-0.5 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-fuchsia-600 to-purple-600" />
                <div className="relative flex flex-col h-full bg-black rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`text-4xl p-3 rounded-xl text-white ${skill.color}`}
                    >
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        {skill.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{skill.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-xl"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
