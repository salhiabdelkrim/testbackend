const mysql = require('mysql');
require('dotenv').config();



const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connectiong to MySQL:', err);
        return;
    }
    console.log('Connecxted to MySQL database');
});
module.exports = connection;