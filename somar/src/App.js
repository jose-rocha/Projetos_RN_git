import React, { useState } from "react";
import "./css/style.css";

export default function Somar() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");

  function Resultado() {
    setNum3(parseInt(num1) + parseInt(num2));
  }

  return (
    <div className="div1">
      <hr />
      <p>--- Somar -----</p>
      Primeiro valor:{" "}
      <input
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        type="text"
      />{" "}
      + <span style={{ fontWeight: "bold" }}> Segundo valor: </span>
      <input
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        type="number"
      />{" "}
      <button
        type="button"
        className="btn btn-success"
        onClick={() => Resultado()}
      >
        Resultado
      </button>
      <p>{num3}</p>
      <hr />
    </div>
  );
}
