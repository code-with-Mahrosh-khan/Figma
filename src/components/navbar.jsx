import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      style={{ position: 'sticky', top: 0 }}
      className="flex justify-between items-center text-white w-full z-10 h-[80px] px-5 sm:px-10 lg:px-[40px] bg-black opacity-70"
    >
      <div>
        <Link to={'/'}>
          <img src={Logo} alt="Logo" width="60" height="60" className="ml-5 sm:ml-0" />
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button
        onClick={toggleMenu}
        className="block lg:hidden text-white focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Navbar Links */}
      <nav>
        <ul
          className={`flex flex-wrap gap-5 text-sm sm:text-base ${
            isMenuOpen ? 'block' : 'hidden lg:flex'
          }`}
        >
          <li className="relative">
            <Link to={'/mainpage'} className="hover-underline">
              About Us
            </Link>
          </li>
          <li className="relative">
            <a href="/page" className="hover-underline">
              Services
            </a>
          </li>
          <li className="relative">
            <Link to={'/count'} className="hover-underline">
              Aircraft Guide
            </Link>
          </li>
          <li className="relative">
            <Link to={'/'} className="hover-underline">
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
