// src/components/ScrollDown.js
import React from "react";
import Lottie from "lottie-react"; // Correct Lottie import
import PropTypes from "prop-types"; // Import PropTypes for type checking

const ScrollDown = ({ animationData, targetId }) => {
  const handleScroll = () => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {/* Lottie animation as a clickable element */}
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-16 h-16 cursor-pointer"
        onClick={handleScroll} // Trigger smooth scroll on click
      />
    </div>
  );
};

// PropTypes for type checking
ScrollDown.propTypes = {
  animationData: PropTypes.object.isRequired,
  targetId: PropTypes.string.isRequired,
};

export default ScrollDown; // Ensure the default export
