import React from 'react';
import './welcome.css';


const Welcome = () => {
  return (
    <div className='eager-escapes__welcome'>
      <h1 className='eager-escapes__welcome-heading'>WELCOME TO EAGER-ESCAPES TRAVEL</h1>
      <hr />
      <p>When you work with Explorateur, you aren’t
         simply a confirmation number, or a call in 
         a hold cue. Your investment is personal to 
         us. From our thorough inquiry form to the 
         moment that you return home, we are an advocate
          for your vacation experience. We take the extra
           steps to ensure that each detail of your
            vacation is perfectly customized to your travel style.</p>
      <h1>Experience. Expand. Explore.</h1>
      <button className='eager-escapes__welcome-button'>LEARN MORE</button>
    </div>
  )
}

export default Welcome;