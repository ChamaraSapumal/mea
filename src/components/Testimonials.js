import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "This was the best experience I've ever had. The team is outstanding!",
    designation: "CEO, Example Inc.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    feedback: "Incredible service and support. Highly recommend to anyone!",
    designation: "CTO, Tech World",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Mike Johnson",
    feedback:
      "A game-changer for our business. Can't imagine working without it.",
    designation: "Product Manager, Innovate",
    image: "https://via.placeholder.com/150",
  },
];

function Testimonial() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen py-11 animate-gradient-move">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl drop-shadow-lg">
          Hear What Our Clients Say
        </h2>
        <p className="mt-3 text-xl text-gray-200 sm:mt-4 max-w-2xl mx-auto">
          We're proud of the relationships we've built with our clients. Here's
          what they have to say.
        </p>

        <div className="mt-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3500 }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center">
                  <div className="relative p-8 bg-white/70 backdrop-blur-md shadow-xl rounded-lg max-w-md mx-auto border border-gray-200 transform transition-transform hover:scale-105 hover:shadow-2xl">
                    <FaQuoteLeft className="text-5xl text-yellow-300 absolute top-[-30px] left-[-30px]" />
                    <div className="px-4 py-6">
                      <p className="text-lg font-semibold text-gray-800 italic">
                        {testimonial.feedback}
                      </p>
                    </div>
                    <FaQuoteRight className="text-5xl text-yellow-300 absolute bottom-[-30px] right-[-30px]" />
                  </div>
                  <div className="mt-6 flex flex-col items-center">
                    <img
                      className="w-28 h-28 rounded-full border-4 border-yellow-300 shadow-lg"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <h3 className="mt-4 text-xl font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-yellow-200">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
