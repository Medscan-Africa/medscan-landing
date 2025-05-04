import React from 'react';
import { Banner, Footer, Hero, Section1, Section2, Section3, Section4, Section5, Works } from '@/components';

const Page = () => {
  return (
    <div>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Works/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default Page;
