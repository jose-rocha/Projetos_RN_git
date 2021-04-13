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


let authenticator = firebase.auth();

let email = 'teste@gmail.com';
let pass = '123456';

authenticator.createUserWithEmailAndPassword(email, pass)
    .then((userCadastrado) => {
        console.log(`Usuário Cadstrado com sucesso `, userCadastrado)
    }).catch((err) => {
        let errCode = err.code;
        let errMsg = err.message;
        console.log(errCode)
        console.log(errMsg)
    })