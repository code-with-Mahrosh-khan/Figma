import React from "react";
import logo2 from "../../assets/Rectangle 9 (2).png";
import Logo from '../../assets/image 1 (3).png';

// import { Link } from "react-router-dom"
import {Link} from "react-router-dom"

function Thank() {
  const handleClick = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
 
return (
    <>
      <main className="bg-white w-full h-full text-black">
        <div className="relative  ml-[300px] w-[735px] h-[425px] ">
          <img src={logo2} alt="Background" className=" object-cover" />


          <div className="absolute top-1 ml-32 pl-9 p-11  w-[735px] h-[425px]  " style={{ fontFamily: "Italiana, serif" }}>
          <img className="absalute w-[137px] h-[115px] ml-14" src={Logo} alt="" />

            <h1 className="font- text-[64px] leading-tight">Thank You!</h1>
            <h2
              style={{ fontFamily: "Italiana, sans-serif" }}
              className="font-mono mt-4 mb-11 leading-tight"
            >
              We look forward to speaking with you soon
            </h2>

            <div>
            <Link  className="max-sm:w-full" to={"/"}>
              <button
                onClick={handleClick} 
              className="mt-4 ml-[110px]  bg-white text-black font-semibold rounded transition-all duration-300    hover:bg-gray-200">
            Back to home
              </button></Link> 
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Thank;
