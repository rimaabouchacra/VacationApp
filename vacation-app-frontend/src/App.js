import React, { useState } from 'react';
import {Navigate} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './pages/login_page';
import Register from './pages/signup_page';
import Homepage from './pages/home_page';
import NewVacation from './pages/add_vacation';
import EditedVacation from './pages/edit_vacation';
import AboutUsPage from './pages/about_us';
import ContactUsPage from './pages/contact_us';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Register/>} />
        <Route path="/addvacation" element={<NewVacation/>} />
        <Route path="/editvacation" element={<EditedVacation/>} />
        <Route path="/aboutus" element={<AboutUsPage/>} />
        <Route path="/contactus" element={<ContactUsPage/>} />
        
      </Routes>  
    </Router> 
  );
}

export default App;
