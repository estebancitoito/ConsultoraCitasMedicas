import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import {Home} from './components/Home'
import {Appointments} from './components/Appointments'
import {Navbar} from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/appointments" element={<Appointments/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
