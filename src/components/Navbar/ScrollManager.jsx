import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Events, scroller } from 'react-scroll';

const ScrollManager = () => {

    const location = useLocation();
    const navigate = useNavigate();


    useEffect(()=>{
        const section = location.pathname.slice(1) || "home";

        if(location.pathname !== "/home"){
            navigate("/home", {replace:true});
        }

        scroller.scrollTo("home",{
            smooth: true,
            duration: 800,
            offset: -80,
            
        });
    }, []);

    useEffect(() =>{
        const section = location.pathname.slice(1) || "home";

        scroller.scrollTo(section, {
            smooth: true,
            duration: 1000,
            offset: -80,
        });
    },[location]);

  return null;
}

export default ScrollManager
