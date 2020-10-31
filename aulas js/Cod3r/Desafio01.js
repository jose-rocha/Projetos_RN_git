// Desafio feito,
// function somar(3) (4) (5)
function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const somarAB = somar(3)(4);
console.log(somarAB(13)); //Resulatdo é igual a 20

//criar três funções  (fn  (3) * (7), e outra function fn (3) + (7), e também outra function fn (3) - (7))
/* somar */
function calcular(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y);
    };
  };
}

/* -----  subtrair */

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}
// function calcular (3) (7) (fn)

const resultSubtrair = calcular(10)(7)(subtrair);
const resultMultuplicar = calcular(10)(5)(multiplicar);
console.log(resultSubtrair);
console.log(resultMultuplicar);
