(function Api(win, doc) {
  "use strict";

  let result = doc.querySelector("#result");
  let btn = doc.querySelector("#btn");

  function fetchSend() {
    let params = {
      method: "POST",
      mode: "cors",
      cache: "default",
    };
    fetch("controller.php", params)
      .then(function (response) {
        // console.log(response);
        if (response.ok) {
          return response.json();
        }
      })
      .then(function (data) {
        // console.log(data);
        result.innerHTML = `O user ${data.name} tem ${data.age} anos de idade`;
      });
  }

  btn.addEventListener("click", fetchSend, false);
})(window, document);
