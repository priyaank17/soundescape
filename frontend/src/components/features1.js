import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features1-container1 thq-section-max-width">
        <div className="features1-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features1-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features1-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features1-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features1-tab-horizontal"
          >
            <div className="features1-divider-container">
              {activeTab === 0 && <div className="features1-container2"></div>}
            </div>
            <div className="features1-content">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features1-tab-horizontal1"
          >
            <div className="features1-divider-container1">
              {activeTab === 1 && <div className="features1-container3"></div>}
            </div>
            <div className="features1-content1">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features1-tab-horizontal2"
          >
            <div className="features1-divider-container2">
              {activeTab === 2 && <div className="features1-container4"></div>}
            </div>
            <div className="features1-content2">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1546182990-dffeafbe841d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTgxMDc4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Brainwave states illustration',
  feature2Title: 'Monaural Beats',
  feature3ImgAlt: 'Free play illustration',
  feature1Description:
    'Experience binaural beats of each brainwave state for 2 minutes each.',
  feature2Description: 'Listen to monaural beats for 2-3 minutes.',
  feature2ImgAlt: 'Monaural beats illustration',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1552474705-dd8183e00901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTgxMDc4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Controlled Area Test',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1603696861164-61e45fae5ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTgxMDc4Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Create your own unique soundscape with auditory stimulation techniques.',
  feature3Title: 'Free Play',
}

Features1.propTypes = {
  feature3ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Title: PropTypes.string,
}

export default Features1
