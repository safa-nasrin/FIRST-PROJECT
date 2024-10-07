import React, { useState } from 'react'
import axios from 'axios'
import './AddTodo.css'
import { toast } from 'react-toastify'

function AddTodo() {
    const [message,setMessage]=useState('')

    const createTodo=async()=>{
      if(message===''){
        toast.error('cannot add empty mesage')
      }
      try {
        const response=await axios.post('http://localhost:8080/todolist/',{
         message:message
        })
        if(response.data.message ==='created'){
          window.location.reload()
        }
      } catch (error) {
        console.log("error")
      }
     
    }

  return (
    <div className="container">
        <input className="addtask" type="text" placeholder='add task here' onChange={(e)=>setMessage(e.target.value)} />
        <button onClick={createTodo} className='btn' >ADD</button>
    </div>
  )
}

export default AddTodo
