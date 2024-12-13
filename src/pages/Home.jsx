import React from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/worktrack image.jpg";
import image2 from "../assets/about-us.jpg";
import image4 from "../assets/contact-us.jpg";


const Home = () => {
  const navigate = useNavigate();
  const handleStartClick = () => {
    navigate("/Dashboard");
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="h-screen w-full bg-white flex flex-col md:flex-row pt-16">
        <div className="h-full w-full md:w-6/12 bg-white flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold p-3 text-center md:text-left">
            <div className="p-2 pb-0">
              Track your <span className="text-[#6C6EF5]">work progress</span>
            </div>
            <div className="p-2 pb-0">
              <span className="text-[#6C6EF5]">Anywhere</span> Anytime!
            </div>
            <div className="p-2 pb-0">
              Simplifying <span className="text-[#6C6EF5]">field</span> work
            </div>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-6 text-center md:text-left">
            Elevate Your Workflow, Optimize Your Time.
          </p>
          <button
            className="px-8 py-3 bg-[#FE978E] text-white text-center rounded-full font-semibold text-lg md:text-2xl transition-all hover:bg-[#E1483E]"
            onClick={handleStartClick}
          >
            Start
          </button>
        </div>
        <div className="h-full w-full md:w-6/12 md:block">
          <img className="h-full w-full object-cover" src={image} alt="Work Progress" />
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="h-auto w-full mt-20 bg-gradient-to-b from-white to-[#d2ddfc] flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-8 gap-6 md:gap-12 border-b-2"
      >
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start justify-center w-full md:w-6/12 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#6C6EF5] leading-tight">
            About Us
          </h1>
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-justify">
            Welcome to <span className="font-semibold text-[#6C6EF5]">WorkTrack</span>, your ultimate solution for simplifying and streamlining fieldwork operations...
          </p>
          <button className="px-6 py-2 md:px-8 md:py-3 bg-[#6C6EF5] text-white rounded-full font-medium text-sm md:text-lg shadow-lg transition-all hover:bg-[#4A4DE4] hover:scale-105">
            Learn More
          </button>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-5/12 h-auto md:block">
          <img className="w-full h-full shadow-lg rounded-lg hover:scale-105 transition-transform" src={image2} alt="Work Progress" />
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact"
        className="h-auto w-full flex flex-col md:flex-row pt-16 border-b-2 bg-gradient-to-b from-white to-[#d2ddfc]"
      >
        <div className="h-auto w-full md:w-6/12 bg-white flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#d2ddfc] p-6">
          {/* Contact Form */}
          <div className="w-full md:w-8/12 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm md:text-base font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm md:text-base font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm md:text-base font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="h-full w-full md:w-6/12 hidden md:block">
          <img className="h-full w-full object-cover" src={image4} alt="Work Progress" />
        </div>
      </section>
    </div>
  );
};

export default Home;
