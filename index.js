const express = require('express');
const app = express();
const connection = require('./connection.js');
const port = 3000;

app.get('/', (request, response) => {
    response.send('hello, world!');
});

app.get('/employees', async (request, response) => {
    try {
        const [data, fields] = await connection.promise().query('SELECT * FROM fsbootcamp2024.employees');
        return response.json(data);
    } catch {
        return response.send(errors);
    }

    console.log(data);
    
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});