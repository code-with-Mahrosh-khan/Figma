import React from "react";
import Image from "../../assets/LOGO.jpg";

function Count() {
  return (
    <main className="bg-white p-4 md:p-8 lg:px-16 xl:px-24">
      <div style={{ fontFamily: "Italiana, serif" }}>
        <h1 className="text-3xl md:text-[64px] text-center mb-8 md:mb-12">
          Flying with Altitude
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div
          className="w-full md:w-1/3 space-y-8 text-center md:text-right mt-10 md:mt-16"
          style={{ fontFamily: "Jura, sans-serif" }}
        >
          <div className="w-full md:w-[280px]   mx-auto md:mx-0">
            <h1 className="text-xl md:text-[25px] font-semibold">
              Seamless Flexibility
            </h1>
            <p className="text-sm md:text-[16px] mb-[150px] md:mb-[230px]">
              We accommodate and execute last-minute changes effortlessly,
              ensuring a smooth experience.
            </p>
          </div>
          <div className="w-full md:w-[280px] mx-auto md:mx-0 mt-8 md:mt-[50%]">
            <h1 className="text-xl md:text-[25px] font-semibold">
              Exclusive Benefits
            </h1>
            <p className="text-sm md:text-[16px]">
              Receive a $500 credit towards ground transportation or catering
              with your first flight.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[797px] ml-[-6%] flex flex-col items-center">
          <img src={Image} alt="Flying with Altitude" className="w-auto h-auto mb-6 md:mb-8" />
          <div
            style={{ fontFamily: "Jura, sans-serif" }}
            className="text-center w-full md:w-[310px]"
          >
            <h1 className="text-xl md:text-[25px] font-semibold">
              Decades of Expertise
            </h1>
            <p className="text-sm md:text-[16px]">
              Over 37 years of private charter experience, setting the standard
              in personalized service.
            </p>
          </div>
        </div>

        <div
          className="w-full md:w-1/3 space-y-8 text-center md:text-left  mt-10 md:mt-16"
          style={{ fontFamily: "Jura, sans-serif" }}
        >
          <div className="w-full md:w-[310px] mx-auto md:mx-0">
            <h1 className="text-xl md:text-[25px] font-semibold">
              Rapid and Reliable
            </h1>
            <p className="text-sm md:text-[16px] mb-[150px] md:mb-[230px]">
              Get quotes in 2 hours, 24/7 availability, and book a flight in as
              little as 2 hours with expert international charter guidance.
            </p>
          </div>
          <div className="w-full md:w-[310px] mx-auto md:mx-0 mt-8 md:mt-[50%]">
            <h1 className="text-xl md:text-[25px] font-semibold">
              Personalized Service
            </h1>
            <p className="text-sm md:text-[16px]">
              Enjoy one-on-one concierge-level care, speaking with a live
              consultant each time you call and working with the same expert for
              every booking.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Count;
