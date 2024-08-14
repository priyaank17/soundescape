import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaPlay, FaPause, FaSort} from 'react-icons/fa';
import './controlledTest.css';

const binauralBeats = [
  { 
    title: 'Delta Waves', 
    description: 'Deep sleep and relaxation', 
    range: [1, 4], 
    filePrefix: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/Binaural+beat+folder/', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/brainwaves.mp4' 
  },
  { 
    title: 'Theta Waves', 
    description: 'Meditation and creativity', 
    range: [4, 8], 
    filePrefix: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/Binaural+beat+folder/', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/theta.mp4' 
  },
  { 
    title: 'Alpha Waves', 
    description: 'Relaxation and calmness', 
    range: [8, 14], 
    filePrefix: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/Binaural+beat+folder/', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/alpha.mp4' 
  },
  { 
    title: 'Beta Waves', 
    description: 'Active thinking and focus', 
    range: [14, 30], 
    filePrefix: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/Binaural+beat+folder/', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/beta.mp4' 
  },
  { 
    title: 'Gamma Waves', 
    description: 'Peak focus and concentration', 
    range: [30, 40], 
    filePrefix: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/Binaural+beat+folder/', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/gamma.mp4' 
  },
];

const monauralBeats = [
  { 
    title: 'Alpha Waves', 
    description: 'Relaxation and calmness', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/monaural+brainwave+states/alpha+11hz+monaural+beat.wav', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/alpha.mp4' 
  },
  { 
    title: 'Beta Waves', 
    description: 'Active thinking and focus', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/monaural+brainwave+states/beta+21hz+monaural+beat.wav', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/beta.mp4' 
  },
  { 
    title: 'Gamma Waves', 
    description: 'Peak focus and concentration', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/monaural+brainwave+states/gamma+40hz+monaural+beat.wav', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/gamma.mp4' 
  },
  { 
    title: 'Delta Waves', 
    description: 'Deep sleep and relaxation', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/monaural+brainwave+states/delta+2hz+monaural+beat.wav', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/brainwaves.mp4' 
  },
  { 
    title: 'Theta Waves', 
    description: 'Meditation and creativity', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/monaural+brainwave+states/theta+4hz+monaural+beat.wav', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/theta.mp4' 
  },
];

const isochronicBeats = [
  { 
    title: 'Alpha Waves', 
    description: 'Relaxation and calmness', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/ALPHA+ISOCHRONIC.wav', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/alpha.mp4' 
  },
  { 
    title: 'Beta Waves', 
    description: 'Active thinking and focus', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/BETA+ISOCHRONIC.wav', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/beta.mp4' 
  },
  { 
    title: 'Gamma Waves', 
    description: 'Peak focus and concentration', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/GAMMA+ISOCHRONIC.wav', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/gamma.mp4' 
  },
  { 
    title: 'Delta Waves', 
    description: 'Deep sleep and relaxation', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/DELTA+ISOCHRONIC.wav', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/brainwaves.mp4' 
  },
  { 
    title: 'Theta Waves', 
    description: 'Meditation and creativity', 
    file: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/sounds/THETA+ISOCHRONIC.wav', 
    video: 'https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/theta.mp4' 
  },
];

const generateFiles = (prefix, range) => {
  const [start, end] = range;
  const files = [];
  for (let i = Math.ceil(start); i <= Math.floor(end); i++) {
    files.push(`${prefix}${i} hz.wav`);
  }
  return files;
};

