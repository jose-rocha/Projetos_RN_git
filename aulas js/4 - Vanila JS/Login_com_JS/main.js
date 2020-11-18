(function login(win, doc) {
  "use styrict";

  let user = doc.querySelector("#user");
  let pass = doc.querySelector("#pass");
  let form1 = doc.querySelector("#form1");
  let result = doc.querySelector("#result");

  function sendForm(e) {
    e.preventDefault();

    let userLogin = user.value;
    let userPass = pass.value;
    if (userLogin == "josemarlerocha@hotmail.com" && userPass == 1234) {
      localStorage.setItem("acesso", true);
      location.href = "./src/home.html";
    } else {
      result.innerHTML = "Usuário ou senha Ivalidos!";
    }
  }

  form1.addEventListener("submit", sendForm, false);

 
})(window, document);
