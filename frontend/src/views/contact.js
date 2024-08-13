import React from 'react'

import PropTypes from 'prop-types'

import './contact.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content thq-flex-row">
          <div className="contact10-content1">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="thq-heading-2">Contact Us</span>
                </fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <fragment>
                  <span className="thq-body-large">
                    Feel free to reach out to us for any inquiries or feedback.
                  </span>
                </fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content2 thq-flex-row">
          <div className="contact10-container1">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <fragment>
                  <span className="contact10-text08 thq-heading-3">
                    Headquarters
                  </span>
                </fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <fragment>
                  <span className="thq-body-large">
                    123 Main Street, City, Country
                  </span>
                </fragment>
              )}
            </p>
            <div className="contact10-container2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container3">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <fragment>
                  <span className="contact10-text10 thq-heading-3">
                    Support Center
                  </span>
                </fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <fragment>
                  <span className="thq-body-large">
                    456 Support Street, City, Country
                  </span>
                </fragment>
              )}
            </p>
            <div className="contact10-container4">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1ImageAlt: 'image1Alt',
  content1: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1588694926280-3ae414d06ccb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxjbHVqfGVufDB8fHx8MTcxNjI4NjI4N3ww&ixlib=rb-4.0.3&w=1400',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1571979195097-59d223315d89?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxidWNoYXJlc3R8ZW58MHx8fHwxNzE2Mjg2MzE3fDA&ixlib=rb-4.0.3&w=1400',
  location1Description: undefined,
  location1: undefined,
  location2ImageAlt: 'image2Alt',
  heading1: undefined,
  location2: undefined,
  location2Description: undefined,
}

Contact10.propTypes = {
  location1ImageAlt: PropTypes.string,
  content1: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  location1Description: PropTypes.element,
  location1: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
  location2: PropTypes.element,
  location2Description: PropTypes.element,
}

export default Contact10;
