import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Task1() {
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
              <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" style={{marginLeft:"900px"}}/>
            </div>
          </li>
        </ul>
      </div>

  </nav>
    </div>
  );
}
