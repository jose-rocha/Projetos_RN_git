function SetInterval() {
  //   alert("oi");
  let doc = document;

  console.log("Hello");
  function counter() {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  }

  setInterval(counter, 3000); // com o setInterval a função rodara a cada 3 segundos infinitamente.
  console.log("World!");
}

export default SetInterval;
