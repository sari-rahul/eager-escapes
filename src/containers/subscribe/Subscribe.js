import React from 'react';
import './subscribe.css';


const Subscribe = () => {
  return (
    <div className='eager-escapes__subscribe'>
      <h1>Find out How we Work!!</h1>
      <p>Access our "How we work" guide + subscribe!</p>
      <div className='eager-escapes__subscribe-form'>
        <form action="">
          <input type="text" placeholder='Firstname'/>
          <input type="text" placeholder='Lastname'/>
          <input type="email" placeholder='Email Address'/>
          <button type='submit'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe