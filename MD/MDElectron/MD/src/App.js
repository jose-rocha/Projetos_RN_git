"use strict";
let doc = document;
const container = doc.querySelector("#App");

function App(props) {
  const [contagem, setContagem] = React.useState(0);

  function increment() {
    setContagem((x) => x + 1);
  }

  function decrement() {
    setContagem((x) => x - 1);
  }

  return (
    <div className="contador">
      {/* <h1>{props.title}</h1>
      <h3>{contagem} </h3> */}
      <div>
        <form className={"formStyle"}>
          <div className={"styleImg"}>
            <img src="./src/images/JS.png" alt="nome" />
          </div>
          User:<br></br>
          <input type="text" className={"inputJS"}></input>
          <br />
          Password:
          <br />
          <input className={"inputJS"}></input>
          <br />
          <button
            className={"buttonEntar"}
            onClick={() => console.log("teste")}
          >
            Entrar
          </button>
        </form>
        {/*   <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button> */}
      </div>
    </div>
  );
}

ReactDOM.render(
  React.createElement(
    App,
    { title: "Contador Novo", ClassName: "contador" },
    null
  ),
  container
);
