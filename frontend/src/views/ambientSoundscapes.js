import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaPlus, FaTimes, FaTrashAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './ambientSoundscapes.css';
import { Link} from 'react-router-dom';

const soundscapes = [
  {
    title: 'Weather and Atmospheric',
    description: 'Gentle rainfall on a roof,Thunderstorm,⁠Mountain wind',
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/sounsdcapes/calmsound.mp3',
    gif: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/weather.mp4',
  },
  {
    title: 'Forest and Woodland',
    description: 'Serene sounds of Forest and Woodland',
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/sounsdcapes/Forest-Sounds.mp3',
    gif: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/woodland.mp4',
  },
  {
    title: 'Night and Calm',
    description: 'Nocturnal sounds (crickets, owls)',
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/sounsdcapes/Night-Ambient.mp3',
    gif: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/night.mp4',
  },
  {
    title: 'Open Landscapes',
    description: 'Meadow (with light breeze and bird sounds)',
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/sounsdcapes/Relaxing-Meadow.mp3',
    gif: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/openlandscape.mp4',
  },
  {
    title: 'Submerged Ocean Environment',
    description: 'Submerged Ocean Ambience Sounds',
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/sounsdcapes/Submerged-Ocean.mp3',
    gif: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/ocean.mp4',
  },
  {
    title: 'Natural Water Environments',
    description: 'Submerged - Ocean Ambient Music Underwater Sounds',
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/sounsdcapes/Waterfall-Sounds.mp3',
    gif: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/water.mp4',
  },
  // Add more soundscape objects...
];

const simulationBeats = [
  { 
    title: 'Binaural Alpha Waves', 
    description: 'Relaxation and calmness.', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/Binaural+beat+folder/10+hz.wav' 
  },
  { 
    title: 'Binaural Beta Waves', 
    description: 'Active thinking and focus.', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/Binaural+beat+folder/20+hz.wav' 
  },
  { 
    title: 'Binaural Gamma Waves', 
    description: 'Peak focus and concentration.', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/Binaural+beat+folder/40+hz.wav' 
  },
  { 
    title: 'Binaural Delta Waves', 
    description: 'Deep sleep and relaxation.', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/Binaural+beat+folder/4+hz.wav' 
  },
  { 
    title: 'Binaural Theta Waves', 
    description: 'Meditation and creativity.', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/Binaural+beat+folder/4+hz.wav' 
  },
  { 
    title: 'Monoaural Alpha Waves', 
    description: 'Deep relaxation.', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/monaural+brainwave+states/alpha+11hz+monaural+beat.wav' 
  },
  { 
    title: 'Monoaural Beta Waves', 
    description: 'Deep relaxation.', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/monaural+brainwave+states/beta+21hz+monaural+beat.wav' 
  },
  { 
    title: 'Monoaural Gamma Waves', 
    description: 'Deep relaxation.', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/monaural+brainwave+states/gamma+40hz+monaural+beat.wav' 
  },
  { 
    title: 'Monoaural Delta Waves', 
    description: 'Deep relaxation.', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/monaural+brainwave+states/delta+2hz+monaural+beat.wav' 
  },
  { 
    title: 'Monoaural Theta Waves', 
    description: 'Deep relaxation.', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/monaural+brainwave+states/theta+4hz+monaural+beat.wav' 
  },
  { 
    title: 'Isochronic Alpha Waves', 
    description: 'Relaxation and calmness', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/ALPHA+ISOCHRONIC.wav',  
  },
  { 
    title: 'Isochronic Beta Waves', 
    description: 'Active thinking and focus', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/BETA+ISOCHRONIC.wav', 
  },
  { 
    title: 'Isochronic Gamma Waves', 
    description: 'Peak focus and concentration', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/GAMMA+ISOCHRONIC.wav', 
  },
  { 
    title: 'Isochronic Delta Waves', 
    description: 'Deep sleep and relaxation', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/DELTA+ISOCHRONIC.wav', 
  },
  { 
    title: 'Isochronic Theta Waves', 
    description: 'Meditation and creativity', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/THETA+ISOCHRONIC.wav',
  },
];

