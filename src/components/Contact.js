import React, { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
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
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I am always looking for new opportunities. Have an exciting project
            you need help with or just want to say hi? I'll try my best to get
            back to you!
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group max-w-xl mx-auto mb-16"
        >
          <div className="absolute -inset-1 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-fuchsia-600 to-purple-600" />
          <div className="relative bg-black rounded-xl p-8">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-gray-900 border border-gray-800 text-gray-100 placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-gray-900 border border-gray-800 text-gray-100 placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="4"
                  className="w-full bg-gray-900 border border-gray-800 text-gray-100 placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group w-full"
              >
                <div className="absolute -inset-0.5 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-fuchsia-600 to-purple-600" />
                <div className="relative w-full px-6 py-3 bg-black rounded-lg">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent font-semibold">
                    Say Hi!
                  </span>
                </div>
              </motion.button>
            </form>
            {result && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
              >
                {result}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Additional Information Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {[
            {
              icon: CalendarDaysIcon,
              title: "Weekly articles",
              description:
                "Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.",
            },
            {
              icon: HandRaisedIcon,
              title: "No spam",
              description:
                "Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-fuchsia-600 to-purple-600" />
              <div className="relative flex flex-col h-full bg-black rounded-xl p-8">
                <div className="mb-6 relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
