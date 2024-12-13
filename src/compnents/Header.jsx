import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-2 bg-gradient-to-b from-white to-[#d2ddfc]">
      {/* Logo */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/" className="no-underline">
          <div className="text-black text-3xl md:text-5xl font-bold">
            Work<span className="text-[#6C6EF5]">Track</span>
          </div>
          <span className="text-black text-sm md:text-base ml-4">
            Simplifying field work
          </span>
        </Link>
        {/* Hamburger Menu for Mobile */}
        <button
          className="text-gray-600 md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        // className={`${
        //   isMenuOpen ? "block" : "hidden"
        // } absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent z-10 shadow-md md:shadow-none md:flex md:space-x-12`}
        className={`${
          isMenuOpen ? "block absolute top-14 left-0 w-full bg-white shadow-md z-10" : "hidden"
        } md:static md:block md:w-auto md:bg-transparent md:shadow-none md:flex md:space-x-12`}
      >
        <a
          href="/#home"
          className="block md:inline-block text-gray-600 hover:text-blue-500 text-lg no-underline px-4 py-2"
        >
          Home
        </a>
        <a
          href="/#about"
          className="block md:inline-block text-gray-600 hover:text-blue-500 text-lg no-underline px-4 py-2"
        >
          About Us
        </a>
        <a
          href="/#contact"
          className="block md:inline-block text-gray-600 hover:text-blue-500 text-lg no-underline px-4 py-2"
        >
          Contact Us
        </a>
        <Link to="/login" className="block md:inline-block">
          <div className="text-gray-600 hover:text-blue-500 text-lg no-underline px-4 py-2">
            Login
          </div>
        </Link>
      </div>

      {/* Sign Up Button */}
      <div className="hidden md:block">
        <Link to="/signup">
          <button className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg hover:bg-blue-600">
            Sign Up
          </button>
        </Link>
      </div>

      {/* Mobile Sign Up Button */}
      {isMenuOpen && (
        <div className="block md:hidden w-full text-center mt-2">
          <Link to="/signup">
            <button className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg hover:bg-blue-600">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
