import React from "react";
import image from "../assets/image 5 (1).png";

function Sidebar() {
  return (
    <section className="bg-[#F5F5F5] h-[734px] rounded-[45px] p-8">
      <div className="mb-6">
        <h1 className=" text-[64px] w-[500px]" style={{ fontFamily: "Italiana, serif" }}>
          Welcome To Altitude Charter
        </h1>
      </div>
      <div className="flex justify-between">
        <div className="mb-[-20%]">
          <img
            className="rounded-[45px]"
            src={image}
            alt="Charter"
          />
        </div>
        <div className="w-[400px] h-[156px] p-5 bg-white rounded-[20px] text-black mt-[14%]">
          <p>
            Altitude Charter offers 37 years of charter experience. We have
            procured everything from 6-passenger turboprops to 300-passenger
            jumbo jets and everything in between. We not only know the best
            operators in the industry but also several of the individual
            aircraft.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
