//1 ª forma
/* function menuToggle() {
  let menuArea = document.getElementById("menu-area");

  if (menuArea.classList.contains("menu-opned") == true) {
    menuArea.classList.remove("menu-opned");
  } else {
    menuArea.classList.add("menu-opned");
  }
} */

function menuToggle() {
  let menuArea = document.getElementById("menu-area");

  if (menuArea.style.width == "200px") {
    menuArea.style.width = "0px";
  } else {
    menuArea.style.width = "200px";
  }
}
