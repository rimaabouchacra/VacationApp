import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import '../index.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    
    console.log('Signup:', name, email, password);
  };

  return (
    <div>
      <div className='signup-form'>
        <h1 className='titre'>Sign up</h1>

        <form className='form' onSubmit={handleSignup}>
          <div className='signup-container'>
            <label className='label' htmlFor='name'>
              Name:
            </label>
            <input
              className='input-field name'
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <br />
          <div className='signup-container'>
            <label className='label' htmlFor='email'>
              Email:
            </label>
            <input
              className='input-field email'
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />

          <div className='signup-container'>
            <label className='label' htmlFor='password'>
              Password:
            </label>
            <input
              className='input-field email'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />
          <div>
            <button className='all-btn singup-btn' type='submit'>
              SIGNUP
            </button>
          </div>
          <br />
          <div>
            <label className='label link-redirect' htmlFor='name'>
              Already have an account?
              <Link className='login-text' to='/login'>
                Login
              </Link>
            </label>
          </div>
        </form>
      </div>
      <br />
    </div>
  );
};

export default Signup;
