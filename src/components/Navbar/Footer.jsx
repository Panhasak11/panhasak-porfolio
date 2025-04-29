import React, { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'
import { useNavigate } from 'react-router'

const Footer = () => {

  const navigate = useNavigate()

  const handleScrollAndNavigate =(section) =>{
    navigate(`/${section}`);
    
    scroller.scrollTo(section, {
      smooth: true,
      duration: 500,
      offset: -80,
    });
  }

  return (
    <div className='w-full h-16 bg-primary/90 text-white '>
      <div className='h-full flex justify-center '>
        <div className='w-1/2  flex items-center '>
          <h1
            className='ml-10'
          >By SOK PANHASAK</h1>
        </div>
        <div className='w-1/2 flex items-center justify-end p-2'>
        <button 
          onClick={() => handleScrollAndNavigate("home")}
          class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden gap-2
            text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 
           before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out 
           hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
          <span className="relative z-10">Go Home</span>
          <FaArrowUp className='relative'/>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Footer
