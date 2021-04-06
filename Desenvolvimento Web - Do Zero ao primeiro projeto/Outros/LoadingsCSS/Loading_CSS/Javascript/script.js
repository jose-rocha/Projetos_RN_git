let loading = document.getElementsByClassName('loading')[0];
loading.style.display = 'none';




let Botao = document.getElementsByTagName('button')[0];
Botao.addEventListener('click', function () {
    Botao.style.display = 'none';
    loading.style.display = '';


    setTimeout(function () {
        // location.href = "./seconPage.html";
        location.href = "https://www.youtube.com/";
        // alert('oi');
    }, 5000);


});


