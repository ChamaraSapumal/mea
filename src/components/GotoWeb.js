import React from "react";
import Lottie from "lottie-react";
import upArrowAnimation from "../assets/eve.json"; // Adjust the path as necessary

const GotoWeb = () => {
  const handleClick = () => {
    // Redirect to the external website
    window.location.href = "https://chamarasapumal.github.io/mee/";
  };

  return (
    <div className="relative group">
      {/* Modern Tooltip */}
      <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-sm rounded-md py-2 px-4 shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 scale-95 group-hover:scale-100">
        Visit my portfolio
      </div>

      {/* Button with Lottie animation */}
      <button
        onClick={handleClick}
        aria-label="Go to Main Website"
        className="fixed bottom-4 left-4 z-50"
      >
        <Lottie
          animationData={upArrowAnimation}
          loop={true}
          style={{ width: "60px", height: "60px" }} // Adjust size as needed
        />
      </button>
    </div>
  );
};

export default GotoWeb;
