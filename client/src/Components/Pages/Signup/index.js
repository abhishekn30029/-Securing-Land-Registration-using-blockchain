import React, { useState } from 'react';
import './style.css'; // Import your CSS file
import { useNavigate,Link } from 'react-router-dom';
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState(null); // For file upload
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();
  const isDateValid = (inputDate) => {
    const today = new Date();
    const birthDate = new Date(inputDate);
    const age = today.getFullYear() - birthDate.getFullYear();

    // Check if the user is at least 18 years old
    if (age < 18 || (age === 18 && today.getMonth() < birthDate.getMonth())) {
      return false;
    }
    return true;
  };

  const validateEmailFormat = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const validateForm = () => {
    if (!name) {
      setError('Please enter your name.');
    
      return false;
    }

    if (!email || !validateEmailFormat(email)) {
      setError('Please enter a valid email address.');
    
      return false;
    }

    if (!avatar) {
      setError('Please upload an avatar.');
    
      return false;
    }

    if (!/^\d+$/.test(mobile) || mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
    
      return false;
    }

    if (!dob || !isDateValid(dob)) {
      setError('Please enter a valid date of birth. You must be at least 18 years old.');
      
      return false;
    }

    setError('');
    return true;
  };

  const handleDateChange = (e) => {
    const inputDate = e.target.value;
    setDob(inputDate);

    // Check if the selected date makes the user less than 18 years old
    if (!isDateValid(inputDate)) {
      setError('You must be at least 18 years old.');
    } else {
      setError('');
    }
  };

  const handleMobileChange = (e) => {
    // Allow only numeric input for the mobile field
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    setMobile(numericValue);
  };

  const handleSignup = () => {
    if (validateForm()) {
      // Add your signup logic here, including file upload
      console.log('Signing up with:', name, email, avatar, mobile, dob);
      navigate('/Login')
    }
  };

  const handleFileChange = (e) => {
    // Handle file upload
    const file = e.target.files[0];
    setAvatar(file);
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
      
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        
          required
        />

        <label >Avatar:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          
          required
        />

        <label >Mobile:</label>
        <input
          type="text"
          value={mobile}
          onChange={handleMobileChange}
          pattern="[0-9]*"
          minLength="10"
          maxLength="10"
          
          required
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          value={dob}
          onChange={handleDateChange}
    
          required
        />

        {error && <p className="error-message">{error}</p>}

        <button
          type="button"
          onClick={handleSignup}
          className="signup-button"
        >
          Signup
        </button>
        <p>
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
