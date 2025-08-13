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
import postgres from '../../assets/technologies/postgres.png'
import spring from '../../assets/technologies/spring.png'
import hibernate from '../../assets/technologies/hibernate.png'
import postman from '../../assets/technologies/postman.webp'
import docker from '../../assets/technologies/docker.webp'
import { motion } from 'framer-motion'


const Experience = () => {
  return (
    <motion.section id='experience'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.h5
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >The Skills I Have</motion.h5>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >Technologies</motion.h1>
      <motion.div
        className="technology_cards container"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } }
        }}
      >
        <motion.article className="technology_card" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }}><img src={html} alt='HTML5'/><h5>HTML5</h5></motion.article>
        <motion.article className="technology_card" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }}><img src={css} alt='CSS'/><h5>CSS</h5></motion.article>
        <motion.article className="technology_card" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }}><img src={javascript} alt='Javascript'/><h5>Javascript</h5></motion.article>
        <motion.article className="technology_card" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }}><img src={tailwind} alt='Tailwind CSS'/><h5>Tailwind CSS</h5></motion.article>
        <motion.article className="technology_card" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }}><img src={bootstrap} alt='Bootstrap'/><h5>Bootstrap</h5></motion.article>
        <motion.article className="technology_card" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }}><img src={react} alt='React'/><h5>React</h5></motion.article>
        <motion.article className="technology_card" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }}><img src={c} alt='C'/><h5>C</h5></motion.article>
        <motion.article className="technology_card" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }}><img src={cpp} alt='C++'/><h5>C++</h5></motion.article>
        <motion.article className="technology_card" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }}><img src={python} alt='Python'/><h5>Python</h5></motion.article>
        <motion.article className="technology_card" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }}><img src={java} alt='Java'/><h5>JAVA</h5></motion.article>
        <motion.article className="technology_card" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }}><img src={spring} alt='Java'/><h5>Spring</h5></motion.article>
        <motion.article className="technology_card" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }}><img src={mysql} alt='MySQL'/><h5>MySQL</h5></motion.article>
        <motion.article className="technology_card" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }}><img src={postgres} alt='MySQL'/><h5>PostgreSQL</h5></motion.article>
        <motion.article className="technology_card" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }}><img src={hibernate} alt='Hibernate'/><h5>Hibernate</h5></motion.article>
        <motion.article className="technology_card" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }}><img src={git} alt='Git'/><h5>Git</h5></motion.article>
        <motion.article className="technology_card" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }}><img src={github} alt='Github'/><h5>Github</h5></motion.article>
        <motion.article className="technology_card" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }}><img src={postman} alt='Postman'/><h5>Postman</h5></motion.article>
        <motion.article className="technology_card" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.05 }}><img src={docker} alt='Docker'/><h5>Docker</h5></motion.article>
      </motion.div>
    </motion.section>
  )
}

export default Experience