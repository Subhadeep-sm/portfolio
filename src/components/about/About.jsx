import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { BsAward } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
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
              <BsAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FaUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi atque est voluptate velit facere, dicta quod incidunt odio praesentium officiis nam iste fuga consequuntur ullam nisi eligendi labore, saepe ab?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About