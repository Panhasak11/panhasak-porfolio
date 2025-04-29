import React from 'react'

const IconComponent = ({Icon, url, tooltip, container ='', iconClass=''}) => {

    const handleClick = ()=>{
        if(!url) return;
        window.open(url, '_blank');
    }

  return (
    <div className={`relative group inline-block ${container}`}>
      <span className={`bannerIcon cursor-pointer ${iconClass}`} onClick={handleClick}>
        <Icon />
      </span>
      <div 
        className="absolute bottom-full mb-2 hidden group-hover:block 
        bg-gray-500 text-white text-sm px-2 py-2 rounded z-10 duration-300"
      >
        {tooltip}
      </div>
    </div>
  )
}

export default IconComponent;
