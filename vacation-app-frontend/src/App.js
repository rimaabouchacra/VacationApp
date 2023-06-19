import React, { useState } from 'react';
import {Navigate} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './pages/login_page';
import Register from './pages/signup_page';
import Homepage from './pages/home_page';
import NewVacation from './pages/add_vacation';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Register/>} />
        <Route path="/addvacation" element={<NewVacation/>} />
          {/* <Route path="/" element={<Homepage/>} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/imagetest" element={<ImageTest/>} />
          <Route path="/headingtest" element={<HeadingTest/>} />
          <Route path="/linkbuttontest" element={<LinkButtonTest/>} /> */}
      </Routes>  
    </Router> 
  );
}

export default App;
