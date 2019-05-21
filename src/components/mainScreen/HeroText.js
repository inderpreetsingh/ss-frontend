import React from 'react';
import Fade from 'react-reveal/Fade';

import themes from './themes';
import { TEXT } from '../../locals';

const { MAIN } = TEXT;

export default ({ currentTheme, location, changeTheme }) => (
  <div className="main-text">
    <div className="lines disable-animations">
      <span
        className={`red ${currentTheme === 0 && 'active'}`}
        onClick={() => changeTheme(0)}
      />
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
      {
        themes.map(({ text, color }, index) => (
          <Fade key={color} when={currentTheme === index}>
            <div className="hero-text">
              <h2>
                {MAIN.HERO_TEXT[0] + (location ? `in ${location}` : '') + MAIN.HERO_TEXT[1]}
              </h2>
              <h1>
                <span className={color}>
                  {text.make}
                </span>
                {MAIN.HERO_TEXT[2]}
              </h1>
              <h2>
                {MAIN.HERO_TEXT[3]}
              </h2>
            </div>
          </Fade>
        ))
      }
    </div>
    <div className={`buttons-wrapper ${themes[currentTheme].color}`}>
      <button className="plain-btn">
        <h5>{MAIN.BTN_STUDENT}</h5>
      </button>
      <button className="color-btn">
        <h5>{MAIN.BTN_SCHOOL}</h5>
      </button>
    </div>
    <h5 className="hurry-up">
      {MAIN.HURRY_UP[0]}
      <span>{MAIN.HURRY_UP[1]}</span>
      {MAIN.HURRY_UP[2]}
    </h5>
  </div>
);
