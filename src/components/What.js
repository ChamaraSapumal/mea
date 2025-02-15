import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Camera, Code, Compass, Terminal } from "lucide-react";

const What = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - card.left) / card.width;
    const y = (e.clientY - card.top) / card.height;
    setMousePosition({ x, y });
  };

  const cards = [
    { icon: Code, title: "Developer", color: "from-purple-500" },
    { icon: Camera, title: "Designer", color: "from-pink-500" },
    { icon: Compass, title: "Explorer", color: "from-blue-500" },
    { icon: Terminal, title: "Innovator", color: "from-green-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />

      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Create Something Amazing
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transform your ideas into reality with cutting-edge technology and
            innovative design
          </p>
        </motion.div>

        {/* 3D Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                transform: isHovered
                  ? `perspective(1000px) rotateX(${
                      (mousePosition.y - 0.5) * 20
                    }deg) rotateY(${(mousePosition.x - 0.5) * 20}deg)`
                  : "none",
                transition: "transform 0.3s ease",
              }}
            >
              <div
                className={`h-64 rounded-xl p-6 bg-gradient-to-br ${card.color} to-gray-800 
                             shadow-lg group-hover:shadow-2xl transition-all duration-300
                             flex flex-col items-center justify-center space-y-4`}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-4 bg-white/10 rounded-full"
                >
                  <card.icon size={32} className="text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                <div className="w-12 h-1 bg-white/30 rounded-full group-hover:w-24 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full
                     font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default What;
