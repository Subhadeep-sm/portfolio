import React,{useRef} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";



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
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>subhadeepmishra100@gmail.com</h5>
            <a href="mailto:subhadeepmishra100@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <FaWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 6294222538</h5>
            <a href="https://api.whatsapp.com/send?phone=6294222538" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact