import React from 'react';
import PropTypes from 'prop-types';
import { TEXT } from '../../locals';

const { MAIN } = TEXT;


const Menu = ({ active }) => (
  <div className={`menu ${active ? '' : 'disable'}`}>
    <div className="burger">
      <span />
      <span />
      <span />
    </div>
    <p>{ MAIN.MENU }</p>
  </div>
);

Menu.propTypes = {
  active: PropTypes.bool.isRequired,
};
export default Menu;
