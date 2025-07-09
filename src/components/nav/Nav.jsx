import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { MdOutlineMessage } from "react-icons/md";

import {useState} from 'react'
import { motion } from 'framer-motion'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
     <motion.a
       href="#"
       onClick={() => setActiveNav('#')}
       className={activeNav === '#' ? 'active': ''}
       whileHover={{ scale: 1.2 }}
       whileTap={{ scale: 0.95 }}
       style={activeNav === '#' ? { borderBottom: '1px solid #e3b04b' } : {}}
     ><AiOutlineHome /></motion.a>
     <motion.a
       href="#about"
       onClick={() => setActiveNav('#about')}
       className={activeNav === '#about' ? 'active': ''}
       whileHover={{ scale: 1.2 }}
       whileTap={{ scale: 0.95 }}
       style={activeNav === '#about' ? { borderBottom: '1px solid #e3b04b' } : {}}
     ><FaRegUser /></motion.a>
     <motion.a
       href="#experience"
       onClick={() => setActiveNav('#experience')}
       className={activeNav === '#experience' ? 'active': ''}
       whileHover={{ scale: 1.2 }}
       whileTap={{ scale: 0.95 }}
       style={activeNav === '#experience' ? { borderBottom: '1px solid #e3b04b' } : {}}
     ><BiBook /></motion.a>
     <motion.a
       href="#projects"
       onClick={() => setActiveNav('#projects')}
       className={activeNav === '#projects' ? 'active': ''}
       whileHover={{ scale: 1.2 }}
       whileTap={{ scale: 0.95 }}
       style={activeNav === '#projects' ? { borderBottom: '1px solid #e3b04b' } : {}}
     ><GrProjects  /></motion.a>
     <motion.a
       href="#contact"
       onClick={() => setActiveNav('#contact')}
       className={activeNav === '#contact' ? 'active': ''}
       whileHover={{ scale: 1.2 }}
       whileTap={{ scale: 0.95 }}
       style={activeNav === '#contact' ? { borderBottom: '1px solid #e3b04b' } : {}}
     ><MdOutlineMessage /></motion.a>
    </motion.nav>
  )
}

export default Nav