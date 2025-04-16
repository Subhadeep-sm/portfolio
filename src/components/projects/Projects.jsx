import React from 'react'
import './projects.css'
import abc from '../../assets/projects/background.jpg'
import hotelmanagement from '../../assets/projects/hotel_management.png'
import currencyconverter from '../../assets/projects/currency_converter.png'



const Projects = () => {

  //----------URLs----------
  const currencyconverterlink = " https://subhadeep-sm.github.io/currencyConverter/";
  const currencyconvertergithub = "https://github.com/Subhadeep-sm/currencyConverter.git";

  const hotelmanagementgithub = "https://github.com/Subhadeep-sm/Hotel-Management-System";

  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects_cards">
      <article className="project_card">
          <img src={currencyconverter} alt="Currency converter" class="card-bg"/>
            <div class="overlay"></div>
            <div class="card-content">
              <div className='projitems_div'>
              <h2>Currency Converter</h2>
              <p>A React-based currency converter app using ExchangeRate API to convert between global currencies in real-time.</p>
              </div>
              <div className='projitems_div-btns'>
              <a href={currencyconverterlink} target="_blank" class="visit-btn">Visit</a>
              <a href={currencyconvertergithub} target="_blank" class="github-btn">Github</a>
              </div>
              
            </div>
        </article>
        <article className="project_card">
          <img src={hotelmanagement} alt="Hotel Management System" class="card-bg"/>
            <div class="overlay"></div>
            <div class="card-content">
              <div className='projitems_div'>
              <h2>Hotel Management System</h2>
              <p>A Java-MySQL powered console application for efficient hotel room booking, customer management, and automated billing.</p>
              </div>
              <div className='projitems_div'>
              <a href={hotelmanagementgithub} target="_blank" class="visit-btn">Github</a>
              </div>
              
            </div>
        </article>
        {/* <article className="project_card">
          <img src={abc} alt="Ryzz Background" class="card-bg"/>
            <div class="overlay"></div>
            <div class="card-content">
              <div className='projitems_div'>
              <h2>Ryzz</h2>
              <p>A cool anonymous messaging platform (opensource NGL alternative)</p>
              </div>
              <div className='projitems_div'>
              <a href="#" class="visit-btn">Visit</a>
              </div>
              
            </div>
        </article>
        <article className="project_card">
          <img src={abc} alt="Ryzz Background" class="card-bg"/>
            <div class="overlay"></div>
            <div class="card-content">
              <div className='projitems_div'>
              <h2>Ryzz</h2>
              <p>A cool anonymous messaging platform (opensource NGL alternative)</p>
              </div>
              <div className='projitems_div'>
              <a href="#" class="visit-btn">Visit</a>
              </div>
              
            </div>
        </article> */}
      </div>
    </section>
  )
}

export default Projects