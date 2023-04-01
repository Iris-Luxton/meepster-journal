
import React, { useState } from 'react';
// import axios from 'axios';
import { useSignup } from "../hooks/useSignup";
import './styles/registerForm.css';
import { Link } from 'react-router-dom';
import photo1 from '../image/photo1.jpg';
import photo2 from '../image/photo2.jpg';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signup, error, isLoading} = useSignup();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    // const userData = {
    //   email,
    //   password,
    // };

    // const response = await axios.post('http://localhost:5000/api/register', userData);
    // console.log(response.data);
    await signup(email, password)
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
          <h6>At least 8 characters, 1 lower case, 1 uppercase, 1 number, 1 symbol</h6>
        </div><br /><br /><br /><br />
        <button disabled={isLoading} type="submit">Register</button>
        
        {error && <div className="error">{error}</div>}
      </form>
      <p>
          Already have an account?{' '}
          <Link to="/login" style={{ color: 'blue' }}>Login here</Link>
        </p>
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

export default RegisterForm;