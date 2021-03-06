let video = document.getElementById('video1');





let retroceder = document.getElementById('retroceder');
retroceder.addEventListener('click', function () {
    video.currentTime -= 15;
}, false);

let avancar = document.getElementById('avancar');
avancar.addEventListener('click', function () {
    video.currentTime += 5;
}, false);

let aumetarVelocidade = document.getElementById('aumetarVelocidade');
aumetarVelocidade.addEventListener('click', function () {
    video.playbackRate += 0.1;
}, false);

let diminuirVelocidade = document.getElementById('diminuirVelocidade');
diminuirVelocidade.addEventListener('click', function () {
    video.playbackRate -= 0.1;

}, false);

let play = document.getElementById('play');

play.addEventListener('click', function () {
    video.play();
}, false);

let stop = document.getElementById('stop');
stop.addEventListener('click', function () {
    video.pause();
    video.currentTime = 0; //essa linha faz o video voltar para o inicio, é como se fosse o própio Stop.
}, false);





// Esconde osbotões

function escondeBotoes() {
    retroceder.style.display = 'none';
    avancar.style.display = 'none';
    diminuirVelocidade.style.display = 'none';
    aumetarVelocidade.style.display = 'none';
    play.style.display = 'none';
    stop.style.display = 'none';
}

function mostraBotoes() {
    retroceder.style.display = '';
    avancar.style.display = '';
    diminuirVelocidade.style.display = '';
    aumetarVelocidade.style.display = '';
    play.style.display = '';
    stop.style.display = '';

}









