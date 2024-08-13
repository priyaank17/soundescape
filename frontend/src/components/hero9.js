import React from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1>
            {props.heading1 ?? (
              <fragment>
                <span className="hero9-text5 thq-heading-1">
                  Enhance Relaxation and Focus
                </span>
              </fragment>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <fragment>
                <span className="hero9-text4 thq-body-large">
                  Immerse yourself in a world of calming sounds and techniques
                  designed to help you relax, focus, and improve your mental
                  well-being.
                </span>
              </fragment>
            )}
          </p>
          <div className="hero9-actions">
            <button className="thq-button-filled hero9-button">
              <span>
                {props.action1 ?? (
                  <fragment>
                    <span className="hero9-text7 thq-body-small">
                      Start Exploring
                    </span>
                  </fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline hero9-button1">
              <span>
                {props.action2 ?? (
                  <fragment>
                    <span className="hero9-text6 thq-body-small">
                      Explore Soundscapes
                    </span>
                  </fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  content1: undefined,
  heading1: undefined,
  image1Alt: 'image',
  action2: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTMyODU4OTZ8MA&ixlib=rb-4.0.3&w=1500',
  action1: undefined,
}

Hero9.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
  action2: PropTypes.element,
  image1Src: PropTypes.string,
  action1: PropTypes.element,
}

export default Hero9
