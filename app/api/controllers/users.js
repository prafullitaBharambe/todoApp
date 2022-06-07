//importing user model
const UserModel = require('../models/users')
// bcrypt for password encryption
const bcrypt = require('bcrypt')
// jwt for generating jsonwebtoken
const jwt = require('jsonwebtoken')

// Creating user (function for user creation:post request)
const create = (req,res,next) => {
    const {name,email,password} = req.body

    UserModel.create({
        name,
        email,
        password
    }, (err,result) => {
        if(err)
        next(err)
        else
        res.status(200).json({
            status: "Success",
            message: "User Added Successfully",
            data: result
        })
    })
} 

// function for login ,creating jwt token and compare password from request body and databse
const login = (req,res,next) => {
    UserModel.findOne({email:req.body.email}, (err,result) => {
        if(err){
            next(err)
        }
        else{
            if(bcrypt.compare(req.body.password, result.password)){
                const token = jwt.sign({id:result._id},req.app.get('secretKey'), {expiresIn:'1h'})
                res.json({
                    status:"Success",
                    message:"Successfully Logged in",
                    data: {
                        user: result,
                        token: token
                    }
                })
            }
        }
    })
}

// exporting functions
module.exports = {create, login}