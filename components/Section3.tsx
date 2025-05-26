import Image from 'next/image'
import React from 'react'

const Section3 = () => {
  return (
    <div className='md:mx-40 mx-3 flex flex-col-reverse md:flex-row items-center justify-between my-10 md:my-32 ' >
         <div className="left-side md:w-[50%] my-10 ">
           <Image src="/assets/sitepicture1.png" className=" " width={1000} height={1000} alt="products tracking cycle" />
         </div>
         <div className="right-side md:w-[45%] ">
           <div className="title  text-2xl md:text-5xl font-Poppins-bold xl:leading-[80px] md:w-[90%] ">Built-In <span className="text-primary" >Compliance Tools</span></div>
           <div className="info text-xl md:w-[80%] ">Stay aligned with NAFDAC redulations. Auto-generate reports, log product data, and get alerts to streamline compliance.</div>
         </div>
       </div>
  )
}

export default Section3
