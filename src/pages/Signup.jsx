import React from "react";
import loginImg from "../assets/login image.jpg";
import Header from "../compnents/Header";

const Signup = () => {
  return (
    <div>
      <Header />
      <section
        id="signup"
        className="min-h-screen w-full flex flex-col-reverse lg:flex-row items-center justify-center bg-gradient-to-b from-white to-[#d2ddfc] pt-16"
      >
        {/* Signup Form Section */}
        <div className="w-full lg:w-6/12 flex flex-col items-center justify-center py-8 px-4 lg:py-24 lg:px-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center lg:text-left">
            Create Your Account
          </h1>
          <p className="text-gray-600 mb-6 text-lg lg:text-xl text-center lg:text-left">
            Fill in the details to get started!
          </p>
          <form className="w-full max-w-md space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Create a password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                className="block text-gray-700 mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Re-enter your password"
                required
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="mr-2 h-5 w-5 text-blue-500 rounded"
                required
              />
              <label htmlFor="terms" className="text-gray-700 text-sm">
                I agree to the{" "}
                <a href="#" className="text-indigo-500 hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-6/12 flex items-center justify-center">
          <img
            className="w-full max-w-lg object-contain lg:h-screen"
            src={loginImg}
            alt="Signup"
          />
        </div>
      </section>
    </div>
  );
};

export default Signup;
