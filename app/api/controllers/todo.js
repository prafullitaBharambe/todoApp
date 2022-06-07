
//imported the todo model
const TodoModel = require('../models/todo');


// Create (FUnction for post request of adding new todo)
// next() : It will run or execute the code after all the middleware function is finished.
const createTodo = (req,res,next) => {
    let {name,creation_date} = req.body
    TodoModel.create({
        name,
        creation_date
    }, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Added Todo Successfully"
        })
    })
}

// Read- to gel all the todos from the database(function for Get request)
const readAllTodos = (req,res,next) => {
    TodoModel.find({}, (err,result) => {
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved all the todo",
            data:{
                todo: result
            }
        })
    })
} 

// Read By Id -to get todo by id (function for get request)
const readTodoById = (req,res,next) => {
    TodoModel.findById(req.params.id, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved todo By ID",
            data:{
                todo: result
            }
        })
    })
} 


// Update By Id- to update the todos data (function for put request)
const updateTodoById = (req,res,next) => {
    TodoModel.findByIdAndUpdate(req.params.id,req.body,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Updated todo By ID",
            data:{
                todo: result
            }
        })
    })
} 

// Delete todo By Id -find todo by id and delete it(function for delete request) 
const deleteTodoById = (req,res,next) => {
    TodoModel.findByIdAndRemove(req.params.id,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted todo By ID",
            data:{
                todo: result
            }
        })
    })
} 

// exporting all the functions to use in the controller
module.exports = {createTodo, readAllTodos, readTodoById, updateTodoById, deleteTodoById}