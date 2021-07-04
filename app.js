const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./users')
mongoose.connect('mongodb+srv://powerranger:k9JesUcHwCp8YMP@cluster0.ho378.mongodb.net/wemailer?retryWrites=true&w=majority',
    {

        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

User.find({},function(err,users){
    if(err) console.warn(err);
    console.warn(users);

})