const express = require('express');
const mongoose = rewuire('mongoose');

const loginInfoSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        phonenumber:{
            type: String,
            required: true
        },

        name:mongoose.Schema({
            fname:{
                type: String,
                required: true
            },
            mname:{
                type: String,
            },
            lname:{
                type: String,
                required: true
            }
        })

    });

module.exports = mongoose.model("user", loginInfoSchema);