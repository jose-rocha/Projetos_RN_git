let audio = document.getElementById('audio');

let retroceder = document.getElementById('retroceder');
retroceder.addEventListener('click', function () {
    audio.currentTime -= 15;
}, false);


let avancar = document.getElementById('avancar');
avancar.addEventListener('click', function () {
    audio.currentTime += 15;
}, false);


let diminuirVelocidade = document.getElementById('diminuirVelocidade');
diminuirVelocidade.addEventListener('click', function () {
    audio.playbackRate -= 0.1;
}, false)


let aumetarVelocidade = document.getElementById('aumetarVelocidade');
aumetarVelocidade.addEventListener('click', function () {
    audio.playbackRate += 0.1;
}, false)


let play = document.getElementById('play');
play.addEventListener('click', function () {
    audio.play();
})


let stop = document.getElementById('stop');
stop.addEventListener('click', function () {
    audio.pause();
    audio.currentTime = 0; //essa linha faz o audio voltar para o inicio, é como se fosse o própio Stop.
})




