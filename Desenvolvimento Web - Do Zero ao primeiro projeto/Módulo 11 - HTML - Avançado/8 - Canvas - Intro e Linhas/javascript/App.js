(function full(win, doc) {
    'use strit';

    let tela = doc.getElementById('tela');
    // console.log(tela);

    let context = tela.getContext('2d');

    context.moveTo(0, 0);
    context.lineTo(250, 250);
    context.lineTo(500, 0);
    context.lineWidth = 5;
    context.strokeStyle = 'red'
    context.stroke(); //O stroke serve para dar espessura da linha.

})(window, document);