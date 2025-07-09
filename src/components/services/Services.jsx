import React from 'react'
import './services.css'
import { motion } from 'framer-motion'


const Services = () => {
  return (
    <motion.section id='services'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >Services</motion.section>
  )
}

export default Services