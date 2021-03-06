(function full(win, doc) {
    'use strit';

    let tela = doc.getElementById('tela');
    // console.log(tela);

    let context = tela.getContext('2d');

    let x = 250;
    let y = 250;
    let raio = 100;

    let inicio = 0;
    let fim = 1.5 * Math.PI;
    // let fim = 2 * Math.PI;


    context.beginPath();
    context.strokeStyle = 'red';
    context.fillStyle = 'blue'
    context.arc(x, y, raio, inicio, fim);

    context.stroke();
    context.fill();



})(window, document);