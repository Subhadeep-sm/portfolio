import React from 'react'
import './experience.css'
import html from '../../assets/technologies/html.png'
import css from '../../assets/technologies/css.png'
import react from '../../assets/technologies/react.png'
import javascript from '../../assets/technologies/javascript.svg'
import tailwind from '../../assets/technologies/tailwind.png'
import python from '../../assets/technologies/python.png'
import java from '../../assets/technologies/java.svg'
import c from '../../assets/technologies/c.png'
import cpp from '../../assets/technologies/c++.png'
import git from '../../assets/technologies/git.png'
import github from '../../assets/technologies/github.png'
import mysql from '../../assets/technologies/mysql.svg'
import bootstrap from '../../assets/technologies/bootstrap.png'




const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>Technologies</h2>

      <div className="technology_cards container">
      <article className="technology_card">
          <img src={html} alt='HTML5'/>
          <h5>HTML5</h5>
        </article>
        <article className="technology_card">
          <img src={css} alt='CSS'/>
          <h5>CSS</h5>
        </article>
        <article className="technology_card">
          <img src={javascript} alt='Javascript'/>
          <h5>Javascript</h5>
        </article>
        <article className="technology_card">
          <img src={tailwind} alt='Tailwind CSS'/>
          <h5>Tailwind CSS</h5>
        </article>
        <article className="technology_card">
          <img src={bootstrap} alt='Bootstrap'/>
          <h5>Bootstrap</h5>
        </article>
        <article className="technology_card">
          <img src={react} alt='React'/>
          <h5>React</h5>
        </article>
        <article className="technology_card">
          <img src={c} alt='C'/>
          <h5>C</h5>
        </article>
        <article className="technology_card">
          <img src={cpp} alt='C++'/>
          <h5>C++</h5>
        </article>
        <article className="technology_card">
          <img src={python} alt='Python'/>
          <h5>Python</h5>
        </article>
        <article className="technology_card">
          <img src={java} alt='Java'/>
          <h5>JAVA</h5>
        </article>
        <article className="technology_card">
          <img src={mysql} alt='MySQL'/>
          <h5>MySQL</h5>
        </article>
        <article className="technology_card">
          <img src={git} alt='Git'/>
          <h5>Git</h5>
        </article>
        <article className="technology_card">
          <img src={github} alt='Github'/>
          <h5>Github</h5>
        </article>
      </div>
    </section>
  )
}

export default Experience