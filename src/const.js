// Workaround for SSR.
const windowGlobal = typeof window !== 'undefined' && window;
const documentGlobal = typeof document !== 'undefined' && document;

export default {
  // For better browser support.
  screenWidth:
    (windowGlobal.innerWidth)
    || (documentGlobal && documentGlobal.documentElement.clientWidth)
    || (documentGlobal && documentGlobal.body.clientWidth),
  screenHeight:
    (windowGlobal.innerHeight)
    || (documentGlobal && documentGlobal.documentElement.clientHeight)
    || (documentGlobal && documentGlobal.body.clientHeight),

  SIDEBAR_MODE: {
    LOGIN: 'Login',
    REGISTRATION: 'Registration',
  },
};
