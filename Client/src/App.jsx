import React from 'react'
import Header from './Components/Header'
import AddTodo from './Components/AddTodo'
import Update from './Components/Update'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div>
    <Header/>
    <AddTodo/>
 <Update/>
 <ToastContainer/>
    </div>
  )
}

export default App  
