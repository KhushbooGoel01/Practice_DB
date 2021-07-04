const mongoose = require('mongoose');

var userSchema =new mongoose.Schema({

_id: mongoose.Schema.Types.ObjectId,
reciever:String,
subject : String,
body:String,


},{collection : 'wemailer'});

module.exports=mongoose.model( 'wemailer', userSchema);