function criarAluno(nome, n1, n2) {
    return {
        name: nome,
        nota1: n1,
        nota2: n2,
        media: function () {
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

let turma = [
    criarAluno('José', 9, 7),
    criarAluno('Marcos', 8, 7.5),
    criarAluno('João', 9, 8.5)
]

let aluno = turma[2];



// console.log(aluno);
// console.log(aluno.media());

for (let aluno of turma) {
    console.log(`Nome: ${aluno.name}, Nota: ${aluno.media()}`)
}

// turma.forEach(element => {
//     console.log(element);
// });