import React from 'react'

import PropTypes from 'prop-types'

import './features22.css'

const Features22 = (props) => {
  return (
    <div className="features22-layout349 thq-section-padding">
      <div className="features22-max-width thq-section-max-width">
        <div className="features22-container">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="thq-heading-2">Explore Our Features</span>
              </fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <fragment>
                <span className="features22-text29 thq-body-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </span>
              </fragment>
            )}
          </span>
        </div>
        <div className="features22-container1 thq-grid-auto-300">
          <div className="features22-card thq-flex-column thq-card">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features22-image thq-img-round thq-img-ratio-1-1"
            />
            <h2>
              {props.feature1Title ?? (
                <fragment>
                  <span className="thq-heading-2">Brainwave States</span>
                </fragment>
              )}
            </h2>
            <span>
              {props.feature1Description ?? (
                <fragment>
                  <span className="features22-text33 thq-body-small">
                    Discover different brainwave states to enhance relaxation
                    and focus.
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="features22-card1 thq-flex-column thq-card">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="features22-image1 thq-img-round thq-img-ratio-1-1"
            />
            <h2>
              {props.feature2Title ?? (
                <fragment>
                  <span className="thq-heading-2">Custom Soundscapes</span>
                </fragment>
              )}
            </h2>
            <span>
              {props.feature2Description ?? (
                <fragment>
                  <span className="features22-text19 thq-body-small">
                    Create personalized soundscapes tailored to your
                    preferences.
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="features22-card2 thq-flex-column thq-card">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features22-image2 thq-img-round thq-img-ratio-1-1"
            />
            <h1>
              {props.feature3Title ?? (
                <fragment>
                  <span className="thq-heading-2">Deep Relaxation Tests</span>
                </fragment>
              )}
            </h1>
            <span>
              {props.feature3Description ?? (
                <fragment>
                  <span className="features22-text31 thq-body-small">
                    Experience deep relaxation through controlled area tests.
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="features22-card3 thq-flex-column thq-card">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="features22-image3 thq-img-round thq-img-ratio-1-1"
            />
            <h1>
              {props.feature4Title ?? (
                <fragment>
                  <span className="thq-heading-2">
                    Auditory Stimulation Techniques
                  </span>
                </fragment>
              )}
            </h1>
            <span>
              {props.feature4Description ?? (
                <fragment>
                  <span className="features22-text18 thq-body-small">
                    Explore auditory stimulation techniques for mental
                    well-being.
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="features22-card4 thq-flex-column thq-card">
            <img
              alt={props.feature5ImageAlt}
              src={props.feature5ImageSrc}
              className="features22-image4 thq-img-round thq-img-ratio-1-1"
            />
            <h1>
              {props.feature5Title ?? (
                <fragment>
                  <span className="thq-heading-2">Enhanced Focus</span>
                </fragment>
              )}
            </h1>
            <span>
              {props.feature5Description ?? (
                <fragment>
                  <span className="features22-text23 thq-body-small">
                    Improve concentration and focus with our ambient
                    soundscapes.
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="features22-card5 thq-flex-column thq-card">
            <img
              alt={props.feature6ImageAlt}
              src={props.feature6ImageSrc}
              className="features22-image5 thq-img-round thq-img-ratio-1-1"
            />
            <h1>
              {props.feature6Title ?? (
                <fragment>
                  <span className="thq-heading-2">Mood Enhancement</span>
                </fragment>
              )}
            </h1>
            <span>
              {props.feature6Description ?? (
                <fragment>
                  <span className="features22-text22 thq-body-small">
                    Elevate your mood with specially curated soundscapes.
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="features22-card6 thq-flex-column thq-card">
            <img
              alt={props.feature7ImageAlt}
              src={props.feature7ImageSrc}
              className="features22-image6 thq-img-round thq-img-ratio-1-1"
            />
            <h1>
              {props.feature7Title ?? (
                <fragment>
                  <span className="thq-heading-2">
                    Advanced Features Access
                  </span>
                </fragment>
              )}
            </h1>
            <span>
              {props.feature7Description ?? (
                <fragment>
                  <span className="features22-text20 thq-body-small">
                    Unlock advanced features with premium pricing plans.
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="features22-card7 thq-flex-column thq-card">
            <img
              alt={props.feature8ImageAlt}
              src={props.feature8ImageSrc}
              className="features22-image7 thq-img-round thq-img-ratio-1-1"
            />
            <h1>
              {props.feature8Title ?? (
                <fragment>
                  <span className="thq-heading-2">Personalized Support</span>
                </fragment>
              )}
            </h1>
            <span>
              {props.feature8Description ?? (
                <fragment>
                  <span className="features22-text28 thq-body-small">
                    Get personalized assistance and support from our team.
                  </span>
                </fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features22.defaultProps = {
  feature8ImageAlt: 'image',
  feature7ImageAlt: 'image',
  feature7ImageSrc:
    'https://images.unsplash.com/photo-1598939897089-f73043763e22?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDU1fHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MTE2Mnww&ixlib=rb-4.0.3&w=1400',
  feature4Description: undefined,
  feature2Description: undefined,
  feature7Description: undefined,
  feature4Title: undefined,
  feature6Description: undefined,
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1664251929714-8e4cbf0d075d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM0fHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDY3M3ww&ixlib=rb-4.0.3&w=1400',
  feature5Description: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1599134842279-fe807d23316e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDYxOHww&ixlib=rb-4.0.3&w=1400',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1605557626697-2e87166d88f9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDYxOHww&ixlib=rb-4.0.3&w=1400',
  feature4ImageAlt: 'image',
  feature8Title: undefined,
  feature6Title: undefined,
  feature7Title: undefined,
  feature1ImageAlt: 'image',
  feature2ImageAlt: 'image',
  feature1Title: undefined,
  feature8Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGZlYXR1cmV8ZW58MHx8fHwxNzE2NDYwNjE4fDA&ixlib=rb-4.0.3&w=1400',
  content1: undefined,
  feature2Title: undefined,
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1435820394963-a15297f976fd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDUxfHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MTE2Mnww&ixlib=rb-4.0.3&w=1400',
  feature3ImageAlt: 'image',
  feature8ImageSrc:
    'https://images.unsplash.com/photo-1533619043865-1c2e2f32ff2f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDU5fHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MTE2Mnww&ixlib=rb-4.0.3&w=1400',
  feature3Description: undefined,
  feature5Title: undefined,
  feature5ImageAlt: 'image',
  feature1Description: undefined,
  feature3Title: undefined,
  heading1: undefined,
  feature6ImageAlt: 'image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1569144157591-c60f3f82f137?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGZlYXR1cmV8ZW58MHx8fHwxNzE2NDYwNjE4fDA&ixlib=rb-4.0.3&w=1400',
}

Features22.propTypes = {
  feature8ImageAlt: PropTypes.string,
  feature7ImageAlt: PropTypes.string,
  feature7ImageSrc: PropTypes.string,
  feature4Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature7Description: PropTypes.element,
  feature4Title: PropTypes.element,
  feature6Description: PropTypes.element,
  feature5ImageSrc: PropTypes.string,
  feature5Description: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature8Title: PropTypes.element,
  feature6Title: PropTypes.element,
  feature7Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature8Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  content1: PropTypes.element,
  feature2Title: PropTypes.element,
  feature6ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature8ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature5Title: PropTypes.element,
  feature5ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3Title: PropTypes.element,
  heading1: PropTypes.element,
  feature6ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
}

export default Features22
