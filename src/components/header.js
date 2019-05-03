import React from 'react';
import Logo from '../icons/logo.svg';
import { TEXT } from '../locals';

const { HEADER } = TEXT;

const Header = () => (
  <div className="header">
    <div className="logo-block">
      <Logo />
      <div>
        <h3>{ HEADER.LOGO[0] }</h3>
        <h5>{ HEADER.LOGO[1] }</h5>
      </div>
    </div>
    <div className="menu">
      <div className="burger">
        <span />
        <span />
        <span />
      </div>
      <p>{ HEADER.MENU }</p>
    </div>
  </div>
);

export default Header;
