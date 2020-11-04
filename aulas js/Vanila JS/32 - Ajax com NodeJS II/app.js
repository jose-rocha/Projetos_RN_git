// console.log('Teste');

//Variables
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

let app = express();
app.use(cors());
let urlencodedParser = bodyParser.urlencoded({ extended: false }); // Para trabalhar de forma mais fácil com o method POST

app.post("/", urlencodedParser, function (req, res) {
  // res.send(req.body.name);

  let obj = {
    name: req.body.name,
    age: 29,
  };
  res.json(obj);
});

app.get("/about", function (req, res) {
  res.send("About");
});

let port = 3000 || process.env.PORT;
app.listen(port);
