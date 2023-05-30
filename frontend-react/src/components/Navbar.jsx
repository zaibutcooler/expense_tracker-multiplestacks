import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const isAuthenticated = true;
  return (
    <nav className="bg-slate-950 border-blue-950 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-white text-lg font-semibold  hover:text-slate-300">
              Home
            </Link>
          </div>
          {/* Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {isAuthenticated && (
                <>
                  <Link
                    to="/create"
                    className="text-white hover:text-slate-100 px-3 py-2 rounded-md text-sm font-medium">
                    Expenses
                  </Link>
                  <Link
                    to="/stats"
                    className="text-white hover:text-slate-100 px-3 py-2 rounded-md text-sm font-medium">
                    Stats
                  </Link>
                  <Link
                    to="/history"
                    className="text-white hover:text-slate-100 px-3 py-2 rounded-md text-sm font-medium">
                    History
                  </Link>
                </>
              )}
              <div className="flex items-center space-x-2">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/logout"
                      className="flex items-center justify-center w-24 bg-slate-300 border border-black text-black hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="flex items-center justify-center w-24 border border-black bg-slate-300 text-black hover:bg-slate-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="flex items-center justify-center w-24 border border-black bg-slate-500 text-black hover:bg-slate-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
