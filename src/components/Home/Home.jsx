import React from 'react'
import {  FaFacebookF, FaFilePdf, FaGifts, FaGithub, FaGithubAlt, FaJava, FaLeaf,  FaLinkedinIn } from 'react-icons/fa'
import { FaGit, FaTelegram } from 'react-icons/fa6'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import img from '../../assets/img/image.png'
import profile from '../../assets/img/profile.jpg'
import IconComponent from './IconComponent'


const Home = () => {
  const [text] = useTypewriter({
    words: ["Back-End Developer","Java Developer","Front-End Developer"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 800,
  })


  return (
    <div className='w-full flex items-center  text-white md:px-10 bg-primary'>
      <div  className='w-1/2 flex flex-col gap-20 '>
        <div data-aos="fade-down-right" className='flex flex-col gap-2 mt-20 md:mt-0 md:gap-5'>
          <h4 className='text-sm font-normal mt-20 md:text-xl'>
            WELCOME TO MY PORFOLIO
          </h4>
          <h2 className='text-3xl font-bold md:text-5xl'>
            Hello, I am 
          </h2>
          <h1 className='text-5xl font-bold text-orange-500 md:text-6xl'>
            <span className='hidden md:inline-block flex-col'>SOK</span> PANHASAK
          </h1> 
          <h2 className='text-sm font-bold md:text-4xl'>
            And I'm a  
            <span className='pl-2'>{text}</span>
            <Cursor 
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#f97316"
              
            />
          </h2>
        </div>
        <div data-aos="fade-up-right" 
            className='flex'
        >
          <div className='flex flex-col '>
            <h2 className='text-base uppercase'>
              Find me in
            </h2>
            <div className='flex gap-4'>
              <IconComponent 
                Icon={FaFacebookF}
                url={"https://www.facebook.com/demboboy11/"}
                tooltip={"FaceBook"}
              />
              <IconComponent 
                Icon={FaTelegram}
                url={"https://t.me/panhasak_11"}
                tooltip={"Telegram"}
              />
              <IconComponent 
                Icon={FaLinkedinIn}
                url={"https://www.linkedin.com/in/panhasak-sok-b2b1782a7/"}
                tooltip={"LinkIn"}
              />
              <IconComponent 
                Icon={FaGithub}
                url={"https://github.com/Panhasak11/phoneshop-project"}
                tooltip={"GitHub"}
              />
            </div>
          </div>
        </div>
      </div>
      {/* image section  */}
      <div
        className='hidden md:flex justify-center md:w-1/2 mb-6 mt-10'
      >
        
        <div 
          data-aos="fade-left"
          className=' w-[400px] h-[470px] flex justify-center items-center
           bg-gray-100/20  rounded-lg shadow-lg mt-6'
        >
          <img src={profile} alt="" 
            className='h-[400px] rounded-md animate-float'
          />
          
        </div>
      </div>
      
    </div>
  )
}

export default Home
