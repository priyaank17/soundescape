import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory
import './login.css';

function Login() {
  const navigate = useNavigate();  // Use useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { firstName: 'John', email: 'john@example.com' };
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/');  // Redirect to home page after login
  };

  return (
    <div className="login-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/videos/beats8.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="login-card">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
          <button type="submit" className="btn-primary">Login</button>
        </form>
        <p>Don't have an account? <a href="/register">Register here</a></p>
      </div>
    </div>
  );
}

export default Login;