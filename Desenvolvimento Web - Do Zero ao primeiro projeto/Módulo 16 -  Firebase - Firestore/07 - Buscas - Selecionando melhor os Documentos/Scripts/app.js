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
// console.log(db)

db.collection("TurmaA").get().then((snapshot)=>{

  snapshot.forEach( (doc) => {

    let nomeAluno = doc.data().Nome;
    let sobreNomeAluno = doc.data().Sobrenome;
    
    nome.innerHTML = `O nome do Aluno é ${nomeAluno} e o sobrenome é ${sobreNomeAluno}, e esses dados estão vindo do Firebase/Firestore.`
    // console.log(doc.data().Notas)

  });

});


let docRef = db.collection('TurmaA').doc('tlCkTfeVuByxU0PmpvWN');

docRef.get().then((doc)=>{
  console.log(doc.data())
})