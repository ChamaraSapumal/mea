import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { href: "#hero-section", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#expertise", label: "Expertise" },
    { href: "#projects", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    // Handle smooth scrolling for all navbar links
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update URL without jump
        window.history.pushState({}, "", href);
      }
    };

    // Add click event listeners to all navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    // Cleanup event listeners
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 md:block hidden"
    >
      <div className="relative group">
        {/* Gradient border effect */}
        <div className="absolute -inset-0.5 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-fuchsia-600 to-purple-600" />

        {/* Main navbar container */}
        <div className="relative flex items-center bg-black rounded-full px-8 py-4">
          {/* Glowing background effect */}
          <div className="absolute inset-0 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-purple-400 to-pink-600" />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-between w-full">
            {/* Brand Name */}
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-xl mr-8 font-bold cursor-pointer whitespace-nowrap"
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Sapumal Cham
              </span>
            </motion.h1>

            {/* Navigation Items */}
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:bg-clip-text transition-all duration-300"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
