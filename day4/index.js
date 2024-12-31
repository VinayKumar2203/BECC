const express=require('express');
const fs=require('fs');

const app=express();
app.get('/',(req,res)=>{
    res.end('Welcome to home page');
})
app.get('/teachers',(req,res)=>{
    fs.readFile('./db.json','utf-8',(err,data)=>{
        if (err) {
            throw err
        }
        else{
            let parseData=JSON.parse(data)
            console.log(parseData.teachers);
        }
    })
})

app.listen(8080,()=>{
    console.log('server is runnig http//:localhost:8080');

})