import React, { useState } from 'react';
import '../Signup/style.css'; // Import your CSS file
import { useNavigate,Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const Navigate=useNavigate()
  const validateEmailFormat = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const validateForm = () => {
    if (!email || !validateEmailFormat(email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    if (!password) {
      setError('Please enter your password.');
      return false;
    }

    setError('');
    return true;
  };

  const handleLogin = () => {
    if (validateForm()) {
      // Add your login logic here (e.g., API call for authentication)
      console.log('Logging in with:', email, password);
      Navigate('/Dashboard')
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error-message">{error}</p>}

        <button
          type="button"
          onClick={handleLogin}
          className="login-button"
        >
          Login
        </button>
        <p>
          Don't have an account? <Link to="/Signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
