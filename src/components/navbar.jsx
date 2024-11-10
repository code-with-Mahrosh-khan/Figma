import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => { 
  return (
    <header style={{ position: "sticky", top: 0 }} className="flex justify-between items-center text-white w-full z-10 h-[80px] px-5 sm:px-10 lg:px-[40px] bg-black opacity-70">
      <div>
        <Link to={"/"}>
          <img src={Logo} alt="Logo" width="60" height="60" className="ml-5 sm:ml-0" />
        </Link>
      </div>
      <nav>
        <ul className="flex flex-wrap gap-5 text-sm sm:text-base">
          <li className="relative">
            <Link to={"/mainpage"} className="hover-underline">AboutUs</Link>
          </li>
          <li className="relative">
            <a href="/page" className="hover-underline">Services</a>
          </li>
          <li className="relative">
            <Link to={"/count"} className="hover-underline">Aircraft Guide</Link>
          </li>
          <li className="relative">
            <Link to={"/"} className="hover-underline">Reviews</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
