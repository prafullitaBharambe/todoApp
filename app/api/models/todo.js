//importing mongoose - module for connection with mongodb
const mongoose = require('mongoose')

//creating schema of todo with fields mentioned below
const TodoSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    creation_date:{
        type:String,
        required:true
    }
})

// exporting schema 
module.exports = mongoose.model('todo',TodoSchema)