import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import logo from "../assets/image 1 (1).png"
import { IoLogoTwitter } from "react-icons/io5";
import { TfiYoutube } from "react-icons/tfi";
import aria from "../assets/AR.png";
import { PiPhoneCall } from "react-icons/pi";
import { FaGooglePlusG } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { PiMapPinLight } from "react-icons/pi";
import bs from "../assets/nbaa-logo.png (1).png"
function Footer() {
  return (
    <footer className="bg-black text-white p-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center lg:space-x-8 space-y-8 lg:space-y-0 p-10">
        
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <img src={logo} alt="Altitude Logo" className="w-[147px] h-[122px] p-4" />
          <div className="text-[24px] italic mt-2">
            <div>ALTITUDE</div>
            <div>CHARTER</div>
          </div>
          <div className="mt-8 lg:mt-20">
            <p>Follow Us On:</p>
            <ul className="flex gap-2 mt-4">
              <li className="rounded-full p-1 border border-[#C9C9C9]">
                <FaGooglePlusG fontSize="24px" />
              </li>
              <li className="rounded-full p-1 border border-[#C9C9C9]">
                <TiSocialFacebook fontSize="24px" />
              </li>
              <li className="rounded-full p-1 border border-[#C9C9C9]">
                <IoLogoTwitter fontSize="22px" />
              </li>
              <li className="rounded-full p-1 border border-[#C9C9C9]">
                <TfiYoutube fontSize="22px" />
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center lg:text-left mt-8 lg:mt-0">
          <h2 className="text-[22px] font-bold">Useful Links</h2>
          <ul className="space-y-2 mt-4 text-lg">
            <li>Home</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Testimonial</li>
            <li>Book a Flight</li>
          </ul>
          <div className="flex flex-col lg:flex-row items-center lg:items-start mt-8 gap-4">
            <span>Sponsored By</span>
            <img src={aria} alt="Sponsor Logo" className="w-[153px] h-[53px]" />
          </div>
        </div>

        <div className="text-center lg:text-left mt-8 lg:mt-0">
          <h2 className="text-[22px] font-bold">Reach Us Now</h2>
          <ul className="space-y-4 mt-4">
            <li className="flex items-center gap-2">
              <PiPhoneCall fontSize="25px" />
              <span>631 223 8839</span>
            </li>
            <li className="flex items-center gap-2">
              <TfiEmail fontSize="25px" />
              <span>contact@altitudecharter.com</span>
            </li>
          </ul>
          <h3 className="text-lg mt-6">United States</h3>
          <div className="flex items-start gap-2 mt-2">
            <PiMapPinLight fontSize="32px" />
            <p className="w-44">
              Altitude Charter LLC 300 Wheeler Rd, Suite 202 Hauppauge, NY 11788
            </p>
          </div>
          <img src={bs} alt="NBAA Logo" className="mt-2" />
        </div>
      </div>

      <hr className="mt-10 mb-4 border-t border-gray-600" />
      <p className="text-center ">© 2024 Altitude Charter | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
