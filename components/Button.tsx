"use client";
import React, { ReactNode } from 'react'
import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi';
import { useSwiper } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'



type ButtonProps = {
    text: string;
    type?: 'submit' | 'reset' | 'button';
    icon?: React.ReactNode;
    color?: string | '#000';
    width?: string;
    paddingX?: string;
    className?: string;
    link?: string | '';
    disabled?: boolean;
}

type FormButtonProps = {
  type: 'submit' | 'reset' | 'button',
  value: string,
  icon?: ReactNode,
  color?: string | 'bg-emerald-700' ,
}

const Button = ({text, icon, color, width, paddingX, className, link, type, disabled} :ButtonProps) => {
  return (
    <div  >
      <Link href={link ?? ""} className='flex items-center ' > 
       <button type={type? type : 'button'} disabled={disabled} className={`${color? color : 'bg-primary ' } ${width? width : '' } outline-none cursor-pointer border-none flex justify-center ${className} items-center text-xl py-3 ${paddingX? paddingX : 'px-6'} rounded-full text-white hover:bg-opacity-80  my-1 `} >{text} <span className='mx-2 text-xl' >{icon}</span></button>
      </Link>
     </div>
  )
}

export default Button

export const OutLineButton= ({text, icon,  width, paddingX, className, link} :ButtonProps) => {
  return (
    <div  >
      <Link href={link ?? ""} className='flex items-center  ' > 
       <button type='button'  role='button' aria-label='button' className={` ${width? width : '' }  hover:text-white outline-none border-2 flex justify-center text-center ${className} items-center text-xl py-3 ${paddingX? paddingX : 'px-6'} rounded-full  hover:bg-opacity-100 bg-opacity-90  my-1 `} >{text} <span className='mx-2 text-xl' >{icon}</span></button>
      </Link>
     </div>
  )
}



export const SwiperNavButton = () => {
  
  const swiper = useSwiper();
  return (
    <div  >
      <div className="swiper-controller max-w-[200px] flex w-full mx-auto justify-between ">
            <div onClick={()=>{swiper.slidePrev()}} className=" bg-white rounded-full p-2 hover:cursor-pointer  swiper-button-prev"><BiArrowBack onClick={()=>{swiper.slidePrev()}} className='text-2xl hover:cursor-pointer ' /></div>
            <div onClick={()=>{swiper.slideNext()}} className=" bg-white rounded-full p-2  hover:cursor-pointer swiper-button-next"><BiArrowBack onClick={()=>{swiper.slideNext()}} className='text-2xl hover:cursor-pointer rotate-[180deg] ' /></div>
        </div>
    </div>
  );
}



export const FormButton = ({type, value, icon, color}:FormButtonProps) => {

  return (
    <div className='' >
      <button className={`${color? color : 'bg-emerald-700'} w-full h-12 rounded-full flex items-center text-white justify-center my-3 text-xl outline-none border-none `} type={type} >{value} <div className='text-3xl mx-5' > {icon}</div></button>
    </div>
  )
}