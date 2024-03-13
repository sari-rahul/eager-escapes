import React from 'react';
import './header.css';


const Header = () => {
  return (

    <div className='eager-escape__header'>
      <div className='eager-escape__header-slogan'>
          <h3>Connecting clients with the world through tailor-made itineraries</h3>
          <h1>as unique as you are</h1>
      </div>
      <div>
        <div className='eager-escape__header-explore'>
          <h3>let's explore</h3>
          <button>arrow button</button>
        </div>
        <div className='eager-escape__header-icons'> 
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-pinterest-square" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

export default Header