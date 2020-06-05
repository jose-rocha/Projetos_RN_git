import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { resolve, promises } from 'dns';


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
    
    // para poder usar de outro arquivo a conexão co  o banco
    this.app = app.database();
    }


    //função de login
    login(email, password){
        return app.auth().signInWithEmailAndPassword(email, password);
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


}

  export default new Firebase();