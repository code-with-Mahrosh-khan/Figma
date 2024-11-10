import React from "react";
import catt from "../assets/image.png";
import vector from "../assets/Vector 1.png";
import vector2 from "../assets/Vector 2 (2).png";
import mg from "../assets/pnd.png";

function Cat() {
  return (
    <>
      <main className="p-6 md:p-10 text-white bg-black">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-[-2%]">
          <h1 className="text-3xl md:text-[64px]">Our Services</h1>
          <button className="border-white w-40 md:w-[161px] h-12 md:h-[48px] border-[0.5px] rounded-[20px] mt-4 md:mt-0">
            Know More
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-9 p-4">
          <div className="relative w-full md:w-1/3 flex flex-col items-center">
            <img src={vector} alt="" className="absolute top-5 hidden md:block h-[1000px] w-[442px]" />
            <img
              src={catt}
              alt="Concierge Services"
              className="relative w-full md:w-[390px] rounded-[40px] md:rounded-[75px] h-auto mt-11 md:mt-[36%] mr-0 md:mr-8"
            />
          </div>

          <div className="w-full md:w-1/3 space-y-8 md:mt-36" style={{ fontFamily: "Jura, sans-serif" }}>
            <div>
              <p className="text-base md:text-[16px]">Concierge Services</p>
              <h1 className="text-xl md:text-[25px] font-semibold">Ground Transportation</h1>
              <p className="text-base mb-[400px] md:text-[16px]">
                Altitude charter is happy to arrange door-to-door ground transportation at cost for any of our clients.
              </p>
            </div>
            <div className="ml-4 md:ml-20 mr-0 md:mr-[-5%]   md:mt-[00%]">
              <p className="text-base md:text-[16px]">Concierge Services</p>
              <h1 className="text-xl md:text-[25px] font-semibold">Catering with Care</h1>
              <p className="text-base md:text-[16px]">
                Altitude charter is happy to arrange any type of catering requested at cost for any of our clients. This includes catering from specific restaurants whenever possible.
              </p>
            </div>
          </div>

          <div className="relative w-full md:w-1/3 flex flex-col items-center mt-10 md:mt-0">
            <img src={vector2} alt="" className="absolute top-0 hidden md:block" />
<img
src={mg}
alt="Transportation"
className="relative w-full md:w-[339px] h-auto md:h-[405px] mt-10 md:mt-[108%] rounded-[40px] md:rounded-[75px] ml-0 md:ml-16"
/>
</div>
</div>
</main>
 </>
  );
};

export default Cat;
