import React from "react";
import imagefile from "../assets/Group 33 (1).png";
import logo from "../assets/Group 32.png";
import pg from "../assets/Group 35.png";
import dg from "../assets/Group 36.png";

function Main() {
    return (
        <main className="min-h-screen text-white bg-black p-4 md:p-10">
            <div className="flex flex-col md:flex-row ml-[900px] justify-end md:justify-between md:items-end text-right md:text-right px-4">
                <div className="max-w-md w-full md:w-[474px] p-4">
                    <h1 className="text-3xl md:text-5xl mt-4 text-center md:text-left">
                        We Listen and Learn
                    </h1>
                    <p className="text-sm md:text-base mt-4 text-center md:text-left">
                        Once you fly with us, we’ll meticulously document your preferences, including aircraft size and type, as well as any food allergies your family may have for catering.
                    </p>
                    <p className="mt-6 text-sm md:text-base text-center md:text-left">
                        This personalized approach ensures that each subsequent booking is seamless and effortlessly tailored to your needs.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-between mt-8 gap-4 p-4 md:p-0">
                <img src={imagefile} alt="Aircraft Image" className="w-28 md:w-[227px] mt-4 md:mt-7" />
                <img src={logo} alt="Logo" className="w-28 md:w-auto mt-4 md:mt-7" />
                <img src={pg} alt="PG" className="w-28 md:w-auto mt-4 md:mt-7" />
                <img src={dg} alt="DG" className="w-28 md:w-auto mt-4 md:mt-7" />
            </div>
        </main>
    );
}

export default Main;
