console.log('firestore')
let form = document.querySelector('form');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let errMsgInfo = document.querySelector('.errMsg');


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

let auth = firebase.auth();


form.addEventListener('submit', (e) => {
    e.preventDefault();


    // Logando usuário
    auth.signInWithEmailAndPassword(email.value, password.value)
        .then((loggedUser) => {
            location.href = 'http://localhost:8080/M%C3%B3dulo%2016%20-%20%20Firebase%20-%20Firestore/Login_Com_Firebase/assets/Home/Home.html'
            // console.log(loggedUser.user.email)

        }).catch((err) => {
            let errCode = err.code;
            let errMsg = err.message;

            errMsgInfo.style.display = 'inline';

            console.log(errCode = 'Email invalido ')
            console.log(errMsg = 'Formato de email invalido')

        })




})


