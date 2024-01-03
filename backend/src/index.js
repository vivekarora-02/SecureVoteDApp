const { request, response } = require('express');
const express=require('express');
const app=express();

const PORT=5000;

app.listen(PORT,()=>console.log(`Running Express Server on Port ${PORT}`));

app.get('/groceries',(request,response)=>{
    response.send([
        {
            item:'milk',
            quantity:2,
        },
        {
            item:'cereal',
            quantity:1,
        },
        {
            item:'pop=tarts',
            quantity:1,
        }
    ]);
});