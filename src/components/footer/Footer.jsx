import React from 'react'
import './footer.css'

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>SUBHA DEEP MISHRA</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Technologies</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/subha-deep-mishra-4829501ab/" target='_blank'><FaLinkedin /></a>
        <a href="https://www.instagram.com/_.asymptote._/" target='_blank'><FaInstagram/></a>
        <a href="https://github.com/Subhadeep-sm" target='_blank'><FaGithub/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Subh Deep Mishra. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer