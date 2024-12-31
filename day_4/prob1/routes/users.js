const express=require('express');
const router=express.Router();
const db=require('../data/database');
const { json } = require('body-parser');

router.get('/',(req,res)=>{
    res.json(bd.users);
})

router.post('/',(req,res)=>{
    const newUser={
        id:db.users.length+1,
        name:req.body.name,
        email:req.body.email,
    }
    db.users.push(newUser);
    res.status(201),json(newUser);

});

router.put('/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const user=db.users.find(u=>u.id==id);

    if (!user) {
        return res.status(404).json({error:'user not found'});
    }
    user.name=req.body.name || user.name;
    user.email=req.body.email|| user.email;
    res.json(user);
})

router.delete('/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const index=db.users.findIndex(t=>t.id===id);
    if (index===-1) {
        return res.status(404).json({error:'user not found'});
    }
    db.users.splice(index,1);
    res.json({message:'user delete successfully'});

})
module.exports = router;