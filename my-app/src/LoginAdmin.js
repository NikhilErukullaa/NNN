import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';

function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function verifyLogin(e) {
    e.preventDefault();

    if (email === "Admin@gmail.com" && password === "Nikhil") {
      alert("Welcome to Admin Dashboard.");
      navigate('/Adminnav');
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  }

  return (
    <div className="wrapper">
      <h1 className="heading"> </h1>
      <label><strong>Email:</strong></label>
      <input
        type="text"
        id="email"
        placeholder="Enter your Email"
        value={email}
        className="inputLogin"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label><strong>Password:</strong></label>
      <input
        type="password"
        id="password"
        placeholder="Enter your Password"
        className="inputLogin"
        onChange={(e) => setPassword(e.target.value)}
      /><br />

      <Link to="/Forgot"><a className="forgot">Forgot password</a></Link>
      <br></br>
      <button type="submit" className="button" onClick={verifyLogin}>Login</button><br></br>
      <Link to="/Registration"><a className="forgot">Register now</a></Link>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  )
}

export default LoginAdmin;
