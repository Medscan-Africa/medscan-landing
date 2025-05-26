
"use client"
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
} from "react-icons/bi";

const Footer = () => {
  const nav = [
    { name: "Home", route: "home" },
    { name: "Features", route: "features" },
    { name: "How It Works", route: "works" },
    { name: "Integration", route: "integration" },
    { name: "Support", route: "banner" },
  ];
  const socials = [
    { name: "Instagram", route: "https://instagram.com/medscanafrica" },
    {
      name: "Linkedin",
      route: "https://www.linkedin.com/company/medscan-africa/",
    },
    { name: "Twitter", route: "https://x.com/medscanafrica" },
    { name: "Facebook", route: "#" },
  ];

  return (
    <div className="md:mt-40 mt-5 " id="footer">
      <div className="md:mx-32 sm:m-5 md:my-20 ">
        <div className="border-b-4 border-black border-opacity-50">
          <div className="  justify-between  py-5 md:flex hidden ">
            <ul className="flex flex-row items-center ">
              {nav.map((data, index) => (
                <ScrollLink
                  to={data.route}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  key={index}
                  offset={-150}
                >
                  <li
                    key={data.name}
                    className="mx-5 text-xl font-bold cursor-pointer "
                  >
                    {data.name}
                  </li>
                </ScrollLink>
              ))}
            </ul>
            <ul className="flex flex-row items-center ">
              {socials.map((data, index) => (
                <Link href={data.route} 
                    key={data.name}>
                  <li
                    key={data.name}
                    className="mx-5 text-xl font-bold cursor-pointer "
                  >
                    {data.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex md:hidden text-black py-2 text-3xl ">
            <Link
              href="https://x.com/medscanafrica"
              className="hover:text-primary"
            >
              <BiLogoTwitter />
            </Link>
            <Link
              href="https://www.linkedin.com/company/medscan-africa/"
              className="hover:text-primary"
            >
              <BiLogoLinkedinSquare />
            </Link>
            <Link href="https://" className="hover:text-primary">
              <BiLogoFacebookCircle />
            </Link>
            <Link
              href="https://instagram.com/medscanafrica"
              className="hover:text-primary"
            >
              <BiLogoInstagram />
            </Link>
          </div>
        </div>
        <div className="flex  flex-row max-md:flex-wrap max-sm:mx-1 justify-between py-5 ">
          <Link href="mailto:info@medscan.africa">info@medscan.africa</Link>
          <span>Medscan. All Rights Reserved</span>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
      <Image
        src="/assets/Medsan Footer Text 1.png"
        width={1000}
        height={1000}
        alt="Footer"
        className="w-full h-full "
      />
    </div>
  );
};

export default Footer;
