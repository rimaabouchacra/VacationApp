import '../index.css';
import './index.css';
import React, { useState } from 'react';
import header from '../images/header.png'
import { useNavigate } from 'react-router-dom';

const Content = () => {


  return (
    <div>
      {/* <img className='headerr' src={header} alt="" /> */}
      <img src={header} alt="" />

    </div>
  );
};

export default Content;