import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

import yoga from '../../images/bg/yoga.jpg';
import dance from '../../images/bg/dance.jpg';
import martialArts from '../../images/bg/martial_arts.jpg';

import Parallax from './Parallax';
import { TEXT } from '../../locals';

const { MAIN } = TEXT;

class Background extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imagesLoaded: false,
    };

    this.toggleImageLoad = this.toggleImageLoad.bind(this);
  }

  toggleImageLoad() {
    this.setState(state => ({
      imagesLoaded: !state.imagesLoaded,
    }));
  }

  render() {
    const { imagesLoaded } = this.state;
    const { currentTheme, enableAnimations } = this.props;

    return (
      <div className={`bg-container ${imagesLoaded ? 'reveal' : 'hide'}`}>
        <Parallax active={enableAnimations}>
          <Fade when={currentTheme === 0}>
            <div>
              <img
                src={martialArts}
                alt={MAIN.BACKGROUND_ALT}
                onLoad={this.toggleImageLoad}
              />
            </div>
          </Fade>
          <Fade when={currentTheme === 1}>
            <div>
              <img
                src={yoga}
                alt={MAIN.BACKGROUND_ALT}
              />
            </div>
          </Fade>
          <Fade when={currentTheme === 2}>
            <div>
              <img
                src={dance}
                alt={MAIN.BACKGROUND_ALT}
              />
            </div>
          </Fade>
        </Parallax>
      </div>
    );
  }
}
Background.propTypes = {
  currentTheme: PropTypes.number,
  enableAnimations: PropTypes.bool,
};

Background.defaultProps = {
  currentTheme: 0,
  enableAnimations: true,

};
export default Background;
