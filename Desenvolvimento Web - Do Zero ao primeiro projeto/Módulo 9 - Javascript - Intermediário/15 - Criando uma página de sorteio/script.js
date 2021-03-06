(function full(win, doc) {
    'use strict';

    let pessoas = ["José", "Elisabete", "Bel", "Elaine"];

    let button = doc.getElementsByTagName('button')[0];
    console.log(button);

    button.addEventListener('click', function () {
        let h1 = doc.getElementsByTagName('h1')[0];
        let nomeDePessoas = pessoas.length;
        let nomeDoSorteado = Math.floor(Math.random() * nomeDePessoas);

        h1.innerHTML = pessoas[nomeDoSorteado];

    }, false)


})(window, document);