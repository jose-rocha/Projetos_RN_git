import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage'; //para subir imagem para o storage


        let  firebaseConfig = {
            apiKey: "AIzaSyAv9TWhMcZZquSA6niMT_fX2y8dcbh5jno",
            authDomain: "abrponto.firebaseapp.com",
            databaseURL: "https://abrponto.firebaseio.com",
            projectId: "abrponto",
            storageBucket: "abrponto.appspot.com",
            messagingSenderId: "806085649933",
            appId: "1:806085649933:web:b0781adb5e2d8b5d801744",
            measurementId: "G-HDSRCB9FXF"
        };
       

  class Firebase{

    constructor(){

    // Initialize Firebase
    app.initializeApp(firebaseConfig);
    
    // para poder usar de outro arquivo a conexão com o banco
    this.app = app.database();


    //para subir imagem para o storage
    this.storage = app.storage();
    }


    //função de login
    login(email, password){
        return app.auth().signInWithEmailAndPassword(email, password);
    }

    //função de deslogar
    logout(){
        return app.auth().signOut();
    }

    //função par registrar novo user
   async register(nome, email, password){
      await  app.auth().createUserWithEmailAndPassword(email, password)

      const uid = app.auth().currentUser.uid;

      return app.database().ref('usuarios').child(uid).set({
          nome: nome
      })
    }


    //função de verificar  se o user está  logado ou não.
    isInitialized(){
        return new Promise(resolve=>{
            app.auth().onAuthStateChanged(resolve);
        })

        
    }

    /*Essa função impede que user ao estar logado e clicar no logar ao invés de levar para página de 
    login leve para página HomeItem */
    getCurrent(){
        return app.auth().currentUser && app.auth().currentUser.email
    }
    
    //para pegar uid do usuário logado, e será usado a uid do usuário quando fizer upload de imagem
    getCurrentUid(){
        return app.auth().currentUser && app.auth().currentUser.uid
    }

    async getUserName(callback){
        if(!app.auth().currentUser){
            return null;
        }

        const uid = app.auth().currentUser.uid;
        await app.database().ref('usuarios').child(uid)
        .once('value').then(callback);

    }

}

  export default new Firebase();