import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/loading-animation.json"; // Path to your downloaded Lottie JSON file

const LoadingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out transition after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex items-center justify-center h-screen bg-[#1E293B] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <Lottie options={defaultOptions} height={200} width={200} />
        <p className="mt-4 text-white text-lg font-semibold animate-pulse">
          Loading, please wait...
        </p>
        <div className="mt-2 text-gray-300 text-sm">
          <span className="block">We appreciate your patience!</span>
          <span className="block">Exciting things are coming...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
