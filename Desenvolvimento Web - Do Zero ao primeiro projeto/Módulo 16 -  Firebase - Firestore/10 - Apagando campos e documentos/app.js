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

db.collection(TurmaA).doc('FmMrb8iTXfsW04u5VYNq').update({
    /* Se quiser apagar tudo refente a esse id, em vez update usar delete(), ficaria assim: db.collection(TurmaA).doc('FmMrb8iTXfsW04u5VYNq').update({}).then()
    
    */
    Sobrenome: firebase.firestore.FieldValue.delete()

}).then(() => {
    console.log('Documento excluido com Sucesso')
}).catch(err => {
    console.log(err);
})