import React from 'react';
import './index.css';
import logo2 from '../../images/logo2.png'
const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo2} alt="logo" />
      <div>
          <span className="text">Phone: +123456789</span>
      </div>
      <div>
          <span className="text">Copyright © 2023 TravelTime. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
