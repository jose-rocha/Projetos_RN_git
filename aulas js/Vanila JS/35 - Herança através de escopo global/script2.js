(function (win, doc) {
  "use strict";

  console.log(win);

  let obj = new app((866).toFixed(2), 2215);
  console.log(obj.result());

  let obj2 = new app((660).toFixed(2), 1315);
  console.log(obj2.result());

  /* Ess objeto new app está sendo importado do arquivo script.js através do
do parametro  win.app = app;


*/
})(window, document);
