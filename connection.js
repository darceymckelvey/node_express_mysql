const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Anim8ors123!!!',
    database: 'fsbootcamp2024'
});

connection.connect((error) => {
    if (error) console.log(error);
    else console.log('connecting to database...');
});

module.exports = connection;