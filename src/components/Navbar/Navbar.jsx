import React from 'react'
import { FaCode, FaFilePdf, FaTag, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll'
import pdf from '../../assets/file/Sok-Panhasak.pdf'

const Navbar = () => {

  const navigate = useNavigate();

  const handleScrollAndNavigate = (section) =>{
    navigate(`/${section}`);

    scroller.scrollTo(section, {
      smooth: true,
      duration: 500,
      offset: -80,
    });
  };

  const handleDownload = () =>{
    const fileUrl = pdf;
    const fileName = 'SokPanhasak.pdf';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <nav className='fixed top-0 left-0 w-full bg-primary 
      text-white shadow-md p-4  z-50 flex gap-6 justify-center'
    >
      <div className='container flex justify-between items-center'>
        <div className='flex items-center px-10'>
          <h1 onClick={() => handleScrollAndNavigate("home")} 
            className='text-xl font-bold hover:underline sm:2xl md:text-3xl md:pl-6 cursor-pointer'  
          >
            PANHA 
            <span className='text-orange-500 px-2'>SAK</span>
          </h1>
          <FaCode 
            className='text-xl text-orange-500 md:text-3xl'
          />
        </div>
        <div className='flex gap-10'>
          <div className='hidden md:flex gap-10 text-xl'>
            <button onClick={() => handleScrollAndNavigate("home")} className="hover:text-orange-500">
              Home
            </button>
            <button onClick={() => handleScrollAndNavigate("about")} className="hover:text-orange-500">
              About
            </button>
            <button onClick={() => handleScrollAndNavigate("skill")} className="hover:text-orange-500">
              Skill
            </button>
            <button onClick={() => handleScrollAndNavigate("contact")} className="hover:text-orange-500">
              Languages
            </button>
          </div>
          <div>
            <div className='relative group inline-block mr-8'>
              <span 
                onClick={handleDownload}
                className='w-12 h-12 bg-orange-500 bg-opacity-25 text-gray-200 text-2xl inline-flex
                  items-center justify-center rounded-full hover:bg-opacity-40  transition-all
                  hover:text-white cursor-pointer duration-300  '
              
              >
                <FaFilePdf />
              </span>
              <div className="absolute top-full mt-2 hidden group-hover:block 
                   bg-gray-500 text-white text-sm px-2 py-2 rounded z-10 duration-300 
                   line-clamp-1"
              >
                Download My Cv
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
