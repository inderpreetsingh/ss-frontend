// For better browser support.
const windowGlobal = typeof window !== 'undefined' && window;
const documentGlobal = typeof document !== 'undefined' && document;
export default {
  screenWidth:
    (windowGlobal !== 'undefined' && windowGlobal.innerWidth)
    || (documentGlobal !== 'undefined' && documentGlobal.documentElement.clientWidth)
    || (documentGlobal !== 'undefined' && documentGlobal.body.clientWidth),
  screenHeight:
    (windowGlobal !== 'undefined' && windowGlobal.innerHeight)
    || (documentGlobal !== 'undefined' && documentGlobal.documentElement.clientHeight)
    || (documentGlobal !== 'undefined' && documentGlobal.body.clientHeight),
};
