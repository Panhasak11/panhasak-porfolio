import React from 'react'
import { Element } from 'react-scroll'
import img from '../../assets/img/image.png'
import IconComponent from '../Home/IconComponent';

const About = () => {

  const text = `Hi, I'm Sok Panhasak — a passionate and dedicated Computer Science student at the Royal University of Phnom Penh. I'm currently in my fourth year, building a strong foundation in software development with a particular interest in back-end technologies.
            I enjoy turning complex problems into clean, scalable solutions. With hands-on experience in Java and Spring Boot, I've developed several backend services and APIs, and I'm always eager to learn new tools and frameworks that can enhance my workflow.
            Whether it’s collaborating on team projects or diving into solo builds, I thrive on solving real-world problems through code. My goal is to keep growing as a developer and contribute to meaningful projects that make a difference.
  `;

  return (
    <div className='w-full flex items-center text-white md:px-10 md:pb-20'>
      <div className='flex flex-col md:flex-row w-full'>
        {/* Left side: Image */}
        <div
          data-aos="flip-left"
          data-aos-duration="5000"
          className='md:w-1/2 mb-6 md:mb-0 md:pr-10 flex justify-center '
        >
          <img 
            src={img} 
            className='h-[300px] md:h-[500px] w-[400px] object-cover rounded-md animate-float'
          />
        </div>

        {/* Right side: Text */}
        <div className='flex flex-col justify-center md:w-1/2'>
          <div>
            <h1
              data-aos="fade-down"
              data-aos-duration = "2300"
              className='text-5xl font-bold'>
              About <span className='text-orange-500'>Me</span>
            </h1>
            <p
              data-aos="fade-up-left"
              data-aos-duration = "2000"
              className='mt-4 md:leading-8'>
              {text}
            </p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About
