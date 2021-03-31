let inputPrefixo;
let resultPrefixo = doc.getElementById('resultPrefixo');

function gravarPrefixo(){
    // alert(inputPrefixo.value);

    inputPrefixo = doc.getElementById('inputPrefixo');
    localStorage.setItem('Prefixo', inputPrefixo.value);
    inputPrefixo.style.display = 'none';
    resultPrefixo.style.display = 'inline';
    location.href = 'index.html';

}

resultPrefixo.addEventListener('click', ()=>{
    let inputPrefixo = doc.getElementById('inputPrefixo');

    resultPrefixo.style.display = 'none';
    inputPrefixo.style.display ='inline';
    inputPrefixo.value = resultPrefixo.textContent;
});