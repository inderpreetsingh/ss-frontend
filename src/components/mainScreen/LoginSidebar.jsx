import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from './Sidebar';
import { TEXT } from '../../locals';

const { SIGN_IN_SIDEBAR } = TEXT.MAIN;


const LoginSidebar = ({
  forwardRef, toggleLoginSidebar, toggleRegistrationSidebar, active,
}) => (
  <Sidebar
    forwardRef={forwardRef}
    toggleShow={toggleLoginSidebar}
    active={active}
  >
    <h2 className="title">{SIGN_IN_SIDEBAR.TITLE}</h2>
    <div className="info">
      <label htmlFor="login_email">
        <p>{SIGN_IN_SIDEBAR.INPUT.EMAIL}</p>
        <input
          id="login_email"
          type="email"
          className="email"
          placeholder={SIGN_IN_SIDEBAR.PLACEHOLDER.EMAIL}
        />
      </label>
      <label htmlFor="login_password">
        <p>{SIGN_IN_SIDEBAR.INPUT.PASSWORD}</p>
        <input
          id="login_password"
          type="password"
          className="password"
          placeholder={SIGN_IN_SIDEBAR.PLACEHOLDER.PASSWORD}
        />
      </label>
    </div>
    <div className="bottom">
      <button className="main-btn" type="button">
        <h5>{SIGN_IN_SIDEBAR.SIGN_IN_BUTTON}</h5>
      </button>
      <button
        className="transparent-btn"
        onClick={() => {
          toggleLoginSidebar(false);
          toggleRegistrationSidebar(true);
        }}
        type="button"
      >
        {SIGN_IN_SIDEBAR.SIGN_UP_BUTTON}
      </button>
    </div>
  </Sidebar>
);
LoginSidebar.propTypes = {
  forwardRef: PropTypes.instanceOf(Object).isRequired,
  toggleLoginSidebar: PropTypes.func.isRequired,
  toggleRegistrationSidebar: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,

};
export default LoginSidebar;
