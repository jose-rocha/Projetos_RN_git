(function Data(win, doc) {
  "use strict";

  let result = doc.querySelector("#result");

  //   let tempo = new Date();
  //   let day = tempo.getDate();
  //   let month = tempo.getMonth();
  //   let year = tempo.getFullYear();
  //   if (day < 10) {
  //     day = "0" + day;
  //   }

  //   if (month < 10) {
  //     month = "0" + month;
  //   }

  function clock() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    result.innerHTML = `${hours}:${minutes}:${seconds} `;

    setInterval(clock, 1000);
  }
  clock();

  //   result.innerHTML = `${day}/${month}/${year} `;
})(window, document);