function ControlledEnvironmentTest() {
  const [playingTrack, setPlayingTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('alpha');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState({});
  const [timer, setTimer] = useState(120); // Example initial value
  const audioRef = useRef(null);

  const handlePlayPauseBinaural = (track, frequency) => {
    if (!frequency) {
      alert('Please select a frequency before playing.');
      return;
    }

    const file = `${track.filePrefix}${frequency} hz.wav`;

    if (playingTrack?.file !== file) {
      // Stop any currently playing track
      if (audioRef.current) {
        audioRef.current.pause();
      }

      // Start the new track with looping enabled
      const audio = new Audio(file);
      audio.loop = true;
      audioRef.current = audio;
      audio.play().catch((error) => {
        console.error('Error playing audio:', error);
        alert('Failed to play the audio track. Please try a different track or check your file.');
      });

      setPlayingTrack({ ...track, file });
      setIsPlaying(true);
      triggerPopup(`Playing ${track.title}`);
    } else {
      // Toggle play/pause for the current track
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error('Error resuming audio:', error);
          alert('Failed to resume the audio track.');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handlePlayPauseMonauralIsochronic = (track) => {
    const file = track.file;

    if (playingTrack?.file !== file) {
      // Stop any currently playing track
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      // Start the new track with looping enabled
      const audio = new Audio(file);
      audio.loop = true;
      audioRef.current = audio;
      audio.play().catch((error) => {
        console.error('Error playing audio:', error);
        alert('Failed to play the audio track. Please try a different track or check your file.');
      });

      setPlayingTrack({ ...track, file });
      setIsPlaying(true);
      triggerPopup(`Playing ${track.title}`);
    } else {
      // Toggle play/pause for the current track
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error('Error resuming audio:', error);
          alert('Failed to resume the audio track.');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFrequencyChange = (track, frequency) => {
    setSelectedFrequency(prev => ({ ...prev, [track.title]: frequency }));
  };

  const triggerPopup = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Popup will disappear after 3 seconds
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isListening) {
        audioRef.current.pause();
        setIsListening(false);
      } else {
        audioRef.current.play();
        setIsListening(true);
      }
    }
  };

  return (
    <div className="controlled-environment-test-container">
      <Helmet>
        <title>Controlled Environment Test - Unirelax Beats</title>
      </Helmet>
      <video className="background-video" autoPlay loop muted>
        <source src="https://soundescape.s3.eu-north-1.amazonaws.com/public/videos/theta.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Auditory Stimulation Beats</h1>
          <p>Engage in guided listening sessions by exploring our Binaural, Monoural & Isochronic Tones Brain wave states</p>
        </div>
      </div>

      {/* Pre-Listening Questionnaire */}
      <div className="questionnaire-section">
        <h2>Pre-Listening Questionnaire</h2>
        <p>Help us understand your state before listening to our brain waves</p>
        <Link to="/preListeningQuestionnaire">
          <button className="btn-primary">Start the Form</button>
        </Link>
      </div>

      <div className="filter-sort-section">
        <input
          type="text"
          className="filter-input"
          placeholder="Filter by title..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button className="sort-button" onClick={() => setSortOrder(sortOrder === 'alpha' ? 'date' : 'alpha')}>
          <FaSort />
        </button>
      </div>

      {/* Binaural Beats Section */}
      <div className="beats-section">
        <h2>Binaural Beats</h2>
        <div className="card-carousel">
          {binauralBeats.map((beat, index) => (
            <div key={index} className="sound-card">
              <video className="card-gif" autoPlay loop muted>
                <source src={beat.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-content">
                <h3>{beat.title}</h3>
                <p>{beat.description}</p>
                <select
                  className="frequency-dropdown"
                  value={selectedFrequency[beat.title] || ''}
                  onChange={(e) => handleFrequencyChange(beat, e.target.value)}
                >
                  <option value="" disabled>Select Frequency</option>
                  {generateFiles(beat.filePrefix, beat.range).map((file, i) => (
                    <option key={i} value={i + beat.range[0]}>{i + beat.range[0]} Hz</option>
                  ))}
                </select>
                <button
                  className="action-button"
                  onClick={() => handlePlayPauseBinaural(beat, selectedFrequency[beat.title])}
                >
                  {playingTrack?.file === `${beat.filePrefix}${selectedFrequency[beat.title]} hz.wav` && isPlaying ? <FaPause /> : <FaPlay />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monaural Beats Section */}
      <div className="beats-section">
        <h2>Monaural Beats</h2>
        <div className="card-carousel">
          {monauralBeats.map((beat, index) => (
            <div key={index} className="sound-card">
              <video className="card-gif" autoPlay loop muted>
                <source src={beat.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-content">
                <h3>{beat.title}</h3>
                <p>{beat.description}</p>
                <button
                  className="action-button"
                  onClick={() => handlePlayPauseMonauralIsochronic(beat)}
                >
                  {playingTrack?.file === beat.file && isPlaying ? <FaPause /> : <FaPlay />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

{/* Isochronic Beats Section */}
<div className="beats-section">
  <h2>Isochronic Beats</h2>
  <div className="card-carousel">
    {isochronicBeats.map((beat, index) => (
      <div key={index} className="sound-card">
        <video className="card-gif" autoPlay loop muted>
          <source src={beat.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="card-content">
          <h3>{beat.title}</h3>
          <p>{beat.description}</p>
          <button
            className="action-button"
            onClick={() => handlePlayPauseMonauralIsochronic(beat)}
          >
            {playingTrack?.file === beat.file && isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Media Player */}
{isListening && (
  <div className="media-player">
    <div className="controls">
      <button className="media-player-button" onClick={togglePlayPause}>
        {isListening ? <FaPause /> : <FaPlay />}
      </button>
    </div>
    <div className="beat-info">
      <span>{playingTrack?.title}</span>
    </div>
    <div className="timer">
      <span>{`${Math.floor(timer / 60)}:${('0' + (timer % 60)).slice(-2)}`}</span>
    </div>
  </div>
)}

{/* Popup Message */}
{showPopup && (
  <div className="popup-message">
    <p>{popupMessage}</p>
  </div>
)}

{/* Post-Listening Questionnaire */}
<div className="questionnaire-section">
  <h2>Post-Listening Questionnaire</h2>
  <p>Help us understand your state after listening to our brain waves</p>
  <Link to="/postListeningQuestionnaire">
    <button className="btn-primary">Start the Form</button>
  </Link>
</div>
    </div>
  );
}

export default ControlledEnvironmentTest;