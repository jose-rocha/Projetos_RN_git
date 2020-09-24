let info = ["José Rocha", "Maria", "Leão", "@jose"];

//let = [nomeCompleto, segundoSobrenome, ultimoSobrenome, instagram] = info;

let = [nomeCompleto, , , instagram] = info;

console.log(nomeCompleto, instagram);

// -----------------------------------------------------------------///

let [nome, sobreNome, idade] = ["José", "Leão", 1991];

console.log(nome, sobreNome, idade);

// -----------------------------------------------------------------///

function criar() {
  let a = [1, 2, 3];
  return a;
}

let numeros = criar();

let [a, b, c] = numeros;

console.log(a, b, c);

function criar2() {
  return [4, 5, 6];
}

let [d, e, f] = criar2();

console.log(d, e, f);
