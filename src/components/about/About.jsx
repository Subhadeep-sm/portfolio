import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { GiBrain } from "react-icons/gi";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { VscFolderLibrary } from "react-icons/vsc";




const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
          <article className='about_card'>
              <GiBrain className='about_icon'/>
              <h5>Skills</h5>
              <small>React|Java|MySQL</small>
            </article>

            <article className='about_card'>
              <HiMiniAcademicCap className='about_icon'/>
              <h5>Education</h5>
              <small>BTech in IT</small>
              <br></br>
              <small>TMSL(2022-2026)</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>3+ completed</small>
            </article>
          </div>

          <p>
          I’m a passionate Information Technology student with a strong grasp of programming, 
          frontend development, and database design. I enjoy solving real-world problems through code,
           and have hands-on experience with tools like React, Java, Python, MySQL, and more. With a focus on 
           clean, scalable solutions, I aim to keep growing by exploring new tech and contributing 
           to innovative projects.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About