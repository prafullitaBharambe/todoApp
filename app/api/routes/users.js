
//express is used for routing
const express = require('express')
const router = express.Router()
//importing user controller
const userController = require('../controllers/users')

//route for registering user
router.post('/register',userController.create)
//route for login
router.post('/login',userController.login)

//exporting router
module.exports = router