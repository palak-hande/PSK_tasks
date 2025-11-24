import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Task1() {
  const [isToggled, setIsToggled]=useState(false);

  const handleToggle=(event)=>{

        event.preventDefault();
        if(isToggled==false){
          setIsToggled({backgroundColor:"black"});
        } else{
            setIsToggled({backgroundColor:"white"});
        }
  
  }

  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark">

      <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/Tbox" style={{color:'white'}}>Task1</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/" style={{color:'white'}}>Home</Link>
          </li>
          <li class="nav-item">
              <div class="form-check form-switch" style={{padding:'10px',marginLeft:'900px'}} onClick={handleToggle}>
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
                <label class="form-check-label" for="flexSwitchCheckChecked"></label>
              </div>
          </li>
        </ul>
      </div>

  </nav>
    </div>
  );
}
