let doc = document;
let li = doc.createElement('li');
let ol = doc.getElementById('ol');
let InsertButton = doc.getElementById('InsertButton');
let opt = doc.querySelector('#opt');
let result = doc.getElementById('result')

// let insertLi = li.innerHTML;

// li.innerHTML = ` <span>Teste</span>`;

let insertLi = ()=>{
    let lis = li.innerHTML = 'Teste';
    ol.append(lis);
    console.log(ol);
    console.log(li);
};

insertLi();

