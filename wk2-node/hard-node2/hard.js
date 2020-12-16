const express = require('express');
const app = express();
const data = require('../hard/employees.json');
const Joi = require('joi');

app.use(express.json());

app.get('/employees', (req,res) => {
    if(!data){
        res.status(404).send('Can not be found')
    }
    res.send(data)
});

app.get('/employees', (req, res) => {
    if (!data) {
        res.status(404).send("employee is not found")
    }
    res.send(data)
})
app.get('/employees/:id', function (req, res) {
    const sData = data.employees.find(function (employees) {
        return parseInt(req.params.id) === employees.id
    })
    if (!sData) {
        res.status(404).send("employee is not found")
    }
    res.send(sData)
})
app.post('/employees', (req, res) => {
    const { error } = validateEmployees(req.body);
    if (error) return res.status(400).send(error.detail[0].message);

    const employees = {
        id: employees.length + 1,
        name: req.body.name
    };
    employees.push(employees);
    res.send(employees);
});
app.put('/employees/:id', (req, res) => {
    const employees = employees.find(c => c.id === parseInt(req.params.id));
    if (!employees) return res.status(404).send("employee ID is not found")

    const { error } = validateEmployees(req.body);
    if (error) return res.status(400).send(error.detail[0].message);

    employees.name = req.body.name
    res.send(employees)

});

function validateEmployees(employees) {
    let schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(employees, schema);
};

app.delete('/employees/:id', (req, res) => {
    const employees = employees.find(c => c.id === parseInt(req.params.id));
    if (!employees) return res.status(404).send("employee ID is not found")

    employees.index = employees.indexOf(employees);
    employees.splice(index, 1);

    res.send(employees);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})