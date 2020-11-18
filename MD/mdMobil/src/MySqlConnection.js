import MySqlConnection from 'react-native-my-sql-connection';

let config = {
    host: 'localhost',
    database: 'nodejs',
    user: 'root',
    password: '',
    port: 3306
    // params: '?zeroDateTimeBehavior=convertToNull' \\ optional
};
try {
    const connection = MySqlConnection.createConnection(config);
    let res = connection.executeQuery('SELECT * FROM user');
    connection.close();
} catch (err) {
    // handle error
}

