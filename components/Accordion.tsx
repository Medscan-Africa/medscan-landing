
"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';

import OutsideClickHandler from "react-outside-click-handler";


type AccordionProps = {
    title: string;
    text?: string;
    onDblClick?: () => void;
    picSrc?: string;
}

const Accordion = ({ title, text, onDblClick, picSrc } :AccordionProps) => {
    const [open, setOpen] = useState(false)
    return (
        <OutsideClickHandler
        onOutsideClick={() => {
          setOpen(false);
        }}
      >
        <div className='border-spacing-3 border-opacity-10 border cursor-pointer transition-all ease-in-out duration-700 relative overflow-hidden border-grey mx-auto max-w-[1000px] w-full py-5 rounded-xl shadow-md my-5 px-3 sm:px-10  '  onClick={()=>{setOpen(!open); if(onDblClick) onDblClick(); }}  >
            <div className='text-black text-4xl flex justify-between  ' >
                <p className='text-black text-xl sm:text-2xl font-bold my-5 ' >{title}</p> <BiPlus className={`${open && 'rotate-45'} cursor-pointer `} onClick={()=>{setOpen(false)}} />
            </div>
            <div className={` ${open? 'block' : 'hidden'} my-55 sm:text-xl text-black  `} >{text}
                <Image src={picSrc || ""} className="max-md:block hidden " width={1000} height={1000} alt="api integration" />
            </div>
        </div>
        </OutsideClickHandler>
    );
}

export default Accordion;
