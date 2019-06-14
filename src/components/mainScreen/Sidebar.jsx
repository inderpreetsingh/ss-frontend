import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import Logo from '../Logo';

const Sidebar = ({
  forwardRef, children, toggleShow,
}) => (
  <Fade>
    <div ref={forwardRef} className="sidebar">
      <div className="top">
        <Logo />
        <button className="go-back-arr" onClick={toggleShow}>
          &larr;
        </button>
      </div>
      <div className="sidebar-wrapper">
        <div className="content">{children}</div>
      </div>
    </div>
  </Fade>
);
Sidebar.propTypes = {
  toggleShow: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  forwardRef: PropTypes.instanceOf(Object).isRequired,

};
export default Sidebar;
