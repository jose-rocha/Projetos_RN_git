console.log('Cadastrar');
let form = document.querySelector('form');
// console.log(form)
let email = document.getElementById('email');
// console.log(email)
let password = document.getElementById('password');
// console.log(password)


var firebaseConfig = {
    apiKey: "AIzaSyCfFRQsBovQwTjUjy3M7FSYUA5AjIYWO78",
    authDomain: "app-fire-eca10.firebaseapp.com",
    databaseURL: "https://app-fire-eca10.firebaseio.com",
    projectId: "app-fire-eca10",
    storageBucket: "app-fire-eca10.appspot.com",
    messagingSenderId: "498957835456",
    appId: "1:498957835456:web:86a1b89619d3c820aa6125",
    measurementId: "G-6K3RYLKTZP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

// Cadastrando usuário Firebase Authentiction
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let authenticator = firebase.auth();

    let emailValue = email.value;
    let passValue = password.value;

    authenticator.createUserWithEmailAndPassword(emailValue, passValue)
        .then((userCadastrado) => {
            console.log(`Usuário Cadstrado com sucesso `, userCadastrado)
        }).catch((err) => {
            let errCode = err.code;
            let errMsg = err.message;
            console.log(errCode)
            console.log(errMsg)
        })

}, false)
