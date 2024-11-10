import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

function Form() {
  const [activeTripType, setActiveTripType] = useState("One Trip");
  const [planeType, setPlaneType] = useState("");

  return (
    <>
      <main className="flex flex-col lg:flex-row w-full h-screen bg-black text-white mt-[-10.5%] top-0">
      
        <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 h-full px-4 sm:px-10 lg:px-20 space-y-6">
          <section className="w-full max-w-lg bg-[#0c0b0b] text-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between mb-6">
              {["One Trip", "Round Trip", "Multi Leg"].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveTripType(type)}
                  className={`flex-1 px-3 py-2 mx-1 rounded border border-gray-400
                    ${
                      activeTripType === type
                        ? "bg-white text-black"
                        : "hover:bg-gray-700 hover:text-white"
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Form Fields */}
            <form className="flex flex-col gap-4">
              {/* Full Name and Email Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-3 py-2 rounded border border-gray-500 bg-[#656363] text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Email ID</label>
                  <input
                    type="email"
                    placeholder="dubai@gmail.com"
                    className="w-full px-3 py-2 rounded border border-gray-500 bg-[#656363] text-white placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">Company Name</label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-3 py-2 rounded border border-gray-500 bg-[#656363] text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="556 880 5569"
                    className="w-full px-3 py-2 rounded border border-gray-500 bg-[#656363] text-white placeholder-gray-500"
                  />
                </div>
              </div>
              <hr className="my-4 border-[#E4E4E4]" />

              {/* Departure and Arrival Airport Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">Departure Airport</label>
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
                  <label className="block mb-2 text-sm font-medium">Arrival Airport</label>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">Departure Date</label>
                  <div className="relative flex items-center">
                    <input
                      type="date"
                      className="w-full pr-10 px-3 py-2 rounded border border-gray-500 bg-[#656363] text-white placeholder-gray-500"
                    />
                    <AiOutlineCalendar className="absolute right-3 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Return Date</label>
                  <div className="relative flex items-center">
                    <input
                      type="date"
                      className="w-full pr-10 px-3 py-2 rounded border border-gray-500 bg-[#656363] text-white placeholder-gray-500"
                    />
                    <AiOutlineCalendar className="absolute right-3 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Passengers and Plane Type Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">Passengers</label>
                  <input
                    type="number"
                    placeholder="03"
                    className="w-full px-3 py-2 rounded border border-gray-500 bg-[#656363] text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Plane Type</label>
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

              <button className="mt-4 w-full py-3 bg-white text-black font-semibold rounded transition-all duration-300 hover:bg-gray-200">
                Book Your Flight
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

export default Form;
