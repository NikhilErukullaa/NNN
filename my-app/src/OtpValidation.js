// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory

// function OtpValidation() {
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   // Get the navigate function
//   const navigate = useNavigate();  // Replace useHistory with useNavigate

//   const sendOtp = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/users/send-otp?email=${email}`);
//       setMessage(response.data);
//       setError('');
//     } catch (error) {
//       setMessage('');
//       setError('Failed to send OTP. Please try again later.');
//     }
//   };

//   const verifyOtp = async () => {
//     try {
//       const response = await axios.post(`http://localhost:8080/api/users/verify-otp?email=${email}&enteredOtp=${otp}`);
//       setMessage(response.data);
//       setError('');

//       // Use navigate to navigate to the admin dashboard
//       navigate('/admin-dashboard');
//     } catch (error) {
//       setMessage('');
//       setError('Failed to verify OTP. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>OTP Verification</h1>
//       <div>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <button onClick={sendOtp}>Send OTP</button>
//       </div>
//       <div>
//         <label>OTP:</label>
//         <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
//         <button onClick={verifyOtp}>Verify OTP</button>
//       </div>
//       <div>
//         <p>{message}</p>
//         <p style={{ color: 'red' }}>{error}</p>
//       </div>
//     </div>
//   );
// }

// export default OtpValidation;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './OtpValidation.css'; 

function OtpValidation() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isOtpValid, setIsOtpValid] = useState(false);
  const navigate = useNavigate();

  const sendOtp = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/send-otp?email=${email}`);
      setMessage(response.data);
      setError('');
    } catch (error) {
      setMessage('');
      setError('Failed to send OTP. Please try again later.');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/api/users/verify-otp?email=${email}&enteredOtp=${otp}`);
      setMessage(response.data);
      setError('');
      setIsOtpValid(true);
    } catch (error) {
      setMessage('');
      setError('Failed to verify OTP. Please try again.');
      setIsOtpValid(false);
    }
  };

  const updatePassword = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/api/users/update-password`, {
        email,
        password,
        confirmPassword,
      });

      setMessage(response.data);
      setError('');

   
      navigate('/admin-dashboard');
    } catch (error) {
      setMessage('');
      setError('Failed to update password. Please try again.');
    }
  };

  return (
    <div className="otpValidationContainer">
      <h1>Password Update</h1>
      <div className="inputContainer">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="emailInput" />
        <button onClick={sendOtp} className="sendOtpButton">Send OTP</button>
      </div>
      <div className="inputContainer">
        <label>OTP:</label>
        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} className="otpInput" />
        <button onClick={verifyOtp} className="verifyOtpButton">Verify OTP</button>
      </div>
      {isOtpValid && (
        <div className="passwordContainer">
          <div>
            <label>New Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="passwordInput" />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="confirmPasswordInput"
            />
          </div>
          <button onClick={updatePassword} className="updatePasswordButton">Update Password</button>
        </div>
      )}
      <div className="messageContainer">
        <p>{message}</p>
        <p style={{ color: 'red' }}>{error}</p>
      </div>
    </div>
  );
}

export default OtpValidation;


