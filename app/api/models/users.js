//importing mongoose for connecting with mongodb
const mongoose = require('mongoose')
//bcrypt for password encryption
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


// Encrypt the password , pre function allows to do some task before saving the password into database
//With "salt round" they actually mean the cost factor. The cost factor controls how much time is needed to calculate a single BCrypt hash. 
//The higher the cost factor, the more hashing rounds are done. Increasing the cost factor by 1 doubles the necessary time. So with storing the hash-string you also store the salt.
UserSchema.pre('save', function (next){
    const saltRounds = 10
    this.password = bcrypt.hashSync(this.password, saltRounds)
    next()
})
//exporting schema
module.exports = mongoose.model("user",UserSchema)