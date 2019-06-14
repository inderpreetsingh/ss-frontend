import React from 'react';

import blocks from './features/blocks';
import CONST from '../const';

import ProgressBar from './features/ProgressBar';
import InfoBlock from './features/InfoBlock';
import '../styles/features.scss';

const { screenHeight, screenWidth } = CONST;

class Features extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuSticky: false,
    };

    this.featuresSection = React.createRef();
    this.stickyMenuSteps = React.createRef();

    this.goToStep = this.goToStep.bind(this);
    this.toggleMenuSticky = this.toggleMenuSticky.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleMenuSticky);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleMenuSticky);
  }

  toggleMenuSticky() {
    requestAnimationFrame(() => {
      const { isMenuSticky } = this.state;

      // For better browser support.
      const scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop;

      let stickyFrom = screenHeight;
      if (screenWidth < 768) {
        stickyFrom += this.stickyMenuSteps.current.clientHeight;
      }

      const newIsMenuSticky = scrollTop > stickyFrom;
      if (newIsMenuSticky !== isMenuSticky) {
        this.setState({
          isMenuSticky: newIsMenuSticky,
        });
      }
    });
  }

  goToStep(index) {
    const content = this.featuresSection.current;

    const infoBlockHeight = (content.clientHeight - screenHeight) / (blocks.length - 1);
    window.scrollTo({
      top: content.offsetTop + infoBlockHeight * (index - 1) + 1, // To make menu sticky.
      behavior: 'smooth',
    });
  }

  render() {
    const { isMenuSticky } = this.state;

    return (
      <section
        className="features"
        ref={this.featuresSection}
      >
        <div className={`top ${isMenuSticky ? 'sticky' : ''}`}>
          <div
            className="steps"
            ref={this.stickyMenuSteps}
          >
            <ol>
              <li onClick={() => this.goToStep(1)}>Bring more students.</li>
              <li onClick={() => this.goToStep(2)}>Keep students excited.</li>
              <li onClick={() => this.goToStep(3)}>Hassle-free administration.</li>
            </ol>
          </div>
          <ProgressBar featuresSectionRef={this.featuresSection} />
        </div>
        <div className="content">
          {
            blocks.map((data, index) => (
              <InfoBlock
                key={data.options[0].heading}
                data={data}
                index={index}
              />
            ))
          }
        </div>
      </section>
    );
  }
}

export default Features;
