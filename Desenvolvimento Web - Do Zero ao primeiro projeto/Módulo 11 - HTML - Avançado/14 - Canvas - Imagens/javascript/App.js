

let tela = document.getElementById('tela');
// console.log(tela);

let context = tela.getContext("2d");

// let img = document.getElementById('img');
// console.log(img);

let img = new Image();
img.src = "./Images/javascript.jpg";


img.onload = desenharImg;

function desenharImg() {

    context.drawImage(this, 20, 20, this.naturalWidth / 2,
        this.naturalHeight / 2);


}



