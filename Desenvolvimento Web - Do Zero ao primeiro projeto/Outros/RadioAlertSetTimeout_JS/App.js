let PJ = document.getElementById('PJ');
let PF = document.getElementById('PF');

let showPJ = ()=>{
    alert(`Você escolheu a opção "${PJ.value}"`)
}

let showPF = ()=>{
    alert(`Você escolheu a opção "${PF.value}"`)
}

PJ.addEventListener('click', ()=>{
    if(PF.checked === true){
        PF.checked = false
    }
    setTimeout(showPJ, 2000);
});

PF.addEventListener('click', ()=>{
    if(PJ.checked === true){
        PJ.checked = false
    }

    setTimeout(showPF, 2000);
})