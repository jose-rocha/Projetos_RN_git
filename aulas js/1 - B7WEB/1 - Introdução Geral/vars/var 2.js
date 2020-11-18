var nome = "José"; //string
let idade = 29; //int
const sobrenome = "Rocha";

var // --> HOISTING = serve para o escopo inteiro  do código;

let /* --> só serve para o escopo daquele  código;
   ex:  let nome = "José";

    if(nome == "José"){
        let idade = 29;
        console.log(idade);
    }

    diferente de var, se eu colococar fora do escopo não funciona.

     ex:  let nome = "José";

    if(nome == "José"){
        let idade = 29;
    }

    console.log(idade);
*/

const //variável de valor constatnte

const nome = "José";

console.log(nome); //uma vez efeinida não pode ser modificada.

