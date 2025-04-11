import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { IoIosMenu } from 'react-icons/io';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="h-16 bg-[#0a0a0a] shadow-sm text-white sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 flex justify-between items-center h-full">
        <Link to="/">
          <h1 className="text-3xl font-bold italic tracking-tight">LinkNShare</h1>
        </Link>

        {/* Nav Links */}
        <ul
          className={`sm:flex sm:flex-row flex-col sm:static absolute left-0 top-16 bg-[#0a0a0a] w-full sm:w-auto sm:bg-transparent transition-all duration-200 ease-in-out overflow-hidden sm:overflow-visible ${
            navbarOpen ? 'max-h-60 py-4 px-6' : 'max-h-0'
          } sm:max-h-full`}
        >
          <li className="sm:ml-6 mb-2 sm:mb-0">
            <Link
              to="/"
              className={`block text-sm font-medium transition duration-200 ${
                pathname === '/' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setNavbarOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="sm:ml-6">
            <Link
              to="/about"
              className={`block text-sm font-medium transition duration-200 ${
                pathname === '/about' ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setNavbarOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex items-center"
          aria-label="Toggle navigation"
        >
          {navbarOpen ? (
            <RxCross2 className="text-white text-3xl" />
          ) : (
            <IoIosMenu className="text-white text-3xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
