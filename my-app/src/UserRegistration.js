
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Dropdown from './Dropdown';
import './UserRegistration.css';
import { Link } from 'react-router-dom';



function UserRegistration() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedMainOption, setSelectedMainOption] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');
  const [address, setAddress] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
  };

  const validateForm = () => {
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    if (!gender) {
      errors.gender = 'Gender is required';
    }

    if (!validateEmail(email)) {
      errors.email = 'Invalid email address';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!validatePhoneNumber(phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number';
    }

    if (!selectedMainOption || !selectedSubOption) {
      errors.courses = 'Courses selection is required';
    }

    if (!address.trim()) {
      errors.address = 'Address is required';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const save = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const selectedCourses = [];
        if (selectedMainOption && selectedSubOption) {
          selectedCourses.push(`${selectedMainOption} - ${selectedSubOption}`);
        }

        await axios.post('http://localhost:8080/api/users/user/register', {
          firstName,
          lastName,
          gender,
          password,
          confirmPassword,
          phoneNumber,
          email,
          courses: selectedCourses,
          address,
        });

        alert('User Registration Successful');
        navigate('/LoginUser');
        setFirstName('');
        setLastName('');
        setGender('');
        setPassword('');
        setConfirmPassword('');
        setPhoneNumber('');
        setEmail('');
        setSelectedMainOption('');
        setSelectedSubOption('');
        setAddress('');
        navigate(`/cash-transaction-form/${selectedMainOption}/${selectedSubOption}`);
      } catch (err) {
        alert('User Registration Failed');
      }
    } else {
      alert('Please fill in all required fields correctly');
    }
  };

  return (
    <div className="container mt-4" id='userRegistration' style={{width: "60%", marginLeft: "20%"}}>
      <h1 style={{ paddingTop: '30px' }}>User Registration</h1>
      <form onSubmit={save}>
        <div style={{display: "flex"}}>
        <div className="form-group" style={{marginLeft: "-30%"}}>
          <label>First Name</label> 
          <input
            type="text"
            className="form-control"
            placeholder="Enter First Name" required
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
        </div>

        <div className="form-group" style={{marginLeft: "40%"}}>
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Last Name" required
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
        </div>
        </div>
        <div style={{display: "flex"}}>
        <div className="form-group" style={{marginLeft: "-30%"}}>
          <label>Gender</label>
          <select
            className="form-control"
            value={gender}  required
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          {formErrors.gender && <span className="error">{formErrors.gender}</span>}
        </div>
        <div className="form-group" style={{marginLeft: "40%"}}>
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email" required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>
        </div>
        <div style={{display: "flex"}}>
        <div className="form-group" style={{marginLeft: "-30%"}}>
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password" required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {formErrors.password && <span className="error">{formErrors.password}</span>}
        </div>

        <div className="form-group" style={{marginLeft: "40%"}}>
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password" required
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          style={{marginTop: "-7%"}}/>
          {formErrors.confirmPassword && (
            <span className="error">{formErrors.confirmPassword}</span>
          )}
        </div>
        </div>
        <div style={{display: "flex"}}>
        <div className="form-group" style={{marginLeft: "-30%"}}>
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Phone Number" required
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          {formErrors.phoneNumber && <span className="error">{formErrors.phoneNumber}</span>}
        </div>
        <div className="form-group" style={{marginLeft: "40%"}}>
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Address"  required
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          {formErrors.address && <span className="error">{formErrors.address}</span>}
        </div>
        </div>
        <div className="form-group" style={{marginLeft: "30%"}}>
          <Dropdown
            onChange={(main, sub) => {
              setSelectedMainOption(main);
              setSelectedSubOption(sub);
            }}
          />
          {formErrors.courses && <span className="error">{formErrors.courses}</span>}
        </div>

        <button type="submit" className="btn btn-primary" style={{width: "30%", marginLeft: "40%"}}>Register</button>
        <p>Already Have an Account ? <Link to="LoginUser"><a href=''>SignInhere</a></Link></p> <br/>
      </form>
    </div>
  );
}

export default UserRegistration;
