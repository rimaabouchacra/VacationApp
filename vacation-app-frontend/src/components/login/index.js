import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../signup/index.css'
const Loginn = ()=>{


    return (
    <div>
        <div className='signup-form'>
        <h1 className='titre'>Login</h1>
        <form className='form'>
            <div className='signup-container'>
                <label className='label' htmlFor="email">Email:</label>
                <input className='input-field email' type="email" placeholder='Email'/>
            </div><br/>

            <div className='signup-container'>
                <label className='label' htmlFor="name">Password:</label>
                <input className='input-field pass' type="password" placeholder='Password'/><br/>
                <label className='link-redirect-signupp' htmlFor="name"><a className='forget' href="">Forget password?</a></label><br /><br />

            </div><br/>
            <div className='btn'>
                <button className='all-btn signup-btn '>Login</button>
            </div><br />
            
            <div>
                <label className='label link-redirect-signup' htmlFor="name">Don't have an account?<a className='login-text' href='signup'>Signup</a></label>
            </div>
        </form>
        </div><br/>
        </div>
    );
}

export default Loginn;