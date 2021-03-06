(function full(win, doc) {
    'use strit';

    let tela = doc.getElementById('tela');
    // console.log(tela);

    let context = tela.getContext('2d');



    let Circle = {
        x: 250,
        y: 250,
        raio: 100,

        inicio: 0,
        fim: 0,
        // let fim = 2 * Math.PI;
        antiHor: true,
    }

    function drawCircle(c) {
        context.beginPath();
        context.rect(0, 0, 500, 500);
        context.fillStyle = 'beige';
        context.fill();

        context.beginPath();
        context.strokeStyle = 'red';
        context.fillStyle = 'blue'
        context.arc(c.x, c.y, c.raio, c.inicio, c.fim, c.antiHor);

        context.stroke();
        context.fill();
    }

    setInterval(function () {
        if (Circle.fim < 2 * Math.PI) {
            Circle.fim += 0.3;
            Circle.x += 3;
        }

        drawCircle(Circle);

    }, 100);

    // drawCircle(Circle);





})(window, document);