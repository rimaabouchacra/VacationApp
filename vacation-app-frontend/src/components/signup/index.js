import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './index.css'
import '../index.css'
const Signup = ()=>{


return (
    <div>
        <div className='signup-form'>
        <h1 className='titre'>Sign up</h1>
        
        <form className='form'>
            <div className='signup-container'>
                <label className='label' htmlFor="name">Name:</label>
                <input 
                   className="input-field name"
                   type="text" 
                   placeholder='Name' 
                />
                
            </div><br/>
            <div className='signup-container'>
                <label className='label' htmlFor="email">Email:</label>
                <input className="input-field email"
                 type="email"
                 placeholder='Email'
                 />
            </div><br/>

            <div className='signup-container'>
                <label className='label' htmlFor="name">Password:</label>
                <input className="input-field email"
                 placeholder='Password'
                />
            </div><br/>
            <div>
                <button className='all-btn singup-btn'>SIGNUP</button>
            </div><br />
            <div>
                <label className='label link-redirect' htmlFor="name">Already have an account?<a className='login-text' href='login'>Login</a></label>
            </div>
        </form>
        </div><br/>
    </div>
    );
}

export default Signup;