import React, { useState, useEffect } from "react";
import { Moon, Sun, Paintbrush } from "lucide-react";

const ThemeToggle = ({
  position = "right", // 'right' or 'left'
  animation = "bounce", // 'bounce', 'pulse', or 'float'
  showTooltip = true,
  customIcon = "default", // 'default' or 'brush'
}) => {
  const [isDark, setIsDark] = useState(() => {
    // Get initial theme from localStorage
    const savedTheme = localStorage.getItem("theme-preference");
    return savedTheme === "dark";
  });

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem("theme-preference", isDark ? "dark" : "light");
  }, [isDark]);

  const handleThemeToggle = () => {
    setIsDark(!isDark);

    // Add fade out effect
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease";

    // Navigate after fade animation
    setTimeout(() => {
      const targetUrl = isDark
        ? "https://chamarasapumal.github.io/me/"
        : "https://chamarasapumal.github.io/me/";
      window.location.href = targetUrl;
    }, 500);
  };

  // Dynamic animation classes
  const getAnimationClass = () => {
    switch (animation) {
      case "pulse":
        return "animate-pulse";
      case "float":
        return "animate-float";
      default:
        return "animate-bounce-slow";
    }
  };

  // Dynamic position classes
  const positionClass = position === "left" ? "left-4" : "right-4";

  return (
    <div className="relative group">
      {showTooltip && (
        <div
          className="absolute bottom-14 left-1/2 transform -translate-x-1/2 hidden group-hover:block 
          bg-gray-800 dark:bg-white text-white dark:text-gray-800 text-sm rounded-md py-2 px-4 
          shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 
          group-hover:scale-100 z-50"
        >
          Switch to {isDark ? "light" : "dark"} theme
        </div>
      )}

      <button
        onClick={handleThemeToggle}
        aria-label="Toggle Theme"
        className={`fixed bottom-4 ${positionClass} z-50 p-3 rounded-full 
          bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl 
          transform hover:-translate-y-1 transition-all duration-300 ${getAnimationClass()}`}
      >
        {customIcon === "brush" ? (
          <Paintbrush
            className={`w-6 h-6 ${
              isDark ? "text-purple-500" : "text-indigo-600"
            }`}
          />
        ) : isDark ? (
          <Sun className="w-6 h-6 text-amber-500" />
        ) : (
          <Moon className="w-6 h-6 text-blue-600" />
        )}
      </button>

      <style jsx>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default ThemeToggle;
