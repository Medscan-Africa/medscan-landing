"use client"
import Image from 'next/image'
import React, {useState, } from 'react'
import Button from './Button'
import { BiArrowBack, BiMenuAltRight, BiX, } from 'react-icons/bi'

const Header = () => {
  const [open, setOpen] = useState<boolean>(false)

  const nav = [
    {name:'Home', route:'#'},
    {name:'Features', route:'#'},
    {name:'How It Works', route:'#'},
    {name:'Integration', route:'#'},
    {name:'Support', route:'#'},
  ]
  return (
    <div className='bg-white mt-5 md:mt-20 w-[90%] sm:w-[80%] relative rounded-full mx-auto px-5 py-3 flex flex-row justify-between items-center ' >
      <div className=" w-[200px] " ><Image src="/assets/Logo.png" width={1000} height={1000} className='xl:w-[200px] max-sm:w-[150px] h-full ' alt="logo" /></div>

    <div className="xl:hidden text-3xl text-primary " >
      {
        open? (<BiX onClick={()=> setOpen(!open)} />) : <BiMenuAltRight onClick={()=> setOpen(!open)} />
      }
  
    </div>

      <nav className={`flex max-xl:absolute max-md:right-0 max-xl:right-20 z-[9999] max-xl:top-20 ${open? 'flex' : 'max-xl:hidden' } max-xl:rounded-xl max-xl:max-w-[600px] max-xl:w-full max-xl:bg-primary max-xl:px-5   max-xl:text-white flex-1 flex-col xl:flex-row justify-evenly `} >
        <ul className='flex flex-col xl:flex-row items-center ' >
          {nav.map((data, index) => (
              <li  key={data.name} className='mx-5 max-xl:border max-xl:border-white max-xl:rounded-full max-xl:w-full max-xl:py-4 max-xl:text-center max-xl:m-3  text-xl font-bold cursor-pointer ' >{data.name}</li>
          ))}
        </ul>
      <div><Button text='Book A Demo' icon={<BiArrowBack className='rotate-180 ' /> } className='max-xl:bg-white mx-auto max-xl:my-3 max-xl:text-primary' /></div>
      </nav>
    </div>
  )
}

export default Header
