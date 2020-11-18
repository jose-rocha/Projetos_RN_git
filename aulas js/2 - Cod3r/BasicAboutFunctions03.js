// Arow function
const felizNatal = () => {
  return console.log("Feliz natal!!!");
};
felizNatal();

/* const saudação = (nome) => `Fala ${nome}, blza !?! `;
console.log(saudação("José"));

const somar = (numeros) => {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
};
console.log(
  `a soma de 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 é igual a  ${somar([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ])}`
); */

// const saudacao = (nome) => `Fala ${nome}, blza !?! `;
// console.log(saudacao("José"));

// const somar = (...numeros) => {
//   /*  "..." operador rest */
//   console.log(
//     `Se for array escreva true, se não for escreva false!!! ${Array.isArray(
//       numeros
//     )}`
//   ); /* Essa funçao diz se é do tipo array ou não */
//   let total = 0;
//   for (let n of numeros) {
//     total += n;
//   }
//   return total;
// };

// console.log(`A soma de 1 + 2 + 3 é =  ${somar(1, 2, 3)} `);
// console.log(
//   `A soma de 1 + 2 + 3 + 4 + 5 + 6  é =  ${somar(1, 2, 3, 4, 5, 6)} `
// );
// console.log(
//   `A soma de 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 é =  ${somar(
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10
//   )} `
// );

/* const potencia = (base) => {
  return (exp) => {
    return Math.pow(base, exp);
  };
};

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8)); */

const potencia = (base) => (exp) => Math.pow(base, exp);
console.log(potencia(2)(10));
