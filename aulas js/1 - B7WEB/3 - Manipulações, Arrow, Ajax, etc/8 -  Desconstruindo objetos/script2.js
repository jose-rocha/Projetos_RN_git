let pessoa = {
  nome: "José",
  //sobrenome: "Rocha",
  idade: 29,
  social: {
    email: "josemarlerocha",
    facebook: { url: "josemarlerocha@gmail.com", seguidores: 1000 },
  },
};

function pegarNomeCompleto({
  nome,
  sobrenome = "Leão",
  social: {
    facebook: { url: facebook },
  },
}) {
  return `${nome} ${sobrenome} (Siga em ${facebook}) `;
}

console.log(pegarNomeCompleto(pessoa));
