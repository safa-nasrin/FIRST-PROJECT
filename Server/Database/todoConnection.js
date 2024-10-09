// jbKmV9E8PxEo4lBZ
const mongoose=require('mongoose')

function Runserver(){
       try {
         mongoose.connect(process.env.MONGO_DB_URL)
         console.log('mongo db connected')
       } catch (error) {
        console.log('error')
       }
}

module.exports=Runserver;