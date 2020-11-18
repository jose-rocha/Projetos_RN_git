let express = require('express');
let bodyParser = require('body-parser');
let mysql = require('mysql');
let handlebars = require('express-handlebars');
const { Router } = require('express');
let app = express();



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
    res.render('login',);

});

// Route JavaScript
app.get("/script", function (req, res) {
    res.sendFile(__dirname + '/js/scriptLogin.js');
})


// Route CSS
app.get("/styles", function (req, res) {
    res.sendFile(__dirname + '/css/stylesLogin.css');
})

app.get("/home", function (req, res) {
    res.render("home");
})
/* ------ */


// Startando o Server NOde JS
app.listen(3000, function (req, res) {
    console.log(`O servidor está on!`)
});


/* ----- */