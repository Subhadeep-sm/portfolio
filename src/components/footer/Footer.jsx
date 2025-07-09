import React from 'react'
import './footer.css'

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion'


const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.a href="#" className='footer_logo' initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>SUBHA DEEP MISHRA</motion.a>
      <motion.ul className='permalinks' initial="hidden" whileInView="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
        <motion.li variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><a href="#">Home</a></motion.li>
        <motion.li variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><a href="#about">About</a></motion.li>
        <motion.li variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><a href="#experience">Technologies</a></motion.li>
        <motion.li variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><a href="#projects">Projects</a></motion.li>
        <motion.li variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><a href="#contact">Contact</a></motion.li>
      </motion.ul>
      <motion.div className="footer_socials" initial="hidden" whileInView="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
        <motion.a href="https://www.linkedin.com/in/subha-deep-mishra-4829501ab/" target='_blank' variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.2 }}><FaLinkedin /></motion.a>
        <motion.a href="https://www.instagram.com/_.asymptote._/" target='_blank' variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.2 }}><FaInstagram/></motion.a>
        <motion.a href="https://github.com/Subhadeep-sm" target='_blank' variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.2 }}><FaGithub/></motion.a>
      </motion.div>
      <motion.div className="footer_copyright" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <small>&copy; Subh Deep Mishra. All rights reserved</small>
      </motion.div>
    </motion.footer>
  )
}

export default Footer