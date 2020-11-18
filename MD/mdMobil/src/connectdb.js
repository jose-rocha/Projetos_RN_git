function connect() {
    let express = require('express');
    let bodyParser = require('body-parser');
    let mysql = require('mysql');
    let handlebars = require('express-handlebars');
    let app = express();

    const sql = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3306
    });

    sql.query("use nodejs");
}
// app.listen(3000, function (req, res) {
//     console.log('Servidor funcionando!');
// })



export default connect;