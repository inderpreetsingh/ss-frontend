/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';

class CustomCursor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseX: 0,
      mouseY: 0,
      xp: 0,
      yp: 0,
    };

    this.cursor = React.createRef();
    this.circle = React.createRef();

    this.handleCursorMove = this.handleCursorMove.bind(this);
    this.handleCircleMove = this.handleCircleMove.bind(this);
  }

  componentDidMount() {
    setInterval(this.handleCircleMove, 20);
    window.addEventListener('mousemove', this.handleCursorMove);
  }

  componentWillUnmount() {
    clearInterval(this.handleCircleMove);
    window.removeEventListener('mousemove', this.handleCursorMove);
  }

  handleCursorMove(e) {
    requestAnimationFrame(() => {
      const {
        clientX: mouseX,
        clientY: mouseY,
      } = e;
      const cursor = this.cursor.current;

      this.setState({ mouseX, mouseY });
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
  }

  handleCircleMove() {
    requestAnimationFrame(() => {
      this.setState((state) => {
        const {
          mouseX, mouseY, xp, yp,
        } = state;
        const step = 6;

        return {
          xp: xp + ((mouseX - xp) / step),
          yp: yp + ((mouseY - yp) / step),
        };
      }, () => {
        const { xp, yp } = this.state;
        const circle = this.circle.current;

        circle.style.transform = `translate(${xp}px, ${yp}px)`;
      });
    });
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <div style={{ cursor: 'none' }}>
          {children}
          <div className="custom-cursor" ref={this.cursor} />
          <div className="cursor-following-circle" ref={this.circle} />
        </div>
      </>
    );
  }
}

CustomCursor.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CustomCursor;
