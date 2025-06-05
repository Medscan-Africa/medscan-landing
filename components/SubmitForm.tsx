"use client"

import React, { useState } from 'react';
import { BiCheckCircle, BiX } from 'react-icons/bi';
import Button  from './Button';
import OutsideClickHandler from "react-outside-click-handler";

const SubmitForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !email.includes('@')) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    setMessage('');

    const url = "https://script.google.com/macros/s/AKfycbySvYMhEiGYQ6v59XTgSzANOFuc0LtBLieWmBhJs4hBRdVUJia4z0E21K0ofOTOI1BPhA/exec";

    try {
      const response = await fetch(url, {
        method: "POST",
        // Use 'application/x-www-form-urlencoded' for Google Apps Script POST requests
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `Email=${encodeURIComponent(email)}` // Encode the email for URL safety
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.text();

      console.log(data || 'Submission successful!');
      setModalOpen(true)
      setEmail('');

    } catch (error) {
      console.error('Error during form submission:', error);
      setMessage('Failed to submit. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
        <>
        <form onSubmit={handleSubmit}  className="input sm:bg-white max-sm:p-0 py-1 pr-2 my-5 flex sm:flex-row flex-col justify-between  items-center md:w-[50%] mx-auto rounded-full ">
        
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onFocus={()=> {setMessage('')}}
              onChange={(e) => setEmail(e.target.value)}
              className="sm:bg-transparent h-16 md:h-16 max-sm:my-3 rounded-full focus:border-l-primary focus:border-l-4  outline-none pl-10 placeholder:text-xl w-full max-sm:w-full  sm:w-[60%] "
              required
              disabled={isLoading}
            />
           
          <button
            type="submit"
            className="max-md:mx-3 min-w-[160px] max-sm:text-lg bg-primary outline-none cursor-pointer border-none flex justify-center items-center text-xl py-3 px-6 rounded-full text-white hover:bg-opacity-80  my-1"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Book a demo'
            )}
          </button>
        </form>

        <div className={` ${modalOpen? "block" : "hidden" } backdrop bg-black bg-opacity-50 w-full h-full z-[9999] inset-0 fixed `} ></div>
        <OutsideClickHandler
        onOutsideClick={() => {
          setModalOpen(false);
        }}
      >
        {modalOpen && (
          <div className={` text-center bg-green-300 py-3 border-black shadow-md rounded-md max-h-[400px]  ${modalOpen? "flex-col flex items-center " : "hidden"} fixed top-[30%] sm:left-[30%] left-[7%] w-[300px] sm:w-[500px] z-[9999]   `} >
          <BiCheckCircle className="sm:text-[80px] text-[40px] text-primary " />
          <span className='sm:text-3xl text-xl p-3 font-bold flex gap-x-3 items-center ' > We Would Get Back to you as soon as we Launch</span>
          <BiX className='sm:text-4xl text-2xl my-3 mx-5 font-bold flex hover:cursor-pointer absolute right-0 top-0 ' onClick={()=> {setModalOpen(false)}} />
        
        </div>
        )}
        </OutsideClickHandler>


        {message && (
          <div
            className={`mt-6 p-4 rounded-md mx-auto w-fit text-sm ${
              message.includes('successful') || message.includes('success')
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
            role="alert"
          >
            {message}
            
          </div>
        )}
    </>
  );
};

export default SubmitForm;
