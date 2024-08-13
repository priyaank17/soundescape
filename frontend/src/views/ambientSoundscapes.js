import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaPlus, FaTimes, FaTrashAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './ambientSoundscapes.css';
import { Link} from 'react-router-dom';

const soundscapes = [
  {
    title: 'Weather and Atmospheric',
    description: 'A calm and peaceful atmosphere of bushland',
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/sounsdcapes/calmsound.mp3',
    gif: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/weather.mp4',
  },
  {
    title: 'Forest and Woodland',
    description: 'Serene sounds of a mountain atmosphere',
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/sounsdcapes/Forest+Sounds+Woodland.wav',
    gif: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/woodland.mp4',
  },
  {
    title: 'Night and Calm',
    description: 'Serene sounds of a mountain atmosphere',
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/sounsdcapes/NightAmbient.wav',
    gif: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/night.mp4',
  },
  {
    title: 'Open Landscapes',
    description: 'Serene sounds of a mountain atmosphere',
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/sounsdcapes/RelaxingMeadow.wav',
    gif: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/openlandscape.mp4',
  },
  {
    title: 'Forest Sounds Woodland Bird',
    description: 'Forest Sounds Woodland Ambience Bird Song',
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/sounsdcapes/SubmergedOcean.wav',
    gif: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/forestsound.mp4',
  },
  {
    title: 'Natural Water Environments',
    description: 'Submerged - Ocean Ambient Music Underwater Sounds',
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/sounsdcapes/WaterfallSounds.wav',
    gif: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/water.mp4',
  },
  // Add more soundscape objects...
];

const simulationBeats = [
  { 
    title: 'Binaural Delta Waves', 
    description: 'Deep sleep and relaxation.', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/Binaural+beat+folder/1+hz.wav' 
  },
  { 
    title: 'Binaural Theta Waves', 
    description: 'Meditation and creativity.', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/Binaural+beat+folder/4+hz.wav' 
  },
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
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/AlphaIsochronicTone.wav', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/beats5.mp4' 
  },
  { 
    title: 'Isochronic Beta Waves', 
    description: 'Active thinking and focus', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/BetaIsochronicTone.wav', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/beats5.mp4' 
  },
  { 
    title: 'Isochronic Gamma Waves', 
    description: 'Peak focus and concentration', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/GammaIsochronicTone.wav', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/beats5.mp4' 
  },
  { 
    title: 'Isochronic Delta Waves', 
    description: 'Deep sleep and relaxation', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/DeltaIsochronicTone.wav', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/beats5.mp4' 
  },
  { 
    title: 'Isochronic Theta Waves', 
    description: 'Meditation and creativity', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/ThetaIsochronicTone.wav', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/beats5.mp4' 
  },
];

const AmbientSoundscapes = () => {
  const [currentFile, setCurrentFile] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mix, setMix] = useState([]);
  const [showMix, setShowMix] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [showSimulationBeats, setShowSimulationBeats] = useState(false);
  const [audioInstances, setAudioInstances] = useState({});

  useEffect(() => {
    // Clean up audio instances when component unmounts
    return () => {
      Object.values(audioInstances).forEach(audio => audio.pause());
    };
  }, [audioInstances]);

  const handlePlayPause = (file) => {
    if (currentFile !== file) {
      // Stop the currently playing audio (if any)
      if (audioInstances[currentFile]) {
        audioInstances[currentFile].pause();
      }

      // Create a new audio instance for the selected file
      const newAudio = new Audio(file);
      newAudio.play();
      setCurrentFile(file);
      setIsPlaying(true);

      // Update the audio instances with the new one
      setAudioInstances({ ...audioInstances, [file]: newAudio });
    } else {
      // If the file is already playing, toggle the play/pause state
      if (isPlaying) {
        audioInstances[file].pause();
      } else {
        audioInstances[file].play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAddToMix = (file) => {
    if (!mix.includes(file)) {
      setMix([...mix, file]);
    }
  };

  const handleRemoveFromMix = (file) => {
    if (audioInstances[file]) {
      audioInstances[file].pause();
    }
    setMix(mix.filter((track) => track !== file));
  };

  const handlePlayMix = () => {
    if (isPlaying) {
      Object.values(audioInstances).forEach(audio => audio.pause());
      setIsPlaying(false);
    } else {
      mix.forEach(file => {
        if (audioInstances[file]) {
          audioInstances[file].play();
        } else {
          const newAudio = new Audio(file);
          newAudio.play();
          setAudioInstances(prev => ({ ...prev, [file]: newAudio }));
        }
      });
      setIsPlaying(true);
    }
  };

  const toggleCardDetails = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const toggleSimulationBeats = () => {
    setShowSimulationBeats(!showSimulationBeats);
  };

  return (
    <div className="ambient-soundscapes-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/videos/beats8.mp4" type="video/mp4" />
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
      {showMix && (
        <div className="mix-overlay">
          <div className="mix-container">
            <button className="close-mix-button" onClick={() => setShowMix(false)}>
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
                    {currentFile === file && isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                  <input type="range" min="0" max="1" step="0.01" className="volume-slider" />
                </div>
              </div>
            ))}
            <button className="action-button play-mix-button" onClick={handlePlayMix}>
              {isPlaying ? 'Stop Mix' : 'Play Mix'}
            </button>
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
                        {currentFile === beat.file && isPlaying ? <FaPause /> : <FaPlay />}
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
                  {currentFile === sound.file && isPlaying ? <FaPause /> : <FaPlay />}
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