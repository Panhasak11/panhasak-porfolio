import React from 'react'
import { Element } from "react-scroll";

const Section = ({ name, color, title, children }) => {
  return (
    <Element name={name} className={`min-h-screen flex flex-col ${color} p-10 `}>
      <h1>{title}</h1>
      {children}
    </Element>
  )
}

export default Section
