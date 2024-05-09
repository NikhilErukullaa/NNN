// AddNewTutor.js
import React, { useState } from 'react';
import axios from 'axios';
import Dropdown from './Dropdown';
import './AddNewTutor.css';

function AddNewTutor() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobilenumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    qualification: '',
    higherQualification: '',
    course: '',
    address: '',
    gender: '',
  });

  const [errors, setErrors] = useState({});
  const [selectedMainOption, setSelectedMainOption] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validation logic ...

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:8080/api-v1/create', formData);
        alert('Form submitted successfully', response.data);
        // Assuming you have some way to navigate or redirect to '/LoginTutor'
      } catch (error) {
        alert('Error submitting form', error);
      }
    }
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  return (
    <>
      <div className="header1">
        <label>
          <h1>My Online Tutor</h1>
        </label>
      </div>
      <div className="add-tutor-page">
        <div className="register-card">
          <h1 className="heading">Tutor Register Page</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="custom-newtutor">
                  First Name:
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <p className="custom-error-message">{errors.firstName} </p>}
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="custom-newtutor">
                  Last Name:
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <p className="custom-error-message">{errors.lastName} </p>}
              </div>
              <div className="form-group">
                <label htmlFor="mobilenumber" className="custom-newtutor">
                  Mobile No:
                </label>
                <input
                  type="text"
                  name="mobilenumber"
                  placeholder="Enter Mobile No"
                  required
                  value={formData.mobilenumber}
                  onChange={handleChange}
                />
                {errors.mobilenumber && (
                  <p className="custom-error-message">{errors.mobilenumber}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email" className="custom-newtutor">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="custom-error-message">{errors.email} </p>}
              </div>
              <div className="form-group">
                <label htmlFor="password" className="custom-newtutor">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="custom-error-message">{errors.password} </p>}
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword" className="custom-newtutor">
                  Confirm Password:
                </label>
                <input
                  className="custom-newtutor-input"
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-Enter Password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <p className="custom-error-message">{errors.confirmPassword} </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="qualification" className="custom-newtutor">
                  Qualification:
                </label>
                <select
                  className="custom-newtutor-input"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                >
                  <option value="">Select Qualification</option>
                  <optgroup label="Degree">
                    <option value="BZC">BZC</option>
                    <option value="BSc">BSc</option>
                    <option value="B.com">B.com</option>
                    <option value="MPCs">MPCs</option>
                    <option value="B.tech">B.tech</option>
                  </optgroup>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="higherQualification" className="custom-newtutor">
                  Higher Qualification:
                </label>
                <select
                  className="custom-newtutor-input"
                  name="higherQualification"
                  value={formData.higherQualification}
                  onChange={handleChange}
                >
                  <option value="">Select Higher Qualification</option>
                  <optgroup label="Higher Qualification">
                    <option value="M.Tech">M.Tech</option>
                    <option value="MBA">MBA</option>
                    <option value="Ph.D.">Ph.D.</option>
                  </optgroup>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="address" className="custom-newtutor">
                  Address:
                </label>
                <textarea
                  className="custom-newtutor-input"
                  name="address"
                  placeholder="Enter Address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>
                {errors.address && <p className="custom-error-message">{errors.address} </p>}
              </div>
              <div className="form-group">
                <label htmlFor="gender" className="custom-newtutor">
                  Gender:
                </label>
                <div className="custom-radio-group">
                  <label className="custom-radio">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === 'Male'}
                      onChange={handleChange}
                    />
                    Male
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === 'Female'}
                      onChange={handleChange}
                    />
                    Female
                  </label>
                </div>
                {errors.gender && <p className="custom-error-message">{errors.gender} </p>}
              </div>
              <div className="form-group">
                <label htmlFor="course" className="custom-newtutor">
                  Course:
                </label>
                <Dropdown
                  selectedMainOption={selectedMainOption}
                  selectedSubOption={selectedSubOption}
                  onChange={(main, sub) => {
                    setSelectedMainOption(main);
                    setSelectedSubOption(sub);
                    setFormData({
                      ...formData,
                      course: main,
                    });
                  }}
                />
                {errors.course && <p className="custom-error-message">{errors.course} </p>}
              </div>
              <button className="custom-button" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNewTutor;
