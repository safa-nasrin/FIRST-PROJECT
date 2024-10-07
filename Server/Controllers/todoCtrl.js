const Todo = require("../Models/todo")  //We are writing logic in the control


const createTodo=async(req,res)=>{
    if(req.body.message===''){ 
        return res.status(401).json({errorMessage:'message cannot be empty'})
    } 
    try {
        const addTodo=await Todo.create({message:req.body.message}) //todo importing from todo
        res.status(200).json({message:'created',data:addTodo})
    } catch (error) {
        console.log(error)
    }
}  

const getAlltodo=async(req,res)=>{
    try {
        const getTodo=await Todo.find({})
        res.status(200).json({data:getTodo})
        
    } catch (error) {
        console.log('error')
    }
}

const deleteTodo=async (req,res)=>{
    try {
        const deleted=await Todo.findByIdAndDelete({_id:req.params.id})
        res.status(200).json({success:'deleted'})
    } catch (error) {
        console.log(error)
    }
}

const updateTodo=async(req,res)=>{
    try {
       const UpdatedTodo=await Todo.findByIdAndUpdate(req.params.id,{
        message:req.body.message
       },{new:true}) ;
       if(UpdatedTodo){
        res.json({success:'updated',data:UpdatedTodo});
       }else{
        res.status(404).json({error:error.message});
       }
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};



module.exports={
    createTodo,
    getAlltodo,
    deleteTodo,
    updateTodo,
}