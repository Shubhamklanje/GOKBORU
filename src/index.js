import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Homepage from './pages/Homepage';
import Course from './pages/Course';
import MyCourse from './pages/MyCourse';
import Certificate from './pages/Cretificate';
import About from './pages/About';
import Contact from './pages/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './pages/Header';
import Register from './pages/Register';
import Login from './pages/Login';
import Schedule from './pages/Schedule';
import Enroll from './pages/Enroll';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/MyCourse" element={<MyCourse />} />
        <Route path="/Certificate" element={<Certificate />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Enroll" element={<Enroll />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

