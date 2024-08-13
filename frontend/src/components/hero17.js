import React from 'react';
import PropTypes from 'prop-types';
import './hero17.css';

const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-max-width thq-section-padding">
        <div className="hero17-content">
          <h1>
            {props.heading1 ?? (
              <>
                <span className="hero17-text7 thq-heading-1">
                  Welcome to our Binaural Beats Generator
                </span>
              </>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <>
                <span className="hero17-text4 thq-body-large">
                  Experience the power of binaural and monaural beats to enhance
                  your brainwave states and relaxation.
                </span>
              </>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button">
            <span>
              {props.action1 ?? (
                <>
                  <span className="thq-body-small">Get Started</span>
                </>
              )}
            </span>
          </button>
          <button className="thq-button-outline hero17-button1">
            <span>
              {props.action2 ?? (
                <>
                  <span className="thq-body-small">Learn More</span>
                </>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="hero17-content1">
        <div className="hero17-row-container thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt="Brainwave visualization"
              src={props.image1Src}
              className="hero17-placeholder-image thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src={props.image2Src}
              className="hero17-placeholder-image01 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src={props.image3Src}
              className="hero17-placeholder-image02 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src={props.image4Src}
              className="hero17-placeholder-image03 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src={props.image5Src}
              className="hero17-placeholder-image04 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src={props.image6Src}
              className="hero17-placeholder-image05 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt="Brainwave visualization"
              src={props.image1Src}
              className="hero17-placeholder-image06 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src={props.image2Src}
              className="hero17-placeholder-image07 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src={props.image3Src}
              className="hero17-placeholder-image08 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src={props.image4Src}
              className="hero17-placeholder-image09 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src={props.image5Src}
              className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt="Brainwave visualization"
              src={props.image7Src}
              className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src={props.image8Src}
              className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src={props.image9Src}
              className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src={props.image10Src}
              className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src={props.image11Src}
              className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src={props.image12Src}
              className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt="Brainwave visualization"
              src={props.image7Src}
              className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src={props.image8Src}
              className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src={props.image9Src}
              className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src={props.image10Src}
              className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Brainwave visualization"
              src={props.image11Src}
              className="hero17-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Abstract art with geometric shapes"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Hero17.defaultProps = {
  image12Src: 'https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&ixlib=rb-4.0.3&w=1500',
  content1: undefined,
  image3Alt: 'Geometric abstract art',
  image10Alt: 'Geometric abstract art',
  image10Src: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image8Alt: 'Geometric abstract art',
  image9Src: 'https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image12Alt: 'Geometric abstract art',
  image7Src: 'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image7Alt: 'Geometric abstract art',
  image1Alt: 'Geometric abstract art',
  image2Src: 'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  action2: undefined,
  image1Src: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image4Src: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image6Src: 'https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image11Src: 'https://images.unsplash.com/photo-1524169358666-79f22534bc6e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image5Alt: 'Geometric abstract art',
  image2Alt: 'Geometric abstract art',
  image3Src: 'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image5Src: 'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
  image8Src: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image11Alt: 'Geometric abstract art',
  action1: undefined,
  heading1: undefined,
  image6Alt: 'Geometric abstract art',
  image9Alt: 'Geometric abstract art',
  image4Alt: 'Geometric abstract art',
};

Hero17.propTypes = {
  image12Src: PropTypes.string,
  content1: PropTypes.element,
  image3Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image12Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  action2: PropTypes.element,
  image1Src: PropTypes.string,
  image4Src: PropTypes.string,
  image6Src: PropTypes.string,
  image11Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image5Src: PropTypes.string,
  image8Src: PropTypes.string,
  image11Alt: PropTypes.string,
  action1: PropTypes.element,
  heading1: PropTypes.element,
  image6Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image4Alt: PropTypes.string,
};

export default Hero17;