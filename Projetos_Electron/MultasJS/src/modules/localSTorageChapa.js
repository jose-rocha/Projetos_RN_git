// let doc = document;
let inputChapa ;
let resultChapa = doc.getElementById('resultChapa');

let resultNome = doc.getElementById('resultNome');

let nomes = [  915, 'José Rocha' ];


function iniciaVerChapa(){
    if(localStorage.Chapa){
        resultChapa.innerHTML = localStorage.getItem('Chapa');
        let inputChapaHelp = doc.getElementById('inputChapa');
        inputChapaHelp.style.display = 'none';
    }
}


function gravarChapa(){
    // alert(inputChapa.value)

    inputChapa = doc.getElementById('inputChapa');
    localStorage.setItem('Chapa', inputChapa.value);
    inputChapa.style.display = 'none';
    resultChapa.style.display = 'inline';
    location.href = 'index.html';

    
    if(resultChapa.textContent == 915){
        // alert('oi')
        resultNome.innerText = nomes[1]
    }

}

resultChapa.addEventListener('click', ()=>{
    inputChapa = doc.getElementById('inputChapa');


    inputChapa.style.display =  'inline';
    resultChapa.style.display = 'none';
    inputChapa.value = resultChapa.textContent;
   
})

window.addEventListener('load', iniciaVerChapa);
