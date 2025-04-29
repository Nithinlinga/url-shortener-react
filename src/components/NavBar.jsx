// NavBar.jsx
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { IoIosMenu } from 'react-icons/io';
import { useStoreContext } from '../contextapi/ContextApi';

const NavBar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { pathname } = useLocation();

  function onLogoutHandler() {
    setToken(null);
    localStorage.removeItem('JWT_TOKEN');
    navigate('/login');
  }

  return (
    <nav className="h-16 bg-white shadow-md text-gray-800 sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 flex justify-between items-center h-full">
        <Link to="/">
          <h1 className="text-3xl font-bold italic tracking-tight text-indigo-600">LinkNShare</h1>
        </Link>

        {/* Nav Links */}
        <ul
          className={`sm:flex sm:items-center sm:flex-row flex-col sm:static absolute left-0 top-16 bg-white w-full sm:w-auto sm:bg-transparent transition-all duration-200 ease-in-out overflow-hidden sm:overflow-visible ${
            navbarOpen ? 'max-h-60 py-4 px-6' : 'max-h-0'
          } sm:max-h-full`}
        >
          <li className="sm:ml-6 mb-2 sm:mb-0">
            <Link
              to="/"
              className={`block text-sm font-medium transition duration-200 ${
                pathname === '/' ? 'text-indigo-600 font-semibold' : 'text-gray-500 hover:text-indigo-600'
              }`}
              onClick={() => setNavbarOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="sm:ml-6 mb-2 sm:mb-0">
            <Link
              to="/about"
              className={`block text-sm font-medium transition duration-200 ${
                pathname === '/about' ? 'text-indigo-600 font-semibold' : 'text-gray-500 hover:text-indigo-600'
              }`}
              onClick={() => setNavbarOpen(false)}
            >
              About
            </Link>
          </li>
          {token && (
            <li className="sm:ml-6 mb-2 sm:mb-0">
              <Link
                to="/dashboard"
                className={`block text-sm font-medium transition duration-200 ${
                  pathname === '/dashboard' ? 'text-indigo-600 font-semibold' : 'text-gray-500 hover:text-indigo-600'
                }`}
                onClick={() => setNavbarOpen(false)}
              >
                Dashboard
              </Link>
            </li>
          )}
          {!token && (
            <li className="sm:ml-6 mb-2 sm:mb-0">
              <Link
                to="/register"
                className="block text-sm font-medium bg-indigo-500 text-white rounded px-3 py-1.5 hover:bg-indigo-600 transition duration-200"
                onClick={() => setNavbarOpen(false)}
              >
                Signup
              </Link>
            </li>
          )}
          {token && (
            <li className="sm:ml-6 mb-2 sm:mb-0">
              <button
                className="block text-sm font-medium cursor-pointer bg-rose-500 text-white rounded px-3 py-1.5 hover:bg-rose-600 transition duration-200"
                onClick={onLogoutHandler}
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex items-center"
          aria-label="Toggle navigation"
        >
          {navbarOpen ? (
            <RxCross2 className="text-indigo-600 text-3xl" />
          ) : (
            <IoIosMenu className="text-indigo-600 text-3xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
