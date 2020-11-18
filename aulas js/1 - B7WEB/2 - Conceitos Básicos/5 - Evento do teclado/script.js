function digitou(e) {
  //console.log("Você digitou");
  //console.log(e);
  if (e.keyCode == 13) {
    // 13 no teclado é enter
    let texto = document.getElementById("campo").value;

    console.log(`O primeiro input o nome é ${texto} `);
  }
}

function digitou2(e) {
  //se o evento keycode for = enter e se o evento ctrlkeycode for == verdadeiro.
  if (e.keyCode == 13 && e.ctrlKey == true) {
    let texto2 = document.getElementById("campo2").value;

    console.log(`O segundo input o nome é ${texto2} `);
  }
}
