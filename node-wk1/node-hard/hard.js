var express = require('express')

var app = express()

var data = require('./public/database.json')

app.get('/employees',(req,res) => {
    if(!data){
        res.status(404).send('Could not find information')
    }
res.send(data)
})

app.get('/employees/:id',(req,res) => {

const findEmployee = data.employees.fine(function(employee){

    return parseInt(req.params.id) === employee.id
})


    if(!findEmployee){
        res.status(404).send('Could not find information')
    }
res.send(findEmployee)
})

app.listen(3000)