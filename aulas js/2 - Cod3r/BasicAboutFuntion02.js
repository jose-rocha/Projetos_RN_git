function bomDia() {
  console.log("Bom Dia");
}
bomDia();

function boaTarde() {
  console.log("Boa Tarde!");
}
boaTarde();

const boaNoite = function () {
  console.log("Boa Noite!");
};
boaNoite();

/* function executarQualquerCoisa(fn) {
  console.log(typeof fn);
} */

// 1) Passar uma função como params para outra function
function executarQualquerCoisa(fn) {
  if (typeof fn === "function") {
    fn();
  }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaNoite);

// 2) Retornar uma function através de outra function.

/* function potencia(base, expo) {
  return Math.pow(base, expo);
}

const bits8 = potencia(2, 8);
console.log(bits8); */

function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));

// potência de 3 elevado a 4 = 81
console.log(potencia(3)(4));

// ou
const pot34 = potencia(3)(4);
console.log(pot34);

// Desafio feito,
// function somar(3) (4) (5)
// fn -> 3 *7 ou fn (3) + (7) ou fn (3) - (7)
// function calcular (3) (7) (fn)
