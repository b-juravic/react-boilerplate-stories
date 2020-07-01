/**
 * Renders App navigation
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li className="nav-item">
          <NavLink to="/">STORIES</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/new">ADD NEW STORY</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
