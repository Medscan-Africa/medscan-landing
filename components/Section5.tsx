import Image from 'next/image'
import React from 'react'

const Section5 = () => {
  return (
    <div className='md:mx-40 mx-3 flex flex-col md:flex-row items-center justify-between my-10 md:my-32 ' id='integration' >
          <div className="left-side md:w-[40%] my-10 ">
            <div className="title  text-2xl md:text-5xl font-Poppins-bold xl:leading-[80px] ">Seamless <span className="text-primary" >API Integration</span></div>
            <div className="info text-xl w-[80%] ">Connect MedScan with your existing ERP or inventory systems via our flexible API. Quick to deploy and easy to scale.</div>
          </div>
          <div className="right-side md:w-[50%] ">
            <Image src="/assets/sitepicture4.png" className=" " width={1000} height={1000} alt="api integration" />
          </div>
        </div>
  )
}

export default Section5
