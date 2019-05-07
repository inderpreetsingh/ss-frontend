import React from 'react';
import PropTypes from 'prop-types';

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
  }

  componentDidMount() {
    this.setOrigin();
    window.addEventListener('load', this.setOrigin);
    window.addEventListener('resize', this.setOrigin);
    window.addEventListener('mousemove', this.moveBg);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.setOrigin);
    window.removeEventListener('resize', this.setOrigin);
    window.removeEventListener('mousemove', this.moveBg);
  }

  setOrigin() {
    // For better browser support.
    const screenWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    // For better browser support.
    const screenHeight = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    this.setState({
      centerX: screenWidth / 2,
      centerY: screenHeight / 2,
    });
  }

  moveBg(e) {
    requestAnimationFrame(() => {
      const bg = this.bg.current;
      const { centerX, centerY } = this.state;
      const {
        clientX: mouseX,
        clientY: mouseY,
      } = e;
      const amplitude = 1; // If change this, change also styles for ".parallax" .
      const stepX = centerX / amplitude;
      const stepY = centerY / amplitude;
      bg.style.transform = `translate(${-1 * (((mouseX - centerX) / stepX) + amplitude)}vw, ${-1 * (((mouseY - centerY) / stepY) + amplitude)}vh)`;
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div
        className="parallax"
        ref={this.bg}
      >
        { children }
      </div>
    );
  }
}

Parallax.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Parallax;
