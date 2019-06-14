import React from 'react';
import PropTypes from 'prop-types';
import CONST from '../../const';

const { screenHeight, screenWidth } = CONST;

class Parallax extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      centerX: 0,
      centerY: 0,
    };

    this.bg = React.createRef();

    this.moveBg = this.moveBg.bind(this);
    this.setOrigin = this.setOrigin.bind(this);
    this.enableParallax = this.enableParallax.bind(this);
    this.disableParallax = this.disableParallax.bind(this);
  }

  componentDidMount() {
    this.setOrigin();
    this.enableParallax();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      this.enableParallax();
    } else {
      this.disableParallax();
    }
  }

  componentWillUnmount() {
    this.disableParallax();
  }

  setOrigin() {
    this.setState({
      centerX: screenWidth / 2,
      centerY: screenHeight / 2,
    });
  }

  enableParallax() {
    window.addEventListener('load', this.setOrigin);
    window.addEventListener('resize', this.setOrigin);
    window.addEventListener('mousemove', this.moveBg);
  }

  disableParallax() {
    window.removeEventListener('load', this.setOrigin);
    window.removeEventListener('resize', this.setOrigin);
    window.removeEventListener('mousemove', this.moveBg);
  }

  moveBg(e) {
    const bg = this.bg.current;
    if (!bg.contains(e.target)) {
      return;
    }
    requestAnimationFrame(() => {
      const { centerX, centerY } = this.state;
      const {
        clientX: mouseX,
        clientY: mouseY,
      } = e;

      const amplitude = 1; // If change this, change also styles for ".parallax-wrapper" .
      const stepX = centerX / amplitude;
      const stepY = centerY / amplitude;

      const x = -1 * (((mouseX - centerX) / stepX) + amplitude);
      const y = -1 * (((mouseY - centerY) / stepY) + amplitude);
      bg.style.transform = `translate(${x}%, ${y}%)`;
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div className="parallax-wrapper">
        <div
          className="parallax"
          ref={this.bg}
        >
          { children }
        </div>
      </div>
    );
  }
}
Parallax.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
};
export default Parallax;
