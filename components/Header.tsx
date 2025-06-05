
"use client"
import Image from 'next/image'
import React, {useState, } from 'react'
import Button from './Button'
import {Link as ScrollLink} from 'react-scroll'
import OutsideClickHandler from "react-outside-click-handler";
import { BiArrowBack, BiMenuAltRight, BiX, } from 'react-icons/bi'

const Header = () => {
  const [open, setOpen] = useState<boolean>(false)

  const nav = [
    {name:'Home', route:'home'},
    {name:'Features', route:'features'},
    {name:'How It Works', route:'works'},
    {name:'Integration', route:'integration'},
    {name:'Support', route:'banner'},
  ]
  return (
    <div className='bg-white mt-5 md:mt-16 w-[90%] sm:w-[85%] relative rounded-full mx-auto px-5 py-2 flex flex-row justify-between items-center ' >
      <div className=" w-[200px] " ><Image src="/assets/Logo.png" width={500} height={500} className='xl:w-[200px] max-sm:w-[150px] h-full ' alt="logo" /></div>

    <div className="xl:hidden text-3xl text-primary " >
      {
        open? (<BiX onClick={()=> setOpen(!open)} />) : <BiMenuAltRight onClick={()=> setOpen(!open)} />
      }
  
    </div>

      <nav className={`flex max-xl:absolute max-md:right-0 max-xl:right-20 max-sm:z-[9999]  max-xl:top-20 ${open? 'flex' : 'max-xl:hidden' } max-xl:rounded-xl max-xl:max-w-[600px] max-xl:w-full max-xl:bg-primary max-xl:px-5 border-white border  max-xl:text-white flex-1 flex-col xl:flex-row justify-evenly `} >
          <OutsideClickHandler
        onOutsideClick={() => {
          setOpen(false);
        }}
      >
        <ul className='flex flex-col xl:flex-row items-center ' > 
          {nav.map((data, index) => (
        <ScrollLink to={data.route}  activeClass="active"
              smooth={true}
              spy={true}
              key={index}
          className='mx-5 max-xl:border max-xl:border-white max-xl:rounded-full max-xl:w-full max-xl:py-2 max-xl:text-center max-xl:my-1 max-sm:text-sm text-xl font-bold cursor-pointer '
              offset={-150}>
              <li  key={data.name} >{data.name}</li>
              </ScrollLink>
          ))}
        </ul>
        </OutsideClickHandler>
      <ScrollLink to="banner"  activeClass="active"
              smooth={true}
              spy={true}
              offset={-150}>
                <Button text='Book A Demo'  icon={<BiArrowBack className='rotate-180 ' /> } className='max-xl:bg-white mx-auto max-xl:my-3 max-sm:text-sm max-xl:text-primary' />
                
              </ScrollLink>
      </nav>
    </div>
  )
}

export default Header

