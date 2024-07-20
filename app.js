const express = require('express')
const app = express()
const cors = require("cors") 
const EmpController = require('./controllers/EmpController')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(
    cors()
)
app.use(express.json());

//HTTP METHODS
// GET - Retrive Data 
app.get('/getEmployeeList',EmpController.getEmp)
// POST - Create data
app.post('/addEmployee', EmpController.addEmp)
// PUT  
app.post('/update/:id', EmpController.updateEmp)
// DELETE
app.delete('/delete/:id', EmpController.deleteEmp)

app.listen(3000, () => { console.log("Started on port 3000") 
    
})