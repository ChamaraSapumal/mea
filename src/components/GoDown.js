import React from "react";
import Lottie from "lottie-react"; // Correct Lottie import
import scrollDownAnimation from "../assets/goDown.json"; // Ensure the path is correct

const GoDown = () => {
  const handleScroll = () => {
    const aboutSection = document.getElementById("message");
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
        className="w-72 h-52 cursor-pointer"
        onClick={handleScroll} // Trigger smooth scroll on click
      />
    </div>
  );
};

export default GoDown; // Ensure the default export
