let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');

let select2 = document.getElementById('select2');
// console.log(select2)

let opts = document.createElement('option');
let opts2 = document.createElement('option');
let opts3 = document.createElement('option');
let teste1 = 'teste1';
let teste2 = 'teste2';



opt1.addEventListener('click', ()=>{
   

    opts.classList.add(teste1)
    opts2.classList.add(teste2)
    opts3.classList.add(teste1)
    opts.innerHTML = `Teste 1`;    
    opts2.innerHTML = `Teste 2`;
    opts3.innerHTML = `Teste 3`;

    opts.style.color ='red';



    select2.append(opts, opts2, opts3);
    console.log(opts, opts2, opts3)


});

let teste3 = 'teste3';
let teste4 = 'teste4';

opt2.addEventListener('click', ()=>{
    opts2.classList.add(teste3)
    opts3.classList.add(teste4)
    opts2.innerHTML = `Teste 3`;
    opts3.innerHTML = `Teste 4`;

    select2.append(opts2, opts3)
    console.log(opts2, opts3)
})


let fors = document.querySelectorAll('.fors');
console.log(fors)

for(let i = 0; i < 3; i++){

    fors[i].style.color = 'red';
    fors[i].addEventListener('click', ()=>{
        alert(fors[i].innerHTML)
    })

}