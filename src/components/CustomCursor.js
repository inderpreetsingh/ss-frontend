import React from 'react';
import PropTypes from 'prop-types';

class CustomCursor extends React.Component {
  constructor(props) {
    super(props);

    this.cursor = React.createRef();

    this.changeCursor = this.changeCursor.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.changeCursor);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.changeCursor);
  }

  changeCursor(e) {
    requestAnimationFrame(() => {
      const {
        clientX: mouseX,
        clientY: mouseY,
      } = e;
      const cursor = this.cursor.current;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div style={{ cursor: 'none' }}>
        <div className="custom-cursor" ref={this.cursor} />
        {children}
      </div>
    );
  }
}

CustomCursor.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CustomCursor;
