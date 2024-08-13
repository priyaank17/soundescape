import React, { useState } from 'react';
import './preListeningQuestionnaire.css';

const PreListeningQuestionnaire = () => {
  const [preListeningData, setPreListeningData] = useState({
    stressLevel: '',
    mentalAlertness: '',
    overallMood: '',
    physicalComfort: '',
    sessionExpectation: ''
  });

  const handlePreListeningChange = (event) => {
    const { name, value } = event.target;
    setPreListeningData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const submitPreListeningForm = (event) => {
    event.preventDefault();

    // Convert the data to JSON format
    const jsonData = JSON.stringify(preListeningData, null, 2);

    // Create a blob from the data
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Create a link element
    const link = document.createElement('a');

    // Set the download attribute with a filename
    link.download = 'preListeningQuestionnaireData.json';

    // Create a URL for the blob and set it as the href attribute
    link.href = window.URL.createObjectURL(blob);

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);

    console.log('Form submitted and downloaded:', preListeningData);
  };

  return (
    <div className="pre-listening-container">
      <h2>Pre-Listening Questionnaire</h2>
      <form className="questionnaire-form" onSubmit={submitPreListeningForm}>
        <div className="question-card">
          <label>Current stress level:</label>
          {[1, 2, 3, 4, 5].map(num => (
            <label key={num}>
              {num}
              <input
                type="radio"
                name="stressLevel"
                value={num}
                onChange={handlePreListeningChange}
                checked={preListeningData.stressLevel === String(num)}
              />
            </label>
          ))}
        </div>
        <div className="question-card">
          <label>Mental alertness:</label>
          {[1, 2, 3, 4, 5].map(num => (
            <label key={num}>
              {num}
              <input
                type="radio"
                name="mentalAlertness"
                value={num}
                onChange={handlePreListeningChange}
                checked={preListeningData.mentalAlertness === String(num)}
              />
            </label>
          ))}
        </div>
        <div className="question-card">
          <label>Overall mood:</label>
          {[1, 2, 3, 4, 5].map(num => (
            <label key={num}>
              {num}
              <input
                type="radio"
                name="overallMood"
                value={num}
                onChange={handlePreListeningChange}
                checked={preListeningData.overallMood === String(num)}
              />
            </label>
          ))}
        </div>
        <div className="question-card">
          <label>Physical comfort:</label>
          {[1, 2, 3, 4, 5].map(num => (
            <label key={num}>
              {num}
              <input
                type="radio"
                name="physicalComfort"
                value={num}
                onChange={handlePreListeningChange}
                checked={preListeningData.physicalComfort === String(num)}
              />
            </label>
          ))}
        </div>
        <div className="question-card">
          <label>Expectation for the session:</label>
          {[1, 2, 3, 4, 5].map(num => (
            <label key={num}>
              {num}
              <input
                type="radio"
                name="sessionExpectation"
                value={num}
                onChange={handlePreListeningChange}
                checked={preListeningData.sessionExpectation === String(num)}
              />
            </label>
          ))}
        </div>
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PreListeningQuestionnaire;