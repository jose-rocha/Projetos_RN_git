/*
function dobro(x) {
  return x * 2;
}

console.log(`O valor de de 20 * 2 é = ${dobro(20)} `);
*/

/*
const alunos = [
  { name: "Ana", nota: 9.5 },
  { name: "Bia", nota: 7.3 },
  { name: "Gil", nota: 5.8 },
  { name: "Leo", nota: 7.6 },
  { name: "Gui", nota: 9.1 },
  { name: "Lia", nota: 4.9 },
  { name: "Rui", nota: 7.0 },
];

const aprovados = [];
for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].nota >= 7) {
    aprovados.push(alunos[i]);
  }
}
console.log(
  `Parabéns ${aprovados[0].name}, pela sua nota: ${aprovados[0].nota},
   Parabéns ${aprovados[1].name}, pela sua nota: ${aprovados[1].nota},
   Parabéns ${aprovados[2].name}, pela sua nota: ${aprovados[2].nota}, 
   Parabéns ${aprovados[3].name}, pela sua nota: ${aprovados[3].nota},
   Parabéns ${aprovados[4].name}, pela sua nota: ${aprovados[4].nota}  `
);
*/

const alunos = [
  { name: "Ana", nota: 9.5 },
  { name: "Bia", nota: 7.3 },
  { name: "Gil", nota: 5.8 },
  { name: "Leo", nota: 7.6 },
  { name: "Gui", nota: 9.1 },
  { name: "Lia", nota: 4.9 },
  { name: "Rui", nota: 7.0 },
];
const estaAprovado = (alunos) => alunos.nota >= 7;

const aprovados = alunos.filter(estaAprovado);
console.log(aprovados);
