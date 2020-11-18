let express = require('express');
let bodyParser = require('body-parser');
let mysql = require('mysql');
let handlebars = require('express-handlebars');
let app = express();

// Startando o Server NOde JS
app.listen(3000, function (req, res) {
    console.log(`O servidor está on!`)
});