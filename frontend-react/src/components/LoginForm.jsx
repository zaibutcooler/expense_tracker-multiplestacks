import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto rounded-lg shadow-lg bg-white p-8">
        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-6">
          Login
        </h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-gray-800 font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-800 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-slate-500 text-black font-semibold py-2 rounded-md hover:bg-slate-600">
            Login
          </button>
        </form>
        <p className="text-gray-600 text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
