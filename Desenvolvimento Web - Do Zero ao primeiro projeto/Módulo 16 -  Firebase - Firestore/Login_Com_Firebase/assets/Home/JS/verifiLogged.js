let p = document.querySelector('.dados0');
let p1 = document.querySelector('.dados1');
let p2 = document.querySelector('.dados2');
// let signOut = document.getElementById('signOut');

// var firebaseConfig = {
//     apiKey: "AIzaSyCfFRQsBovQwTjUjy3M7FSYUA5AjIYWO78",
//     authDomain: "app-fire-eca10.firebaseapp.com",
//     databaseURL: "https://app-fire-eca10.firebaseio.com",
//     projectId: "app-fire-eca10",
//     storageBucket: "app-fire-eca10.appspot.com",
//     messagingSenderId: "498957835456",
//     appId: "1:498957835456:web:86a1b89619d3c820aa6125",
//     measurementId: "G-6K3RYLKTZP"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// let db = firebase.firestore();
// let TurmaA = 'TurmaA';

let auth = firebase.auth();


db.collection(TurmaA).get().then((snapshot) => {
    snapshot.forEach((doc) => {
        let User = doc.data();

        console.log(User.Nome);

        p.textContent = `Nome: ${doc.data().Nome}`;
        p1.innerHTML = `Sobrenome: ${User.Sobrenome}`;
        p2.innerHTML = `Notas: A Nota 1 é (${Number(User.Notas.Nota1).toFixed(1)}) e a Nota 2 é (${Number(User.Notas.Nota2).toFixed(2)}) `


    })
})




// Verificando se existe usuário logado.
auth.onAuthStateChanged(user => {
    if (user === null) {


        alert('Não há usuário logado!');

        setTimeout(
            location.href = 'http://localhost:8080/M%C3%B3dulo%2016%20-%20%20Firebase%20-%20Firestore/Login_Com_Firebase/index.html', 2000)
    } else {
        console.log("Usuário logado é", user.email);

    }
})