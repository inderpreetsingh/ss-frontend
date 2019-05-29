import React from 'react';

import CONST from '../../const';
import { TEXT } from '../../locals';

const { screenHeight } = CONST;
const { MAIN } = TEXT;


export default ({ theme, enableAnimations }) => {
  const goToNextScreen = () => {
    window.scrollTo({
      top: screenHeight + 1, // To make menu sticky.
      behavior: 'smooth',
    });
  };

  return (
    <div className={`learn-more-block ${enableAnimations ? '' : 'disable'}`}>
      <button
        className={theme.color}
        onClick={goToNextScreen}
      >
        <h5>{MAIN.BTN_LEARN_MORE}</h5>
      </button>
      <div className="arrows">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};
