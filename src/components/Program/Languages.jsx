import React from 'react'
import { Element } from 'react-scroll'
import SkillBar from './SkillBar'
import MarqueeIcons from './MarqueeIcons'

const Contact = () => {
  return (
    <div >
      <div className='text-white'>
        <h1 className="text-4xl">Knowledge of Programming Languages</h1>
        <div className='flex gap-10 mt-8'>
          <div className='w-1/2'>
            <SkillBar language={"HTML"} level={75}/>
            <SkillBar language={"CSS"} level={65}/>
            <SkillBar language={"JavaScript"} level={60}/>
            <SkillBar language={"ReactJs"} level={60}/>
            <SkillBar language={"TailWind"} level={30}/>
          </div>
          <div className='w-1/2 '>
            <SkillBar language={"Java"} level={80}/>
            <SkillBar language={"SpringBoot"} level={65}/>
            <SkillBar language={"PHP"} level={50}/>
            <SkillBar language={"Laravel"} level={35}/>
            <SkillBar language={"C#"} level={30} />
          </div>
        </div>
        <div className='mt-40'>
          <MarqueeIcons />
        </div>
      </div>
    </div>
  )
}

export default Contact
