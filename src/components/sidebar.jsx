import React from "react";
import image3 from "../assets/image 5 (1).png"

function Sidebar (){
    return(
<section className="bg-white rounded-[45px] 
">  <div className="
"> <h1 className=" weight-[474]  font-mono text-[82px] mt-11 z-[1px]  text-5xl  ml-11
"> Welcome To </h1>
<h1 className=" weight-[474]  font-mono text-[82px]   mb-[100px] text-5xl  ml-11
"> Altitude Charter</h1></div>
<div className="flex justify-between  

">
<img className=" ml-11 rounded-[85px]  mb-[-5%]
 "
src={image3} alt=""
/>
<div className="
"> <h1 className=" mt-8 w-[650px]  text-xl  p-24 justify-end items-end text
">Altitude charter offers 37 years of charter experience. We have procured everything from 6-passenger turboprops to 300-passenger jumbo jets and everything in between. We not only know the best operators in 
    the industry but also several of the individual aircraft.</h1>

</div>
 
</div>

</section>
    );
};

export default Sidebar ;

