
import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <div className='md:mx-40 mx-3 flex flex-col md:flex-row items-center justify-between my-10 md:my-32 '  >
      <div className="left-side md:w-[40%] my-10 ">
        <div className="title text-2xl md:text-5xl font-Poppins-bold xl:leading-[80px] ">Full <span className="text-primary" >Supply Chain Tracking</span></div>
        <div className="info text-xl sm:w-[80%] ">Track each product's full journey from production to delivery in real time. Gain visibility at every stage to ensure accountability and reduced risk.</div>
      </div>
      <div className="right-side md:w-[50%] ">
        <Image src="/assets/sitepicture1.png" className=" " width={1000} height={1000} alt="products tracking cycle" />
      </div>
    </div>
  );
};

export default Section1;
