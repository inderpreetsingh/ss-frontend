import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import '../../styles/sidebar.scss';

const Sidebar = ({
  forwardRef, children, toggleShow, active,
}) => (
  <Fade when={active}>
    <div ref={forwardRef} className={`sidebar ${active ? '' : 'hidden'}`}>
      <div className="top">
        <Logo />
        <button className="go-back-arr" onClick={() => { toggleShow(false); }} type="button">
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
  active: PropTypes.bool.isRequired,

};
export default Sidebar;
