import React from 'react';

import Logo from '../icons/logo.svg';
import { TEXT } from '../locals';

const { LOGO } = TEXT;

export default () => (
  <div className="logo">
    <Logo />
    <div>
      <h4>{ LOGO[0] }</h4>
      <h6>{ LOGO[1] }</h6>
    </div>
  </div>
);
