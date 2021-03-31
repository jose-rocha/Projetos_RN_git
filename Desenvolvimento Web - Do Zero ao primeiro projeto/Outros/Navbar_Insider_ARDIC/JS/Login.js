(function Login(win, doc){
    'use strict';

    let email = doc.getElementById('email');
    let password = doc.getElementById('password');
    let btnLogin = doc.getElementById('btnLogin');
    let msgError = doc.querySelector('.msgError');
    msgError.style.display = 'none';
    let br = doc.querySelector('.br');
    br.style.display = 'none'
   

    // email.addEventListener('click', ()=>{
    //     alert(email.value);
    // }, false);

    // password.addEventListener('click', ()=>{
    //     alert(password.value);
    // }, false);



    btnLogin.addEventListener('click', ()=>{
        // alert(`O Usuário digitado foi ${email.value} e a senha digitada foi ${password.value} `);

        if(email.value == 'ardic@gmail.com' && password.value == '12345'){
            localStorage.setItem("acesso", true);
            window.location.href = './Home.html';
           
        }else{

                
            br.style = 'display:;'
            // event.preventDefault();     
           msgError.style ='display:;';

          

           
            // alert('Acertou Miseravel');

            
        
        }

       


        // setTimeout(

        //   window.location.href = '/Home.html', 
        //   1000)
      
        
      
        
    }, false);


})(window, document)