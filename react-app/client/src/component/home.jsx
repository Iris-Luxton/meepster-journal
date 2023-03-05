import React from 'react';
import './home.css';
import Welcome from '../image/welcome.png';

function Home() {
  return (
    <div className="photo-container">
        <img src={Welcome} alt="Welcome message" />
    </div>
  );
}
export default Home;