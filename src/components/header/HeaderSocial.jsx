import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion'


const HeaderSocial = () => {
    return (
        <div className='header_socials'>
            <motion.a
                href="https://www.linkedin.com/in/subha-deep-mishra-4829501ab/"
                target="_blank"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.2 }}
            ><FaLinkedin /></motion.a>
            <motion.a
                href="https://github.com/Subhadeep-sm"
                target="_blank"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.2 }}
            ><BsGithub /></motion.a>
            <motion.a
                href="https://www.instagram.com/_.asymptote._/"
                target="_blank"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.2 }}
            ><FaInstagram /></motion.a>
        </div>
    )
}
export default HeaderSocial