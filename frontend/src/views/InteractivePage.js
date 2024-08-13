import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import WaveSurfer from 'wavesurfer.js';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaDownload, FaSyncAlt, FaTrashAlt } from 'react-icons/fa';
import './InteractivePage.css';
import * as Tone from 'tone';

const InteractivePage = () => {
  const location = useLocation();
  const { mix } = location.state || {};
  const [waveform, setWaveform] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [panningValue, setPanningValue] = useState(0.1);
  const [reverbValue, setReverbValue] = useState(0.1);
  const [volumeValue, setVolumeValue] = useState(0.1);
  const [eqValues, setEqValues] = useState({ low: 1, mid: 3, high: 7 });
  const waveRefs = useRef([]);

  useEffect(() => {
    if (mix && mix.length > 0) {
      mix.forEach((track, index) => initializeWaveSurfer(track.file, index));
    }
  }, [mix]);

  const initializeWaveSurfer = (file, index) => {
    if (waveRefs.current[index]) waveRefs.current[index].destroy();
    const wavesurfer = WaveSurfer.create({
      container: `#waveform-${index}`,
      waveColor: '#D9DCFF',
      progressColor: '#4353FF',
      barWidth: 2,
      height: 80,
      responsive: true,
      fillParent: true,
      backend: 'WebAudio'
    });
    wavesurfer.load(file);
    waveRefs.current[index] = wavesurfer;

    wavesurfer.on('ready', () => {
      applyAudioEffects(wavesurfer, index);
    });

    wavesurfer.on('error', (e) => {
      console.error(`Error loading ${file}:`, e);
    });
  };

  const applyAudioEffects = (wavesurfer, index) => {
    const pannerNode = new Tone.Panner(panningValue).toDestination();
    const reverbNode = new Tone.Reverb(reverbValue).toDestination();
    const eq3 = new Tone.EQ3(eqValues.low, eqValues.mid, eqValues.high).toDestination();

    const player = new Tone.Player(wavesurfer.backend.buffer).connect(pannerNode).connect(reverbNode).connect(eq3);
    wavesurfer.backend.setFilter([pannerNode, reverbNode, eq3]);

    wavesurfer.setVolume(volumeValue);
  };

  const handleTrackSelect = (index) => {
    setSelectedTrack(index);
  };

  const handlePlayPause = (index) => {
    const wavesurfer = waveRefs.current[index];
    if (wavesurfer) {
      if (isPlaying) {
        wavesurfer.pause();
      } else {
        wavesurfer.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handlePanningChange = (value) => {
    setPanningValue(value);
    if (selectedTrack !== null) {
      applyAudioEffects(waveRefs.current[selectedTrack], selectedTrack);
    }
  };

  const handleReverbChange = (value) => {
    setReverbValue(value);
    if (selectedTrack !== null) {
      applyAudioEffects(waveRefs.current[selectedTrack], selectedTrack);
    }
  };

  const handleVolumeChange = (value) => {
    setVolumeValue(value);
    if (selectedTrack !== null) {
      waveRefs.current[selectedTrack].setVolume(value);
    }
  };

  const handleEqChange = (band, value) => {
    setEqValues((prev) => ({ ...prev, [band]: value }));
    if (selectedTrack !== null) {
      applyAudioEffects(waveRefs.current[selectedTrack], selectedTrack);
    }
  };

  const handleLoop = (index) => {
    const wavesurfer = waveRefs.current[index];
    if (wavesurfer) {
      wavesurfer.setLoop(!wavesurfer.getLoop());
    }
  };

  const handleMute = (index) => {
    const wavesurfer = waveRefs.current[index];
    if (wavesurfer) {
      wavesurfer.toggleMute();
    }
  };

  const handleRemoveTrack = (index) => {
    waveRefs.current[index].destroy();
    waveRefs.current.splice(index, 1);
    setSelectedTrack(null);
  };

  return (
    <div className="interactive-page-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/videos/beats8.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="interactive-heading">Interactive Audio Editing</h1>
        </div>
      </div>
      <div className="main-content">
        <div className="tracks-container">
          {mix && mix.map((track, index) => (
            <div key={index} className="track-section">
              <div className="track-header">
                <h3>{track.title}</h3>
                <div className="track-controls">
                  <button onClick={() => handlePlayPause(index)}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                  <button onClick={() => handleLoop(index)}><FaSyncAlt /></button>
                  <button onClick={() => handleMute(index)}><FaVolumeMute /></button>
                  <button onClick={() => handleRemoveTrack(index)}><FaTrashAlt /></button>
                </div>
              </div>
              <div id={`waveform-${index}`} className="waveform"></div>
              {selectedTrack === index && (
                <div className="effect-controls">
                  <div className="volume-controls">
                    <label>Volume:</label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volumeValue}
                      onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    />
                  </div>
                  <div className="panning-controls">
                    <label>Panning:</label>
                    <input
                      type="range"
                      min="-1"
                      max="1"
                      step="0.01"
                      value={panningValue}
                      onChange={(e) => handlePanningChange(parseFloat(e.target.value))}
                    />
                  </div>
                  <div className="reverb-controls">
                    <label>Reverb:</label>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      step="0.1"
                      value={reverbValue}
                      onChange={(e) => handleReverbChange(parseFloat(e.target.value))}
                    />
                  </div>
                  <div className="equalizer-controls">
                    <label>Equalizer:</label>
                    <div className="eq-band">
                      <label>Low:</label>
                      <input
                        type="range"
                        min="-30"
                        max="30"
                        step="1"
                        value={eqValues.low}
                        onChange={(e) => handleEqChange('low', parseFloat(e.target.value))}
                      />
                    </div>
                    <div className="eq-band">
                      <label>Mid:</label>
                      <input
                        type="range"
                        min="-30"
                        max="30"
                        step="1"
                        value={eqValues.mid}
                        onChange={(e) => handleEqChange('mid', parseFloat(e.target.value))}
                      />
                    </div>
                    <div className="eq-band">
                      <label>High:</label>
                      <input
                        type="range"
                        min="-30"
                        max="30"
                        step="1"
                        value={eqValues.high}
                        onChange={(e) => handleEqChange('high', parseFloat(e.target.value))}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="save-mix-button">Save Mix</button>
      </div>
    </div>
  );
              }


export default InteractivePage;