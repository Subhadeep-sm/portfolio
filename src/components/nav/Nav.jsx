import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { MdOutlineMessage } from "react-icons/md";

import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
     <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome /></a>
     <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><FaRegUser /></a>
     <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BiBook /></a>
     <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active': ''}><GrProjects  /></a>
     <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><MdOutlineMessage /></a>
    </nav>
  )
}

export default Nav