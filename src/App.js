import './App.css';
import React from "react";

import {BrowserRouter as Router, 
  Route,
  Routes
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';


function App() {

  return (
    <div className='app'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/sign-up" exact element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
