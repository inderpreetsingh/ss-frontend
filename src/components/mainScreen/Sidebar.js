import React from 'react';

import Logo from '../Logo';

export default ({
  forwardRef, children, active, toggleShow,
}) => (
  <div
    ref={forwardRef}
    className={`sidebar ${active ? '' : 'hidden'}`}
  >
    <div className="top">
      <Logo />
      <button
        className="go-back-arr"
        onClick={toggleShow}
      >
        &larr;
      </button>
    </div>
    <div className="sidebar-wrapper">
      <div className="content">
        {children}
      </div>
    </div>
  </div>
);
