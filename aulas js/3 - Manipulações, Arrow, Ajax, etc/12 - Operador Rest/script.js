//Operador Rest
/*
function adicionar(...nomes) {
  console.log(nomes);
}

adicionar("José", "Leão", "Rocha");
*/

function adicionar(nomes, ...novosNomes) {
  let novoConjunto = [...nomes, ...novosNomes];

  return novoConjunto;
}

let nomes = ["José", 30];
let outros = adicionar(nomes, "Bete", "Luiza");

console.log(outros);
