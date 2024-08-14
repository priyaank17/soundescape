import React, { useState, useEffect } from 'react';
import './postSoundscapeQuestionnaire.css';

const PostSoundscapeQuestionnaire = () => {
  const soundscapes = [
    { title: 'Weather and Atmospheric' },
    { title: 'Forest and Woodland' },
    { title: 'Night and Calm' },
    { title: 'Open Landscapes' },
    { title: 'Submerged Ocean Environment' },
    { title: 'Natural Water Environments' },
    // Add more soundscape objects...
  ];

  const [postSoundscapeData, setPostSoundscapeData] = useState({
    favoriteSoundscape: '',
    includedTechnique: '',
    chosenTechnique: '',
    immersionLevel: '1',
    notableExperiences: '',
    otherSoundscape: ''
  });

  useEffect(() => {
    // Load saved data from local storage
    const savedData = localStorage.getItem('postSoundscapeData');
    if (savedData) {
      setPostSoundscapeData(JSON.parse(savedData));
    }
  }, []);

  const handlePostSoundscapeChange = (event) => {
    const { name, value } = event.target;
    setPostSoundscapeData(prevData => {
      const updatedData = {
        ...prevData,
        [name]: value
      };
      // Save data to local storage
      localStorage.setItem('postSoundscapeData', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const submitPostSoundscapeForm = (event) => {
    event.preventDefault();

    // Convert the data to JSON format
    const jsonData = JSON.stringify(postSoundscapeData, null, 2);

    // Create a blob from the data
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Create a link element
    const link = document.createElement('a');

    // Set the download attribute with a filename
    link.download = 'postSoundscapeData.json';

    // Create a URL for the blob and set it as the href attribute
    link.href = window.URL.createObjectURL(blob);

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);

    console.log('Form submitted and downloaded:', postSoundscapeData);
  };

  return (
    <div className="post-soundscape-container">
      <h2>Post-Soundscape Listening Questionnaire</h2>
      <form className="questionnaire-form" onSubmit={submitPostSoundscapeForm}>
        {/* Name input */}
  <div className="question-card">
    <label>Name:</label>
    <input
      type="text"
      name="userName"
      value={postSoundscapeData.userName || ''}
      onChange={handlePostSoundscapeChange}
      placeholder="Enter your name"
    />
  </div>
  
  {/* Email input */}
  <div className="question-card">
    <label>Email:</label>
    <input
      type="email"
      name="userEmail"
      value={postSoundscapeData.userEmail || ''}
      onChange={handlePostSoundscapeChange}
      placeholder="Enter your email address"
    />
  </div>
        <div className="question-card">
          <label>Which environmental soundscape did you find most enjoyable?</label>
          <select
            name="favoriteSoundscape"
            value={postSoundscapeData.favoriteSoundscape}
            onChange={handlePostSoundscapeChange}
          >
            <option value="">Select one</option>
            {soundscapes.map((soundscape, index) => (
              <option key={index} value={soundscape.title}>{soundscape.title}</option>
            ))}
            <option value="other">Other (please specify)</option>
          </select>
          {postSoundscapeData.favoriteSoundscape === 'other' && (
            <input
              type="text"
              name="otherSoundscape"
              placeholder="Please specify"
              value={postSoundscapeData.otherSoundscape}
              onChange={handlePostSoundscapeChange}
              className="other-soundscape-input"
            />
          )}
        </div>
        <div className="question-card">
          <label>Did you choose to include an auditory technique with your soundscape?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="includedTechnique"
                value="yes"
                onChange={handlePostSoundscapeChange}
                checked={postSoundscapeData.includedTechnique === 'yes'}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="includedTechnique"
                value="no"
                onChange={handlePostSoundscapeChange}
                checked={postSoundscapeData.includedTechnique === 'no'}
              />
              No
            </label>
          </div>
        </div>
        {postSoundscapeData.includedTechnique === 'yes' && (
          <div className="question-card">
            <label>If yes, which technique did you choose?</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="chosenTechnique"
                  value="binauralBeats"
                  onChange={handlePostSoundscapeChange}
                  checked={postSoundscapeData.chosenTechnique === 'binauralBeats'}
                />
                Binaural beats
              </label>
              <label>
                <input
                  type="radio"
                  name="chosenTechnique"
                  value="monauralBeats"
                  onChange={handlePostSoundscapeChange}
                  checked={postSoundscapeData.chosenTechnique === 'monauralBeats'}
                />
                Monaural beats
              </label>
              <label>
                <input
                  type="radio"
                  name="chosenTechnique"
                  value="isochronicTones"
                  onChange={handlePostSoundscapeChange}
                  checked={postSoundscapeData.chosenTechnique === 'isochronicTones'}
                />
                Isochronic tones
              </label>
            </div>
          </div>
        )}
        <div className="question-card">
          <label>On a scale of 1-10, how immersive was your chosen soundscape?</label>
          <div className="slider-container">
            <input
              type="range"
              name="immersionLevel"
              min="1"
              max="10"
              value={postSoundscapeData.immersionLevel}
              onChange={handlePostSoundscapeChange}
            />
            <span>{postSoundscapeData.immersionLevel || '1'}</span>
          </div>
        </div>
        <div className="question-card">
          <label>Briefly describe any notable experiences or feelings you had while listening to the soundscapes:</label>
          <textarea
            name="notableExperiences"
            value={postSoundscapeData.notableExperiences}
            onChange={handlePostSoundscapeChange}
          />
        </div>
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostSoundscapeQuestionnaire;