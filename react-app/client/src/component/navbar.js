import React from 'react';
import './styles/navbar.css';
import Logo from '../image/logo.jpg';

function NavBar() {
  return (
    <nav>
      <div className="logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <ul>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
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