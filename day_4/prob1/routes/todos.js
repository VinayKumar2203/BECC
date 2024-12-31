const express = require('express');
const router = express.Router();
const db = require('../data/database');

router.get('/', (req, res) => {
    res.json(db.todos);
})

router.post('/', (req, res) => {
    const newTodo = {
        id: db.todos.length + 1,
        title: req.body.title,
        completed: req.body.completed || false,
    }
    db.todos.push(newTodo);
    res.status(201).json(newTodo);
})

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = db.todos.find(t => t.id === id);

    if (!todo) {
        res.status(404).json({ message: 'todo not found' });
    }
    todo.title=req.body.title;
    todo.completed=req.body.completed || false;
     res.send(todo);
})

router.delete('/',(req,res)=>{
    const id=parseInt(req.params.id);
    const index=db.todos.find(t=>t.id===id);

    if (index===-1) {
        res.status(404).json({error:'todo not found'});
    };
    db.todos.slice(index,1);
    res.status(201).json({message:'todo delete successfully'});
})

module.exports = router;