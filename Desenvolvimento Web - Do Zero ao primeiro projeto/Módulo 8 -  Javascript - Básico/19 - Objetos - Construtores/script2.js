function aluno(name, n1, n2) {

    this.nome = name;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function () {
        return (this.nota1 + this.nota2) / 2;
    }

}

let a = new aluno("José", 8, 7);

console.log(a.media())