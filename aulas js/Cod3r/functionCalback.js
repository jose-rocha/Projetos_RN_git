// const somar = (a, b) => a + b;

// console.log(somar(56, 38));

// /* function adicao(a, b) {
//   return a + b;
// }
// console.log(adicao(5, 6)); */

// const subtrair = (a, b) => a - b;
// console.log(subtrair(182, 27));

function exec(fn, a, b) {
  return fn(a, b);
}
const somarNoTerminal = (x, y) => console.log(x + y);
const subtrairNoTerminal = (w, z) => console.log(w - z);

exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);
/* --------------------------------------------------------- */

const subtrair = (w, z) => w - z;

const r = exec(subtrair, 50, 25);
console.log(r);

/* --------------------------------------------------------- */
/* const cb = () => console.log("Exec...");
setInterval(cb, 1000); */

let h = () => {
  let f = new Date();
  let h = f.getHours();
  let m = f.getMinutes();
  let s = f.getSeconds();
  if (s < 10) {
    s = "0" + s;
  }
  if (m < 10) {
    m = `0${m}  `;
  }
  document.getElementById(
    "tempo2"
  ).innerHTML = `Hora Parte segunda: ${h}:${m}:${s}`;
  // console.log(`${h}:${m}:${s}`);
};

setInterval(h, 1000);
