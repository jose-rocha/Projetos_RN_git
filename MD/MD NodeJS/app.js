const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();
const urlencodeParser = bodyParser.urlencoded({ extended: false })
// const { query } = require("express");
// const { Router } = require('express');
const brcrypt = require('bcrypt'); //pacote para criptografar a senha por token
const sql = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT
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
    // res.render('index');
    if (!req.params.id) {
        // res.send('Existe');
        sql.query("select * from dadosnota order by id desc", function (err, results, fields) {
            res.render('Home', { data: results });
        });
    }
    else {
        sql.query("select * from dadosnota where id=? order by id desc", [req.params.id], function (err, results, fields) {
            res.render('Home', { data: results });
        });
    }
    // res.render("Select");
});

//Router Cadastro
app.get("/Cadastro", function (req, res) { res.render('Cadastro'); });

//Cadastrando Usuário
app.post('/ControllerCadastrar', urlencodeParser, function (req, res) {
    sql.query('insert into usuarios values (?, ?, ?, ?)', [req.body.id, req.body.nome, req.body.email, req.body.senha]);
    res.render('ControllerCadastrar');
});

//Router Login
app.get('/Login', function (req, res) {
    res.render('Login');
});

// Route Print
app.get('/Print/:id?', function (req, res) {
    if (!req.params.id) {
        // res.send('Existe');
        sql.query("select * from dadosnota order by id desc", function (err, results, fields) {
            res.render('Print', { data: results });
        });
    }
    else {
        sql.query("select * from dadosnota where id=? order by id desc", [req.params.id], function (err, results, fields) {
            res.render('Print', { data: results });
        });
    }
});

// Route Insert
app.get('/Insert', function (req, res) { res.render("Insert"); });
// Function Update
app.get('/Update/:id', function (req, res) {
    sql.query("select * from dadosnota where  id=?", [req.params.id], function (err, results, fields) {
        res.render('Update', {
            id: req.params.id, nome_cliente: results[0].nome_cliente, endereco: results[0].endereco, telefone: results[0].telefone, nome_vendedora: results[0].nome_vendedora,
            quant1: results[0].quant1, quant2: results[0].quant2, quant3: results[0].quant3, quant4: results[0].quant4, quant5: results[0].quant5, quant6: results[0].quant6, quant7: results[0].quant7,
            quant8: results[0].quant8,
            descricao1: results[0].descricao1, descricao2: results[0].descricao2, descricao3: results[0].descricao3, descricao4: results[0].descricao4, descricao5: results[0].descricao5,
            descricao6: results[0].descricao6, descricao7: results[0].descricao7, descricao8: results[0].descricao8,
            precoUni1: results[0].precoUni1, precoUni2: results[0].precoUni2, precoUni3: results[0].precoUni3, precoUni4: results[0].precoUni4, precoUni5: results[0].precoUni5,
            precoUni6: results[0].precoUni6, precoUni7: results[0].precoUni8, precoUni8: results[0].precoUni8,
            frete1: results[0].frete1, frete2: results[0].frete2, frete3: results[0].frete3, frete4: results[0].frete4, frete5: results[0].frete5, frete6: results[0].frete6, frete7: results[0].frete7,
            frete8: results[0].frete8,
            valor_final1: results[0].valor_final1, valor_final2: results[0].valor_final2, valor_final3: results[0].valor_final3, valor_final4: results[0].valor_final4, valor_final5: results[0].valor_final5,
            valor_final6: results[0].valor_final6, valor_final7: results[0].valor_final7, valor_final8: results[0].valor_final8,
            valor_nota: results[0].valor_nota
        });
    });

});
// Route controllerUpdate
app.post("/controllerUpdate", urlencodeParser, function (req, res) {
    sql.query(`update dadosnota set nome_cliente=?, endereco=?, telefone=?, nome_vendedora=?, 
    quant1=?, quant2=?, quant3=?, quant4=?, quant5=?, quant6=?, quant7=?, quant8=?, 
    descricao1=?, descricao2=?, descricao3=?, descricao4=?, descricao5=?, descricao6=?, descricao7=?, descricao8=?, 
    precoUni1=?, precoUni2=?, precoUni3=?, precoUni4=?, precoUni5=?, precoUni6=?, precoUni7=?, precoUni8=?,
    frete1=?, frete2=?, frete3=?, frete4=?, frete5=?, frete6=?, frete7=?, frete8=?,
    valor_final1=?,  valor_final2=?, valor_final3=?, valor_final4=?, valor_final5=?, valor_final6=?, valor_final7=?, valor_final8=?, valor_nota=? where id=?`,
        [req.body.nome_cliente, req.body.endereco, req.body.telefone, req.body.nome_vendedora, req.body.quant1, req.body.quant2, req.body.quant3, req.body.quant4, req.body.quant5, req.body.quant6,
        req.body.quant7, req.body.quant8,
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
        req.body.valor_nota = req.body.valor_final1 + req.body.valor_final2 + req.body.valor_final3 + req.body.valor_final4 + req.body.valor_final5 + req.body.valor_final6 + req.body.valor_final7 + req.body.valor_final8,
        req.body.id]);
    res.render("controllerUpdate", { id: req.body.id });
})
// Function Delete
app.get('/Delete/:id', function (req, res) {
    sql.query("delete from dadosnota where id=?", [req.params.id]);

    res.render('Delete');
});
// app.get('/Select/:id?', function (req, res) {
//     if (!req.params.id) {
//         // res.send('Existe');
//         sql.query("select * from dadosnota order by id desc", function (err, results, fields) {
//             res.render('Select', { data: results });
//         });
//     }
//     else {
//         sql.query("select * from dadosnota where id=? order by id desc", [req.params.id], function (err, results, fields) {
//             res.render('Select', { data: results });
//         });
//     }
//     // res.render("Select");
// })
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
    res.render('controllerForm', { nome_cliente: req.body.nome_cliente });

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


// Startando o Server Node JS
app.listen(3000, function (req, res) {
    console.log('O pai tá ON!')
});



