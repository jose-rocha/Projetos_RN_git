// console.log('Teste');

//Variables

"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

let app = express();
app.use(cors());
let urlencodedParser = bodyParser.urlencoded({ extended: false }); // Para trabalhar de forma mais fácil com o method POST

app.get("/", function (req, res) {
  res.send("Hi");
});

app.get("/about", function (req, res) {
  res.send("Sobre o NodeJS");
});

let port = 3000 || process.env.PORT;
app.listen(port);

/* localhost:3000  */
