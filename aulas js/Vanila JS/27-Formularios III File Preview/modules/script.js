function filePreview() {
  "use strict";
  let doc = document;
  let gallery = doc.querySelector(".gallery");
  let files = doc.querySelector("#img");
  /*  console.log(gallery);
  console.log(files); */

  function imgPreview(e) {
    // console.log(e.target.files);
    gallery.innerHTML = "";
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      if (
        files[i].size > 27000 ||
        files[i].type == "application/x-msdownload"
      ) {
        alert(
          "O tamanho limite por arquivo que é de 25kbps foi ultrapassado ou o tipo de arquivo não é permitido! "
        );
      } else {
        let reader = new FileReader();
        reader.onload = function (e) {
          let urlImg = e.target.result;
          let newImg = doc.createElement("img");
          newImg.setAttribute("src", urlImg);
          newImg.style = "width:300px; height:240px; margin: 5px";
          gallery.appendChild(newImg);
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  files.addEventListener("change", imgPreview, false);
}

export default filePreview;