const AmbientSoundscapes = () => {
  const [mix, setMix] = useState([]);
  const [showMix, setShowMix] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [showSimulationBeats, setShowSimulationBeats] = useState(false);
  const [audioInstances, setAudioInstances] = useState({});
  const [playingFiles, setPlayingFiles] = useState({});
  const [showPopup, setShowPopup] = useState(false); // State to control the popup visibility

  useEffect(() => {
    // Clean up audio instances when the component unmounts
    return () => {
      Object.values(audioInstances).forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reset to start
      });
    };
  }, [audioInstances]);

  const handlePlayPause = (file) => {
    const isPlaying = playingFiles[file];

    // If the audio instance doesn't exist, create it
    if (!audioInstances[file]) {
      const newAudio = new Audio(file);
      newAudio.addEventListener('ended', () => setPlayingFiles(prev => ({ ...prev, [file]: false })));
      setAudioInstances(prev => ({ ...prev, [file]: newAudio }));
      newAudio.play();
      setPlayingFiles(prev => ({ ...prev, [file]: true }));
    } else {
      // If the audio instance exists, toggle play/pause
      if (isPlaying) {
        audioInstances[file].pause();
        setPlayingFiles(prev => ({ ...prev, [file]: false }));
      } else {
        audioInstances[file].play();
        setPlayingFiles(prev => ({ ...prev, [file]: true }));
      }
    }
  };

  const handleAddToMix = (file) => {
    if (!mix.includes(file)) {
      setMix([...mix, file]);
      showPopupMessage(); // Show popup when a track is added
    }
  };

  const handleRemoveFromMix = (file) => {
    if (audioInstances[file]) {
      audioInstances[file].pause();
      audioInstances[file].currentTime = 0;
    }
    setMix(mix.filter((track) => track !== file));
    setPlayingFiles(prev => ({ ...prev, [file]: false }));
  };

  const handleVolumeChange = (file, value) => {
    if (audioInstances[file]) {
      audioInstances[file].volume = value;
    }
  };

  const toggleCardDetails = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const toggleSimulationBeats = () => {
    setShowSimulationBeats(!showSimulationBeats);
  };

  const handleCloseMixView = () => {
    setShowMix(false);
    mix.forEach(file => {
      if (audioInstances[file]) {
        audioInstances[file].pause();
        audioInstances[file].currentTime = 0;
      }
    });
    setPlayingFiles({});
  };

  const showPopupMessage = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // Popup message will be visible for 2 seconds
  };

  return (
    <div className="ambient-soundscapes-container">
      <video className="background-video" autoPlay loop muted>
        <source src="https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/forest.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="free-play-heading">Ambient Soundscapes</h1>
          <p className="free-play-subheading">Customize and mix your favorite soundscapes</p>
        </div>
      </div>
      <button className="view-mix-button" onClick={() => setShowMix(!showMix)}>
        {showMix ? 'Hide Mix' : 'View Mix'}
      </button>
      {showPopup && (
        <div className="popup-message">
          Track added to mix! Click 'View Mix' to see your selection.
        </div>
      )}
      {showMix && (
        <div className="mix-overlay">
          <div className="mix-container">
            <button className="close-mix-button" onClick={handleCloseMixView}>
              <FaTimes />
            </button>
            {mix.map((file, index) => (
              <div key={index} className="mix-item">
                <span>{soundscapes.find((s) => s.file === file)?.title || simulationBeats.find((s) => s.file === file)?.title}</span>
                <div className="mix-actions">
                  <button className="action-button" onClick={() => handleRemoveFromMix(file)}>
                    <FaTrashAlt />
                  </button>
                  <button className="action-button" onClick={() => handlePlayPause(file)}>
                    {playingFiles[file] ? <FaPause /> : <FaPlay />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    className="volume-slider"
                    onChange={(e) => handleVolumeChange(file, e.target.value)}
                  />
                </div>
              </div>
            ))}
            <button className="action-button add-simulation-button" onClick={toggleSimulationBeats}>
              {showSimulationBeats ? 'Hide Simulation Beats' : 'Add Auditory Simulation Beats'}
            </button>
            {showSimulationBeats && (
              <div className="simulation-beats-container">
                {simulationBeats.map((beat, index) => (
                  <div key={index} className="mix-item">
                    <span>{beat.title}</span>
                    <div className="mix-actions">
                      <button className="action-button" onClick={() => handlePlayPause(beat.file)}>
                        {playingFiles[beat.file] ? <FaPause /> : <FaPlay />}
                      </button>
                      <button className="action-button" onClick={() => handleAddToMix(beat.file)}>
                        <FaPlus />
                      </button>
                      <span className="soundscape-duration">{beat.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      <div className="soundscapes-container">
        {soundscapes.map((sound, index) => (
          <div key={index} className="soundscape-card">
            <div className="gif-container">
              <video className="card-gif" autoPlay loop muted>
                <source src={sound.gif} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="soundscape-info">
              <div className="soundscape-details">
                <h3>{sound.title}</h3>
                <p>{sound.description}</p>
                <button className="accordion-toggle" onClick={() => toggleCardDetails(index)}>
                  {expandedCard === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {expandedCard === index && (
                  <div className="soundscape-details-expanded">
                    <p>{sound.details}</p>
                  </div>
                )}
              </div>
              <div className="soundscape-actions">
                <button className="action-button" onClick={() => handlePlayPause(sound.file)}>
                  {playingFiles[sound.file] ? <FaPause /> : <FaPlay />}
                </button>
                <button className="action-button" onClick={() => handleAddToMix(sound.file)}>
                  <FaPlus />
                </button>
                <span className="soundscape-duration">{sound.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="questionnaire-section">
        <h2>Post-Listening Ambient Soundscapes Questionnaire</h2>
        <p>Help us understand your state after listening to our ambient soundscapes</p>
        <Link to="/PostSoundscapeQuestionnaire">
          <button className="btn-primary">Start the Form</button>
        </Link>
      </div>
    </div>
  );
};

export default AmbientSoundscapes;