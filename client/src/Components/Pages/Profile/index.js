import React, { useState } from 'react';
import './style6.css'; // Import your CSS file for styling

const Form = () => {
  const [formData, setFormData] = useState({
    YourwalletAddress: '',
    name: '',
    dob: '',
    email: '',
    city: '',
    aadharNumber: '',
    panNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    console.log(formData);
  };

  return (
    
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
        <h2>Profile</h2>
        <br></br>
        <h3 style={{color:"green"}}>Verified</h3>
        <br></br>
          <label htmlFor=" Your Wallet Address"> Your Wallet Address:</label>
          <input
            type="text"
            name="walletAddress"
            id="walletAddress"
            placeholder="Enter wallet address"
            value={formData.walletAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Enter city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="aadharNumber">Aadhar Number:</label>
          <input
            type="text"
            name="aadharNumber"
            id="aadharNumber"
            placeholder="Enter Aadhar number"
            value={formData.aadharNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="panNumber">PAN Number:</label>
          <input
            type="text"
            name="panNumber"
            id="panNumber"
            placeholder="Enter PAN number"
            value={formData.panNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Form;
