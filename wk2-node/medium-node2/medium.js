let express = require('express')
let app = express()
let data = require('../hard/employees.json')
app.get('/hello', function(req,res){
    res.send("Hello World")
})
app.get('/employees', (req,res) => {
    if(!data){
        res.status(404).send("employee is not found")
    }
    res.send(data)
})
app.get('/employees/:id', function (req,res){
    const sData = data.employees.find(function(employees){
        return parseInt(req.params.id) === employees.id
    })
    if(!sData){
        res.status(404).send("employee ID is not found")
    }
    res.send(sData)
})
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})
