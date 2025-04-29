import React from 'react'
import { FaCode, FaDatabase } from 'react-icons/fa6'


const SkillDetails = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Front End",
    desc: "Front-End Development: HTML, CSS, JavaScript, ReactJs, Tailwind",
  },
  {
    id: 2,
    icon: <FaDatabase />,
    title: "Back End",
    desc: "Back-End Development: Java, SpringBoot, PHP, Laravel,Restful API, PostgreSQL, MySQL, Postman, Swagger",
  },
  
]

const Skill = () => {


  return (
    <div>
      <div className='text-white'>
        <div 
          data-aos="fade-down"
          className='flex justify-center'>
          <h1 className='font-bold text-5xl '>
            My <span className='text-orange-500'>Skills</span>
          </h1>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-16 mt-20'>
          {SkillDetails.map((data) =>(
            <div className='w-[350px] h-[350px] bg-gray-500/20 rounded-3xl p-4
              border-2 border-transparent hover:border-orange-500 
              hover:scale-105 hover:shadow-2xl 
              transition-all duration-500 ease-in-out '
            >
              <div className='flex flex-col items-center leading-8'>
                <div className='text-7xl text-orange-500'>
                  {data.icon}
                </div>
                <h1 className='text-3xl font-bold mt-4'>
                  {data.title}
                </h1>
                <p className='mt-8 flex text-center'>
                  {data.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill
