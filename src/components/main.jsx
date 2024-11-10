import React from "react";
import imagefile from "../assets/Group 33 (1).png";
import logo from "../assets/Group 32.png";
import pg from "../assets/Group 35.png";
import dg from "../assets/Group 36.png";

function Main() {
    return (
        <main className="p-4 mb-[5%] text-white bg-black 0">
            

            <div className="flex flex-wrap justify-center md:justify-between mt-8  gap-4 p-4 md:p-0">
                <img src={imagefile} alt="Aircraft Image" className="w-28 md:w-[227px] mt-4 md:mt-7" />
                <img src={logo} alt="Logo" className="w-28 md:w-auto mt-4 md:mt-7" />
                <img src={pg} alt="PG" className="w-28 md:w-auto mt-4 md:mt-7" />
                <img src={dg} alt="DG" className="w-28 md:w-auto  mt-4 md:mt-7" />
            </div>
        </main>
    );
}

export default Main;