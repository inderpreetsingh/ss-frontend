import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

import themes from './themes';
import { TEXT } from '../../locals';

const { MAIN } = TEXT;

const HeroText = ({
  currentTheme,
  location,
  changeTheme,
  toggleRegistrationSidebar,
  showHeroText,
}) => (
  <div className={`main-text ${showHeroText ? '' : 'hidden'}`}>
    <Fade when={showHeroText}>
      <div className="lines disable-animations">
        <span className={`red ${currentTheme === 0 && 'active'}`} onClick={() => changeTheme(0)} />
        <span
          className={`green ${currentTheme === 1 && 'active'}`}
          onClick={() => changeTheme(1)}
        />
        <span
          className={`yellow ${currentTheme === 2 && 'active'}`}
          onClick={() => changeTheme(2)}
        />
      </div>
      <div className="changing-text-wrapper">
        {themes.map(({ text, color }, index) => (
          <Fade key={color} when={currentTheme === index}>
            <div className="hero-text">
              <h2>{MAIN.HERO_TEXT[0] + (location ? `in ${location}` : '') }</h2>
              <h1>
                {MAIN.HERO_TEXT[1]}
                <span className={color}>{text.make}</span>
                {MAIN.HERO_TEXT[2]}
              </h1>
              <h3>{MAIN.HERO_TEXT[3]}</h3>
            </div>
          </Fade>
        ))}
      </div>
      <div className={`buttons-wrapper ${themes[currentTheme].color}`}>
        <button className="plain-btn" type="button">
          <h5>{MAIN.BTN_STUDENT}</h5>
        </button>
        <button className="color-btn" onClick={toggleRegistrationSidebar} type="button">
          <h5>{MAIN.BTN_SCHOOL}</h5>
        </button>
      </div>
      <h5 className="hurry-up">
        {MAIN.HURRY_UP[0]}
        <span>{MAIN.HURRY_UP[1]}</span>
        {MAIN.HURRY_UP[2]}
      </h5>
    </Fade>
  </div>
);
HeroText.propTypes = {
  currentTheme: PropTypes.number.isRequired,
  location: PropTypes.string,
  changeTheme: PropTypes.func.isRequired,
  toggleRegistrationSidebar: PropTypes.func.isRequired,
  showHeroText: PropTypes.bool.isRequired,
};

HeroText.defaultProps = {
  location: '',
};
export default HeroText;
