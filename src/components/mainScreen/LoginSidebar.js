import React from 'react';

import Sidebar from './Sidebar';
import { TEXT } from '../../locals';

const { SIGN_IN_SIDEBAR } = TEXT.MAIN;

export default ({ active, toggleLoginSidebar, toggleRegistrationSidebar }) => (
  <Sidebar
    active={active}
    toggleShow={toggleLoginSidebar}
  >
    <h2 className="title">{SIGN_IN_SIDEBAR.TITLE}</h2>
    <div className="info">
      <label htmlFor="email">
        <p>{SIGN_IN_SIDEBAR.INPUT.EMAIL}</p>
        <input
          id="email"
          type="email"
          placeholder={SIGN_IN_SIDEBAR.PLACEHOLDER.EMAIL}
        />
      </label>
      <label htmlFor="password">
        <p>{SIGN_IN_SIDEBAR.INPUT.PASSWORD}</p>
        <input
          id="password"
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
