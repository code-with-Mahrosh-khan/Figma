import React, { useState } from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs"; // Importing passenger icon
import image1 from "../../assets/image 2.png";
import { Link } from "react-router-dom"
function Hero() {
  const [activeTripType, setActiveTripType] = useState("One Trip");
  const [planeType, setPlaneType] = useState(""); // State for plane type

  return (
    <>
      <main className="flex flex-col lg:flex-row w-full h-full bg-black text-white mt-[-10.5%] lg:top-0">
        {/* Left Section with Image and Overlayed Text */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-full mt-16">
          <img
            src={image1}
            alt="Luxury Jet"
            className="w-full h-full object-cover"
          />

          <div
            className="absolute top-5 left-5 lg:top-10 lg:left-10 p-4 lg:p-10"
            style={{ fontFamily: "Italiana, serif" }}
          >
            <h1 className="font-semibold text-4xl lg:text-6xl leading-tight">ALTITUDE</h1>
            <h1 className="font-semibold text-4xl lg:text-6xl leading-tight">CHARTER</h1>
            <p
              className="mt-4 font-semibold text-base lg:text-lg"
              style={{ fontFamily: "Jura, sans-serif" }}
            >
              Uncompromising Luxury, Unforgettable Journeys.
            </p>
            <button
              style={{ fontFamily: "Jura, sans-serif" }}
              className="mt-4 lg:mt-8 border-white bg-white text-black transition-all duration-300 py-2 lg:py-3 px-6 lg:px-8 rounded"
            >
              Request a Flight
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 h-full px-6 lg:px-20 py-8 lg:py-0">
          <section className="w-full mt-[140px] max-w-lg bg-[#0c0b0b] text-white p-6 rounded-[13px] shadow-lg space-y-6">
            <div className="flex justify-between  mt-4  space-x-2">
              {["One Trip", "Round Trip", "Multi Leg"].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveTripType(type)}
                  className={`flex-1 px-3 py-2 rounded border border-gray-400
${activeTripType === type
                      ? "bg-white text-black"
                      : "hover:bg-gray-700 hover:text-white"
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-3 py-2 rounded border border-gray-500 bg-[#656363] text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Email ID
                  </label>
                  <input
                    type="email"
                    placeholder="dubai@gmail.com"
                    className="w-full px-3 py-2 rounded border border-gray-500 bg-[#656363] text-white placeholder-gray-500"
                  />
                </div>
              </div>

              <hr className="my-4 border-[#E4E4E4]" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-3 py-2 rounded border border-gray-500 bg-[#656363] text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="556 880 5569"
                    className="w-full px-3 py-2 rounded border border-gray-500 bg-[#656363] text-white placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Departure Airport
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="New York Airport"
                      className="w-full pr-10 px-3 py-2 rounded border border-gray-500 bg-[#656363] text-white placeholder-gray-500"
                    />
                    <FaPlaneDeparture className="absolute right-3 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Arrival Airport
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Dubai UAE Airport"
                      className="w-full pr-10 px-3 py-2 rounded border border-gray-500 bg-[#656363] text-white placeholder-gray-500"
                    />
                    <FaPlaneArrival className="absolute right-3 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Departure Date
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="date"
                      className="w-full pr-10 px-3 py-2 rounded border border-gray-500 bg-[#656363] text-white placeholder-gray-500"
                    />
                    <AiOutlineCalendar className="absolute right-3 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Time</label>
                  <div className="relative flex items-center">
                    <input
                      type="time"
                      className="w-full pr-10 px-3 py-2 rounded border border-gray-500 bg-[#656363] text-white placeholder-gray-500"
                    />
                    <AiOutlineClockCircle className="absolute right-3 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Passengers
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="number"
                      placeholder="03"
                      className="w-full px-3 py-2 rounded border border-gray-500 bg-[#656363] text-white placeholder-gray-500"
                    />
                    <BsPersonFill className="absolute right-3 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Plane Type
                  </label>
                  <select
                    value={planeType}
                    onChange={(e) => setPlaneType(e.target.value)}
                    className="w-full px-3 py-2 rounded border border-gray-500 bg-[#656363] text-white"
                  >
                    <option value="" disabled>
                      Select Plane Type
      </option>
                    <option value="Turbo prop">Turbo prop</option>
                    <option value="Jet">Jet</option>
                    <option value="Helicopter">Helicopter</option>
                  </select>
                </div>
              </div>

              <Link to={"thank"}>
              <button className="mt-4 w-full py-3 bg-white text-black font-semibold rounded transition-all duration-300 hover:bg-gray-200">
                Book Your Flight
              </button></Link>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

export default Hero;
