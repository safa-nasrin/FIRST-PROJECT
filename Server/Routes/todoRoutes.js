const express=require('express')
 const { getAlltodo, createTodo, deleteTodo, updateTodo } = require('../Controllers/todoCtrl')

const todoRouter=express.Router()

//get-read
//post-send/create
//put-update
//delete-delete

todoRouter.post('/',createTodo)              // '/' -it is starting point
todoRouter.get('/getall',getAlltodo)         //getall we can give any name
todoRouter.delete('/delete/:id',deleteTodo)
todoRouter.put('/update/:id',updateTodo)

module.exports=todoRouter 




