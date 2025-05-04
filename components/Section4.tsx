import Image from 'next/image'
import React from 'react'

const Section4 = () => {
  return (
    <div className='md:mx-40 mx-3 ' >
          <div className="title text-2xl md:text-6xl font-Poppins-bold text-center sm:py-5 "><span className='text-primary' >Real-Time</span> Dashboard</div>
          <div className="info py-5 md:w-[70%] text-xl text-center mx-auto ">Access live insights into product movement, inventory flow, and risks alerts. Make faster, smarter decisions with an intuitive dashboard.</div>
          <div><Image src='/assets/dashboardsection1.png' className="w-full h-full " height={1000} width={1000} alt='verify illustration' /> </div>
        </div>
  )
}

export default Section4
