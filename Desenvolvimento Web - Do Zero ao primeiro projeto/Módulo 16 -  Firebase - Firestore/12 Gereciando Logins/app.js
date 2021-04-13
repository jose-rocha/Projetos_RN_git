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

function login() {

    let email = 'master@gmail.com';
    let password = '123456';

    authenticator.signInWithEmailAndPassword(email, password)
        .then((loggedUser) => {
            // console.log(authenticator.currentUser);
        }).catch(err => {
            console.log(err)
        })

    let UserLogged = authenticator.currentUser; /* authenticator.currentUser quer dizer usuário logado*/

    authenticator.onAuthStateChanged(user => {
        if (user) {
            console.log('Usuário logado!  email:', user.email)
        } else {
            console.log('Não há usuário logado!')
        }
    })

    // console.log(UserLogged)


}

function logout() {
    firebase.auth().signOut().then(() => {
        console.log("Usuário foi deslogado com sucesso!");
    }).catch((err) => {
        console.log(err);
    })
}

// login();

setTimeout(logout, 2000)