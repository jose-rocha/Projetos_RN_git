function alertar() {
  let doc = document;
  let form = doc.querySelector("#form");
  let dados = doc.querySelector("#dados");

  function sendForm(e) {
    e.preventDefault();

    let ajax = new XMLHttpRequest();
    let params = "name=" + doc.querySelector("#name").value;
    ajax.open("POSt", "controller.php");
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = function () {
      /* console.log(ajax.status);
      console.log(ajax.readyState);
      console.log(ajax.responseText); */
      if (ajax.status === 200 && ajax.readyState === 4) {
        // console.log(JSON.parse(ajax.responseText));
        let json = JSON.parse(ajax.responseText);
        dados.innerHTML = `Nome: ${json.name} - Idade: ${json.age} - Cidade: ${json.city}`;
      }
    };
    ajax.send(params);
  }

  form.addEventListener("submit", sendForm, false);
}

export default alertar;
