import React from 'react';

import Sidebar from './Sidebar';
import { TEXT } from '../../locals';

const { SIGN_IN_SIDEBAR } = TEXT.MAIN;

export default ({
  forwardRef, active, toggleLoginSidebar, toggleRegistrationSidebar,
}) => (
  <Sidebar
    forwardRef={forwardRef}
    active={active}
    toggleShow={toggleLoginSidebar}
  >
    <h2 className="title">{SIGN_IN_SIDEBAR.TITLE}</h2>
    <div className="info">
      <label htmlFor="login_email">
        <p>{SIGN_IN_SIDEBAR.INPUT.EMAIL}</p>
        <input
          id="login_email"
          type="email"
          placeholder={SIGN_IN_SIDEBAR.PLACEHOLDER.EMAIL}
        />
      </label>
      <label htmlFor="login_password">
        <p>{SIGN_IN_SIDEBAR.INPUT.PASSWORD}</p>
        <input
          id="login_password"
          type="password"
          placeholder={SIGN_IN_SIDEBAR.PLACEHOLDER.PASSWORD}
        />
      </label>
    </div>
    <div className="bottom">
      <button className="main-btn">
        <h5>{SIGN_IN_SIDEBAR.SIGN_IN_BUTTON}</h5>
      </button>
      <button
        className="transparent-btn"
        onClick={() => {
          toggleLoginSidebar();
          toggleRegistrationSidebar();
        }}
      >
        {SIGN_IN_SIDEBAR.SIGN_UP_BUTTON}
      </button>
    </div>
  </Sidebar>
);
