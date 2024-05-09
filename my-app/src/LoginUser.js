import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import './LoginUser.css';

function LoginUser() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/loginuser', formData);

      console.log(response.data);

      if (response && response.data === 'login success') {
        console.log('Login successful!', response.data);
        // Navigate to the dashboard after successful login
        navigate('/UserDashboard');
      } else {
        console.error('Login failed! Unexpected response:', response);
      }
    } catch (error) {
      console.error('Login failed!', error);
    }
  };

  return (
    <div className="login-user-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">E-Mail:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginUser;
