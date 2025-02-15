import React from "react";
import ScrollDown from "./ScrollDown"; // Ensure the path is correct
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import scrollDownAnimation from "../assets/scrollDownAnimation.json"; // Ensure the path is correct
import Lottie from "lottie-react"; // Import Lottie
import sayHiAnimation from "../assets/HeroAnimation.json";

const Hero = () => {
  return (
    <header className="relative bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex flex-col justify-center text-white overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold">
          Sapumal Cham&reg;
        </h1>
        <p className="mt-4 text-lg md:text-xl mb-6">
          Innovative Software Engineer & Tech Enthusiast
        </p>
        <div className="mt-12">
          <a
            href="#about"
            className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
          >
            Discover More
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-11 space-x-6">
          <a
            href="https://github.com/ChamaraSapumal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/sapumal-aryarathne-127599312"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://twitter.com/SapumalCham"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <FaTwitter size={30} />
          </a>
        </div>
      </div>

      {/* Scroll Down Icon Positioned at the Bottom */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <ScrollDown animationData={scrollDownAnimation} targetId="about" />{" "}
        {/* Pass animation data and target ID */}
      </div>

      {/* Full Background Animation */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <Lottie
          animationData={sayHiAnimation}
          loop={true}
          autoplay={true}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0.3,
          }}
        />
      </div>
    </header>
  );
};

export default Hero;
