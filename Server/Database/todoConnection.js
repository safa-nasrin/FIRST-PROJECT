// jbKmV9E8PxEo4lBZ
const mongoose=require('mongoose')

function Runserver(){
       try {
         mongoose.connect('mongodb+srv://nasriinn957:jbKmV9E8PxEo4lBZ@cluster0.sjary.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
         console.log('mongo db connected')
       } catch (error) {
        console.log('error')
       }
}

module.exports=Runserver;