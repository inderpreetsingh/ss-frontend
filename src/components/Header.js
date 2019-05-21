import React from 'react';
import Logo from '../icons/logo.svg';
import { TEXT } from '../locals';

const { HEADER } = TEXT;

const Header = () => (
  <div className="header">
    <div className="logo-block">
      <Logo />
      <div>
        <h4>{ HEADER.LOGO[0] }</h4>
        <h6>{ HEADER.LOGO[1] }</h6>
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
