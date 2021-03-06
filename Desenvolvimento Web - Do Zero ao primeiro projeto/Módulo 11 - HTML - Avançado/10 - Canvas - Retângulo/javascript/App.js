(function full(win, doc) {
    'use strit';

    let tela = doc.getElementById('tela');
    // console.log(tela);

    let context = tela.getContext('2d');

    // context.fillStyle = 'blue';
    // context.fillRect(10, 10, 100, 200);


    // context.strokeStyle = 'red';
    // context.strokeRect(10, 10, 100, 200);

    context.rect(10, 10, 100, 200);
    context.fillStyle = 'blue';
    context.strokeStyle = 'red';
    context.lineWidth = 5;
    context.fill();
    context.stroke();

    context.clearRect(20, 20, 30, 30);



})(window, document);