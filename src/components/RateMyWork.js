import React, { useState } from "react";
import Lottie from "lottie-react";
import starAnimation from "../assets/star-animation.json";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const RateMyWork = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRating = (index) => {
    setRating(index + 1);
  };

  const handleMouseEnter = (index) => {
    setHoveredRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData();

    formData.append("name", name);
    formData.append("rating", rating.toString());
    formData.append("message", message);
    formData.append("access_key", "6fd71e52-5c8f-4f7d-ade1-84c2cbbda75a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setIsSubmitted(true);
        event.target.reset();
        setRating(0);
        setName("");
        setMessage("");
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Lottie Animation */}
      <div className="absolute inset-0 flex justify-center items-center opacity-5">
        <Lottie
          animationData={starAnimation}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Rate My Work
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Your feedback helps me improve
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group mb-8"
          >
            <div className="absolute -inset-0.5 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-fuchsia-600 to-purple-600" />
            <div className="relative flex flex-col items-center bg-black rounded-2xl p-8">
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaStar
                      className={`cursor-pointer transition-colors duration-300 ${
                        index < (hoveredRating || rating)
                          ? "text-yellow-500"
                          : "text-gray-700"
                      }`}
                      onClick={() => handleRating(index)}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      size={40}
                    />
                  </motion.div>
                ))}
              </div>

              <form onSubmit={onSubmit} className="w-full space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 min-h-[120px]"
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
                >
                  Submit Feedback
                </motion.button>
              </form>
            </div>
          </motion.div>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-gray-300 mt-4"
            >
              {result}
            </motion.div>
          )}

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex justify-center mt-6"
            >
              <Lottie
                animationData={starAnimation}
                loop={false}
                autoplay={true}
                style={{ width: "200px", height: "200px" }}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RateMyWork;
