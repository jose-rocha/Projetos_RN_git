let p = document.getElementById('p1');
let p2 = document.getElementById('p2');
// let p3 = document.getElementById('p3');

// p.textContent = '<h3Titulo 1 no  h1</h3';

// p2.innerText = '<h3>Titulo 2 no h3 do segundo parágrafo</h3>';

// p3.innerHTML = '<h3>Titulo 3 no  h3 do parágrafo 3</h3>';

// -----------------------------------------------------------  //

//diferença do textContent para o innerText é que por mais que o elemnto esteja escondido como é o  exemplo do  <span>Outro Texto</span> que está com  span {display: none; } ele vai aparecer no console já o innerText não.
console.log(p.textContent);
console.log(p2.innerText);

let meuAtt = p.getAttribute('meuAtt')
console.log(meuAtt);

let meuAtt2 = p2.setAttribute("novoAtt", "Mudando o atributo no JS");
console.log(meuAtt2)