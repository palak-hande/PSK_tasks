import React from 'react';
import Nav from './components/Nav'
import Tbox from './components/Tbox';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


export default function App(){
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Tbox" element={<Tbox/> }/>
        </Routes>
      </Router>
    </div>
  );
}
