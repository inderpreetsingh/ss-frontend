import React from 'react';

import { TEXT } from '../../locals';

const { MAIN } = TEXT;

export default ({ active }) => (
  <div className={`menu ${active ? '' : 'disable'}`}>
    <div className="burger">
      <span />
      <span />
      <span />
    </div>
    <p>{ MAIN.MENU }</p>
  </div>
);
