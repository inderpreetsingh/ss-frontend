import React from 'react';
import PropTypes from 'prop-types';

import { TEXT } from '../../locals';

const { MAIN } = TEXT;

const LearnMoreBtn = ({ theme, enableAnimations, mainScreen }) => {
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

LearnMoreBtn.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
  enableAnimations: PropTypes.bool.isRequired,
  mainScreen: PropTypes.instanceOf(Object).isRequired,
};

export default LearnMoreBtn;
