import Image from "next/image";
import Link from "next/link";
import React from "react";
import {BiLogoFacebookCircle, BiLogoInstagram, BiLogoLinkedin, BiLogoLinkedinSquare, BiLogoTwitter,} from "react-icons/bi"

const Footer = () => {
  const nav = [
    { name: "Home", route: "#" },
    { name: "Features", route: "#" },
    { name: "How It Works", route: "#" },
    { name: "Integration", route: "#" },
    { name: "Support", route: "#" },
  ];
  const socials = [
    { name: "Instagram", route: "#" },
    { name: "Linkedin", route: "#" },
    { name: "Twitter", route: "#" },
    { name: "Facebook", route: "#" },
  ];

  return (
    <div className="md:mt-40 mt-5 ">
      <div className="md:mx-32 sm:m-5 md:my-20 ">
        <div className="border-b-4 border-black border-opacity-50">
          <div className="  justify-between  py-5 md:flex hidden ">
            <ul className="flex flex-row items-center ">
              {nav.map((data, index) => (
                <li
                  key={data.name}
                  className="mx-5 text-xl font-bold cursor-pointer "
                >
                  {data.name}
                </li>
              ))}
            </ul>
            <ul className="flex flex-row items-center ">
              {socials.map((data, index) => (
                <li
                  key={data.name}
                  className="mx-5 text-xl font-bold cursor-pointer "
                >
                  {data.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex md:hidden text-black py-2 text-3xl " >
            <BiLogoTwitter/>
            <BiLogoLinkedinSquare/>
            <BiLogoFacebookCircle/>
            <BiLogoInstagram/>
          </div>
        </div>
        <div className="flex  flex-row max-md:flex-wrap max-sm:mx-1 justify-between py-5 ">
          <Link href="mailto:info@medscan.africa">info@medscan.africa</Link>
          <span>Medscan. All Rights Reserved</span>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
      <Image
        src="/assets/Medscan Footer Text 1.png"
        width={1000}
        height={1000}
        alt="Footer"
        className="w-full h-full "
      />
    </div>
  );
};

export default Footer;
