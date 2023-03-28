import React from 'react';
import './styles/navbar.css';
//import Logo from '../image/logo.jpg';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
function NavBar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const handleClick = () => {
    logout()
  }
  return (
    <nav>
      
      {/* <div className="logo-container">
        <img src={Logo} alt="Logo" />
      </div> */}
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
      <div className="text-container">
        <p>Meepster Journal</p>
      </div>
      {!user && (
      <ul>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
      )}
      {user && (
      <div>
        <span>{user.email}</span><br />
        <button onClick={handleClick}>Log out</button>
      </div>
      )}
    </nav>
  );
}

export default NavBar;