//app.js

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'billes'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});
con.query('SELECT * FROM USERS', (err, rows) => {
    if (err) throw err;

    console.log('Data received from Db:\n');
    console.log(rows);
});