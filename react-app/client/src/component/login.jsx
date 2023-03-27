import React, { useState } from 'react';
import axios from 'axios';
import './styles/loginForm.css';
import { Link } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      const { token } = response.data;
      setToken(token);
      setError('');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2><br />
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div><br />
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div><br /><br />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form><br />
      <p>
        Don't have an account?{' '}
        <Link to="/register" style={{ color: 'blue' }} >Register here</Link>
      </p>
      <br />
    </div>
  );
};

export default Login;