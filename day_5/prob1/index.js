const express = require('express');
const morgan = require('morgan');
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'src', 'access.log'), { flags: 'a' });


const app = express();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms HTTP/:http-version', { stream: accessLogStream }));

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the home page')
})
app.get('/get-users', (req, res) => {
    res.status(200).send('Welcome to the home page')
})
app.post('/add-user',(req,res)=>{
    res.status(201).send('seccess')
})
app.put('/user/:id',(req,res)=>{
    res.status(201).send('seccessful update');
})
app.delete('/user/:id',(req,res)=>{
    res.status(201).send("seccessful deletion");
})
app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`);
});