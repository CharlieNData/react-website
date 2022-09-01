import './App.css';
import React from "react";

import {BrowserRouter as Router, 
  Route,
  Link,
  Routes
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Button from './components/Button';
import HeroSection from './components/HeroSection';
import Home from './components/pages/Home';


function App() {

  return (
    <div className='app'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
