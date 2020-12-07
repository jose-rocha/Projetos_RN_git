let user = document.querySelector('#user');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit')
console.log(user.value + '' + password.value)



submit.addEventListener('click', function () {
    if (user.value === 'jose' && password.value === '123') {
        window.location.href = "/home.html"
    }
    else {
        alert('Usuário ou senha invalidos!')
    }
}, false);


// function logar() {
//     if (user.value == "Jose" && password.value == "123") {
//         localStorage.setItem("acesso", true);

//         window.location.href = "/home.html";
//     }

//     else {

//         alert("Usuário ou senha invalidos!");

//     }
// }



    // user.addEventListener('keyup', function () {
    //     result.innerHTML = user.value;
    // }, false);

    // password.addEventListener('keyup', function () {
    //     result2.innerHTML = password.value;
    // }, false);

