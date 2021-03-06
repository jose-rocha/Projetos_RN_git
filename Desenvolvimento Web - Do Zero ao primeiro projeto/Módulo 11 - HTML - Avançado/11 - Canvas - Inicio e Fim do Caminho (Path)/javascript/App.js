(function full(win, doc) {
    'use strit';

    let tela = doc.getElementById('tela');
    // console.log(tela);

    let context = tela.getContext('2d');

    context.beginPath();

    context.lineWidth = 4;
    context.strokeStyle = 'red';
    context.moveTo(10, 10);
    context.lineTo(400, 300);
    context.stroke();

    context.beginPath();

    context.lineWidth = 7;
    context.strokeStyle = 'blue';
    context.fillStyle = 'green';
    context.moveTo(50, 10);
    context.lineTo(300, 300);
    context.lineTo(200, 300);
    context.closePath();
    context.fill();
    context.stroke();




})(window, document);