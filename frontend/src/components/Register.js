import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="register-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/videos/beats8.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="register-card">
        <h2>Register</h2>
        <form className="register-form">
          <label>Username</label>
          <input type="text" placeholder="Enter your username" />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button type="submit" className="btn-primary">Sign Up</button>
          <button type="button" className="google-btn">
            <i className="google-icon fab fa-google"></i>
            Sign Up with Google
          </button>
        </form>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
}

export default Register;