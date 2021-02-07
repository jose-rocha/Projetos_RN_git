function calcMedia() {
    return (this.notas[0] * 2 + this.notas[1]) / 2;
}

let aluno = {
    nome: 'José',
    notas: [7, 8],
    media: calcMedia
}


let aluno2 = {
    nome: 'Marcos',
    notas: [9, 7],
    media: calcMedia
}

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno2.nome);
console.log(aluno2.media());
