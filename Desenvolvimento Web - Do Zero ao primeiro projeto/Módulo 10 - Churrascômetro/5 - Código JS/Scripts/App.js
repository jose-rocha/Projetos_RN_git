(function Calcular(win, doc) {
    'use strict';

    let inputAdultos = doc.getElementById('adultos');
    let inputCriancas = doc.getElementById('criancas');
    let inputDuracao = doc.getElementById('duracao');

    let button = doc.getElementsByTagName('button')[0];
    console.log(button)
    let resultado = doc.querySelector('.resultado');
    console.log(resultado);

    function calcular() {
        let adultos = inputAdultos.value;
        let criancas = inputCriancas.value;
        let duracao = inputDuracao.value;

        let qtdTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
        let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos;
        let qtdTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);

        resultado.innerHTML = `<p>${qtdTotalCarne / 1000} kg de Carne</p>`;
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`;
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Pet's 2L de Bebidas</p>`;



    }

    function carnePorPessoa(duracao) {
        if (duracao >= 6) {
            return 650;
        } else {
            return 400;
        }
    }

    function cervejaPorPessoa(duracao) {
        if (duracao >= 6) {
            return 2000;
        } else {
            return 1200;
        }
    }

    function bebidasPorPessoa(duracao) {
        if (duracao >= 6) {
            return 1500;
        } else {
            return 1000;
        }
    }

    button.addEventListener('click', function () {
        resultado.innerHTML = 'Calculando...';

        setTimeout(calcular, 1000);
    })


})(window, document);