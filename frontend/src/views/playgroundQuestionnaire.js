import React, { useState, useEffect } from 'react';
import './playgroundQuestionnaire.css';

const PlaygroundQuestionnaire = () => {
  const [playgroundData, setPlaygroundData] = useState({
    selectedDronePad: '',
    sampleCategories: {
      urban: false,
      nature: false,
      pinkNoise: false,
      whiteNoise: false,
      other: ''
    },
    includedTechnique: '',
    customTechnique: '',
    satisfactionLevel: 5,
  });

  useEffect(() => {
    // Load saved data from local storage
    const savedData = localStorage.getItem('playgroundData');
    if (savedData) {
      setPlaygroundData(JSON.parse(savedData));
    }
  }, []);

  const handlePlaygroundChange = (event) => {
    const { name, value, type, checked } = event.target;
    setPlaygroundData(prevData => {
      const updatedData = {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value
      };
      // Save data to local storage
      localStorage.setItem('playgroundData', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handleSampleCategoryChange = (event) => {
    const { name, value, type, checked } = event.target;
    setPlaygroundData(prevData => {
      const updatedCategories = {
        ...prevData.sampleCategories,
        [name]: type === 'checkbox' ? checked : value
      };
      const updatedData = {
        ...prevData,
        sampleCategories: updatedCategories
      };
      // Save data to local storage
      localStorage.setItem('playgroundData', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const submitPlaygroundForm = (event) => {
    event.preventDefault();

    // Convert the data to JSON format
    const jsonData = JSON.stringify(playgroundData, null, 2);

    // Create a blob from the data
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Create a link element
    const link = document.createElement('a');

    // Set the download attribute with a filename
    link.download = 'playgroundQuestionnaireData.json';

    // Create a URL for the blob and set it as the href attribute
    link.href = window.URL.createObjectURL(blob);

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);

    console.log('Form submitted and downloaded:', playgroundData);
  };

  return (
    <div className="playground-questionnaire-container">
      <h2>Post-Playground Soundscape Questionnaire</h2>
      <form className="questionnaire-form" onSubmit={submitPlaygroundForm}>
        <div className="question-card">
          <label>Which drone pad did you select as your base layer?</label>
          <input
            type="text"
            name="selectedDronePad"
            value={playgroundData.selectedDronePad}
            onChange={handlePlaygroundChange}
            placeholder="Enter the drone pad"
          />
        </div>
        <div className="question-card">
          <label>Which sample categories did you include in your custom soundscape? (Check all that apply)</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="urban"
                checked={playgroundData.sampleCategories.urban}
                onChange={handleSampleCategoryChange}
              />
              Urban
            </label>
            <label>
              <input
                type="checkbox"
                name="nature"
                checked={playgroundData.sampleCategories.nature}
                onChange={handleSampleCategoryChange}
              />
              Nature
            </label>
            <label>
              <input
                type="checkbox"
                name="pinkNoise"
                checked={playgroundData.sampleCategories.pinkNoise}
                onChange={handleSampleCategoryChange}
              />
              Pink noise
            </label>
            <label>
              <input
                type="checkbox"
                name="whiteNoise"
                checked={playgroundData.sampleCategories.whiteNoise}
                onChange={handleSampleCategoryChange}
              />
              White noise
            </label>
            <label>
              <input
                type="checkbox"
                name="other"
                checked={!!playgroundData.sampleCategories.other}
                onChange={handleSampleCategoryChange}
              />
              Other (please specify)
            </label>
            {playgroundData.sampleCategories.other && (
              <input
                type="text"
                name="other"
                value={playgroundData.sampleCategories.other}
                onChange={handleSampleCategoryChange}
                placeholder="Please specify"
              />
            )}
          </div>
        </div>
        <div className="question-card">
          <label>Did you include an auditory technique in your custom soundscape?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="includedTechnique"
                value="yes"
                onChange={handlePlaygroundChange}
                checked={playgroundData.includedTechnique === 'yes'}
              />
              Yes
            </label>
            {playgroundData.includedTechnique === 'yes' && (
              <input
                type="text"
                name="customTechnique"
                value={playgroundData.customTechnique}
                onChange={handlePlaygroundChange}
                placeholder="Please specify"
              />
            )}
            <label>
              <input
                type="radio"
                name="includedTechnique"
                value="no"
                onChange={handlePlaygroundChange}
                checked={playgroundData.includedTechnique === 'no'}
              />
              No
            </label>
          </div>
        </div>
        <div className="question-card">
          <label>On a scale of 1-10, how satisfied are you with your custom soundscape?</label>
          <div className="slider-container">
            <input
              type="range"
              name="satisfactionLevel"
              min="1"
              max="10"
              value={playgroundData.satisfactionLevel}
              onChange={handlePlaygroundChange}
            />
            <span>{playgroundData.satisfactionLevel}</span>
          </div>
        </div>
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PlaygroundQuestionnaire;