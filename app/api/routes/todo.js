
//express provides routing for requests 
const express = require('express')

// using router for request routing
const router = express.Router();

//importing todo controller
const todoController = require('../controllers/todo')

// Create (route for adding todo)
router.post('/create',todoController.createTodo)
// Read (route for getting all todos)
router.get('/getAllTodos',todoController.readAllTodos)
// Read By Id (route for getting todo by id)
router.get('/getTodoById/:id',todoController.readTodoById)
// Update By Id(update the data of todo)
router.put('/updateTodoById/:id',todoController.updateTodoById)
// Delete By Id(delete todo by id)
router.delete('/deleteTodoById/:id',todoController.deleteTodoById)

//exporting routes
module.exports = router