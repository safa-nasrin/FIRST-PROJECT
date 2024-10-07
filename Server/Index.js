// 1st Step=Database
// 2nd Step=Index
// 3rd Step=Models
// 4th Step=Controllers
// 5th Step=Routes after that we have to import routes file in this after runserver()

const express=require('express')
const Runserver = require('./Database/todoConnection')
const todoRouter = require('./Routes/todoRoutes')
const cors=require('cors')


const app=express()  
const port=8080  

app.use(express.json())   
app.use(cors())

Runserver()

app.use('/todolist',todoRouter)   //todolist -we can give any name 

app.listen(port,()=>{
    console.log(`server is running on ${port}`)   
})