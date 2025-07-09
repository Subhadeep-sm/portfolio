import React from 'react'
import './projects.css'
import abc from '../../assets/projects/background.jpg'
import hotelmanagement from '../../assets/projects/hotel_management.png'
import currencyconverter from '../../assets/projects/currency_converter.png'
import { motion } from 'framer-motion'


const projectsData = [
  {
    title: 'Currency Converter',
    image: currencyconverter,
    alt: 'Currency converter',
    description: 'A React-based currency converter app using ExchangeRate API to convert between global currencies in real-time.',
    links: [
      { href: 'https://subhadeep-sm.github.io/currencyConverter/', label: 'Visit', className: 'visit-btn' },
      { href: 'https://github.com/Subhadeep-sm/currencyConverter.git', label: 'Github', className: 'github-btn' }
    ]
  },
  {
    title: 'Hotel Management System',
    image: hotelmanagement,
    alt: 'Hotel Management System',
    description: 'A Java-MySQL powered console application for efficient hotel room booking, customer management, and automated billing.',
    links: [
      { href: 'https://github.com/Subhadeep-sm/Hotel-Management-System', label: 'Github', className: 'visit-btn' }
    ]
  },
  // Add more projects here as needed
];

const Projects = () => {
  return (
    <motion.section id='projects'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.h5
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >My Recent Work</motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >Projects</motion.h2>

      <motion.div
        className="container projects_cards"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        {projectsData.map((project, idx) => (
          <motion.article
            className="project_card"
            key={project.title + idx}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.03, boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
          >
            <motion.img
              src={project.image}
              alt={project.alt}
              class="card-bg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            />
            <motion.div
              class="overlay"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.85 }}
              transition={{ duration: 0.3 }}
            >
              <div class="card-content">
                <div className='projitems_div'>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
                <div className='projitems_div-btns'>
                  {project.links.map((link, lidx) => (
                    <motion.a
                      key={link.href + lidx}
                      href={link.href}
                      target="_blank"
                      class={link.className}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                    >{link.label}</motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Projects