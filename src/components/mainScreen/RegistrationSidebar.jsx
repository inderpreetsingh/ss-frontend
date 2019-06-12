/* eslint-disable jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Sidebar from './Sidebar';
import Checkbox from '../Checkbox';
import { TEXT } from '../../locals';

const { SIGN_UP_SIDEBAR } = TEXT.MAIN;


const RegistrationSidebar = ({
  forwardRef, toggleLoginSidebar, toggleRegistrationSidebar, active,
}) => (
  <Sidebar
    forwardRef={forwardRef}
    active={active}
    toggleShow={toggleRegistrationSidebar}
  >
    <h2 className="title">{SIGN_UP_SIDEBAR.TITLE}</h2>
    <div className="info">
      <label htmlFor="registration_email">
        <p>{SIGN_UP_SIDEBAR.INPUT.EMAIL}</p>
        <input
          id="registration_email"
          type="email"
          className="email"
          placeholder={SIGN_UP_SIDEBAR.PLACEHOLDER.EMAIL}
        />
      </label>
      <label htmlFor="registration_password">
        <p>{SIGN_UP_SIDEBAR.INPUT.PASSWORD}</p>
        <input
          id="registration_password"
          type="password"
          className="password"
          placeholder={SIGN_UP_SIDEBAR.PLACEHOLDER.PASSWORD}
        />
      </label>
      <label htmlFor="confirm_password">
        <p>{SIGN_UP_SIDEBAR.INPUT.CONFIRM_PASSWORD}</p>
        <input
          id="confirm_password"
          type="password"
          className="password"
          placeholder={SIGN_UP_SIDEBAR.PLACEHOLDER.CONFIRM_PASSWORD}
        />
      </label>
      <label
        htmlFor="terms"
        className="label-with-checkbox"
      >
        <Checkbox id="terms" />
        <div>
          {SIGN_UP_SIDEBAR.CHECKBOX.TERMS[0]}
          <Link to="/terms">{SIGN_UP_SIDEBAR.CHECKBOX.TERMS[1]}</Link>
.
        </div>
      </label>
      <label
        htmlFor="news"
        className="label-with-checkbox"
      >
        <Checkbox id="news" />
        {SIGN_UP_SIDEBAR.CHECKBOX.NEWS}
      </label>
    </div>
    <div className="bottom">
      <button className="main-btn" type="button">
        <h5>
          {' '}
          {SIGN_UP_SIDEBAR.SIGN_UP_BUTTON}
          {' '}
        </h5>
      </button>
      <button
        className="transparent-btn"
        onClick={() => {
          toggleRegistrationSidebar(false);
          toggleLoginSidebar(true);
        }}
        type="button"
      >
        {SIGN_UP_SIDEBAR.SIGN_IN_BUTTON}
      </button>
    </div>
  </Sidebar>
);
RegistrationSidebar.propTypes = {
  toggleLoginSidebar: PropTypes.func.isRequired,
  toggleRegistrationSidebar: PropTypes.func.isRequired,
  forwardRef: PropTypes.instanceOf(Object).isRequired,
  active: PropTypes.bool.isRequired,

};
export default RegistrationSidebar;
