import React from 'react';
import './about.css';
import {backwater,desert } from './import.js';



const About = () => {
  return (
    <div className='eager-escapes__about'>
      <div className='eager-escapes__about-left-container'>
        <div className='image-behind'><img src={backwater} alt="backwater" /></div>
        <div className='image-front'><img src={desert} alt="palace" /></div>
      </div>
      <div className='eager-escapes__about-right-container'>
        <div className='eager-escapes__about__right-inner-container'>
          <h1>EXPLORATEUR <br />TRAVEL WAS <br />FOUNDED IN 2015</h1>
          <hr />
          <p>To provide a modernized solution to travel 
            planning. Our philosophy is that travel isn’t
             only about seeing a destination, but it is about
              feeling the culture. We focus on experiential
               travel, allowing you to fully immerse yourself
                into your chosen destination.</p>
          <h1>About Us</h1>
          <button>learn more</button>
        </div>
      </div>
    </div>
  )
}

export default About