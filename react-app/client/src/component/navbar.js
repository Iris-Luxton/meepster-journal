import React from 'react';
import './navbar.css';
import Logo from '../image/logo.jpg';

function NavBar() {
  return (
    <nav>
      <div className="logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="text-container">
        <p>Meepster Journal</p>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/static">Static resources</a>
        </li>
        <li>
          <a href="/quiz">Quiz</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;