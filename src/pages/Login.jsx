import React from "react";
import loginImg from "../assets/login image.jpg";
import { Link } from "react-router-dom";
import Header from "../compnents/Header";

const Login = () => {
  return (
    <div>
      <Header />
      {/* Login Section */}
      <section
        id="Login"
        className="min-h-screen w-full flex flex-col-reverse lg:flex-row items-center justify-center bg-gradient-to-b from-white to-[#d2ddfc] pt-16"
      >
        {/* Login Form Section */}
        <div className="w-full lg:w-6/12 flex flex-col items-center justify-center py-8 px-4 lg:py-24 lg:px-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center lg:text-left">
            Welcome back
          </h1>
          <p className="text-gray-600 mb-6 text-lg lg:text-xl text-center lg:text-left">
            Please enter your details
          </p>
          <form className="w-full max-w-md">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <a
                href="#"
                className="text-indigo-500 text-sm hover:underline"
              >
                Forgot password
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
          <Link
            to="/Signup"
            className="text-blue-500 mt-4 hover:underline cursor-pointer"
          >
            Create new account
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-6/12 flex items-center justify-center">
          <img
            className="w-full max-w-lg object-contain lg:h-screen"
            src={loginImg}
            alt="Work Progress"
          />
        </div>
      </section>
    </div>
  );
};

export default Login;
