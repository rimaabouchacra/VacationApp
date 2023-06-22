import React from 'react';
import './index.css';
import traveltime from '../../images/aboutUs1.png'
import traveltime2 from '../../images/aboutUs2.png'
import traveltime3 from '../../images/aboutUs3.png'

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <h1 className='about-us-title'>About Us</h1>  
      <div className='about-us-row'>
        <img src={traveltime} alt="travel time" />
        <p className='about-us-text'>We understand the importance of a well-deserved break, and that's why we've developed Travel Time with a focus on enhancing the vacation experience. By leveraging innovative technologies, we offer employees a comprehensive set of tools and resources to request and plan their vacations effortlessly.</p>
      </div>
      <div className='about-us-row'>
        <p className='about-us-text'>At Travel Time, we are dedicated to simplifying employee vacation management. We believe that every employee deserves a hassle-free and enjoyable vacation experience. Our web application provides the tools and features necessary for employees to plan and manage their vacations effortlessly. Trust Travel Time to make your vacation management a breeze!</p>
        <img src={traveltime2} alt="travel time" />
      </div>
      <div className='about-us-row'>
        <img src={traveltime3} alt="travel time" />
        <p className='about-us-text'>We pride ourselves on our commitment to excellence. Our dedicated team of developers, designers, and customer support specialists work tirelessly to ensure a seamless and reliable user experience. We continuously strive to improve our platform, incorporating the latest advancements in web technology to stay at the forefront of employee vacation management.</p>
      </div>
     
    </div>
  );
};

export default AboutUs;
