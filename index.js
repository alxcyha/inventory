const express = require('express');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/admin')
.then(() =>{
    console.log('Connected to MongoDB');
});

app.listen (3000,()=> console.log("running on port 3000"));

