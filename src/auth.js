const express=require('express');
const app=express();

app.get('/snigdh',()=>{
    res.send(`Hello World`);
});

console.log(`It's Snigdh`);