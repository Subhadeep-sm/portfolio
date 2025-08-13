import React,{useRef} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zu9ecdk', 'template_lsr77kv', form.current, {
        publicKey: 'hDzKSn5w2JGopdu0F',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset();
  };



  return (
    <motion.section id='contact'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.h5
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >Get In Touch</motion.h5>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >Contact Me</motion.h1>

      <div className="container contact_container">
        <motion.div
          className="contact_options"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.article className="contact_option" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>subhadeepmishra100@gmail.com</h5>
            <motion.a href="mailto:subhadeepmishra100@gmail.com" target='_blank' whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>Send a message</motion.a>
          </motion.article>
          <motion.article className="contact_option" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <FaWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 6294222538</h5>
            <motion.a href="https://api.whatsapp.com/send?phone=6294222538" target='_blank' whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>Send a message</motion.a>
          </motion.article>
        </motion.div>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.input type="text" name='name' placeholder='Your Full Name' required initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} />
          <motion.input type="email" name='email' placeholder='Your Email' required initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} />
          <motion.textarea name="message" rows="7" placeholder='Your Message' required initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} />
          <motion.button type='submit' className='btn btn-primary' whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>Send Message</motion.button>
        </motion.form>
      </div>
    </motion.section>
  )
}

export default Contact