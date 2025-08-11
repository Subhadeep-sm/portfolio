import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { GiBrain } from "react-icons/gi";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { VscFolderLibrary } from "react-icons/vsc";
import { motion } from 'framer-motion'


const About = () => {
  return (
    <motion.section id='about'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.h5
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >Get To Know</motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >About Me</motion.h2>
      
      <div className="container about_container">
        <motion.div
          className="about_me"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="about_me-image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <img src={ME} alt='About Image'/>
          </motion.div>
        </motion.div>
        <motion.div
          className="about_content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="about_cards"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.article className='about_card' variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <GiBrain className='about_icon'/>
              <h5>Skills</h5>
              <small>Java Fullstack</small>
            </motion.article>

            <motion.article className='about_card' variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <HiMiniAcademicCap className='about_icon'/>
              <h5>Education</h5>
              <small>BTech (IT)</small>
              <br></br>
              <small>TMSL(2022-26)</small>
            </motion.article>

            <motion.article className='about_card' variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>5+ completed</small>
            </motion.article>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
          I’m a passionate Information Technology student with a strong grasp of programming, 
          frontend development, and database design. I enjoy solving real-world problems through code,
           and have hands-on experience with tools like React, Java, Python, MySQL, and more. With a focus on 
           clean, scalable solutions, I aim to keep growing by exploring new tech and contributing 
           to innovative projects.
          </motion.p>

          <motion.a
            href="#contact"
            className='btn btn-primary'
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >Let's Talk</motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About