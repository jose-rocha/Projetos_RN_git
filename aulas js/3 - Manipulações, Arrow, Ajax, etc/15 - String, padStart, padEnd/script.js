let telefone = "5";

console.log(
  telefone.padEnd(9, "*")
); /* Aqui ele pede que tenha no minimo 9 carcteres, 
caso contrário ira ser preenchido o restante com *.
*/

let telefone2 = "5";

console.log(
  telefone.padStart(9, "---")
); /* Aqui ele pede que tenha no minimo 9 carcteres, 
caso contrário ira ser preenchido o restante com -.
*/

let cartao = "5402540254025402";

let lastDigits = cartao.slice(-4);

let cartaoMascarado = lastDigits.padStart(16, "*");

document.write(`Este é o seu cartão? ${cartaoMascarado}`);
