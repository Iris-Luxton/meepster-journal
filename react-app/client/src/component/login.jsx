import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
// import axios from 'axios';
import './styles/loginForm.css';
import { Link } from 'react-router-dom';
import photo1 from '../image/photo1.jpg';
import photo2 from '../image/photo2.jpg';
const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
const {login, error, isLoading} = useLogin()

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await login(email, password)
    // try {
    //   const response = await axios.post('http://localhost:5000/api/login', { email, password });
    //   const { token } = response.data;
    //   setToken(token);
    //   setError('');
    // } catch (err) {
    //   setError('Invalid email or password');
    // }
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
        <button  disabled={isLoading} type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form><br />
      <p>
        Don't have an account?{' '}
        <Link to="/register" style={{ color: 'blue' }} >Register here</Link>
      </p>
      <br />
      <div className="bottom-wrapper">
      <div className="bottom-left">
        <img src={photo1} alt="Cat 1" />
      </div>
      <div className="bottom-right">
        <img src={photo2} alt="Cat 2" />
      </div>
      </div>
    </div>
  );
};

export default Login;