const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();
const urlencodeParser = bodyParser.urlencoded({ extended: false })
// const { query } = require("express");
// const { Router } = require('express');
const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306
});
sql.query("use md");



//Template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img')); //usar um diretório de imagens



//Routes and Templates
// app.get('/:id?', function (req, res)
app.get('/', function (req, res) {
    // res.render('index', { id: req.params.id });
    // console.log(req.params.id);
    res.render('index');
});



// Route Insert
app.get('/Insert', function (req, res) { res.render("Insert"); });
app.get('/About', function (req, res) { res.render("About"); });
app.get('/Users', function (req, res) { res.render("Users"); });
app.post('/controllerForm', urlencodeParser, function (req, res) {
    //console.log(req.body.nome_cliente);

    //Conencatndo com a tabela usuarios
    // sql.query("insert into usuarios values (?,?,?,?,?)", [req.body.id, req.body.nome, req.body.email, req.body.senha, req.body.data_nascimento]);
    // res.render('controllerForm');

    sql.query("insert into dadosnota values (?,?,?,?,?,?,   ?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?,?,    ?,?,?,?,?,?,?,?,  ?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?,?)",
        [req.body.id, req.body.nome_cliente, req.body.endereco, req.body.telefone, req.body.nome_vendedora,
        req.body.quant1, req.body.quant2, req.body.quant3, req.body.quant4, req.body.quant5, req.body.quant6, req.body.quant7, req.body.quant8,
        req.body.descricao1, req.body.descricao2, req.body.descricao3, req.body.descricao4, req.body.descricao5, req.body.descricao6, req.body.descricao7, req.body.descricao8,
        req.body.precoUni1, req.body.precoUni2, req.body.precoUni3, req.body.precoUni4, req.body.precoUni5, req.body.precoUni6, req.body.precoUni7, req.body.precoUni8,
        req.body.frete1, req.body.frete2, req.body.frete3, req.body.frete4, req.body.frete5, req.body.frete6, req.body.frete7, req.body.frete8,
        req.body.valor_final1 = (parseInt(req.body.quant1) * parseInt(req.body.precoUni1) + parseInt(req.body.frete1)),
        req.body.valor_final2 = parseInt(req.body.quant2) * parseInt(req.body.precoUni2) + parseInt(req.body.frete2),
        req.body.valor_final3 = parseInt(req.body.quant3) * parseInt(req.body.precoUni3) + parseInt(req.body.frete3),
        req.body.valor_final4 = parseInt(req.body.quant4 * req.body.precoUni4) + parseInt(req.body.frete4),
        req.body.valor_final5 = parseInt(req.body.quant5 * req.body.precoUni5) + parseInt(req.body.frete5),
        req.body.valor_final6 = parseInt(req.body.quant6 * req.body.precoUni6) + parseInt(req.body.frete6),
        req.body.valor_final7 = parseInt(req.body.quant7 * req.body.precoUni7) + parseInt(req.body.frete7),
        req.body.valor_final8 = parseInt(req.body.quant8 * req.body.precoUni8) + parseInt(req.body.frete8),
        req.body.valor_nota = req.body.valor_final1 + req.body.valor_final2 + req.body.valor_final3 + req.body.valor_final4 + req.body.valor_final5 + req.body.valor_final6 + req.body.valor_final7 + req.body.valor_final8]);
    res.render('controllerForm');

    /*  sql.query("insert into dadosnota values (?,?,?,?,?,?,   ?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?,?,    ?,?,?,?,?,?,?,?,  ?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?,?)",
         [req.body.id, req.body.nome_cliente, req.body.endereco, req.body.telefone, req.body.nome_vendedora,
         req.body.quant1, req.body.quant2, req.body.quant3, req.body.quant4, req.body.quant5, req.body.quant6, req.body.quant7, req.body.quant8,
         req.body.descricao1, req.body.descricao2, req.body.descricao3, req.body.descricao4, req.body.descricao5, req.body.descricao6, req.body.descricao7, req.body.descricao8,
         req.body.precoUni1, req.body.precoUni2, req.body.precoUni3, req.body.precoUni4, req.body.precoUni5, req.body.precoUni6, req.body.precoUni7, req.body.precoUni8,
         req.body.frete1, req.body.frete2, req.body.frete3, req.body.frete4, req.body.frete5, req.body.frete6, req.body.frete7, req.body.frete8,
         req.body.valor_final1, req.body.valor_final2,
         req.body.valor_final3, req.body.valor_final4, req.body.valor_final5, req.body.valor_final6, req.body.valor_final7, req.body.valor_final8,
         req.body.valor_nota]);
     res.render('controllerForm'); */



    // sql.query("insert into dados_nota values(?, ?, ?)", [req.body.id, req.body.nome_cliente, req.body.quant1]); //(user) nome da tabela.
    // res.render('controllerForm', { name: req.body.name });


});


// Startando o Server NOde JS
app.listen(3000, function (req, res) {
    console.log('O pai tá ON!')
});