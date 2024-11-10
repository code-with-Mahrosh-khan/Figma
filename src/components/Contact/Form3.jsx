
import React, { useState } from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs"; 

function Form () {
  const [activeTripType, setActiveTripType] = useState("One Trip");
  const [planeType, setPlaneType] = useState("");

  return (
    <>
      <main className="flex [w-467px] h-[627px] bg-black text-white mt-[-10.5%] top-0">
        
     

        <div className="mt-[11%] flex flex-col justify-center items-start w-1/2 h-full px-20 space-y-6">
          <section className="w-full max-w-lg bg-[#0c0b0b] text-white p-6 rounded-[13px] shadow-lg">
            <div className="flex justify-between mb-6 ">
              {["One Trip", "Round Trip", "Multi Leg"].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveTripType(type)}
                  className={`flex-1 px-3 py-2 mx-1 rounded border border-gray-400  p-6
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

            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
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


              <div className="grid grid-cols-2 gap-4">
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
              <hr className="my-4 border-[#E4E4E4] mb-" />
             <div className="flex gap-[300px]"> <h1 className="">TRIP 2 </h1>
             <h2 className="">Add Stop+</h2></div>


              <div className="grid grid-cols-2 gap-4">
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

              <div className="grid grid-cols-2 gap-4">
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
                      type="Time"

                      className="w-full pr-10 px-3 py-2 rounded border border-gray-500 bg-[#656363] text-white placeholder-gray-500"
                    />
                    < AiOutlineCalendar className="absolute right-3 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
   </div></div>
              <hr className="my-4 border-[#E4E4E4] " />

              <div className="flex justify-between gap-8">

                <div className=""><h1 className="font-serif">TRIP</h1> <h2 className="mt-3">Departure from</h2> <p>San Diego Airport</p></div>
                <div className=""><h1 className=" mt-8">Arrival at</h1> <h2>New York Airport</h2></div>
                <div className="mt-8"><h1>Date</h1> <h2 className="">12/08/2024</h2></div>
                <div><h1 className="font-serif">edit</h1> <h2 className="mt-3">Time</h2> <p>7 : 00 AM</p></div>
                
              </div>
              <button className="mt-4 w-full py-3 bg-white text-black font-semibold rounded transition-all duration-300    hover:bg-gray-200">
                Book Your Flight
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  )
}
export default Form ;