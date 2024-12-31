const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const userRoutes=require('./routes/users');
const todosRoutes=require('./routes/todos');

app.use('/users',userRoutes);
app.use('/todos',todosRoutes);



// app.get('/', (req, res) => {
//     res.send('this is home page')
// })

app.listen(PORT, () => {
    console.log(`server is runing http://localhost:${PORT}`);
})
