import React from 'react';

import Sidebar from './Sidebar';

export default ({ active, toggleLoginSidebar, toggleRegistrationSidebar }) => (
  <Sidebar
    active={active}
    toggleShow={toggleLoginSidebar}
  >
    <h2 className="title">Log in for Skillshape</h2>
    <div className="info">
      <label htmlFor="email">
        <p>Email</p>
        <input id="email" type="email" placeholder="email@example.com" />
      </label>
      <label htmlFor="password">
        <p>Password</p>
        <input id="password" type="password" placeholder="******" />
      </label>
    </div>
    <div className="bottom">
      <button className="main-btn"> Log In </button>
      <button
        className="transparent-btn"
        onClick={() => {
          toggleLoginSidebar();
          toggleRegistrationSidebar();
        }}
      >
        I don't have an account, register.
      </button>
    </div>
  </Sidebar>
);
