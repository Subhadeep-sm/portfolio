import React from 'react'
import './testimonials.css'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.section id='testimonials'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >Testimonials</motion.section>
  )
}

export default Testimonials