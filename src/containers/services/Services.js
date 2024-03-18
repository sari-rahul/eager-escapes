import React from 'react';
import './services.css';
import {desert,lake,backwater,palace } from './import.js';

import Card from '../../components/card/Card.js'


const Services = () => {
  return (
    <div className='eager-escapes__services'>
      <div className='eager-escapes__services-heading'>
          <h1>OUR SERVICES</h1>
          <h5>YOUR KIND OF TRAVEL</h5>
      </div>
      <div className='eager-escapes__services_cards-section'>
          <Card title=" SOLO ADVENTURES" text=" We believe that 
          independent travel can bring a unique level of connection 
          to the world" imgUrl={desert}/>
          <Card title=" SOLO ADVENTURES" text=" We believe that 
          independent travel can bring a unique level of connection 
          to the world" imgUrl={backwater}/>
          <Card title=" SOLO ADVENTURES" text=" We believe that 
          independent travel can bring a unique level of connection 
          to the world" imgUrl={lake}/>
          <Card title=" SOLO ADVENTURES" text=" We believe that 
          independent travel can bring a unique level of connection 
          to the world" imgUrl={palace}/>
      </div>
    </div>
  )
}

export default Services

