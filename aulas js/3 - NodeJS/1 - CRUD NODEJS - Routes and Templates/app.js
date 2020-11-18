let express = require('express');
let bodyParser = require('body-parser');
let mysql = require('mysql');
let handlebars = require('express-handlebars');
let app = express();



//Template engine

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');




/* --------- */

//Routes and Templates
app.get('/:id?', function (req, res) {
    // res.send('Página Home');
    // res.sendFile(__dirname+"/index.html");
    // console.log(req.params.id);
    res.render('index', {id:req.params.id});

});

// app.get('/', function (req, res) {
//     // res.send('Página Home');
//     // res.sendFile(__dirname+"/style.css");
   
// })


/* ------ */


// Startando o Server NOde JS
app.listen(3000, function (req, res) {
    console.log(`O servidor está on!`)
});


/* ----- */