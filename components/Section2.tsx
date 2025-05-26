import Image from 'next/image';
import React from 'react';

const Section2 = () => {
  return (
    <div className='md:mx-40 mx-3 ' id='features' >
      <div className="title text-2xl md:text-5xl font-Poppins-bold text-center sm:py-5 "><span className='text-primary' >Anti-Counterfeit</span> Technology</div>
      <div className="info py-2 sm:py-5 sm:w-[70%] text-xl text-center mx-auto ">Medscan uses blockchain to secure every product's journey - creating a temper-proof record of authenticity, movement,  and trust.</div>
      <div><Image src='/assets/sitepicture2.png' className="w-full h-full " height={1000} width={1000} alt='verify illustration' /> </div>
    </div>
  );
}

export default Section2;
