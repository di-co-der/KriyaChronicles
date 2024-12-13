import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-2 bg-gradient-to-b from-white to-[#d2ddfc] shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/" className="no-underline">
          <div className="text-black text-2xl sm:text-3xl md:text-5xl font-bold">
            Work<span className="text-[#6C6EF5]">Track</span>
          </div>
          <span className="text-black text-xs sm:text-sm md:text-base ml-4">
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

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(false)}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col items-start mt-12 px-6 space-y-4">
          <a
            href="/#home"
            className="text-gray-600 hover:text-blue-500 text-lg no-underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/#about"
            className="text-gray-600 hover:text-blue-500 text-lg no-underline"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="/#contact"
            className="text-gray-600 hover:text-blue-500 text-lg no-underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>
            <div className="text-gray-600 hover:text-blue-500 text-lg no-underline">
              Login
            </div>
          </Link>
          <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg hover:bg-blue-600">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Navigation Links for Desktop */}
      <div className="hidden md:flex md:space-x-12">
        <a
          href="/#home"
          className="text-gray-600 hover:text-blue-500 text-base no-underline"
        >
          Home
        </a>
        <a
          href="/#about"
          className="text-gray-600 hover:text-blue-500 text-base no-underline"
        >
          About Us
        </a>
        <a
          href="/#contact"
          className="text-gray-600 hover:text-blue-500 text-base no-underline"
        >
          Contact Us
        </a>
        <Link to="/login">
          <div className="text-gray-600 hover:text-blue-500 text-base no-underline">
            Login
          </div>
        </Link>
        <Link to="/signup">
          <button className="bg-blue-500 text-white text-base px-4 py-2 rounded-lg hover:bg-blue-600">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
