let ID = document.getElementById('ID');
let inpNome = document.getElementById('inpNome');
let inpSobrenome = document.getElementById('inpSobrenome');
let nota1 = document.getElementById('nota1');
let nota2 = document.getElementById('nota2');
let forrm = document.querySelector('form');
let nome = document.getElementById('nome');


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

// Dessa forma adiciona um usua´rio com um ID aleatório.
// forrm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   let TurmaA = 'TurmaA';

//   let db = firebase.firestore();

//   db.collection(TurmaA).add({
//     Nome: inpNome.value,
//     Sobrenome: inpSobrenome.value,
//     Notas: {Nota1: nota1.value, Nota2: nota2.value}
//   }).then((doc) => {
//     console.log('Documento inserido com sucesso!', doc)
//   }).catch(err => {
//     alert(err);
//   })


// }, false);



forrm.addEventListener('submit', (e) => {
  e.preventDefault();
  let TurmaA = 'TurmaA';




  db.collection(TurmaA).doc(ID.value).update({


    Nome: inpNome.value,
    Sobrenome: inpSobrenome.value,
    // Notas: { Nota1: nota1.value, Nota2: nota2.value },


  }).then(() => {
    console.log('Documento inserido com sucesso!')
  }).catch(err => {
    console.log(err);
  })



}, false)

