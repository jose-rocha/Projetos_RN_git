console.log('home');
let p = document.querySelector('.dados0');
let p1 = document.querySelector('.dados1');
let p2 = document.querySelector('.dados2');
console.log(p)

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
let TurmaA = 'TurmaA';


db.collection(TurmaA).get().then((snapshot) => {
    snapshot.forEach((doc) => {
        let User = doc.data();

        console.log(User.Nome);

        p.textContent = `Nome: ${doc.data().Nome}`;
        p1.innerHTML = `Sobrenome: ${User.Sobrenome}`;
        p2.innerHTML = `Notas: A Nota 1 é ${Number(User.Notas.Nota1).toFixed(1)} e a Nota 2 é ${Number(User.Notas.Nota2).toFixed(2)} `


    })
})

