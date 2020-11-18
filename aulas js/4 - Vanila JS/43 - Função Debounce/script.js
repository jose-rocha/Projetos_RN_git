(function req(win, doc) {
  "use strict";

  let search = doc.querySelector("#search");

  function sendForm(e) {
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "controller.php");
    ajax.onreadystatechange = () => {
      if (ajax.status === 200 && ajax.readyState === 4) {
        console.log(ajax.responseText);
      } else {
      }
    };
    ajax.send();
  }

  search.addEventListener("keyup", debounce(sendForm, 3000), false);

  // Debounce
  function debounce(func, wait) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  }
})(window, document);
