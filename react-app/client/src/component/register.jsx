
import React, { useState } from 'react';
import axios from 'axios';
import './styles/registerForm.css';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
    };

    const response = await axios.post('http://localhost:5000/api/register', userData);
    console.log(response.data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign up with us!</h2>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input className="input-field-email" type="email" id="email" value={email} onChange={handleEmailChange} />
        </div><br />
        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input className="input-field-password" type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div><br /><br />
        <button type="submit">Register</button>
      </form>
      <p>
          Already have an account?{' '}
          <Link to="/login" style={{ color: 'blue' }}>Login here</Link>
        </p>
    </div>
  );
};

export default RegisterForm;