import React, { useState } from 'react';
import './preListeningQuestionnaire.css';

const PreListeningQuestionnaire = () => {
  const [preListeningData, setPreListeningData] = useState({
    name: '',
    email: '',
    stressLevel: '',
    mentalAlertness: '',
    overallMood: '',
    physicalComfort: '',
    sessionExpectation: '',
    otherExpectation: ''
  });

  const handlePreListeningChange = (event) => {
    const { name, value } = event.target;
    setPreListeningData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleOtherExpectationChange = (event) => {
    setPreListeningData(prevData => ({
      ...prevData,
      otherExpectation: event.target.value
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
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={preListeningData.name}
            onChange={handlePreListeningChange}
            required
          />
        </div>
        <div className="question-card">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={preListeningData.email}
            onChange={handlePreListeningChange}
            required
          />
        </div>
        <div className="question-card">
          <label>Current stress level:</label>
          {[1, 2, 3, 4, 5].map(num => (
            <label key={num}>
              {num} - {["Very Low", "Low", "Moderate", "High", "Very High"][num - 1]}
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
              {num} - {["Very Low", "Low", "Moderate", "High", "Very High"][num - 1]}
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
              {num} - {["Very Bad", "Bad", "Neutral", "Good", "Very Good"][num - 1]}
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
              {num} - {["Very Uncomfortable", "Uncomfortable", "Neutral", "Comfortable", "Very Comfortable"][num - 1]}
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
              {num} - {["Very Low", "Low", "Moderate", "High", "Very High"][num - 1]}
              <input
                type="radio"
                name="sessionExpectation"
                value={num}
                onChange={handlePreListeningChange}
                checked={preListeningData.sessionExpectation === String(num)}
              />
            </label>
          ))}
          <label>
            Others (specify):
            <input
              type="radio"
              name="sessionExpectation"
              value="other"
              onChange={handlePreListeningChange}
              checked={preListeningData.sessionExpectation === "other"}
            />
          </label>
          {preListeningData.sessionExpectation === "other" && (
            <textarea
              name="otherExpectation"
              value={preListeningData.otherExpectation}
              onChange={handleOtherExpectationChange}
              placeholder="Please specify your expectation..."
              className="other-textarea"
            />
          )}
        </div>
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PreListeningQuestionnaire;