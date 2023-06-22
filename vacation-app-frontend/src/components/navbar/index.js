import '../index.css'
import './index.css'
import React from 'react';
import logo from '../../images/logo-nav.png'
import { Link } from 'react-router-dom';
const Navbar = ({ activePage }) => {

  return (
    <nav className='navbar'>
      <div>
        <img className='nav-logo' src={logo} alt='logo' />
      </div>
      <div className='links'>
        <Link className={activePage === 'home' ? 'active' : ''} to='/'>Home</Link>
        <Link className={activePage === 'about' ? 'active' : ''} to='/aboutus'>About Us</Link>
        <Link className={activePage === 'contactus' ? 'active' : ''} to='/contactus'>Contact Us</Link>
      </div>
      <div className='links-register'>
        <Link className={activePage === 'login' ? 'active' : ''} to='/login'>Login</Link>
        <button className='signup-btnn '><a href="signup">Sign up free</a></button>
      </div>
    </nav>
  );
};

export default Navbar;