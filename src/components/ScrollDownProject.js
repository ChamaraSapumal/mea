import React from "react";
import Lottie from "lottie-react"; // Correct Lottie import
import scrollDownAnimation from "../assets/scrollDownProjectAnimation.json"; // Ensure the path is correct

const ScrollDownProject = () => {
  const handleScroll = () => {
    const aboutSection = document.getElementById("projects");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {/* Lottie animation as a clickable element */}
      <Lottie
        animationData={scrollDownAnimation}
        loop={true}
        className="w-50 h-36 cursor-pointer"
        onClick={handleScroll} // Trigger smooth scroll on click
      />
    </div>
  );
};

export default ScrollDownProject; // Ensure the default export
