import express from 'express'
const http = require('http')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/message', (req, res) => {
    res.json({"message": "Hello from Express Server!"})
})

app.get('/form', (req, res) => {
    res.json({"formObj": {"serviceRequest": "Interpreter", "firstName": "John", "lastName": "Doe",
            "numberList": [0,1,1,2,3,5,8]}})
})

app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
})