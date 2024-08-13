import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features2-container1 thq-section-max-width">
        <div className="features2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features2-tab-horizontal"
          >
            <div className="features2-divider-container">
              {activeTab === 0 && <div className="features2-container2"></div>}
            </div>
            <div className="features2-content">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features2-tab-horizontal1"
          >
            <div className="features2-divider-container1">
              {activeTab === 1 && <div className="features2-container3"></div>}
            </div>
            <div className="features2-content1">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features2-tab-horizontal2"
          >
            <div className="features2-divider-container2">
              {activeTab === 2 && <div className="features2-container4"></div>}
            </div>
            <div className="features2-content2">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features2-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features2-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1415912364061-78a25859c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTgxMDc4N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Experience different brainwave states through binaural, monaural, and isochronic tones for mental well-being.',
  feature1Title: 'Ambient soundscapes',
  feature1ImgAlt: 'Image depicting ambient soundscapes',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1583314965950-cd54a8b6db84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTgxMDc4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Customize your auditory experience by mixing various sounds and techniques to suit your preferences.',
  feature2Title: 'Brainwave States Exploration',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTgxMDc4Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt: 'Image illustrating creating your own soundscape',
  feature2ImgAlt: 'Image representing brainwave states exploration',
  feature1Description:
    'Immerse yourself in a variety of natural and atmospheric environments to enhance relaxation and focus.',
  feature3Title: 'Create Your Own Soundscape',
}

Features2.propTypes = {
  feature2ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Title: PropTypes.string,
}

export default Features2
