import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './account.css';

function Account() {
  const [user, setUser] = useState(null);
  const [savedMixes, setSavedMixes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const mixes = JSON.parse(localStorage.getItem('savedMixes')) || [];
    if (storedUser) {
      setUser(storedUser);
      setSavedMixes(mixes);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('savedMixes');
    navigate('/');
  };

  const handleMixClick = (mix) => {
    localStorage.setItem('currentMix', JSON.stringify(mix));
    navigate('/freePlay');
  };

  return (
    <div className="account-page">
      <video className="background-video" autoPlay loop muted>
        <source src="/videos/beats8.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="account-container">
        <h2>My Account</h2>
        
        <div className="account-section">
          <h3>Profile Settings</h3>
          {user && (
            <>
              <p>Username: {user.firstName}</p>
              <p>Email: {user.email}</p>
            </>
          )}
        </div>

        <div className="account-section">
          <h3>Saved Mixes</h3>
          {savedMixes.length > 0 ? (
            <div className="saved-mixes-list">
              {savedMixes.map((mix, index) => (
                <div key={index} className="saved-mix-card" onClick={() => handleMixClick(mix)}>
                  <p><strong>Mix {index + 1}</strong></p>
                  <p>Tracks: {mix.tracks.join(', ')}</p>
                  <p>Date Saved: {mix.date}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>You have no saved mixes.</p>
          )}
        </div>

        <button onClick={handleLogout} className="btn-primary">Log Out</button>
      </div>
    </div>
  );
}

export default Account;