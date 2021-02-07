// Nome do aluno - nota 1  - nota 2 - média - Aprovado.

let nomes = ["José", "Joana", "Maria"];
let notasA = [7.8, 6.5, 9.5];
let notasB = [8.0, 7.0, 8.5];

function media(n1, n2) {

    return (n1 + n2) / 2;
}

function passou(media) {
    if (media > 7) {
        return "Aprovado!"
    } else {
        return "Reprovado!"
    }
}

for (let index = 0; index < nomes.length; index++) {


    let nota1 = notasA[index];
    let nota2 = notasB[index];
    let m = media(nota1, nota2);
    console.log(`Nome: ${nomes[index]}, Nota A: ${nota1} e Nota B: ${nota2} e a média é ${m}, situação: ${passou(m)}`);
}