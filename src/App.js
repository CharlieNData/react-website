import './App.css';
import React from "react";

import {BrowserRouter as Router, 
  Route,
  Link,
  Routes
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Button from './components/Button';


function App() {

  return (
    <div className='app'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact>
            
          </Route>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
