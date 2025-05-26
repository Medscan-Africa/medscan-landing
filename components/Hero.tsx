import React from "react";
import Header from "./Header";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <div className="  xl:h-screen relative">
        <div className="bg-[#a6f4c5] bg-opacity-40 w-full mx-auto h-[150vh] absolute blur-[300px] rounded z-[-1] "></div>
        <div>
          <Header />
        </div>
        <div className="relative xl:bg-hero bg-no-repeat bg-center bg-cover mx-auto max-md:mx-5 max-sm:mx-2 md:w-[100%] xl:h-[100vh] h-fit ">
          {/* <div className="absolute" ><Image src="/assets/Hero.png" width={2000} height={2000} alt='hero-pic' className='w-full h-[90vh] ' /></div> */}
          <div className="md:text-5xl text-3xl w-full xl:w-[70%] mx-auto font-Poppins-bold text-center xl:pt-32 md:p-10 pt-10  ">
            Track, Verify and Protect Your Products In

            <div className="text-primary relative inline-block ">
              <Image src="/assets/mousehover.png" width={1000} height={1000} alt="mouse hover" className="absolute" />
              {/* <div
                className="bg-mousehover inset-0 absolute  w-full bg-center bg-cover bg-no-repeat "
                aria-hidden="true"
              /> */}
              <span className="relative p-5 h-20 ">Real-Time</span>
            </div>
          </div>
          <div className="md:w-[50%] w-[90%]  mx-auto mt-3 text-center text-xl  ">
            MedScan is the smart oversight system that helps you ensure
            compliance, stop counterfeiting, and monitor your supply chain — end
            to end
          </div>
           <div className="input sm:bg-white max-sm:p-0 py-1 pr-2 my-5 flex sm:flex-row flex-col justify-between  items-center md:w-[50%] mx-auto rounded-full ">
              <input
                type="email"
                className="sm:bg-transparent h-16 md:h-16 max-sm:my-3 rounded-full focus:border-l-primary focus:border-l-4  outline-none pl-10 placeholder:text-xl w-full max-sm:w-full  sm:w-[60%] "
                placeholder="Enter your email address"
                id=""
              />
              <Button text="Book A Demo" className=" max-md:mx-3 w-full max-sm:text-lg " />
            </div>
        </div>
      </div>
      <div className="my-10 mt-20 w-[90%] mx-auto " id="home" >
        <div className="sm:text-2xl text-slate-500 text-xl w-fit mx-auto my-3 text-center sm:font-bold ">
          Trusted By Leading Manufacturers & Distributors
        </div>
        <div className="overflow-hidden my-5 relative py-6 ">
          {/* <div className="left absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="right absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" /> */}
          <div className="flex animate-marquee whitespace-nowrap ">
            <Image
              src="/assets/Companies.png"
              width={1000}
              height={1000}
              className="w-full min-w-[500px] ml-5 h-fit  "
              alt="companies"
            />
            <Image
              src="/assets/Companies.png"
              width={1000}
              height={1000}
              className="w-full min-w-[500px] ml-5 h-fit  "
              alt="companies"
            />
          </div>
        </div>
      </div>

      <div className="w-[80%] my-5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center  ">
        <div className="card1 text-center  ">
          <div className="md:text-5xl text-3xl my-5 text-primary font-bold ">80%</div>
          <div className="text-xl">
            Faster Recall Response, Pinpoint affected batches in minutes -
            reduce downtime, protect your brand, and act fast.
          </div>
        </div>
        <div className="card1 text-center md:border-x-2 border-black  ">
          <div className="md:text-5xl text-3xl my-5 text-primary font-bold ">24/7</div>
          <div className="text-xl">
            Authentication & Alerts. Get instant alerts for every scan, handoff, and suspicious activity - keeping your supply chain secure 24/7.
          </div>
        </div>
        <div className="card1 text-center  ">
          <div className="md:text-5xl text-3xl my-5 text-primary font-bold ">65%</div>
          <div className="text-xl">
            More Visibility. Track where your products and who's handling them with real-time supply chain insights.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
