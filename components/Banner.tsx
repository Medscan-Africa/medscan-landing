import React from 'react'
import Button from './Button'
import SubmitForm from "./SubmitForm"

const Banner = () => {
  return (
    <div className="bg-primary bg-opacity-20 py-5 md:py-32 my-5 max-md:px-2  " id='banner' >
       <div className="md:text-5xl text-3xl font-Poppins-bold md:w-[60%] md:text-center mx-auto my-5 xl:leading-[60px] " >Ready to simplify compliance and <span className="text-primary" >protect your brand?</span> </div>
       <div className='md:text-center md:w-[50%] mx-auto text-xl' >Join the growing network of manufacturers and distributors using MedScan to fight counterfeiting and build trust. </div>
            <SubmitForm/>

    </div>
  )
}

export default Banner
