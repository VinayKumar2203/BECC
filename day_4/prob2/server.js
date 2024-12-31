const express = require('express');

const app = express();
const PORT = 8080;
app.use(express.json());

const validation = (req, res, next) => {
    const { ID, Name, Rating, Description, Genre, Cast } = req.body;

    if (typeof ID !== 'string') {
        res.status(400).send('bad request, ID should be string');
        return
    }
    else if (typeof Name !== 'string') {
        res.status(400).send('bad request,Name must be number');
        return
    }
    else if (typeof Rating !== 'string') {
        res.status(400).send('bad request,Rating must be number');
        return
    }
    else if (typeof Description !== 'string') {
        res.status(400).send('bad request,Description must be string');
        return
    }
    else if (typeof Genre !== 'string') {
        res.status(400).send('bad request,Genre must be a string');
        return
    }
    else if (!Array.isArray(Cast) || !Cast.every((item) => typeof item === 'string')) {
        res.status(400).send("bad request,Cast should be an array and string");
        return
    }
}

app.post('/', validation, (req, res) => {
    res.status(201).json({ message: 'data received' })
})
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("internal server error");
})
app.listen(PORT, () => {
    console.log(`server is starting http://localhost/${PORT}`);
})