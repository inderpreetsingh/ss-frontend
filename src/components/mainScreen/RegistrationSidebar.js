/* eslint-disable */

// TODO: Fix eslint issues.

import React from 'react';

import Sidebar from './Sidebar';
import Checkbox from '../Checkbox';

export default ({ active, toggleLoginSidebar, toggleRegistrationSidebar }) => (
  <Sidebar
    active={active}
    toggleShow={toggleRegistrationSidebar}
  >
    <h2 className="title">Sign up for Skillshape</h2>
    <div className="info">
      <label htmlFor="email">
        <p>Email</p>
        <input id="email" type="email" placeholder="email@example.com" />
      </label>
      <label htmlFor="password">
        <p>Password</p>
        <input id="password" type="password" placeholder="******" />
      </label>
      <label htmlFor="confirm_password">
        <p>Confirm password</p>
        <input id="confirm_password" type="password" placeholder="******" />
      </label>
      <label
        htmlFor="terms"
        className="label-with-checkbox"
      >
        <Checkbox id="terms" />
        I agree to Skillshape&nbsp;
        <a href="#"> terms & conditions </a>
        .
      </label>
      <label
        htmlFor="news"
        className="label-with-checkbox"
      >
        <Checkbox id="news" />
        I would like to receive news and updates about Skillshape.
      </label>
    </div>
    <div className="bottom">
      <button className="main-btn">
        <h5> Sign Up </h5>
      </button>
      <button
        className="transparent-btn"
        onClick={() => {
          toggleRegistrationSidebar();
          toggleLoginSidebar();
        }}
      >
        I already have an account, log in.
      </button>
    </div>
  </Sidebar>
);
