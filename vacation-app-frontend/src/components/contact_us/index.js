import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../signup/index.css"

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  return (
    <div>
      <div className='signup-form'>
        <h1 className='titre'>Contact Us</h1>
        <form className='form'>
          <div className='signup-container'>
            <label className='label date' htmlFor='name'>
              Name:
            </label>
            <input
              className='input-field'
              type='text'
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <br />

          <div className='signup-container'>
            <label className='label date' htmlFor='email'>
              Email:
            </label>
            <input
              className='input-field'
              type='email'
              placeholder='Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />

          <div className='signup-container'>
            <label className='label date' htmlFor='subject'>
              Subject:
            </label>
            <input
              className='input-field'
              type='text'
              placeholder='Subject'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <br />

          <div className='signup-container'>
            <label className='label date' htmlFor='message'>
              Message:
            </label>
            <textarea
              className='input-field textarea'
              rows='4'
              placeholder='Your Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <br />

          <div className='btn'>
            <button className='all-btn signup-btn' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
      <br />
    </div>
  );
};

export default ContactUs;
