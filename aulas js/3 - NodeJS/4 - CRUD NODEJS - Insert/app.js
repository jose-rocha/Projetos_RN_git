const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
// const { Router } = require('express');
const app = express();
const urlencodeParser = bodyParser.urlencoded({ extended: false });
//criando a conexão com o banco
const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306
});
sql.query("use nodejs"); //(nodejs)-->> nome do banco



//Template engine

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
/* app.use('/img', express.static('img')); //caso tivesse um diretório de imagens */




/* --------- */

//Routes and Templates
app.get('/', function (req, res) {
    // res.send('Página Home');
    // res.sendFile(__dirname+"/index.html");
    // console.log(req.params.id);
    res.render('index',);

});

// Route JavaScript
app.get("/script", function (req, res) { res.sendFile(__dirname + '/js/script.js'); });

// Route CSS
app.get("/styles", function (req, res) { res.sendFile(__dirname + '/css/styles.css'); });

// Route inserir
app.get("/inserir", function (req, res) { res.render("inserir"); });

// Route controllerForm.handlebars
app.post("/controllerForm", urlencodeParser, function (req, res) {
    // console.log(req.body.name);
    sql.query("insert into user values(?, ?, ?)", [req.body.id, req.body.name, req.body.age]); //(user) nome da tabela.
    res.render('controllerForm', { name: req.body.name });
})
/* ------ */


// Startando o Server NOde JS
app.listen(3000, function (req, res) {
    console.log(`O servidor está on!`)
});


/* ----- */