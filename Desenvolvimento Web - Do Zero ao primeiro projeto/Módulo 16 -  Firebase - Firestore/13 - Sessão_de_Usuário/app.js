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
let auth = firebase.auth();

let usuario = 'master@gmail.com';
let password = '123456';

function login() {
    firebase.auth().signInWithEmailAndPassword(usuario, password).then((user) => {
        console.log('Usuário: ', auth.currentUser.email, 'está logado!')
    }).catch((err) => {
        console.log(err);
    })

}

// login();

auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user.email)
    } else {
        console.log('Usuário foi deslogado!')
    }
});


function logout() {
    auth.signOut().then(() => {
        console.log('Ususário deslogado com sucesso!')
    }).catch((err) => {
        console.log(err)
    })
}

logout()