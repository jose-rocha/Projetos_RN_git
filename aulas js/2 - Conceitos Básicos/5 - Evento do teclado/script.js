function digitou(e) {
  //console.log("Você digitou");
  //console.log(e);
  if (e.keyCode == 13) {
    // 13 no teclado é enter
    let texto = document.getElementById("campo").value;

    console.log(texto);
  }
}

function digitou2(e) {
  if (e.keyCode == 13 && e.ctrlKey == true) {
    let texto2 = document.getElementById("campo2").value;

    console.log(texto2);
  }
}
