// function SetTimeout() {
//   let doc = document;
//   //   let btn = doc.querySelector("#btn");

//   console.log("Hello");

//   function counter(e) {
//     for (let i = 0; i < 10; i++) {
//       console.log(i);
//     }
//   }

//   //   btn.addEventListener("click", counter, false);

//   console.log("World!");

//   setTimeout(counter, 3000);
// }

// export default SetTimeout;

function SetTimeout() {
  let i = 0;
  function counter() {
    i++;
    console.log(i);
    if (i >= 5) {
      return; // qundo chegar no 5 ele para por causa do return
    }

    setTimeout(counter, 1000);
  }

  counter();
}

export default SetTimeout;
