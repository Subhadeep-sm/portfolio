import React from 'react'
import CV from '../../assets/CV.pdf'
import { motion } from 'framer-motion'
const CTA = () => {
    return (
        <motion.div
            className='cta'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <motion.a
                href={CV}
                download="Subha_Deep_Mishra_WEBDEVELOPER.pdf"
                className='btn'
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
            >Download CV</motion.a>
            <motion.a
                href="#contact"
                className='btn btn-primary'
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
            >Let's Talk</motion.a>
        </motion.div>
    )
}
export default CTA