import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import upArrowAnimation from "../assets/up-arrow.json"; // Adjust the path as necessary

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Debounce function to reduce how often the scroll handler is called
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    setIsVisible(currentScroll > 300); // Show button if scrolled more than 300px
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {isVisible && (
        <button onClick={scrollToTop} aria-label="Scroll to Top">
          <Lottie
            animationData={upArrowAnimation}
            loop={true}
            style={{ width: "85px", height: "85px" }} // Adjust size as needed
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
