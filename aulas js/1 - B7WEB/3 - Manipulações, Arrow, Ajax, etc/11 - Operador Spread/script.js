/* let numeros = [1, 2, 3, 4];

let continuacao = [...numeros, 5, 6, 7]; // Operador Spread

console.log(continuacao);
*/

// --------------------- //
/* let info = {
  nome: "José",
  sobrenome: "Rocha",
  idade: 29,
};

let novasInfo = {
  ...info,
  cidade: "São Bernardo do Campo",
  estado: "SP",
};

console.log(novasInfo); 
*/
// --------------------- //

function adicionaInfo(info) {
  let novasInfo = {
    ...info,
    status: 0,
    token: "alksjdtru",
    data_cadastro: "....",
  };
  return novasInfo;
}

console.log(adicionaInfo({ nome: "José", sobrenome: "Rocha" }));
