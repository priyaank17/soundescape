import React, { useState } from 'react';
import './postListeningQuestionnaire.css';

const PostListeningQuestionnaire = () => {
  const [postListeningData, setPostListeningData] = useState({
    name: '',
    email: '',
    relaxationLevel: '',
    mentalClarity: '',
    overallMood: '',
    physicalComfort: '',
    audioEffectiveness: '',
    mostEffectiveAudio: '',
    auditoryTechnique: '',
    brainwaveState: '',
    relaxationAfterListening: '',
    effectsExperienced: [],
    otherEffect: ''
  });

  const handlePostListeningChange = (event) => {
    const { name, value } = event.target;
    setPostListeningData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, value } = event.target;
    setPostListeningData(prevData => {
      const newEffects = prevData.effectsExperienced.includes(value)
        ? prevData.effectsExperienced.filter(effect => effect !== value)
        : [...prevData.effectsExperienced, value];
      return {
        ...prevData,
        [name]: newEffects
      };
    });
  };

  const submitPostListeningForm = (event) => {
    event.preventDefault();

    // Convert the data to JSON format
    const jsonData = JSON.stringify(postListeningData, null, 2);

    // Create a blob from the data
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Create a link element
    const link = document.createElement('a');

    // Set the download attribute with a filename
    link.download = 'postListeningQuestionnaireData.json';

    // Create a URL for the blob and set it as the href attribute
    link.href = window.URL.createObjectURL(blob);

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);

    console.log('Form submitted and downloaded:', postListeningData);
  };

  return (
    <div className="post-listening-container">
      <h2>Post-Listening Questionnaire</h2>
      <form className="questionnaire-form" onSubmit={submitPostListeningForm}>
        <div className="question-card">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={postListeningData.name}
            onChange={handlePostListeningChange}
            required
          />
        </div>
        <div className="question-card">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={postListeningData.email}
            onChange={handlePostListeningChange}
            required
          />
        </div>
        <div className="question-card">
          <label>Current relaxation level:</label>
          {[1, 2, 3, 4, 5].map(num => (
            <label key={num}>
              {num} - {["Very Low", "Low", "Moderate", "High", "Very High"][num - 1]}
              <input
                type="radio"
                name="relaxationLevel"
                value={num}
                onChange={handlePostListeningChange}
                checked={postListeningData.relaxationLevel === String(num)}
              />
            </label>
          ))}
        </div>
        <div className="question-card">
          <label>Mental clarity:</label>
          {[1, 2, 3, 4, 5].map(num => (
            <label key={num}>
              {num} - {["Very Low", "Low", "Moderate", "High", "Very High"][num - 1]}
              <input
                type="radio"
                name="mentalClarity"
                value={num}
                onChange={handlePostListeningChange}
                checked={postListeningData.mentalClarity === String(num)}
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
                onChange={handlePostListeningChange}
                checked={postListeningData.overallMood === String(num)}
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
                onChange={handlePostListeningChange}
                checked={postListeningData.physicalComfort === String(num)}
              />
            </label>
          ))}
        </div>
        <div className="question-card">
          <label>Effectiveness of the audio:</label>
          {[1, 2, 3, 4, 5].map(num => (
            <label key={num}>
              {num} - {["Very Ineffective", "Ineffective", "Neutral", "Effective", "Very Effective"][num - 1]}
              <input
                type="radio"
                name="audioEffectiveness"
                value={num}
                onChange={handlePostListeningChange}
                checked={postListeningData.audioEffectiveness === String(num)}
              />
            </label>
          ))}
        </div>
        <div className="question-card">
          <label>Which auditory technique did you find most effective?</label>
          <select
            name="auditoryTechnique"
            value={postListeningData.auditoryTechnique}
            onChange={handlePostListeningChange}
          >
            <option value="">Select one</option>
            <option value="binaural">Binaural beats</option>
            <option value="monaural">Monaural beats</option>
            <option value="isochronic">Isochronic tones</option>
            <option value="noPreference">No preference</option>
          </select>
        </div>
        <div className="question-card">
          <label>Which brainwave state did you find most beneficial?</label>
          <select
            name="brainwaveState"
            value={postListeningData.brainwaveState}
            onChange={handlePostListeningChange}
          >
            <option value="">Select one</option>
            <option value="delta">Delta (deep sleep)</option>
            <option value="theta">Theta (relaxation, meditation)</option>
            <option value="alpha">Alpha (light relaxation, creativity)</option>
            <option value="beta">Beta (alertness, concentration)</option>
            <option value="gamma">Gamma (high-level information processing)</option>
          </select>
        </div>
        <div className="question-card">
          <label>On a scale of 1-10, how relaxed did you feel after listening to the auditory techniques?</label>
          <div className="slider-container">
            <input
              type="range"
              name="relaxationAfterListening"
              min="1"
              max="10"
              value={postListeningData.relaxationAfterListening}
              onChange={handlePostListeningChange}
            />
            <span>{postListeningData.relaxationAfterListening || '1'}</span>
          </div>
        </div>
        <div className="question-card">
          <label>Did you experience any of the following? (Check all that apply)</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="effectsExperienced"
                value="improvedFocus"
                onChange={handleCheckboxChange}
                checked={postListeningData.effectsExperienced.includes('improvedFocus')}
              />
              Improved focus
            </label>
            <label>
              <input
                type="checkbox"
                name="effectsExperienced"
                value="reducedStress"
                onChange={handleCheckboxChange}
                checked={postListeningData.effectsExperienced.includes('reducedStress')}
              />
              Reduced stress
              </label>
              <label>
              <input
                type="checkbox"
                name="effectsExperienced"
                value="enhancedCreativity"
                onChange={handleCheckboxChange}
                checked={postListeningData.effectsExperienced.includes('enhancedCreativity')}
              />
              Enhanced creativity
            </label>
            <label>
              <input
                type="checkbox"
                name="effectsExperienced"
                value="betterMood"
                onChange={handleCheckboxChange}
                checked={postListeningData.effectsExperienced.includes('betterMood')}
              />
              Better mood
            </label>
            <label>
              <input
                type="checkbox"
                name="effectsExperienced"
                value="noEffects"
                onChange={handleCheckboxChange}
                checked={postListeningData.effectsExperienced.includes('noEffects')}
              />
              No noticeable effects
            </label>
            <label>
              <input
                type="checkbox"
                name="effectsExperienced"
                value="other"
                onChange={handleCheckboxChange}
                checked={postListeningData.effectsExperienced.includes('other')}
              />
              Other (please specify)
            </label>
            {postListeningData.effectsExperienced.includes('other') && (
              <input
                type="text"
                name="otherEffect"
                placeholder="Please specify"
                value={postListeningData.otherEffect}
                onChange={handlePostListeningChange}
                className="other-effect-input"
              />
            )}
          </div>
        </div>
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default PostListeningQuestionnaire;