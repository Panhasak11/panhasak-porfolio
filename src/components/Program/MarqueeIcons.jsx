import React from 'react'
import { AiFillPauseCircle } from 'react-icons/ai'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt, FaJava, FaJs, FaLaravel, FaLeaf, FaReact } from 'react-icons/fa6'
import {  RiTailwindCssFill } from 'react-icons/ri'
import { SiPhp, SiPostgresql, SiPostman } from 'react-icons/si'

const MarqueeIcons = () => {
  return (
    <div className='overflow-hidden whitespace-nowrap'>
      <div className='animate-marquee inline-block '>
        <FaHtml5 className='inline mx-10 text-5xl text-orange-500' values='HTML'/>
        <FaCss3Alt className='inline mx-10 text-5xl text-blue-500'/>
        <FaJs className='inline mx-10 text-5xl text-yellow-500'/>
        <FaJava className='inline mx-10 text-5xl text-white'/>
        <FaLeaf className='inline mx-10 text-5xl text-green-600'/>
        <FaReact className='inline mx-10 text-5xl text-blue-500'/>
        <RiTailwindCssFill className='inline mx-10 text-5xl text-blue-500'/>
        <SiPhp className='inline mx-10 text-5xl text-blue-600'/>
        <FaLaravel className='inline mx-10 text-5xl text-red-600'/>
        <SiPostman className='inline mx-10 text-5xl text-orange-500'/>
        <SiPostgresql className='inline mx-10 text-5xl text-blue-400'/>
      </div>
    </div>
  )
}

export default MarqueeIcons
