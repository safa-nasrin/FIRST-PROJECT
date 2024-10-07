const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema({  
    message:{
        type:String,
        required:true,   //it means field is mandatory
        minLength:4,
        maxLength:20  
    }
})

const Todo=mongoose.model('todo',todoSchema)  //todo is a filename
module.exports=Todo