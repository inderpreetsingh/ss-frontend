/* eslint-disable max-len */

// For better browser support.
export default {
  screenWidth: (window && window.innerWidth) || (document && document.documentElement.clientWidth) || (document && document.body.clientWidth),
  screenHeight: (window && window.innerHeight) || (document && document.documentElement.clientHeight) || (document && document.body.clientHeight),
};
