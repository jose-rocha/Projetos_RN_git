

// let js = doc.getElementById('js');

// js.addEventListener('click', function () {
//     let lastJS = js.getAttribute('src');
//     js.setAttribute('src', 'Images/favicon.ico');


//     console.log(lastJS);
// });

// js.addEventListener('click', function () {

// });

let lista = document.getElementById('lista');

let num = parseInt(lista.getAttribute("num"));
// console.log(typeof (num));

let conteudo = "";

for (let i = 0; i < num; i++) {
    conteudo = `${conteudo} <li> ${i} </li>`;
}

lista.innerHTML = conteudo;
