import ClassPerson from "./class/ClassPerson.js";

let dados = document.querySelector("#dados");

let person = new ClassPerson();
person.setPerson("José", 29);

dados.innerHTML = `Meu nome é ${person.name} e tenho ${
  person.age
} anos de idade, trabalho na empresa ${person.getEmp()} e minha função é ${person.getData()}.`;

console.log(person);
