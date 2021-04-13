console.log('home');
let p = document.querySelector('.dados0');
let p1 = document.querySelector('.dados1');
let p2 = document.querySelector('.dados2');
let welcome = document.querySelector('.welcome')
// let signOut = document.getElementById('signOut');

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
    if (user) {

        console.log("Usuário logado é", user.email);
        welcome.innerHTML = `Bem vindo ${user.email}`

    } else {
        // alert('Não há usuário logado!');
        location.href = 'http://localhost:8080/M%C3%B3dulo%2016%20-%20%20Firebase%20-%20Firestore/Login_Com_Firebase/index.html'

        // setTimeout(
        //     location.href = 'http://localhost:8080/M%C3%B3dulo%2016%20-%20%20Firebase%20-%20Firestore/Login_Com_Firebase/index.html', 2000)

    }
})

// auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => { }) /* Persistence.LOCAL é o padrão que ao sair dar ou carregar a página ele vai continuar logado o User*/
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => { }) /* Persistence.SESSION quer dizer que ao ir para outra aba ou outra janela ele vai deslogar o User, acho há mais indicada para que o deslogamento funcione*/

// auth.setPersistence(firebase.auth.Auth.Persistence.NONE).then(() => {


// }) /* Persistence.NONE quer dizer que ao sair dar ou carregar a página ele vai deslogar o User*/





// Deslogando o usuário.
function Exit() {
    auth.signOut().then(() => {
        console.log('Deslogado com sucesso!');

        setTimeout(location.href = 'http://localhost:8080/M%C3%B3dulo%2016%20-%20%20Firebase%20-%20Firestore/Login_Com_Firebase/index.html',
            2000
        )
    }).catch((err) => {
        alert('Houve um erro!', err)
    })
}