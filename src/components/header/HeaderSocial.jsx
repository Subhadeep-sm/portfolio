import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";


const HeaderSocial = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/subha-deep-mishra-4829501ab/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/Subhadeep-sm" target="_blank"><BsGithub /></a>
            <a href="https://www.instagram.com/_.asymptote._/" target="_blank"><FaInstagram /></a>
        </div>
    )
}
export default HeaderSocial