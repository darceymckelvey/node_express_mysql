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

app.post('/employees', async (request, response) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const department_id = req.body.department_id;
});

app.get('/departments', async (request, response) => {
    try {
        const [data, fields] = await connection.promise().query('SELECT * FROM fsbootcamp2024.departments');
        return response.json(data);
    } catch {
        return response.send(errors);
    }

    console.log(data);
    
});

app.get('/employees/:id', async (request, response) => {
    const employee_id = request.params.id;
    try {
        const [data, fields] = await connection.promise().query('SELECT * FROM fsbootcamp2024.employees WHERE employee_id = ?', employee_id);
        if (data.length > 0) {
            return response.json(data);
        } else {
            return response.json('Employee not found.');
        }
    } catch {
        return response.send(errors);
    }

    console.log(data);
    
});

app.delete('/employees/delete/:id', async(request, response) => {
    const employee_id = request.params.id;
    try {
        const [data, fields] = await connection.promise().query('DELETE FROM fsbootcamp2024.employees WHERE employee_id = ?', employee_id);
        if (data.affectedRows > 0) {
            return response.json('Employee has been deleted');
        } else {
            return response.json('Employee not found.');
        }
    } catch {
        return response.send(errors);
    }

    console.log(data);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});