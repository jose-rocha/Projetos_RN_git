let timer;

function comecar() {
  timer = setInterval(showTimes, 1000);
}

function parar() {
  clearInterval(timer);
}

function showTimes() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  document.querySelector(".demo").innerHTML = h + ":" + m + ":" + s;
}

/*

function shoTime() {
  let d = new Date();
  let hora = d.toLocaleTimeString("pt-BR");
  return (document.querySelector(".demo").innerHTML = hora);
}

let time = setInterval(shoTime, 1000);

*/
