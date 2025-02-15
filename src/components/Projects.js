import React, { useState } from "react";
import HospitalManagementImage from "../assets/hospitalManagement.png";
import HospitalOne from "../assets/hospitalOne.png";
import ClothingShop from "../assets/clothingShop.png";
import WeatherApp from "../assets/weatherApp.png";
import BurgerShop from "../assets/burgerShop.png";
import TourBooking from "../assets/tourBooking.png";
import BookInfo from "../assets/bookinfo.png";
import SacSavory from "../assets/sac-savory.png";
import GoDown from "../components/GoDown";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaAngular,
  FaSass,
  FaSearch,
  FaCode,
  FaMobile,
  FaPalette,
} from "react-icons/fa"; // Import technology icons
import { IoLogoFirebase } from "react-icons/io5";
import { DiFirebase } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const categories = [
  { id: "all", name: "All Projects", icon: <FaSearch /> },
  { id: "web", name: "Web Apps", icon: <FaCode /> },
  { id: "mobile", name: "Mobile Apps", icon: <FaMobile /> },
  { id: "ui", name: "UI/UX", icon: <FaPalette /> },
];

const projects = [
  {
    title: "SAC Savory",
    description:
      "Delight in a culinary journey with our gourmet dishes, blending exquisite flavors and premium ingredients for an unforgettable experience.",
    link: "https://chamarasapumal.github.io/sac-savory/",
    image: SacSavory,
    technologies: [
      <FaReact />,
      <FaNodeJs />,
      <IoLogoFirebase />,
      <DiFirebase />,
      <RiTailwindCssFill />,
    ],
    category: "web", // Add category
    featured: true, // Add featured status
    github: "https://...",
  },
  {
    title: "Book Info",
    description:
      "Discover detailed information about books, authors, categories, and reviews.",
    link: "https://chamarasapumal.github.io/bookinfo/",
    image: BookInfo,
    technologies: [
      <FaReact />,
      <FaNodeJs />,
      <IoLogoFirebase />,
      <DiFirebase />,
      <RiTailwindCssFill />,
    ], // Add technologies used
    category: "web", // Add category
    featured: true, // Add featured status
    github: "https://...",
  },
  {
    title: "Hospital Management System",
    description:
      "Streamlines hospital operations with patient management and appointment scheduling.",
    link: "https://chamarasapumal.github.io/hospital-management-landing",
    image: HospitalManagementImage,
    technologies: [<FaReact />, <FaNodeJs />, <FaHtml5 />, <FaCss3Alt />], // Add technologies used
    category: "web", // Add category
    featured: true, // Add featured status
    github: "https://...",
  },
  {
    title: "Hospital Portfolio",
    description:
      "A platform for managing healthcare projects and collaboration.",
    link: "https://chamarasapumal.github.io/hospital-one/",
    image: HospitalOne,
    technologies: [<FaReact />, <FaNodeJs />, <FaHtml5 />, <FaCss3Alt />],
    category: "web", // Add category
    featured: true, // Add featured status
    github: "https://...",
  },
  {
    title: "Clothing Shop",
    description:
      "E-commerce platform for clothing sales and inventory management.",
    link: "https://chamarasapumal.github.io/handy-test/",
    image: ClothingShop,
    technologies: [<FaReact />, <FaNodeJs />, <FaHtml5 />, <FaBootstrap />],
    category: "web", // Add category
    featured: true, // Add featured status
    github: "https://...",
  },
  {
    title: "Burger Shop",
    description:
      "Management system for fast-food order tracking and customer service.",
    link: "https://chamarasapumal.github.io/mosburgers/",
    image: BurgerShop,
    technologies: [<FaAngular />, <FaHtml5 />, <FaSass />, <FaBootstrap />],
    category: "web", // Add category
    featured: true, // Add featured status
    github: "https://...",
  },
  {
    title: "Weather Application",
    description: "Provides real-time weather updates and forecasts.",
    link: "https://chamarasapumal.github.io/weather-app/",
    image: WeatherApp,
    technologies: [<FaJs />, <FaHtml5 />, <FaCss3Alt />],
    category: "mobile", // Add category
    featured: true, // Add featured status
    github: "https://...",
  },
  {
    title: "Touring Website",
    description: "Explore and book tours with itinerary management.",
    link: "https://chamarasapumal.github.io/hismatours/",
    image: TourBooking,
    technologies: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />],
    category: "web", // Add category
    featured: true, // Add featured status
    github: "https://...",
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -inset-0.5 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-fuchsia-600 to-purple-600" />
      <div className="relative flex flex-col h-full bg-black rounded-2xl overflow-hidden">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-between p-6"
          >
            <div className="flex gap-4">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <FaExternalLinkAlt className="w-5 h-5" />
              </motion.a>
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            {project.title}
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-gray-800/50 rounded-xl text-xl text-gray-300 hover:bg-gray-700/50 transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

        {project.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "all" || project.category === selectedCategory
  );

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
                Projects That Define Me
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my journey through technology and innovation
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/chamarasapumal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl transition-all duration-300 group"
          >
            <FaGithub className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-lg font-medium">View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
