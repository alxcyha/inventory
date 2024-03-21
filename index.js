const express = require('express');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/admin')
.then(() =>{
    console.log('Connected to MongoDB');
});

app.use(express.json());

app.use((req,res,nest)=>{
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

//middleware
app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.send({
        error:{
            status: err.status || 500,
            message: err.message
        }
    })
});

app.listen (3000,()=> console.log("running on port 3000"));

