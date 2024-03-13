import React from 'react'
import './navbar.css';

const Navbar = () => {
  return (
    <div className='eager-escapes__navbar'>
      <div className='eager-escapes__navbar-leftside'>
        <div>About</div>
        <div>Service</div>
        <div>Team</div>
        <div>Plan</div>     

      </div>
      <div className='eager-escapes__navbar-logo'>
          <div>Logo</div>
      </div>
      <div className='eager-escapes__navbar-rightside'>
        <div>Career</div>
        <div>shop</div>
        <div>blog</div>
        <div>contact</div>
      </div>
    </div>
  )
}

export default Navbar;