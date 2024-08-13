import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Hero17 from '../components/hero17';
import './home.css';

const Home = (props) => {
  return (
    <div className="home-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/videos/beats8.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Helmet>
        <title>Hard To Find Leading Swan</title>
        <meta property="og:title" content="Hard To Find Leading Swan" />
      </Helmet>
      
      <Hero17
        action1={
          <Link to="/controlledTest">
            <span className="thq-body-small">Explore Auditory Stimulation</span>
          </Link>
        }
        action2={
          <Link to="/ambientSoundscapes">
            <span className="thq-body-small">Explore Ambient Soundscapes</span>
          </Link>
        }
        action3={
          <Link to="/preListeningQuestionnaire">
            <span className="thq-body-small">Start the Form</span>
          </Link>
        }
        content1={
          <>
            <span className="home-text016 thq-body-large">
              Unlock Your Full Potential with Binaural, Monaural, and Isochronic Beats.
              Immerse yourself in soothing soundscapes designed to enhance relaxation, focus, and mental clarity.
              SoundEscape is dedicated to enhance your mental well-being through the power of sound.
              Our specially curated beats and soundscapes are designed to help you relax, focus, and achieve mental clarity. Whether you're meditating, studying, or simply unwinding, UniRelax Beats provides the perfect auditory experience to support your needs
            </span>
          </>
        }
        heading1={
          <>
            <span className="home-text017 thq-heading-1">
              Welcome to SoundEscape
            </span>
          </>
        }
      />


      <div className="about-us-section">
      <div className="hero-container">
  <h2 className="thq-heading-2">About Me</h2>
  <p className="thq-body-large">
    Welcome to SoundEscape. This interactive platform is part of my Master's project at MTU Cork School of Music, where I'm exploring the fascinating world of auditory stimulation techniques and environmental soundscapes.
    My project aims to investigate the effects of various auditory stimuli on listeners' experiences and potentially their cognitive states. Through this website, I invite you to embark on a journey of sonic exploration and contribute to my research.
    On the first page, you'll encounter different auditory techniques like binaural beats, monaural beats, and isochronic tones across various brainwave states. The second page offers immersive environmental soundscapes, allowing you to blend these with your chosen auditory technique. Finally, on the third page, you become the sound artist, creating your unique soundscape by selecting drone pads, ambient samples, and auditory stimulation techniques.
    Your participation and feedback are invaluable to my research. By engaging with these sounds and sharing your experiences, you're contributing to our understanding of how different auditory stimuli affect perception and potentially cognitive function.
    This project represents the intersection of music technology, cognitive science, and interactive design. It's my hope that this exploration will not only further academic understanding but also provide you with an engaging and potentially beneficial auditory experience.
    Thank you for visiting and participating in this sonic adventure!
  </p>
  <p className="thq-body-large">
    Vivek Kumar<br/>
    Master's Student<br/>
    MTU Cork School of Music
  </p>
</div>
      </div>
    </div>
  );
};

export default Home;