import React from 'react';

import { TEXT } from '../../locals';

const { MAIN } = TEXT;

export default ({ theme, enableAnimations, mainScreen }) => {
  const goToNextScreen = () => {
    window.scrollTo({
      top: mainScreen.current.clientHeight + 1, // +1 To make menu sticky.
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
