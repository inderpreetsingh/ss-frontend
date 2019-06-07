import React from 'react';
import Fade from 'react-reveal/Fade';
import Logo from '../Logo';

export default ({
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
