'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Accordion from './Accordion'

const Works = () => {

  const pictures = [
    {id:1, src:"/assets/site picture 5 3.png", title:"Register Your Products", text:"Add product details like batch number, expiry date, and origin via dashboard or API. Each item gets a unique tamper-proof digital identity." },
    {id:2, src:"/assets/tagimage1.png", title:"Apply Smart Tags", text:"MedScan generates QR codes of NFC tags for your product. These secure identifiers link each physical item to its blockchain record." },
    {id:3, src:"/assets/supplychainimage1.png", title:"Track Across the Supply Chain", text:"As products move, partners scan and update their status - creating a transparent trail of custody and authenticity in real time." },
    {id:4, src:"/assets/verifyproductimage1.png", title:"Verify Instantly", text:"Distributors, retailers, or customers can scan the product to confirm its autenticity, view its journey, and check compliance data." },
    {id:5, src:"/assets/getalertsimage1.png", title:"Get Alerts & Insights", text:"Recieve real-time alerts for suspicious activity and access detailed analytics for performance. traceability, and recall readiness." },
  ]

  const [livePicSrc, setLivePicSrc] = useState<string>("/assets/site picture 5 3.png");

  return (
    <div className="md:my-40 md:mx-32 mx-3 my-10 " >
        <div className="title text-2xl md:text-6xl font-Poppins-bold text-center py-5 "><div className='text-primary' >How It Works</div> Track, Verify, Protect.</div>
    <div className=' flex flex-col md:flex-row gap-x-10 items-center justify-between ' >
      <div className="left-side md:w-[50%] w-full ">
     {pictures.map((data, index) => (
       <Accordion key={index} title={data.title} onDblClick={()=> setLivePicSrc(data.src)} picSrc={data.src} text={data.text} />
       
       

     ))}
     </div>
          <div className="right-side max-md:hidden block md:w-[50%] ">
       <Image src={livePicSrc} className=" " width={1000} height={1000} alt="api integration" />
     </div>
              {/* <div className="left-side md:w-[50%] w-full ">
                <Accordion title='Register Your Products' text='Add product details like batch number, expiry date, and origin via dashboard or API. Each item gets a unique tamper-proof digital identity.' />
                {/* <Accordion title='Apply Smart Tags' />
                <Accordion title='Track Across the Supply Chain' />
                <Accordion title='Track Across the Supply Chain' />
                <Accordion title='Get Alerts & Insights' /> 
                
              </div>
              <div className="right-side md:w-[50%] ">
                <Image src="/assets/site picture 5 3.png" className=" " width={1000} height={1000} alt="api integration" />
              </div> */}
            </div>
    </div>
  )
}

export default Works
