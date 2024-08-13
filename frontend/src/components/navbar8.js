import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar8.css';

function Navbar8() {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const updateUserState = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  };

  useEffect(() => {
    updateUserState();
    window.addEventListener('storage', updateUserState);

    return () => {
      window.removeEventListener('storage', updateUserState);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          SoundEscape
        </Link>
        <div className="navbar-links">
          {user ? (
            <>
              <div className="navbar-dropdown">
                <span onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="navbar-user">
                  {user.firstName} <i className="arrow down"></i>
                </span>
                {isDropdownOpen && (
                  <div className="navbar-dropdown-content">
                    <Link to="/account" onClick={() => setIsDropdownOpen(false)}>My Account</Link>
                    <button className="navbar-logout" onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <Link to="/">Home</Link>
          <Link to="/controlledTest">Auditory Stimulation</Link>
          <Link to="/ambientSoundscapes">Ambient Soundscapes</Link>
          <Link to="/freePlay">Playground</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar8;