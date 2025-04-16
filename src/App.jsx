import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Nav from './components/nav/Nav'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Projects from './components/projects/Projects'




function App() {

  return (
    <>

    <Header/>

    <Nav/>
    <About/>
    <Experience/>
    {/* <Services/> */}
    <Projects/>
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
