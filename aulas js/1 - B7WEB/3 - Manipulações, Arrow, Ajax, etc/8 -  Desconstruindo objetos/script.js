let pessoa = {
  nome: "José",
  sobrenome: "Rocha",
  //idade: 29,
  social: {
    facebook: "josemarlerocha",
    instagram: "Developer",
  },

  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`;
  },
};

/* 
let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;

forma antiga

*/

let {
  nome,
  sobrenome,
  idade = 0,
} = pessoa; /* desconstruindo o objeto, idade = 0 serve para atribuir um valor ficticio casa a
 idade não esteja no objeto, exemplo: a idade está vindo dde um webservice.
 
 */

console.log(nome, sobrenome, idade);
