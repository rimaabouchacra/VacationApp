import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../signup/index.css';

const Loginn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('Login:', email, password);
  };

  return (
    <div>
      <div className='signup-form'>
        <h1 className='titre'>Login</h1>
        <form className='form' onSubmit={handleLogin}>
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
              className='input-field pass'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <label className='link-redirect-signupp' htmlFor='password'>
              <a className='forget' href=''>
                Forget password?
              </a>
            </label>
            <br />
            <br />
          </div>
          <br />
          <div className='btn'>
            <button className='all-btn signup-btn' type='submit'>
              Login
            </button>
          </div>
          <br />

          <div>
            <label className='label link-redirect-signup' htmlFor='name'>
              Don't have an account?
              <Link className='login-text' to='/signup'>
                Signup
              </Link>
            </label>
          </div>
        </form>
      </div>
      <br />
    </div>
  );
};

export default Loginn;
