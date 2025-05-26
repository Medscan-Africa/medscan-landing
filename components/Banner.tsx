import React from 'react'
import Button from './Button'

const Banner = () => {
  return (
    <div className="bg-primary bg-opacity-20 py-5 md:py-32 my-5 max-md:px-2  " id='banner' >
       <div className="md:text-5xl text-3xl font-Poppins-bold md:w-[60%] md:text-center mx-auto my-5 xl:leading-[60px] " >Ready to simplify compliance and <span className="text-primary" >protect your brand?</span> </div>
       <div className='md:text-center md:w-[50%] mx-auto text-xl' >Join the growing network of manufacturers and distributors using MedScan to fight counterfeiting and build trust. </div>
       
                 <div className="input sm:bg-white max-sm:p-0 py-2 my-5 flex sm:flex-row flex-col max-md:justify-between  items-center md:w-[50%] mx-auto rounded-full ">
                   <input
                     type="email"
                     className="sm:bg-transparent h-16 md:h-16 max-sm:my-3 rounded-full focus:border-l-primary focus:border-l-4  outline-none pl-10 placeholder:text-xl max-sm:w-full sm:w-[70%] "
                     placeholder="Enter your email address"
                     id=""
                   />
                   <Button text="Book A Demo" className=" max-md:mx-3 max-sm:text-lg " />
                 </div>
    </div>
  )
}

export default Banner
