// For better browser support.
export default {
  screenWidth:
    (window !== 'undefined' && window.innerWidth)
    || (document !== 'undefined' && document.documentElement.clientWidth)
    || (document !== 'undefined' && document.body.clientWidth),
  screenHeight:
    (window !== 'undefined' && window.innerHeight)
    || (document !== 'undefined' && document.documentElement.clientHeight)
    || (document !== 'undefined' && document.body.clientHeight),
};
